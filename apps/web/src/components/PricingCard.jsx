
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button.jsx';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { scrollToBooking } from '@/lib/scrollToBooking';

const PricingCard = ({ plan, price, period, features, cta, featured }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleCtaClick = (e) => {
    if (document.getElementById('booking')) {
      scrollToBooking(e);
      return;
    }
    e.preventDefault();
    if (pathname !== '/') {
      navigate('/#booking');
    }
  };

  return (
    <motion.div
      className={`relative flex flex-col h-full rounded-2xl border transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-1 ${
        featured
          ? 'border-primary bg-card/80 ring-2 ring-primary/50'
          : 'border-border/40 bg-card hover:border-primary/80'
      }`}
      whileHover={{ y: -4 }}
    >
      {featured && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
          <span className="bg-primary text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md shadow-primary/20">
            Recommended
          </span>
        </div>
      )}

      <div className="p-8 flex-1 flex flex-col relative overflow-hidden">
        {featured && (
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
        )}

        <div className="mb-8 relative z-10 border-b border-border/30 pb-6">
          <h3 className="text-xl font-bold text-card-foreground mb-2">{plan}</h3>
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-extrabold text-primary">{price}</span>
            <span className="text-sm font-medium text-muted-foreground">/{period}</span>
          </div>
        </div>

        <ul className="space-y-4 mb-8 flex-1 relative z-10">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="mt-1 bg-primary/10 rounded-full p-0.5">
                <Check className="w-4 h-4 text-primary flex-shrink-0" />
              </div>
              <span className="text-sm md:text-base text-muted-foreground leading-snug">{feature}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto relative z-10">
          <Button
            type="button"
            size="lg"
            onClick={handleCtaClick}
            className={`w-full text-base font-semibold transition-all duration-200 active:scale-[0.98] cursor-pointer ${
              featured
                ? 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20'
                : 'bg-muted text-foreground hover:bg-primary hover:text-primary-foreground border border-border/50 hover:border-primary'
            }`}
          >
            {cta}
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default PricingCard;
