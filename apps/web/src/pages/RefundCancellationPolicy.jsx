
import React from 'react';
import { Helmet } from 'react-helmet';

export default function RefundCancellationPolicy() {
  return (
    <>
      <Helmet>
        <title>Refund & Cancellation Policy - Avon Tech Buddy</title>
        <meta name="description" content="Refund and Cancellation Policy for Avon Tech Buddy services." />
      </Helmet>

      <div className="min-h-[calc(100vh-4rem)] bg-background py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">Refund & Cancellation Policy</h1>
            <p className="text-muted-foreground">Last Updated: May 2026</p>
          </div>

          <div className="prose prose-invert max-w-none space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Cancellations</h2>
              <p>We understand that plans change. If you need to cancel or reschedule your appointment, please notify us at least 24 hours in advance. You can cancel by replying to your confirmation email, calling, or texting us. Early cancellations help us serve other customers in the Avon area.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Refunds</h2>
              <p>Our goal is your complete satisfaction. Refund requests are handled on a case-by-case basis under the following guidelines:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Labor & Services:</strong> Labor charges are generally non-refundable once the service has been performed. If the original issue reoccurs within 7 days due to our workmanship, we will attempt to resolve it at no additional labor cost.</li>
                <li><strong>Hardware & Parts:</strong> Refunds for hardware or parts purchased through us are subject to the manufacturer's or distributor's return policy. Custom-ordered parts may be subject to a restocking fee.</li>
                <li><strong>Diagnostic Fees:</strong> If a diagnostic fee was charged and you choose not to proceed with the repair, the diagnostic fee is non-refundable.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">No-Shows</h2>
              <p>If our technician arrives at your location for a scheduled appointment and you are not present or unreachable, we reserve the right to charge a standard diagnostic/travel fee. Repeated no-shows may result in a refusal of future service.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Free Intro Call</h2>
              <p>Any initial consultation or brief introductory phone call provided free of charge carries no obligation. If we determine during the call that we cannot assist you, no fees will be charged.</p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
