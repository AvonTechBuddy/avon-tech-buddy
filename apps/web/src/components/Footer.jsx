
import React from 'react';
import { Link } from 'react-router-dom';
import { useAnchorNav } from '@/hooks/useAnchorNav';

const QUICK_LINKS = [
  { id: 'services', label: 'Services' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'how-it-works', label: 'How It Works' },
  { id: 'booking', label: 'Book Now' },
];

const Footer = () => {
  const { handleAnchor, anchorHref } = useAnchorNav();

  const policyLinks = [
    { name: 'Privacy Policy', to: '/privacy' },
    { name: 'Terms of Service', to: '/terms' },
    { name: 'Service Disclaimer', to: '/disclaimer' },
    { name: 'Refund Policy', to: '/refund' },
  ];

  return (
    <footer className="bg-card/50 border-t border-border py-12 mt-auto">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-lg">AT</span>
              </div>
              <span className="text-lg font-bold text-card-foreground">Avon Tech Buddy</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your trusted local tech support partner in Avon, Indiana.
            </p>
          </div>

          {/* Contact */}
          <div>
            <span className="font-semibold text-card-foreground block mb-3">Contact</span>
            <div className="space-y-2 text-sm">
              <p className="text-muted-foreground">
                <a href="mailto:yourbuddy@avontechbuddy.com" className="hover:text-accent transition-default">
                  yourbuddy@avontechbuddy.com
                </a>
              </p>
              <p className="text-muted-foreground">
                <a href="tel:1-317-997-8819" className="hover:text-accent transition-default">
                  1-317-997-8819
                </a>
              </p>
              <p className="text-muted-foreground">Avon, Indiana</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <span className="font-semibold text-card-foreground block mb-3">Quick Links</span>
            <div className="space-y-2 text-sm">
              {QUICK_LINKS.map(({ id, label }) => (
                <p key={id}>
                  <a
                    href={anchorHref(id)}
                    onClick={(e) => handleAnchor(e, id)}
                    className="text-muted-foreground hover:text-accent transition-default"
                  >
                    {label}
                  </a>
                </p>
              ))}
            </div>
          </div>

          {/* Policies */}
          <div>
            <span className="font-semibold text-card-foreground block mb-3">Policies</span>
            <div className="space-y-2 text-sm">
              {policyLinks.map((link) => (
                <p key={link.to}>
                  <Link to={link.to} className="text-muted-foreground hover:text-accent transition-default">
                    {link.name}
                  </Link>
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Disclaimer + bottom row */}
        <div className="border-t border-border/50 pt-8 space-y-4">
          <p className="text-xs text-muted-foreground leading-relaxed">
            © 2026 Avon Tech Buddy — Avon, Indiana. All rights reserved. Avon Tech Buddy is not responsible for data loss
            or pre-existing device issues. Services are provided as-is. By booking a service, you agree to our{' '}
            <Link to="/terms" className="underline hover:text-accent transition-default">Terms of Service</Link>,{' '}
            <Link to="/privacy" className="underline hover:text-accent transition-default">Privacy Policy</Link>,{' '}
            <Link to="/disclaimer" className="underline hover:text-accent transition-default">Service Disclaimer</Link>, and{' '}
            <Link to="/refund" className="underline hover:text-accent transition-default">Refund &amp; Cancellation Policy</Link>.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {policyLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-muted-foreground hover:text-accent transition-default"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
