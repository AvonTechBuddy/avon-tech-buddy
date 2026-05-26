
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button.jsx';
import { Menu, X, Phone } from 'lucide-react';
import { useAnchorNav } from '@/hooks/useAnchorNav';
import BrandLogo from '@/components/BrandLogo.jsx';

const SECTIONS = [
  { id: 'home',         label: 'Home' },
  { id: 'services',     label: 'Services' },
  { id: 'how-it-works', label: 'How It Works' },
  { id: 'pricing',      label: 'Pricing' },
  { id: 'booking',      label: 'Book' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { isLanding, handleAnchor, anchorHref } = useAnchorNav();

  // Track scroll position for the shrink-on-scroll effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  // Track which section is visible — only when on the landing page
  useEffect(() => {
    if (!isLanding) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry with the largest intersection ratio that's currently intersecting
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActiveSection(visible.target.id);
      },
      {
        // Triggers when section is roughly centered in the viewport
        rootMargin: '-40% 0px -50% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    const nodes = SECTIONS
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);
    nodes.forEach((n) => observer.observe(n));

    return () => observer.disconnect();
  }, [isLanding]);

  const onAnchorClick = (e, id) => {
    setMobileMenuOpen(false);
    handleAnchor(e, id);
    if (isLanding) setActiveSection(id);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-apple ${
          scrolled
            ? 'bg-background/70 backdrop-blur-2xl supports-[backdrop-filter]:bg-background/60 border-b border-white/[0.06]'
            : 'bg-background/30 backdrop-blur-xl border-b border-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`flex items-center justify-between transition-all duration-500 ease-apple ${
              scrolled ? 'h-14' : 'h-16 md:h-20'
            }`}
          >
            {/* Logo */}
            <a
              href={isLanding ? '#home' : '/'}
              onClick={(e) => isLanding ? onAnchorClick(e, 'home') : null}
              className="group min-w-0 shrink-0"
              aria-label="Avon Tech Buddy home"
            >
              <BrandLogo
                size={scrolled ? 'sm' : 'md'}
                showText
                textClassName="hidden sm:inline"
                imageClassName="group-hover:scale-105 transition-transform duration-500 ease-apple shadow-[0_0_14px_rgba(0,217,255,0.25)]"
              />
            </a>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {SECTIONS.slice(1, 4).map((s) => {
                const active = isLanding && activeSection === s.id;
                return (
                  <a
                    key={s.id}
                    href={anchorHref(s.id)}
                    onClick={(e) => onAnchorClick(e, s.id)}
                    className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors duration-300 ${
                      active
                        ? 'text-primary'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {s.label}
                    {active && (
                      <span className="absolute inset-x-3 -bottom-px h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
                    )}
                  </a>
                );
              })}
            </div>

            {/* Right side */}
            <div className="hidden md:flex items-center gap-3 lg:gap-5">
              <a
                href="tel:1-317-997-8819"
                className="hidden xl:flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                <Phone className="w-3.5 h-3.5" />
                <span className="tabular-nums">317-997-8819</span>
              </a>

              <Button
                asChild
                size="sm"
                className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 ease-apple active:scale-[0.97] shadow-[0_0_18px_rgba(0,217,255,0.3)] hover:shadow-[0_0_24px_rgba(0,217,255,0.45)] font-semibold rounded-full px-5 h-9"
              >
                <a href={anchorHref('booking')} onClick={(e) => onAnchorClick(e, 'booking')}>
                  Book a Visit
                </a>
              </Button>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 -mr-2 text-foreground hover:text-primary transition-colors relative z-[60]"
              onClick={() => setMobileMenuOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              <div className="relative w-6 h-6">
                <Menu className={`w-6 h-6 absolute inset-0 transition-all duration-300 ease-apple ${mobileMenuOpen ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'}`} />
                <X className={`w-6 h-6 absolute inset-0 transition-all duration-300 ease-apple ${mobileMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'}`} />
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile full-screen menu */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-all duration-500 ease-apple ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-background/95 backdrop-blur-2xl" />
        <div className="relative h-full flex flex-col pt-24 pb-10 px-6">
          <div className="flex flex-col gap-1">
            {SECTIONS.map((s, i) => {
              const active = isLanding && activeSection === s.id;
              return (
                <a
                  key={s.id}
                  href={anchorHref(s.id)}
                  onClick={(e) => onAnchorClick(e, s.id)}
                  style={{
                    transitionDelay: mobileMenuOpen ? `${100 + i * 60}ms` : '0ms',
                  }}
                  className={`group flex items-center justify-between py-5 border-b border-white/[0.06] transition-all duration-500 ease-apple ${
                    mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                >
                  <span className={`text-3xl font-semibold tracking-tight transition-colors ${
                    active ? 'text-primary' : 'text-foreground group-hover:text-primary'
                  }`}>
                    {s.label}
                  </span>
                  <span className="text-xs font-mono text-muted-foreground/60 tabular-nums">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </a>
              );
            })}
          </div>

          <div className="mt-auto space-y-4">
            <a
              href="tel:1-317-997-8819"
              className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-white/[0.04] border border-white/[0.06] text-foreground font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Phone className="w-4 h-4 text-primary" />
              <span className="tabular-nums">1-317-997-8819</span>
            </a>

            <Button
              asChild
              size="lg"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 active:scale-[0.97] font-semibold rounded-2xl py-6 shadow-[0_0_24px_rgba(0,217,255,0.35)]"
            >
              <a href={anchorHref('booking')} onClick={(e) => onAnchorClick(e, 'booking')}>
                Book a Visit
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Spacer so content sits below the fixed header */}
      <div aria-hidden className="h-16 md:h-20" />
    </>
  );
}
