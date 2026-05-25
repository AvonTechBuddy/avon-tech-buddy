
import React from 'react';

const StepCard = ({ number, title, description }) => {
  return (
    <div className="relative bg-card p-8 rounded-2xl border border-border/30 hover:border-primary/80 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group">
      <div className="text-6xl md:text-7xl font-bold text-primary/20 mb-4 transition-colors group-hover:text-primary/40">
        {number}
      </div>
      <h3 className="text-xl md:text-2xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default StepCard;
