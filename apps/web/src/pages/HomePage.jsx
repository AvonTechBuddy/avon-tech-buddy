
import React from 'react';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import ServiceCard from '@/components/ServiceCard.jsx';
import PricingCard from '@/components/PricingCard.jsx';
import TrustItem from '@/components/TrustItem.jsx';
import StepCard from '@/components/StepCard.jsx';
import BookingSection from '@/components/BookingSection.jsx';
import { 
  Monitor, 
  Wifi, 
  Shield, 
  HardDrive, 
  Smartphone, 
  Building2, 
  Headphones, 
  Printer,
  CheckCircle,
  Zap,
  DollarSign,
  MapPin,
  Check,
  X
} from 'lucide-react';
import { motion } from 'framer-motion';

const HomePage = () => {
  const services = [
    {
      icon: Monitor,
      name: 'PC & Mac Repair',
      description: 'Hardware diagnostics, upgrades, and repairs for all desktop and laptop computers.',
      pricing: 'From $89'
    },
    {
      icon: Wifi,
      name: 'WiFi & Network Setup',
      description: 'Optimize your home or office network for speed, coverage, and security.',
      pricing: 'From $119'
    },
    {
      icon: Shield,
      name: 'Virus & Malware Removal',
      description: 'Complete system cleanup and protection against threats.',
      pricing: 'From $79'
    },
    {
      icon: HardDrive,
      name: 'Data Backup & Recovery',
      description: 'Protect your important files and recover lost data when disaster strikes.',
      pricing: 'From $149'
    },
    {
      icon: Smartphone,
      name: 'Device Setup & Transfer',
      description: 'New phone, tablet, or computer? We will get you up and running fast.',
      pricing: 'From $69'
    },
    {
      icon: Building2,
      name: 'Small Business IT Support',
      description: 'Ongoing tech support tailored for local businesses and startups.',
      pricing: 'Custom pricing'
    },
    {
      icon: Headphones,
      name: 'Remote Support',
      description: 'Get help from anywhere with secure remote access to your device.',
      pricing: 'From $49'
    },
    {
      icon: Printer,
      name: 'Printer & Peripheral Setup',
      description: 'Connect and configure printers, scanners, and other devices.',
      pricing: 'From $59'
    }
  ];

  const pricingPlans = [
    {
      plan: 'Pay As You Go',
      price: '$49',
      period: 'diagnostic visit',
      features: [
        'Basic computer/Wi-Fi/device check',
        'Problem diagnosis',
        'Clear repair/setup quote',
        'No commitment',
        'Evening/weekend availability when possible'
      ],
      cta: 'Book a Visit'
    },
    {
      plan: 'Home Tech Help',
      price: '$89+',
      period: 'per visit',
      features: [
        'Slow computer cleanup',
        'Printer setup',
        'Wi-Fi/router troubleshooting',
        'Smart TV or streaming device setup',
        'Basic software help',
        'Simple device setup'
      ],
      cta: 'Book a Visit',
      featured: true
    },
    {
      plan: 'PC Build & Upgrade Help',
      price: '$149+',
      period: 'starting price',
      features: [
        'Custom PC build consultation',
        'Part compatibility check',
        'RAM/SSD/GPU/storage upgrades',
        'Windows setup',
        'Basic performance check',
        'Cable management/basic cleanup'
      ],
      cta: 'Request a Quote'
    },
    {
      plan: 'Small Business Tech Help',
      price: '$125+',
      period: 'per visit',
      features: [
        'Computer setup',
        'Printer/scanner setup',
        'Wi-Fi troubleshooting',
        'Email/software setup help',
        'Basic workstation setup',
        'Simple tech recommendations'
      ],
      cta: 'Book a Visit'
    }
  ];

  const comparisonFeatures = [
    { name: 'Diagnostic Visit', payAsYouGo: true, homeHelp: true, pcBuild: true, businessHelp: true },
    { name: 'Computer Cleanup & Optimization', payAsYouGo: false, homeHelp: true, pcBuild: true, businessHelp: true },
    { name: 'Virus & Malware Removal', payAsYouGo: false, homeHelp: true, pcBuild: false, businessHelp: true },
    { name: 'Wi-Fi & Network Setup', payAsYouGo: false, homeHelp: true, pcBuild: false, businessHelp: true },
    { name: 'Printer & Device Setup', payAsYouGo: false, homeHelp: true, pcBuild: false, businessHelp: true },
    { name: 'PC Build Consultation', payAsYouGo: false, homeHelp: false, pcBuild: true, businessHelp: false },
    { name: 'Hardware Upgrades (RAM/SSD/GPU)', payAsYouGo: false, homeHelp: false, pcBuild: true, businessHelp: false },
    { name: 'Business Workstation Setup', payAsYouGo: false, homeHelp: false, pcBuild: false, businessHelp: true },
    { name: 'Email & Software Configuration', payAsYouGo: false, homeHelp: false, pcBuild: false, businessHelp: true },
    { name: 'Remote Support Available', payAsYouGo: true, homeHelp: true, pcBuild: true, businessHelp: true },
    { name: 'Evening/Weekend Availability', payAsYouGo: true, homeHelp: true, pcBuild: true, businessHelp: true }
  ];

  const steps = [
    {
      number: '01',
      title: 'Reach Out',
      description: 'Call, email, or message us. We respond fast and schedule a time that works for you.'
    },
    {
      number: '02',
      title: 'We Diagnose',
      description: 'Our tech expert identifies the issue remotely or on-site, with no hidden fees.'
    },
    {
      number: '03',
      title: 'We Fix It',
      description: 'We solve the problem efficiently, explain what we did, and make sure you are satisfied.'
    },
    {
      number: '04',
      title: 'Stay Protected',
      description: 'Get tips to prevent future issues, plus optional ongoing support to keep things running smooth.'
    }
  ];

  const trustItems = [
    { icon: CheckCircle, text: 'Same-day response' },
    { icon: Zap, text: 'Remote & on-site support' },
    { icon: DollarSign, text: 'Flat-rate pricing' },
    { icon: MapPin, text: 'Locally owned & operated' }
  ];

  return (
    <>
      <Helmet>
        <title>Avon Tech Buddy - Expert Tech Support for Your Home & Business</title>
        <meta name="description" content="Professional tech support for homes and businesses in Avon, Indiana. PC repair, network setup, virus removal, and more. Same-day service available." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1610994238985-5afed0d13d54)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            mixBlendMode: 'luminosity'
          }}
        >
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/80 z-[1]"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto container-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-6 bg-accent/10 text-accent border-accent/20 text-sm md:text-base px-4 py-2 hover:bg-accent/20 transition-colors">
              ⚡ Serving Avon, Indiana & Surrounding Areas
            </Badge>
            <h1 className="mb-6 text-foreground">
              Expert Tech Support for Your Home & Business
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Fast, friendly, and affordable tech support for your home or business. No jargon, no hassle — just solutions that work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-200 active:scale-[0.98] text-base md:text-lg px-8"
              >
                <a href="#booking">
                  Book Now
                </a>
              </Button>
              <Button 
                asChild
                size="lg"
                variant="outline"
                className="border-secondary text-secondary hover:bg-secondary/10 transition-all duration-200 active:scale-[0.98] text-base md:text-lg px-8"
              >
                <a href="#services">
                  Learn More
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-card/50 border-y border-border py-8">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {trustItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <TrustItem icon={item.icon} text={item.text} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-spacing">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="mb-4 text-foreground">Our Services</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From quick fixes to ongoing support, we have got you covered with transparent pricing and expert care.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="section-spacing bg-card/30 border-y border-border/50">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="mb-4 text-foreground">Simple, Honest Pricing</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              No hidden fees. No long-term contracts. Just straightforward tech help.
            </p>
          </motion.div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full flex"
              >
                <PricingCard {...plan} />
              </motion.div>
            ))}
          </div>

          {/* Comparison Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12"
          >
            <h3 className="text-center mb-8 text-foreground">Compare Plans</h3>
            <div className="overflow-x-auto">
              <div className="inline-block min-w-full align-middle">
                <div className="overflow-hidden border border-border rounded-xl">
                  <table className="min-w-full divide-y divide-border">
                    <thead className="bg-muted">
                      <tr>
                        <th scope="col" className="py-4 px-6 text-left text-sm font-semibold text-muted-foreground">
                          Feature
                        </th>
                        <th scope="col" className="py-4 px-6 text-center text-sm font-semibold text-muted-foreground">
                          Pay As You Go
                        </th>
                        <th scope="col" className="py-4 px-6 text-center text-sm font-semibold text-muted-foreground">
                          Home Tech Help
                        </th>
                        <th scope="col" className="py-4 px-6 text-center text-sm font-semibold text-muted-foreground">
                          PC Build & Upgrade
                        </th>
                        <th scope="col" className="py-4 px-6 text-center text-sm font-semibold text-muted-foreground">
                          Business Tech Help
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border bg-card">
                      {comparisonFeatures.map((feature, index) => (
                        <tr key={index} className="hover:bg-muted/30 transition-colors">
                          <td className="py-4 px-6 text-sm text-card-foreground">
                            {feature.name}
                          </td>
                          <td className="py-4 px-6 text-center">
                            {feature.payAsYouGo ? (
                              <Check className="w-5 h-5 text-success mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-muted-foreground/40 mx-auto" />
                            )}
                          </td>
                          <td className="py-4 px-6 text-center">
                            {feature.homeHelp ? (
                              <Check className="w-5 h-5 text-success mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-muted-foreground/40 mx-auto" />
                            )}
                          </td>
                          <td className="py-4 px-6 text-center">
                            {feature.pcBuild ? (
                              <Check className="w-5 h-5 text-success mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-muted-foreground/40 mx-auto" />
                            )}
                          </td>
                          <td className="py-4 px-6 text-center">
                            {feature.businessHelp ? (
                              <Check className="w-5 h-5 text-success mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-muted-foreground/40 mx-auto" />
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Disclaimer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-background border border-border rounded-xl p-4 flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground leading-relaxed">
                <span className="text-foreground font-medium">Note:</span> Final price depends on the issue, parts needed, travel distance, and job complexity. You will receive a clear quote before work begins.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="section-spacing">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="mb-4 text-foreground">How It Works</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Getting tech help should not be complicated. Here is how we make it simple.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <StepCard {...step} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <BookingSection />

      {/* CTA Band */}
      <section className="bg-gradient-to-r from-accent/10 via-secondary/10 to-success/10 border-y border-border py-16">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-6 text-foreground">Ready to stop fighting your tech?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let us handle it. Reach out today and get back to what matters.
            </p>
            <Button 
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-200 active:scale-[0.98] text-lg px-10"
            >
              <a href="#booking">
                Book Now
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer is now provided globally by App.jsx via <Footer /> — removed inline footer */}
    </>
  );
};

export default HomePage;
