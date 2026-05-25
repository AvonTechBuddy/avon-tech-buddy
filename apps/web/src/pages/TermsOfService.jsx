
import React from 'react';
import { Helmet } from 'react-helmet';

export default function TermsOfService() {
  return (
    <>
      <Helmet>
        <title>Terms of Service - Avon Tech Buddy</title>
        <meta name="description" content="Terms of Service for Avon Tech Buddy. Read our terms regarding appointments, payments, and liability." />
      </Helmet>

      <div className="min-h-[calc(100vh-4rem)] bg-background py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">Terms of Service</h1>
            <p className="text-muted-foreground">Last Updated: May 2026</p>
          </div>

          <div className="prose prose-invert max-w-none space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Services Provided</h2>
              <p>Avon Tech Buddy provides technical support, computer repair, network setup, and related IT services for residential and small business customers. By booking an appointment or requesting service, you agree to these Terms of Service.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Appointments & Scheduling</h2>
              <p>Submitting a booking request through our website does not guarantee an immediate appointment. All appointments are subject to availability and confirmation by our team. We will contact you to confirm the date, time, and scope of work before proceeding.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Payment</h2>
              <p>Payment is due upon completion of the service unless otherwise agreed upon in writing. We will provide a clear quote or estimate before beginning any major repair work. If additional parts or labor are required beyond the initial estimate, we will seek your approval before proceeding.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Accuracy of Information</h2>
              <p>You agree to provide accurate, current, and complete information when booking a service. Avon Tech Buddy is not responsible for delays or inability to provide service resulting from inaccurate contact information or incomplete descriptions of technical issues.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Limitation of Liability</h2>
              <p>To the maximum extent permitted by law, Avon Tech Buddy shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, use, or goodwill, arising from your use of our services. Our total liability for any claim arising out of or relating to our services shall not exceed the amount paid by you for those specific services.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Changes to Terms</h2>
              <p>We reserve the right to modify these Terms of Service at any time. Any changes will be effective immediately upon posting to this website. Your continued use of our services following the posting of revised Terms constitutes your acceptance of the changes.</p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
