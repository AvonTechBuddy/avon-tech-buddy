
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import PricingCard from '@/components/PricingCard.jsx';
import { Check, X, CheckCircle } from 'lucide-react';

export default function PricingPage() {
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

  return (
    <>
      <Helmet>
        <title>Pricing Plans - Avon Tech Buddy</title>
        <meta name="description" content="Transparent, flat-rate pricing for tech support, PC repair, and IT services in Avon, Indiana." />
      </Helmet>

      <div className="min-h-screen bg-background py-20 relative overflow-hidden">
        <div className="absolute top-1/4 -left-64 w-96 h-96 bg-primary/10 rounded-full blur-[150px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="mb-6 text-foreground text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
              Simple, <span className="text-primary">Honest Pricing</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              No hidden fees. No long-term contracts. Just straightforward tech help when you need it.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16 max-w-5xl mx-auto"
          >
            <h3 className="text-center mb-10 text-3xl font-bold text-foreground">Compare Plans</h3>
            <div className="overflow-x-auto rounded-2xl border border-primary/30 shadow-[0_0_20px_rgba(0,217,255,0.05)] bg-card">
              <div className="inline-block min-w-full align-middle">
                <table className="min-w-full divide-y divide-border/50">
                  <thead className="bg-background">
                    <tr>
                      <th scope="col" className="py-6 px-6 text-left text-sm font-bold text-primary uppercase tracking-wider">
                        Feature
                      </th>
                      <th scope="col" className="py-6 px-6 text-center text-sm font-bold text-foreground uppercase tracking-wider">
                        Pay As You Go
                      </th>
                      <th scope="col" className="py-6 px-6 text-center text-sm font-bold text-primary uppercase tracking-wider border-x border-primary/20 bg-primary/5">
                        Home Tech Help
                      </th>
                      <th scope="col" className="py-6 px-6 text-center text-sm font-bold text-foreground uppercase tracking-wider">
                        PC Build
                      </th>
                      <th scope="col" className="py-6 px-6 text-center text-sm font-bold text-foreground uppercase tracking-wider">
                        Business
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/30 bg-card">
                    {comparisonFeatures.map((feature, index) => (
                      <tr key={index} className="hover:bg-background/50 transition-colors">
                        <td className="py-5 px-6 text-sm font-medium text-foreground">
                          {feature.name}
                        </td>
                        <td className="py-5 px-6 text-center">
                          {feature.payAsYouGo ? (
                            <Check className="w-5 h-5 text-primary mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-muted-foreground/30 mx-auto" />
                          )}
                        </td>
                        <td className="py-5 px-6 text-center border-x border-primary/10 bg-primary/5">
                          {feature.homeHelp ? (
                            <Check className="w-6 h-6 text-primary mx-auto drop-shadow-[0_0_8px_rgba(0,217,255,0.5)]" />
                          ) : (
                            <X className="w-5 h-5 text-muted-foreground/30 mx-auto" />
                          )}
                        </td>
                        <td className="py-5 px-6 text-center">
                          {feature.pcBuild ? (
                            <Check className="w-5 h-5 text-primary mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-muted-foreground/30 mx-auto" />
                          )}
                        </td>
                        <td className="py-5 px-6 text-center">
                          {feature.businessHelp ? (
                            <Check className="w-5 h-5 text-primary mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-muted-foreground/30 mx-auto" />
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-primary/5 border border-primary/30 rounded-xl p-6 flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-base text-foreground leading-relaxed font-medium">
                <span className="text-primary font-bold">Note:</span> Final price depends on the issue, parts needed, travel distance, and job complexity. You will always receive a clear quote before work begins.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
