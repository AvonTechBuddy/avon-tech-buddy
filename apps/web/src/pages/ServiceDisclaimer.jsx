
import React from 'react';
import { Helmet } from 'react-helmet';

export default function ServiceDisclaimer() {
  return (
    <>
      <Helmet>
        <title>Service Disclaimer - Avon Tech Buddy</title>
        <meta name="description" content="Service Disclaimer for Avon Tech Buddy regarding data loss, device damage, and repair guarantees." />
      </Helmet>

      <div className="min-h-[calc(100vh-4rem)] bg-background py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">Service Disclaimer</h1>
            <p className="text-muted-foreground">Last Updated: May 2026</p>
          </div>

          <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 mb-8">
            <p className="text-foreground font-medium">Legal Notice:</p>
            <p className="text-sm text-muted-foreground mt-2">By authorizing Avon Tech Buddy to perform diagnostic, repair, or installation services on your equipment, you acknowledge and agree to the following terms and conditions.</p>
          </div>

          <div className="prose prose-invert max-w-none space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">No Guarantee of Repair</h2>
              <p>While we strive to resolve all technical issues, some devices may be beyond economical repair or suffer from catastrophic hardware failure. We do not guarantee that every device can be fixed. Diagnostic fees may still apply even if a device cannot be repaired.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Pre-Existing Conditions</h2>
              <p>Avon Tech Buddy is not responsible for pre-existing hardware or software issues, physical damage, or underlying defects that may become apparent during the diagnostic or repair process.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Data Loss</h2>
              <p><strong>You are solely responsible for backing up your data.</strong> While we take every precaution to protect your files, data loss can occur during hardware failure, virus removal, or operating system repairs. Avon Tech Buddy is not liable for any lost, corrupted, or unrecoverable data, software, or media.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Device Damage</h2>
              <p>In rare cases, opening or working on tightly sealed, aged, or previously damaged devices (such as laptops with swollen batteries or brittle plastics) may result in cosmetic or structural damage. We are not liable for unavoidable damage that occurs during standard repair procedures.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Software & Virus Issues</h2>
              <p>Virus and malware removal does not guarantee that your system will remain infection-free in the future. We are not responsible for subsequent infections, software incompatibilities, or issues caused by third-party applications installed after our service.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Third-Party Products</h2>
              <p>We may recommend or install third-party hardware or software. We do not manufacture these products and are not responsible for their performance, warranties, or failures. Any warranty claims for parts must be directed to the original manufacturer.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Right to Decline Service</h2>
              <p>Avon Tech Buddy reserves the right to refuse service for any reason, including but not limited to: hazardous working conditions, devices containing illegal materials, or equipment that is deemed too old or obsolete to repair effectively.</p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
