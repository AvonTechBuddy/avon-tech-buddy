
import React from 'react';
import PolicyLayout from '@/components/PolicyLayout.jsx';

const TermsOfServicePage = () => {
  return (
    <PolicyLayout
      title="Terms of Service"
      lastUpdated="May 2026"
      intro="By using the Avon Tech Buddy website or booking any of our services, you agree to the following Terms of Service. Please read them carefully."
    >
      <h2>Services Provided</h2>
      <p>
        Avon Tech Buddy provides in-home and remote technology support services including but not limited to: computer
        repair, troubleshooting, Wi-Fi setup, virus removal, printer setup, smart home setup, new computer setup, custom
        PC builds, and general tech support for homes, seniors, families, and small businesses in Avon, Indiana and
        surrounding areas.
      </p>

      <h2>Appointments &amp; Scheduling</h2>
      <ul>
        <li>All appointments must be booked through our website or by direct contact.</li>
        <li>
          A <strong>$49 deposit</strong> is required at the time of booking to secure your appointment. This deposit is
          applied toward the final service total.
        </li>
        <li>We will confirm your appointment by phone or email within a few hours of your request.</li>
        <li>Appointment times are subject to availability and may need to be rescheduled.</li>
        <li>We reserve the right to refuse service to anyone for any reason.</li>
      </ul>

      <h2>Payment</h2>
      <ul>
        <li>The $49 appointment deposit is collected at booking and applied to the final service total.</li>
        <li>
          The remaining balance is due at the time of service unless otherwise agreed upon in advance. Final pricing
          depends on diagnosis and work performed onsite.
        </li>
        <li>We accept cash, Venmo, and Cash App for the remaining balance.</li>
        <li>Prices are subject to change. You will always be informed of the cost before work begins.</li>
      </ul>

      <h2>Accuracy of Information</h2>
      <p>
        You agree to provide accurate and complete information when booking a service. Providing false or misleading
        information may result in cancellation of your appointment.
      </p>

      <h2>Limitation of Liability</h2>
      <p>
        Avon Tech Buddy is not liable for any indirect, incidental, or consequential damages arising from the use of our
        services or website. Our total liability shall not exceed the amount paid for the specific service in question.
      </p>

      <h2>Changes to Terms</h2>
      <p>
        We reserve the right to update these Terms of Service at any time. Continued use of our services after changes
        are posted constitutes acceptance of the new terms.
      </p>

      <h2>Contact</h2>
      <p>
        Questions? Reach us at{' '}
        <a href="mailto:yourbuddy@avontechbuddy.com">yourbuddy@avontechbuddy.com</a> or{' '}
        <a href="tel:1-317-997-8819">1-317-997-8819</a>.
      </p>
    </PolicyLayout>
  );
};

export default TermsOfServicePage;
