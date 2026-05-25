
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Monitor, Wifi, Shield, HardDrive, Smartphone, Building2, Headphones, Printer, Lock, Server } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard.jsx';
import { Button } from '@/components/ui/button.jsx';
import { Link } from 'react-router-dom';

export default function ServicesPage() {
  const services = [
    {
      icon: Monitor,
      name: 'PC & Mac Repair',
      description: 'Hardware diagnostics, screen replacements, battery swaps, and general repairs for all desktop and laptop computers.',
      pricing: 'From $89'
    },
    {
      icon: Wifi,
      name: 'Network Setup & Troubleshooting',
      description: 'Optimize your home or office network for speed, eliminate dead zones, and secure your Wi-Fi against intruders.',
      pricing: 'From $119'
    },
    {
      icon: Shield,
      name: 'Virus & Malware Removal',
      description: 'Complete system cleanup, rootkit removal, and installation of robust protection against future threats.',
      pricing: 'From $79'
    },
    {
      icon: HardDrive,
      name: 'Data Backup & Recovery',
      description: 'Recover lost files from failing drives and set up automated backup solutions to prevent future data loss.',
      pricing: 'From $149'
    },
    {
      icon: Smartphone,
      name: 'Device Setup & Transfer',
      description: 'Seamlessly transfer data from your old phone, tablet, or computer to your new device and get it configured perfectly.',
      pricing: 'From $69'
    },
    {
      icon: Building2,
      name: 'Small Business IT Support',
      description: 'Ongoing tech support, workstation setup, and infrastructure management tailored for local businesses.',
      pricing: 'Custom pricing'
    },
    {
      icon: Headphones,
      name: 'Remote Support',
      description: 'Get immediate help from anywhere with secure remote access to your device for software troubleshooting.',
      pricing: 'From $49'
    },
    {
      icon: Printer,
      name: 'Printer & Peripheral Setup',
      description: 'Connect and configure wireless printers, scanners, webcams, and other external devices.',
      pricing: 'From $59'
    },
    {
      icon: Lock,
      name: 'Security Consultation',
      description: 'Audit your digital footprint, secure your accounts with 2FA, and learn best practices for online safety.',
      pricing: 'From $99'
    },
    {
      icon: Server,
      name: 'Custom PC Builds',
      description: 'Consultation, parts sourcing, and professional assembly for gaming rigs or high-performance workstations.',
      pricing: 'From $199'
    }
  ];

  return (
    <>
      <Helmet>
        <title>All Services - Avon Tech Buddy</title>
        <meta name="description" content="Comprehensive tech support services including PC repair, network setup, data recovery, and small business IT support in Avon, Indiana." />
      </Helmet>

      <div className="min-h-screen bg-background py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="mb-6 text-foreground text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
              Comprehensive <span className="text-primary">Tech Solutions</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Whether you're dealing with a slow computer, a dead Wi-Fi zone, or need a complete office setup, we have the expertise to get it done right.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card border border-primary/30 rounded-3xl p-10 text-center shadow-[0_0_30px_rgba(0,217,255,0.1)]"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Don't see what you need?</h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              We handle a wide variety of custom tech requests. Reach out and let us know what you're trying to accomplish.
            </p>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold px-10 py-6 text-lg rounded-xl">
              <Link to="/booking">Request Custom Service</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </>
  );
}
