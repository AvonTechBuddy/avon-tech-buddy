
import React from 'react';
import PolicyLayout from '@/components/PolicyLayout.jsx';

const RefundCancellationPage = () => {
  return (
    <PolicyLayout
      title="Refund & Cancellation Policy"
      lastUpdated="May 2026"
    >
      <h2>Cancellations</h2>
      <ul>
        <li>
          You may cancel or reschedule your appointment at any time by contacting us at{' '}
          <a href="mailto:yourbuddy@avontechbuddy.com">yourbuddy@avontechbuddy.com</a> or by phone.
        </li>
        <li>We appreciate at least 2 hours' notice before your scheduled appointment time.</li>
        <li>Repeated last-minute cancellations may result in a cancellation fee or refusal of future bookings.</li>
      </ul>

      <h2>Deposit &amp; Refunds</h2>
      <ul>
        <li>
          The <strong>$49 deposit</strong> collected at booking is applied toward the final service total when your
          appointment is completed.
        </li>
        <li>
          If you cancel with reasonable notice and we have not yet performed any work, the deposit may be refunded or
          credited to a future appointment at our discretion.
        </li>
        <li>If you are unsatisfied with your service, please contact us within 48 hours so we can make it right.</li>
        <li>Refunds are handled on a case-by-case basis at our discretion.</li>
        <li>We do not offer refunds for completed services where the issue was resolved as described.</li>
        <li>If we are unable to resolve your issue, you will not be charged beyond the deposit for that specific problem.</li>
      </ul>

      <h2>No-Shows</h2>
      <p>
        If we arrive at your scheduled appointment and no one is available, a trip fee may apply and the deposit may be
        forfeited. We will always attempt to contact you before marking an appointment as a no-show.
      </p>

      <h2>Free Intro Call</h2>
      <p>
        Our free 30-minute intro call is complimentary and carries no obligation to book a paid service. This call may
        be cancelled at any time by either party with no charge.
      </p>

      <h2>Contact</h2>
      <p>
        To cancel, reschedule, or request a refund, reach out to us at{' '}
        <a href="mailto:yourbuddy@avontechbuddy.com">yourbuddy@avontechbuddy.com</a> or{' '}
        <a href="tel:1-317-997-8819">1-317-997-8819</a>.
      </p>
    </PolicyLayout>
  );
};

export default RefundCancellationPage;
