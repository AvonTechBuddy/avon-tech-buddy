
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, useReducedMotion } from 'framer-motion';
import {
  CheckCircle, Zap, DollarSign, MapPin, ArrowRight, ArrowUpRight, ChevronDown,
  Monitor, Wifi, Shield, HardDrive, Smartphone, Building2, Headphones, Printer, Lock, Server,
  Check, X, CheckCircle2, Phone, Sparkles,
} from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import { Badge } from '@/components/ui/badge.jsx';
import BookingForm from '@/components/BookingForm.jsx';
import { toast } from 'sonner';

// ─────────────────────────────────────────────────────────────
// Shared motion helpers — Apple-style easing
// ─────────────────────────────────────────────────────────────
const APPLE_EASE = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.8, ease: APPLE_EASE } },
};

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const itemFade = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: APPLE_EASE } },
};

// Helper to wrap any block with our standard scroll-triggered reveal
function Reveal({ children, className = '', delay = 0, as: Tag = 'div' }) {
  const reduce = useReducedMotion();
  if (reduce) return <Tag className={className}>{children}</Tag>;
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      variants={fadeUp}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

// Smooth anchor click helper
function smoothTo(id) {
  return (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.pushState(null, '', `#${id}`);
    }
  };
}

// ─────────────────────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────────────────────
const trustItems = [
  { icon: CheckCircle, text: 'Same-day response' },
  { icon: Zap,         text: 'Remote & on-site support' },
  { icon: DollarSign,  text: 'Flat-rate pricing' },
  { icon: MapPin,      text: 'Locally owned & operated' },
];

const services = [
  { icon: Monitor,    name: 'PC & Mac Repair',                  description: 'Hardware diagnostics, screen replacements, battery swaps, and general repairs for all desktop and laptop computers.', pricing: 'From $89' },
  { icon: Wifi,       name: 'Network Setup & Troubleshooting',  description: 'Optimize your home or office network for speed, eliminate dead zones, and secure your Wi-Fi against intruders.',     pricing: 'From $119' },
  { icon: Shield,     name: 'Virus & Malware Removal',          description: 'Complete system cleanup, rootkit removal, and installation of robust protection against future threats.',           pricing: 'From $79' },
  { icon: HardDrive,  name: 'Data Backup & Recovery',           description: 'Recover lost files from failing drives and set up automated backup solutions to prevent future data loss.',        pricing: 'From $149' },
  { icon: Smartphone, name: 'Device Setup & Transfer',          description: 'Seamlessly transfer data from your old phone, tablet, or computer to your new device and get it configured perfectly.', pricing: 'From $69' },
  { icon: Building2,  name: 'Small Business IT Support',        description: 'Ongoing tech support, workstation setup, and infrastructure management tailored for local businesses.',            pricing: 'Custom pricing' },
  { icon: Headphones, name: 'Remote Support',                   description: 'Get immediate help from anywhere with secure remote access to your device for software troubleshooting.',           pricing: 'From $49' },
  { icon: Printer,    name: 'Printer & Peripheral Setup',       description: 'Connect and configure wireless printers, scanners, webcams, and other external devices.',                          pricing: 'From $59' },
  { icon: Lock,       name: 'Security Consultation',            description: 'Audit your digital footprint, secure your accounts with 2FA, and learn best practices for online safety.',         pricing: 'From $99' },
  { icon: Server,     name: 'Custom PC Builds',                 description: 'Consultation, parts sourcing, and professional assembly for gaming rigs or high-performance workstations.',        pricing: 'From $199' },
];

const steps = [
  { number: '01', title: 'Request Service',     description: 'Fill out our simple online booking form or give us a call. Tell us what you need help with and pick a time that works for you.' },
  { number: '02', title: 'We Diagnose',         description: 'Our tech expert reviews your request and either diagnoses the issue remotely or arrives on-site at the scheduled time.' },
  { number: '03', title: 'Clear Quote',         description: 'Before any major work begins, we provide a clear, flat-rate quote. No hidden fees, no surprises.' },
  { number: '04', title: 'We Fix It',           description: 'We solve the problem efficiently, explain what we did in plain English, and make sure you are completely satisfied.' },
  { number: '05', title: 'Payment & Protection', description: 'Pay securely only after the job is done. We also leave you with tips to prevent future issues.' },
];

const pricingPlans = [
  {
    plan: 'Pay As You Go',
    price: '$49',
    period: 'diagnostic visit',
    features: ['Basic computer/Wi-Fi/device check', 'Problem diagnosis', 'Clear repair/setup quote', 'No commitment', 'Evening/weekend availability when possible'],
    cta: 'Book a Visit',
  },
  {
    plan: 'Home Tech Help',
    price: '$89+',
    period: 'per visit',
    features: ['Slow computer cleanup', 'Printer setup', 'Wi-Fi/router troubleshooting', 'Smart TV or streaming device setup', 'Basic software help', 'Simple device setup'],
    cta: 'Book a Visit',
    featured: true,
  },
  {
    plan: 'PC Build & Upgrade Help',
    price: '$149+',
    period: 'starting price',
    features: ['Custom PC build consultation', 'Part compatibility check', 'RAM/SSD/GPU/storage upgrades', 'Windows setup', 'Basic performance check', 'Cable management/basic cleanup'],
    cta: 'Request a Quote',
  },
  {
    plan: 'Small Business Tech Help',
    price: '$125+',
    period: 'per visit',
    features: ['Computer setup', 'Printer/scanner setup', 'Wi-Fi troubleshooting', 'Email/software setup help', 'Basic workstation setup', 'Simple tech recommendations'],
    cta: 'Book a Visit',
  },
];

const comparisonFeatures = [
  { name: 'Diagnostic Visit',                payAsYouGo: true,  homeHelp: true,  pcBuild: true,  businessHelp: true },
  { name: 'Computer Cleanup & Optimization', payAsYouGo: false, homeHelp: true,  pcBuild: true,  businessHelp: true },
  { name: 'Virus & Malware Removal',         payAsYouGo: false, homeHelp: true,  pcBuild: false, businessHelp: true },
  { name: 'Wi-Fi & Network Setup',           payAsYouGo: false, homeHelp: true,  pcBuild: false, businessHelp: true },
  { name: 'Printer & Device Setup',          payAsYouGo: false, homeHelp: true,  pcBuild: false, businessHelp: true },
  { name: 'PC Build Consultation',           payAsYouGo: false, homeHelp: false, pcBuild: true,  businessHelp: false },
  { name: 'Hardware Upgrades (RAM/SSD/GPU)', payAsYouGo: false, homeHelp: false, pcBuild: true,  businessHelp: false },
  { name: 'Business Workstation Setup',      payAsYouGo: false, homeHelp: false, pcBuild: false, businessHelp: true },
  { name: 'Email & Software Configuration',  payAsYouGo: false, homeHelp: false, pcBuild: false, businessHelp: true },
  { name: 'Remote Support Available',        payAsYouGo: true,  homeHelp: true,  pcBuild: true,  businessHelp: true },
  { name: 'Evening/Weekend Availability',    payAsYouGo: true,  homeHelp: true,  pcBuild: true,  businessHelp: true },
];

// ─────────────────────────────────────────────────────────────
// Section: Hero
// ─────────────────────────────────────────────────────────────
function HeroSection() {
  const reduce = useReducedMotion();
  return (
    <section
      id="home"
      className="relative isolate min-h-[calc(100svh-4rem)] md:min-h-[calc(100svh-5rem)] flex items-center justify-center overflow-hidden"
    >
      {/* Ambient drift blobs */}
      <div className={`absolute -top-1/4 -right-1/4 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-primary/15 rounded-full blur-[140px] pointer-events-none ${reduce ? '' : 'animate-drift'}`} />
      <div className={`absolute -bottom-1/4 -left-1/4 w-[55vw] h-[55vw] max-w-[700px] max-h-[700px] bg-primary/10 rounded-full blur-[140px] pointer-events-none ${reduce ? '' : 'animate-drift-delayed'}`} />

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:42px_42px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 text-center py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: APPLE_EASE }}
        >
          <Badge className="mb-8 bg-white/[0.03] text-primary border border-primary/30 text-[11px] md:text-xs px-4 py-1.5 hover:bg-white/[0.06] transition-colors uppercase tracking-[0.2em] font-semibold rounded-full backdrop-blur-sm">
            <Sparkles className="w-3 h-3 mr-1.5" />
            Serving Avon, Indiana &amp; surrounding areas
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, ease: APPLE_EASE, delay: 0.15 }}
          className="mb-8 text-foreground"
        >
          <motion.span
            className="block"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: APPLE_EASE, delay: 0.2 }}
          >
            Expert tech support.
          </motion.span>
          <motion.span
            className="block text-gradient-primary"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: APPLE_EASE, delay: 0.35 }}
          >
            On your schedule.
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: APPLE_EASE, delay: 0.55 }}
          className="text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Fast, friendly, and affordable tech help for your home and business.
          No jargon, no hassle — just reliable solutions that work.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: APPLE_EASE, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            asChild
            size="lg"
            className="group bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 ease-apple active:scale-[0.97] text-base font-semibold px-8 h-14 shadow-[0_0_28px_rgba(0,217,255,0.4)] hover:shadow-[0_0_36px_rgba(0,217,255,0.55)] rounded-full w-full sm:w-auto"
          >
            <a href="#booking" onClick={smoothTo('booking')}>
              Book a Visit
              <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300 ease-apple" />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="ghost"
            className="text-foreground hover:bg-white/[0.04] hover:text-primary transition-all duration-300 ease-apple text-base font-medium px-6 h-14 rounded-full w-full sm:w-auto"
          >
            <a href="#services" onClick={smoothTo('services')}>
              Explore services
              <ArrowUpRight className="ml-1 w-4 h-4" />
            </a>
          </Button>
        </motion.div>

        {/* Trust badges inline below hero */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="mt-16 md:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3 max-w-4xl mx-auto"
        >
          {trustItems.map((item) => (
            <motion.div
              key={item.text}
              variants={itemFade}
              className="flex items-center justify-center gap-2.5 text-foreground/90 bg-white/[0.02] px-4 py-3 rounded-full border border-white/[0.06] hover:border-primary/30 hover:bg-white/[0.04] transition-all duration-500 ease-apple backdrop-blur-sm"
            >
              <item.icon className="w-4 h-4 text-primary flex-shrink-0" />
              <span className="text-xs md:text-sm font-medium tracking-tight">{item.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#services"
        onClick={smoothTo('services')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/60 hover:text-primary transition-colors duration-300"
        aria-label="Scroll to services"
      >
        <span className="text-[10px] font-semibold tracking-[0.2em] uppercase">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce-soft" />
      </motion.a>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// Section: Services
// ─────────────────────────────────────────────────────────────
function ServicesSection() {
  return (
    <section id="services" className="relative py-28 md:py-40 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/[0.06] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <Reveal className="max-w-3xl mb-16 md:mb-24">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-5">— Our Services</p>
          <h2 className="text-foreground mb-6">
            Comprehensive tech<br />
            solutions for <span className="text-gradient-primary">every device.</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
            Whether you're dealing with a slow computer, a dead Wi-Fi zone, or
            need a complete office setup, we have the expertise to get it done right.
          </p>
        </Reveal>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06] rounded-3xl overflow-hidden border border-white/[0.06]"
        >
          {services.map((service) => (
            <motion.div
              key={service.name}
              variants={itemFade}
              className="group relative bg-background hover:bg-card/60 transition-all duration-500 ease-apple p-8 md:p-10 flex flex-col"
            >
              {/* Hover accent line */}
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="w-11 h-11 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center mb-7 group-hover:bg-primary/10 group-hover:border-primary/30 transition-all duration-500 ease-apple">
                <service.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-500 ease-apple" />
              </div>

              <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                {service.name}
              </h3>
              <p className="text-[15px] text-muted-foreground mb-8 flex-grow leading-relaxed">
                {service.description}
              </p>
              <div className="text-sm font-semibold text-primary tracking-tight">
                {service.pricing}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <Reveal className="mt-16 md:mt-20" delay={0.1}>
          <div className="relative bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/[0.08] rounded-3xl p-10 md:p-14 text-center overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,hsl(189_100%_50%/0.08),transparent_60%)] pointer-events-none" />
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 tracking-tight">
                Don't see what you need?
              </h3>
              <p className="text-muted-foreground text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                We handle a wide variety of custom tech requests. Reach out and let us know what you're trying to accomplish.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 h-12 rounded-full shadow-[0_0_24px_rgba(0,217,255,0.3)]"
              >
                <a href="#booking" onClick={smoothTo('booking')}>
                  Request a custom service
                  <ArrowRight className="ml-1 w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// Section: How It Works
// ─────────────────────────────────────────────────────────────
function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative py-28 md:py-40 overflow-hidden">
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/[0.05] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
        <Reveal className="text-center mb-20">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-5">— Our Process</p>
          <h2 className="text-foreground mb-6">
            Five simple steps from<br />
            <span className="text-gradient-primary">request to resolution.</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Getting tech help shouldn't be complicated. We've streamlined the process to get you back up and running fast.
          </p>
        </Reveal>

        <div className="relative">
          {/* Vertical connecting line */}
          <div className="absolute left-[28px] md:left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent md:-translate-x-1/2" aria-hidden />

          <motion.ol
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="space-y-6 md:space-y-12"
          >
            {steps.map((step, i) => (
              <motion.li
                key={step.number}
                variants={itemFade}
                className={`flex md:items-center gap-6 md:gap-12 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse md:text-right'
                }`}
              >
                {/* Number circle */}
                <div className="relative flex-shrink-0 z-10">
                  <div className="w-14 h-14 rounded-full bg-background border border-primary/30 flex items-center justify-center font-semibold text-primary text-sm tabular-nums shadow-[0_0_20px_rgba(0,217,255,0.15)]">
                    {step.number}
                  </div>
                </div>

                {/* Content card */}
                <div className="flex-1 group">
                  <div className="bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.06] hover:border-primary/30 rounded-2xl p-6 md:p-8 transition-all duration-500 ease-apple">
                    <h3 className="text-xl md:text-2xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Spacer to balance alternating layout on desktop */}
                <div className="hidden md:block flex-1" aria-hidden />
              </motion.li>
            ))}
          </motion.ol>
        </div>

        <Reveal className="text-center mt-20" delay={0.1}>
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 h-14 text-base rounded-full shadow-[0_0_28px_rgba(0,217,255,0.4)] hover:shadow-[0_0_36px_rgba(0,217,255,0.55)] transition-all duration-300 ease-apple"
          >
            <a href="#booking" onClick={smoothTo('booking')}>
              Start the process
              <ArrowRight className="ml-1 w-4 h-4" />
            </a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// Section: Pricing
// ─────────────────────────────────────────────────────────────
function PricingCard({ plan, price, period, features, cta, featured }) {
  return (
    <motion.div
      variants={itemFade}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.4, ease: APPLE_EASE }}
      className={`relative flex flex-col h-full rounded-3xl transition-all duration-500 ease-apple ${
        featured
          ? 'bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-primary/40 shadow-[0_0_40px_-10px_rgba(0,217,255,0.35)]'
          : 'bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.15]'
      }`}
    >
      {featured && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
          <span className="bg-primary text-primary-foreground text-[10px] font-bold px-3.5 py-1.5 rounded-full uppercase tracking-[0.18em] shadow-lg shadow-primary/30">
            Recommended
          </span>
        </div>
      )}

      <div className="p-8 md:p-10 flex-1 flex flex-col">
        <div className="mb-8 pb-8 border-b border-white/[0.06]">
          <h3 className="text-lg font-semibold text-foreground mb-3 tracking-tight">{plan}</h3>
          <div className="flex items-baseline gap-1.5">
            <span className="text-5xl font-bold text-foreground tracking-tight tabular-nums">{price}</span>
            <span className="text-sm text-muted-foreground">/{period}</span>
          </div>
        </div>

        <ul className="space-y-4 mb-10 flex-1">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <div className="mt-1 flex-shrink-0">
                <Check className="w-4 h-4 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground leading-snug">{feature}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto">
          <Button
            asChild
            className={`w-full h-12 text-sm font-semibold transition-all duration-300 ease-apple active:scale-[0.98] rounded-full ${
              featured
                ? 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_rgba(0,217,255,0.25)]'
                : 'bg-white/[0.04] text-foreground border border-white/[0.08] hover:bg-white/[0.08]'
            }`}
          >
            <a href="#booking" onClick={smoothTo('booking')}>{cta}</a>
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

function PricingSection() {
  return (
    <section id="pricing" className="relative py-28 md:py-40 overflow-hidden">
      <div className="absolute top-1/3 -left-1/4 w-[500px] h-[500px] bg-primary/[0.06] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <Reveal className="text-center mb-20">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-5">— Pricing</p>
          <h2 className="text-foreground mb-6">
            Simple, <span className="text-gradient-primary">honest pricing.</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            No hidden fees. No long-term contracts. Just straightforward tech help when you need it.
          </p>
        </Reveal>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-24"
        >
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.plan} {...plan} />
          ))}
        </motion.div>

        {/* Comparison table */}
        <Reveal className="max-w-5xl mx-auto">
          <h3 className="text-center mb-10 text-2xl md:text-3xl font-semibold text-foreground tracking-tight">
            Compare plans
          </h3>
          <div className="overflow-x-auto rounded-3xl border border-white/[0.06] bg-white/[0.02]">
            <table className="min-w-full">
              <thead>
                <tr className="border-b border-white/[0.06]">
                  <th className="py-5 px-6 text-left text-[11px] font-semibold text-muted-foreground uppercase tracking-[0.15em]">Feature</th>
                  <th className="py-5 px-4 text-center text-[11px] font-semibold text-muted-foreground uppercase tracking-[0.15em]">Pay As You Go</th>
                  <th className="py-5 px-4 text-center text-[11px] font-semibold text-primary uppercase tracking-[0.15em] bg-primary/[0.04]">Home Tech</th>
                  <th className="py-5 px-4 text-center text-[11px] font-semibold text-muted-foreground uppercase tracking-[0.15em]">PC Build</th>
                  <th className="py-5 px-4 text-center text-[11px] font-semibold text-muted-foreground uppercase tracking-[0.15em]">Business</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feature, i) => (
                  <tr key={feature.name} className={`${i !== comparisonFeatures.length - 1 ? 'border-b border-white/[0.04]' : ''} hover:bg-white/[0.015] transition-colors`}>
                    <td className="py-4 px-6 text-sm font-medium text-foreground">{feature.name}</td>
                    <td className="py-4 px-4 text-center">{feature.payAsYouGo ? <Check className="w-4 h-4 text-primary mx-auto" /> : <X className="w-4 h-4 text-muted-foreground/30 mx-auto" />}</td>
                    <td className="py-4 px-4 text-center bg-primary/[0.04]">{feature.homeHelp ? <Check className="w-5 h-5 text-primary mx-auto drop-shadow-[0_0_6px_rgba(0,217,255,0.6)]" /> : <X className="w-4 h-4 text-muted-foreground/30 mx-auto" />}</td>
                    <td className="py-4 px-4 text-center">{feature.pcBuild ? <Check className="w-4 h-4 text-primary mx-auto" /> : <X className="w-4 h-4 text-muted-foreground/30 mx-auto" />}</td>
                    <td className="py-4 px-4 text-center">{feature.businessHelp ? <Check className="w-4 h-4 text-primary mx-auto" /> : <X className="w-4 h-4 text-muted-foreground/30 mx-auto" />}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <Reveal className="mt-12 max-w-3xl mx-auto" delay={0.1}>
          <div className="bg-white/[0.02] border border-primary/20 rounded-2xl p-5 md:p-6 flex items-start gap-4">
            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              <span className="text-foreground font-semibold">Note:</span> Final price depends on the issue, parts needed, travel distance, and job complexity. You will always receive a clear quote before work begins.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// Section: Booking
// ─────────────────────────────────────────────────────────────
function BookingSection() {
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSuccess = () => {
    setIsSuccess(true);
    toast.success('🎉 You\'re all set! I\'ll be in touch soon to confirm your session. PS — check your spam folder for your confirmation email and give it a "Not Spam" thumbs up!', {
      duration: 6000,
    });
    // Smooth-scroll the success card into view
    setTimeout(() => {
      document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  return (
    <section id="booking" className="relative py-28 md:py-40 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute top-1/4 -right-64 w-[500px] h-[500px] bg-primary/[0.08] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-64 w-[500px] h-[500px] bg-primary/[0.06] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
        <Reveal className="text-center mb-12 md:mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-5">— Get Started</p>
          <h2 className="text-foreground mb-6">
            Request <span className="text-gradient-primary">tech help.</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Tell us what you need, and we'll get back to you within 24 hours to schedule your visit.
          </p>
        </Reveal>

        <Reveal>
          <div className="bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/[0.08] rounded-3xl p-6 md:p-12 relative overflow-hidden shadow-2xl shadow-black/40">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/[0.06] rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />

            {isSuccess ? (
              <div className="text-center py-12 md:py-20 relative z-10">
                <motion.div
                  initial={{ scale: 0.6, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, ease: APPLE_EASE }}
                  className="w-20 h-20 bg-primary/10 border border-primary/30 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_28px_rgba(0,217,255,0.3)]"
                >
                  <CheckCircle2 className="w-10 h-10 text-primary" />
                </motion.div>
                <h3 className="mb-4 text-foreground text-3xl md:text-4xl font-bold tracking-tight">Request received</h3>
                <p className="text-muted-foreground max-w-xl mx-auto mb-8 text-base md:text-lg leading-relaxed">
                  🎉 You're all set! I'll be in touch soon to confirm your session.
                </p>
                <p className="text-sm text-foreground/70 max-w-xl mx-auto mb-10 leading-relaxed">
                  PS — please check your spam folder for your confirmation email and give it a "Not Spam" thumbs up!
                </p>
                <Button
                  onClick={() => setIsSuccess(false)}
                  size="lg"
                  className="bg-white/[0.04] text-foreground border border-white/[0.08] hover:bg-white/[0.08] font-semibold px-8 h-12 rounded-full"
                >
                  Submit another request
                </Button>
              </div>
            ) : (
              <div className="relative z-10">
                <BookingForm onSuccess={handleSuccess} />

                <div className="mt-10 text-center bg-white/[0.02] border border-white/[0.06] rounded-2xl py-6 px-6">
                  <p className="text-muted-foreground flex items-center justify-center gap-2 flex-wrap text-sm md:text-base">
                    <span className="font-medium text-foreground">Prefer to book directly?</span>
                    <span className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-primary" />
                      Call or text
                      <a href="tel:1-317-997-8819" className="text-primary font-semibold hover:text-primary/80 transition-colors tabular-nums">
                        1-317-997-8819
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            )}
          </div>
        </Reveal>

        <Reveal className="mt-10 text-center" delay={0.1}>
          <p className="text-xs md:text-sm font-medium text-muted-foreground px-5 py-2.5 bg-white/[0.02] rounded-full inline-flex items-center gap-2 border border-white/[0.06]">
            <MapPin className="w-3.5 h-3.5 text-primary" />
            Serving Avon, Brownsburg, Plainfield, Indianapolis, Danville and nearby areas
          </p>
        </Reveal>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// Landing Page (composition)
// ─────────────────────────────────────────────────────────────
export default function LandingPage() {
  return (
    <>
      <Helmet>
        <title>Avon Tech Buddy — Expert Tech Support for Your Home &amp; Business</title>
        <meta name="description" content="Professional tech support for homes and businesses in Avon, Indiana. PC repair, network setup, virus removal, and more. Same-day service available." />
      </Helmet>

      <HeroSection />

      {/* Hairline section divider */}
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="hairline" />
      </div>

      <ServicesSection />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="hairline" />
      </div>

      <HowItWorksSection />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="hairline" />
      </div>

      <PricingSection />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="hairline" />
      </div>

      <BookingSection />
    </>
  );
}
