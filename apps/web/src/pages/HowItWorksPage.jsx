
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button.jsx';
import { Link } from 'react-router-dom';

export default function HowItWorksPage() {
  const steps = [
    {
      number: '01',
      title: 'Request Service',
      description: 'Fill out our simple online booking form or give us a call. Tell us what you need help with and pick a time that works for you.'
    },
    {
      number: '02',
      title: 'We Diagnose',
      description: 'Our tech expert will review your request and either diagnose the issue remotely or arrive on-site at the scheduled time.'
    },
    {
      number: '03',
      title: 'Clear Quote',
      description: 'Before any major work begins, we provide a clear, flat-rate quote. No hidden fees, no surprises.'
    },
    {
      number: '04',
      title: 'We Fix It',
      description: 'We solve the problem efficiently, explain what we did in plain English, and make sure you are completely satisfied.'
    },
    {
      number: '05',
      title: 'Payment & Protection',
      description: 'Pay securely only after the job is done. We will also leave you with tips to prevent future issues.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>How It Works - Avon Tech Buddy</title>
        <meta name="description" content="Learn how our simple, hassle-free tech support process works from booking to resolution." />
      </Helmet>

      <div className="min-h-screen bg-background py-20 relative overflow-hidden">
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none -translate-y-1/2"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-20"
          >
            <h1 className="mb-6 text-foreground text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
              How It <span className="text-primary">Works</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Getting tech help shouldn't be complicated. We've streamlined our process to get you back up and running as quickly as possible.
            </p>
          </motion.div>

          <div className="space-y-12 mb-20">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col md:flex-row gap-6 md:gap-10 items-start bg-card p-8 rounded-3xl border border-primary/20 shadow-[0_0_15px_rgba(0,217,255,0.05)]"
              >
                <div className="text-6xl md:text-7xl font-extrabold text-primary/20 shrink-0">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">{step.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-foreground mb-6">Ready to get started?</h2>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold px-12 py-7 text-xl rounded-xl shadow-[0_0_20px_rgba(0,217,255,0.3)]">
              <Link to="/booking">Book Your Visit Now</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </>
  );
}
