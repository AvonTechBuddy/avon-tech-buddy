
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowLeft } from 'lucide-react';

/**
 * Shared layout for the four policy pages: Privacy, Terms, Disclaimer, Refund.
 * Keeps every legal page visually consistent and on-brand without redesigning them individually.
 *
 * Typography helpers exposed via the `policy-prose` class scope (defined inline below):
 *  - h2 → section headings within a policy
 *  - h3 → sub-section headings
 *  - p, ul, ol, li, a — sensible defaults that match the rest of the site
 */
const PolicyLayout = ({ title, lastUpdated, intro, children }) => {
  return (
    <>
      <Helmet>
        <title>{title} — Avon Tech Buddy</title>
        <meta name="description" content={`${title} for Avon Tech Buddy — tech support in Avon, Indiana.`} />
      </Helmet>

      <div className="min-h-[calc(100vh-4rem)] bg-background py-16 md:py-24 relative overflow-hidden">
        {/* Background decorative elements, same vocabulary as BookingPage */}
        <div className="absolute top-[-10%] right-[-5%] w-[40rem] h-[40rem] bg-accent/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[30rem] h-[30rem] bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-3xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            to="/"
            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-[hsl(var(--purple-theme))] transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          <article className="bg-card border border-border shadow-xl rounded-2xl p-6 md:p-10">
            <header className="mb-8 pb-6 border-b border-border">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-3">
                {title}
              </h1>
              {lastUpdated && (
                <p className="text-sm text-muted-foreground">Last updated: {lastUpdated}</p>
              )}
              {intro && (
                <p className="text-base md:text-lg text-muted-foreground mt-4 leading-relaxed">{intro}</p>
              )}
            </header>

            {/*
              Inline styles for prose because we don't want to depend on a Tailwind typography plugin
              that may or may not be installed. Tailwind 3 supports arbitrary values, and the
              [&_element]: selector pattern lets us style descendants directly.
            */}
            <div
              className={[
                'policy-prose text-foreground/90 leading-relaxed',
                '[&_h2]:text-xl [&_h2]:md:text-2xl [&_h2]:font-semibold [&_h2]:text-foreground [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:pb-2 [&_h2]:border-b [&_h2]:border-border/60',
                '[&_h2:first-child]:mt-0',
                '[&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-foreground [&_h3]:mt-6 [&_h3]:mb-2',
                '[&_p]:text-base [&_p]:text-muted-foreground [&_p]:mb-4 [&_p]:leading-relaxed',
                '[&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_ul]:space-y-2 [&_ul]:text-muted-foreground',
                '[&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-4 [&_ol]:space-y-2 [&_ol]:text-muted-foreground',
                '[&_li]:text-base [&_li]:leading-relaxed',
                '[&_strong]:text-foreground [&_strong]:font-semibold',
                '[&_a]:text-[hsl(var(--purple-theme))] [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-[hsl(var(--purple-theme-hover))]',
              ].join(' ')}
            >
              {children}
            </div>

            <footer className="mt-10 pt-6 border-t border-border text-sm text-muted-foreground">
              Questions about this policy?{' '}
              <a
                href="mailto:yourbuddy@avontechbuddy.com"
                className="text-[hsl(var(--purple-theme))] underline underline-offset-2 hover:text-[hsl(var(--purple-theme-hover))]"
              >
                yourbuddy@avontechbuddy.com
              </a>
            </footer>
          </article>
        </div>
      </div>
    </>
  );
};

export default PolicyLayout;
