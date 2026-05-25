
import React from 'react';
import BookingForm from '@/components/BookingForm.jsx';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

const BookingSection = () => {
  return (
    <section id="booking" className="section-spacing bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      <div className="absolute top-1/4 -right-64 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -left-64 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto container-padding relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="mb-4 text-foreground text-4xl font-extrabold tracking-tight">Request Tech Help</h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
            Tell us what you need, and we will get back to you within 24 hours to schedule your visit.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <BookingForm />
          
          <div className="mt-10 text-center bg-card border border-primary/20 shadow-lg shadow-primary/5 rounded-2xl py-8 px-6">
            <p className="text-muted-foreground flex items-center justify-center gap-3 flex-wrap text-lg">
              <span className="font-semibold text-foreground">Prefer to book directly?</span>
              <span className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-primary" />
                Call or text 
                <a href="tel:1-317-997-8819" className="text-primary font-bold hover:text-primary/80 transition-colors">
                  1-317-997-8819
                </a>
              </span>
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <p className="text-sm font-semibold text-primary px-6 py-3 bg-primary/5 rounded-full inline-block border border-primary/20 backdrop-blur-sm shadow-sm">
            📍 Serving Avon, Brownsburg, Plainfield, Indianapolis, Danville, and nearby areas.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BookingSection;
