
import React from 'react';

const TrustItem = ({ icon: Icon, text }) => {
  return (
    <div className="flex items-center gap-3 text-foreground bg-card p-4 rounded-xl border border-border/30 hover:border-primary/80 transition-colors shadow-sm shadow-primary/5">
      <Icon className="w-6 h-6 text-primary flex-shrink-0" />
      <span className="text-sm md:text-base font-medium">{text}</span>
    </div>
  );
};

export default TrustItem;
