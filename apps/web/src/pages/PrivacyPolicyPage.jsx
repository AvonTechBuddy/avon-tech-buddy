
import React from 'react';
import PolicyLayout from '@/components/PolicyLayout.jsx';

const PrivacyPolicyPage = () => {
  return (
    <PolicyLayout
      title="Privacy Policy"
      lastUpdated="May 2026"
      intro="At Avon Tech Buddy, your privacy matters to us. This Privacy Policy explains what information we collect, how we use it, and how we protect it."
    >
      <h2>Information We Collect</h2>
      <p>When you use our website or book a service, we may collect the following:</p>
      <ul>
        <li>Your name, phone number, and email address</li>
        <li>Your home or business service address</li>
        <li>Appointment details and preferred times</li>
        <li>A description of your tech issue or service request</li>
      </ul>

      <h2>How We Use Your Information</h2>
      <p>We use your information only to:</p>
      <ul>
        <li>Contact you to confirm or schedule your appointment</li>
        <li>Provide the tech support services you requested</li>
        <li>Send you a confirmation or follow-up message</li>
        <li>Improve our services and customer experience</li>
      </ul>

      <h2>What We Do NOT Do</h2>
      <p>We will never:</p>
      <ul>
        <li>Sell, rent, or trade your personal information to anyone</li>
        <li>Share your data with third parties for marketing purposes</li>
        <li>Use your information for any purpose other than providing our services</li>
      </ul>

      <h2>Third-Party Services</h2>
      <p>Our website uses the following third-party tools to process form submissions and send emails:</p>
      <ul>
        <li><strong>Formspree</strong> — for receiving booking form submissions</li>
        <li><strong>EmailJS</strong> — for sending confirmation emails to customers</li>
        <li><strong>Square</strong> — for processing the $49 appointment deposit</li>
      </ul>
      <p>
        These services have their own privacy policies. We only share the minimum information necessary to deliver your
        confirmation and process your deposit.
      </p>

      <h2>Data Storage &amp; Security</h2>
      <p>
        We take reasonable steps to protect your information. Booking submissions are stored securely through our form
        provider. We do not store payment information on our website — all payments are processed by Square.
      </p>

      <h2>Your Rights</h2>
      <p>
        You may request that we delete your personal information at any time by contacting us at{' '}
        <a href="mailto:yourbuddy@avontechbuddy.com">yourbuddy@avontechbuddy.com</a>. We will honor all reasonable
        requests promptly.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have questions about this Privacy Policy, please contact us at{' '}
        <a href="mailto:yourbuddy@avontechbuddy.com">yourbuddy@avontechbuddy.com</a>.
      </p>
    </PolicyLayout>
  );
};

export default PrivacyPolicyPage;
