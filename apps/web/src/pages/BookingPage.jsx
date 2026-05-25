
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowLeft, Loader2, CreditCard } from 'lucide-react';
import BookingForm from '@/components/BookingForm.jsx';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const SQUARE_PAYMENT_URL = 'https://square.link/u/yRvq19Sk';

const BookingPage = () => {
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSuccess = () => {
    setIsSuccess(true);
    toast.success('Request saved! Redirecting you to secure your $49 deposit...', {
      duration: 4000,
    });
  };

  return (
    <>
      <Helmet>
        <title>Book a Service - Avon Tech Buddy</title>
        <meta name="description" content="Book a tech support session with Avon Tech Buddy for home or business IT help." />
      </Helmet>

      <div className="min-h-[calc(100vh-4rem)] bg-background py-16 md:py-24 flex items-center justify-center relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-[-10%] right-[-5%] w-[40rem] h-[40rem] bg-accent/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[30rem] h-[30rem] bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link 
            to="/" 
            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-[hsl(var(--purple-theme))] transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          <div className="bg-card border border-border shadow-xl rounded-2xl p-6 md:p-10">
            {isSuccess ? (
              <div className="text-center py-16">
                <div className="w-20 h-20 bg-[hsl(var(--purple-theme)_/_0.1)] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Loader2 className="w-10 h-10 text-[hsl(var(--purple-theme))] animate-spin" />
                </div>
                <h2 className="mb-4 text-foreground text-3xl font-bold">Redirecting to Secure Payment...</h2>
                <p className="text-muted-foreground max-w-lg mx-auto mb-8 text-lg">
                  Your request has been saved. You're being redirected to pay your $49 deposit and secure your appointment.
                </p>
                <p className="text-sm text-muted-foreground mb-6">
                  If you aren't redirected automatically, click the button below.
                </p>
                <Button asChild size="lg" className="bg-[hsl(var(--purple-theme))] hover:bg-[hsl(var(--purple-theme-hover))] text-white font-medium">
                  <a href={SQUARE_PAYMENT_URL}>
                    <CreditCard className="w-5 h-5 mr-2" />
                    Continue to Secure Payment
                  </a>
                </Button>
              </div>
            ) : (
              <>
                <div className="mb-10 text-center md:text-left">
                  <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">Secure Your Tech Support Appointment</h1>
                  <p className="text-muted-foreground text-lg max-w-2xl">
                    Tell us what tech issue you're having. After submitting your request, you'll be redirected to pay a $49 deposit to secure your appointment. Avon Tech Buddy will contact you quickly to confirm your appointment time.
                  </p>
                </div>

                {/* The standalone BookingForm Component handles intake; on success, redirects to Square for the $49 deposit */}
                <BookingForm onSuccess={handleSuccess} paymentUrl={SQUARE_PAYMENT_URL} />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingPage;
