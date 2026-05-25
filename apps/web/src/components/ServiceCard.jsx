
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const ServiceCard = ({ icon: Icon, name, description, pricing }) => {
  return (
    <Card className="bg-card border-border/40 hover:border-primary hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 transition-all duration-300 h-full overflow-hidden group">
      <CardContent className="p-6 flex flex-col h-full relative z-10">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors border border-primary/20">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-xl font-semibold mb-3 text-card-foreground group-hover:text-primary transition-colors">{name}</h3>
        <p className="text-base text-muted-foreground mb-6 flex-grow leading-relaxed">{description}</p>
        <div className="text-primary font-bold mt-auto text-lg flex items-center gap-2 border-t border-border/30 pt-4">
          {pricing}
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
