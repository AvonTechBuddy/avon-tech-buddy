
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';
import pb from '@/lib/pocketbaseClient.js';
import { useToast } from '@/hooks/use-toast.js';
import { Loader2, AlertCircle, Info, CreditCard } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const DEFAULT_PAYMENT_URL = 'https://square.link/u/yRvq19Sk';

const formSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  phoneNumber: z.string().min(1, "Phone number is required"),
  email: z.string().email("Please enter a valid email address"),
  city: z.string().min(1, "City is required"),
  serviceNeeded: z.string().min(1, "Please select a service"),
  deviceType: z.string().min(1, "Please select a device type"),
  urgency: z.string().min(1, "Please select an urgency level"),
  issueDescription: z.string().min(1, "Please describe the issue"),
  preferredContactMethod: z.string().min(1, "Please select a contact method"),
  consentAgreed: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms to submit",
  }),
});

const serviceOptions = [
  'PC & Mac Repair',
  'WiFi & Network Setup',
  'Virus & Malware Removal',
  'Data Backup & Recovery',
  'Device Setup & Transfer',
  'Small Business IT Support',
  'Remote Support',
  'Printer & Peripheral Setup',
  'General Consultation',
  'Other'
];

const deviceOptions = [
  'Desktop PC',
  'Laptop / MacBook',
  'Smartphone',
  'Tablet / iPad',
  'Printer / Scanner',
  'Router / Network Equipment',
  'Server',
  'Other'
];

const urgencyOptions = [
  'Low (Within a few days)',
  'Medium (Within 48 hours)',
  'High (Within 24 hours)',
  'Emergency (System Down)'
];

const contactOptions = [
  'Email',
  'Phone Call',
  'Text Message'
];

const BookingForm = ({ onSuccess, paymentUrl = DEFAULT_PAYMENT_URL }) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [debugError, setDebugError] = useState(null);

  useEffect(() => {
    // Debug log to confirm component mounting
    console.log('[BookingForm] Component mounted successfully.');
    emailjs.init('ghqiyiVtaEa4eKZu1');
  }, []);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      phoneNumber: '',
      email: '',
      city: '',
      serviceNeeded: '',
      deviceType: '',
      urgency: '',
      issueDescription: '',
      preferredContactMethod: '',
      consentAgreed: false,
    },
  });

  const onSubmit = async (values) => {
    console.log('[BookingForm] Form submission triggered', values);
    try {
      setIsSubmitting(true);
      setDebugError(null);

      const submittedAt = new Date().toLocaleString('en-US', {
        timeZone: 'America/Indiana/Indianapolis',
        dateStyle: 'medium',
        timeStyle: 'short',
      });

      const payload = {
        ...values,
        submittedAt,
        depositAmount: '$49',
        depositStatus: 'Pending — customer redirected to Square checkout after intake.',
      };

      console.log('[BookingForm] Submitting payload to APIs:', payload);

      // 1. Send Customer Auto-Reply via EmailJS (best-effort — should not block redirect)
      try {
        await emailjs.send(
          'service_r9syuvo',
          'template_kbvhrxg',
          {
            from_name: payload.fullName,
            from_email: payload.email,
            session: payload.serviceNeeded,
          }
        );
      } catch (emailError) {
        console.error('[BookingForm] EmailJS Auto-reply error:', emailError);
      }

      // 2. Submit to Formspree — CRITICAL: customer info MUST be saved before redirecting to Square
      const formspreeResponse = await fetch('https://formspree.io/f/mnjrpjag', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!formspreeResponse.ok) {
        throw new Error(
          "We couldn't save your booking information. Please try again, or call Avon Tech Buddy directly."
        );
      }
      console.log('[BookingForm] Formspree submission confirmed.');

      // 3. Submit to PocketBase (best-effort backup — Formspree is the primary record)
      try {
        const pbPayload = {
          fullName: values.fullName,
          phoneNumber: values.phoneNumber,
          email: values.email,
          city: values.city,
          serviceNeeded: values.serviceNeeded,
          deviceType: values.deviceType,
          urgency: values.urgency,
          issueDescription: values.issueDescription,
          preferredContactMethod: values.preferredContactMethod,
          consentAgreed: values.consentAgreed,
          depositStatus: 'pending_square_checkout',
        };
        await pb.collection('booking_requests').create(pbPayload, { $autoCancel: false });
        console.log('[BookingForm] PocketBase submission successful.');
      } catch (pbError) {
        // Non-fatal: Formspree has the record, so we proceed to payment.
        console.error('[BookingForm] PocketBase error (non-fatal):', pbError);
      }

      form.reset();

      if (onSuccess) {
        onSuccess();
      }

      // 4. Redirect to Square to collect the $49 deposit and secure the appointment.
      // Small timeout lets the success state / toast paint before the navigation kicks in.
      setTimeout(() => {
        window.location.href = paymentUrl;
      }, 600);

    } catch (err) {
      console.error("[BookingForm] Submission Error:", err);
      const errorMessage = err.message || "Something went wrong with the form. Please call to book.";

      setDebugError({ message: err.message });

      toast({
        title: "Submission Failed",
        description: errorMessage,
        variant: "destructive",
      });
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      {debugError && (
        <div className="mb-6 p-4 bg-destructive/10 border border-destructive/50 rounded-lg text-destructive-foreground">
          <div className="flex items-center gap-2 mb-2 text-destructive">
            <AlertCircle className="w-5 h-5" />
            <h3 className="font-semibold text-sm">Debug Error Details</h3>
          </div>
          <pre className="text-xs whitespace-pre-wrap overflow-x-auto bg-background/50 p-3 rounded text-muted-foreground">
            {JSON.stringify(debugError, null, 2)}
          </pre>
        </div>
      )}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          
          {/* Section 1: Personal Details */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold border-b border-border pb-2 text-foreground">1. Your Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField control={form.control} name="fullName" render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground">Full Name <span className="text-primary">*</span></FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} className="bg-input text-foreground border-border" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}/>

              <FormField control={form.control} name="phoneNumber" render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground">Phone Number <span className="text-primary">*</span></FormLabel>
                  <FormControl>
                    <Input type="tel" placeholder="(555) 123-4567" {...field} className="bg-input text-foreground border-border" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}/>

              <FormField control={form.control} name="email" render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground">Email Address <span className="text-primary">*</span></FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="john@example.com" {...field} className="bg-input text-foreground border-border" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}/>

              <FormField control={form.control} name="city" render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground">City / Area <span className="text-primary">*</span></FormLabel>
                  <FormControl>
                    <Input placeholder="Avon, Brownsburg, etc." {...field} className="bg-input text-foreground border-border" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}/>
            </div>
          </div>

          {/* Section 2: Service Information */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold border-b border-border pb-2 text-foreground">2. Service Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField control={form.control} name="serviceNeeded" render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground">Service Needed <span className="text-primary">*</span></FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-input text-foreground border-border">
                        <SelectValue placeholder="Select a service..." />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {serviceOptions.map(opt => <SelectItem key={opt} value={opt}>{opt}</SelectItem>)}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}/>

              <FormField control={form.control} name="deviceType" render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground">Device Type <span className="text-primary">*</span></FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-input text-foreground border-border">
                        <SelectValue placeholder="Select device type..." />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {deviceOptions.map(opt => <SelectItem key={opt} value={opt}>{opt}</SelectItem>)}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}/>

              <FormField control={form.control} name="urgency" render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground">Urgency <span className="text-primary">*</span></FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-input text-foreground border-border">
                        <SelectValue placeholder="Select urgency level..." />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {urgencyOptions.map(opt => <SelectItem key={opt} value={opt}>{opt}</SelectItem>)}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}/>
              
              <FormField control={form.control} name="preferredContactMethod" render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground">Preferred Contact Method <span className="text-primary">*</span></FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-input text-foreground border-border">
                        <SelectValue placeholder="Select contact method..." />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {contactOptions.map(opt => <SelectItem key={opt} value={opt}>{opt}</SelectItem>)}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}/>
            </div>

            <FormField control={form.control} name="issueDescription" render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground">Issue Description <span className="text-primary">*</span></FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Describe the problem you are experiencing in detail..." 
                    className="resize-y bg-input text-foreground border-border min-h-[120px]" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}/>
          </div>

          {/* Section 3: Scheduling Note (replaces the old date/time picker — appointment time is confirmed after deposit) */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold border-b border-border pb-2 text-foreground">3. Scheduling</h3>
            <div className="flex items-start gap-3 p-5 rounded-xl border border-[hsl(var(--purple-theme)_/_0.3)] bg-[hsl(var(--purple-theme)_/_0.06)]">
              <Info className="w-5 h-5 mt-0.5 text-[hsl(var(--purple-theme))] flex-shrink-0" aria-hidden="true" />
              <p className="text-sm md:text-base text-foreground leading-relaxed">
                After your deposit is submitted, Avon Tech Buddy will contact you quickly to confirm your appointment time.
              </p>
            </div>
          </div>

          {/* Section 4: Consent & Submit */}
          <div className="space-y-6 pt-4">
            <FormField control={form.control} name="consentAgreed" render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 p-4 border border-border rounded-lg bg-input/20">
                <FormControl>
                  <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel className="text-sm font-normal text-muted-foreground leading-relaxed">
                    I agree to be contacted by Avon Tech Buddy regarding my request. I understand that a $49 deposit is required to secure my appointment and will be applied toward the final service total. Final pricing depends on diagnosis and work performed onsite. By booking, I agree to the{' '}
                    <Link to="/privacy" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="text-[hsl(var(--purple-theme))] underline underline-offset-2 hover:text-[hsl(var(--purple-theme-hover))]">Privacy Policy</Link>,{' '}
                    <Link to="/terms" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="text-[hsl(var(--purple-theme))] underline underline-offset-2 hover:text-[hsl(var(--purple-theme-hover))]">Terms of Service</Link>,{' '}
                    <Link to="/disclaimer" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="text-[hsl(var(--purple-theme))] underline underline-offset-2 hover:text-[hsl(var(--purple-theme-hover))]">Service Disclaimer</Link>, and{' '}
                    <Link to="/refund" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="text-[hsl(var(--purple-theme))] underline underline-offset-2 hover:text-[hsl(var(--purple-theme-hover))]">Refund &amp; Cancellation Policy</Link>. <span className="text-primary">*</span>
                  </FormLabel>
                  <FormMessage />
                </div>
              </FormItem>
            )}/>

            <Button 
              type="submit" 
              className="w-full md:w-auto px-8 py-6 text-base font-semibold transition-all active:scale-[0.98] bg-[hsl(var(--purple-theme))] hover:bg-[hsl(var(--purple-theme-hover))] text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Saving your request...
                </>
              ) : (
                <>
                  <CreditCard className="mr-2 h-5 w-5" />
                  Continue to Secure Appointment
                </>
              )}
            </Button>
            <p className="text-xs text-muted-foreground">
              After you submit, you'll be redirected to Square to pay your $49 deposit and secure your appointment.
            </p>
          </div>

        </form>
      </Form>
    </div>
  );
};

export default BookingForm;
