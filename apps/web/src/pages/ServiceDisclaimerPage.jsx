
import React from 'react';
import PolicyLayout from '@/components/PolicyLayout.jsx';

const ServiceDisclaimerPage = () => {
  return (
    <PolicyLayout
      title="Service Disclaimer & Repair Policy"
      lastUpdated="May 2026"
      intro="Please read this section carefully before booking a service. It explains important limitations and protections for both you and Avon Tech Buddy."
    >
      <h2>No Guarantee of Repair</h2>
      <p>
        While we do our best to resolve every tech issue, Avon Tech Buddy cannot guarantee that every device will be
        fixed. Some problems may be caused by hardware failure, manufacturer defects, or damage beyond repair. If we
        determine that a device cannot be repaired, we will let you know before proceeding.
      </p>

      <h2>Pre-Existing Conditions</h2>
      <p>
        We are not responsible for any pre-existing issues, damage, or defects that were present before our technician
        arrived. We will do our best to note any visible damage or issues upon arrival.
      </p>

      <h2>Data Loss</h2>
      <ul>
        <li>Avon Tech Buddy is <strong>NOT responsible for data loss</strong> that may occur during any repair or service.</li>
        <li>We strongly recommend backing up all important files before any service begins.</li>
        <li>If requested, we can assist with backing up your data as a separate service prior to any repair.</li>
      </ul>

      <h2>Device Damage</h2>
      <p>
        Avon Tech Buddy takes great care when working with your devices. However, we are not responsible for damage
        caused by pre-existing issues, manufacturer defects, or fragile components that fail during routine handling. We
        will always communicate with you before taking any action that could affect your device.
      </p>

      <h2>Software &amp; Virus Issues</h2>
      <p>
        We can remove viruses and malware to the best of our ability, but we cannot guarantee that a device is 100% free
        of all threats after service. We recommend keeping antivirus software active and updated at all times.
      </p>

      <h2>Third-Party Products</h2>
      <p>
        We may recommend software, hardware, or services from third parties. Avon Tech Buddy is not responsible for the
        performance, reliability, or terms of any third-party products or services.
      </p>

      <h2>Right to Decline Service</h2>
      <p>
        We reserve the right to stop or decline a service at any time if we determine the work is beyond our
        capabilities, unsafe, or not in the best interest of the customer. In such cases, you will only be charged for
        time already spent.
      </p>
    </PolicyLayout>
  );
};

export default ServiceDisclaimerPage;
