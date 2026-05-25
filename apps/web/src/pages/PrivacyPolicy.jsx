
import React from 'react';
import { Helmet } from 'react-helmet';

export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Avon Tech Buddy</title>
        <meta name="description" content="Privacy Policy for Avon Tech Buddy. Learn how we collect, use, and protect your information." />
      </Helmet>

      <div className="min-h-[calc(100vh-4rem)] bg-background py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">Privacy Policy</h1>
            <p className="text-muted-foreground">Last Updated: May 2026</p>
          </div>

          <div className="prose prose-invert max-w-none space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Information We Collect</h2>
              <p>When you book a service or contact Avon Tech Buddy, we collect basic information necessary to provide our services. This includes your full name, phone number, email address, city/area, and details about your device and the technical issues you are experiencing.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">How We Use Your Information</h2>
              <p>We use the information we collect strictly to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Schedule and fulfill your requested tech support services.</li>
                <li>Communicate with you regarding your appointment, quotes, and service updates.</li>
                <li>Send confirmation emails and follow-up support messages.</li>
                <li>Improve our services and customer experience.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">What We Do NOT Do</h2>
              <p>Your privacy is our priority. We strictly adhere to the following principles:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>We do <strong>not</strong> sell, rent, or trade your personal information to third parties.</li>
                <li>We do <strong>not</strong> browse, copy, or retain your personal files, photos, or data during repairs unless explicitly requested for data backup/recovery purposes.</li>
                <li>We do <strong>not</strong> use your contact information for spam or unsolicited marketing.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Third-Party Services</h2>
              <p>We use trusted third-party services to facilitate our operations:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Formspree:</strong> Used to securely process and route our booking form submissions.</li>
                <li><strong>EmailJS:</strong> Used to send automated confirmation emails when you book a service.</li>
              </ul>
              <p className="mt-4">These services only process the data you submit through our forms and are bound by their own strict privacy policies.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Data Storage & Security</h2>
              <p>We implement reasonable security measures to protect your personal information from unauthorized access, alteration, or disclosure. Booking requests are stored securely in our database (PocketBase) and are only accessible by authorized Avon Tech Buddy personnel.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Your Rights</h2>
              <p>You have the right to request access to the personal information we hold about you, request corrections to any inaccurate data, or request the deletion of your information from our active records. To exercise these rights, please contact us using the information below.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
              <p>If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:</p>
              <p className="mt-4 font-medium text-foreground">
                Email: <a href="mailto:yourbuddy@avontechbuddy.com" className="text-primary hover:underline">yourbuddy@avontechbuddy.com</a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
