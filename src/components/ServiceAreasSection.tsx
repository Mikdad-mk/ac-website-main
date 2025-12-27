'use client'

import { DollarSign, CheckCircle, Star } from "lucide-react";

const ServiceAreasSection = () => {
  const basicServices = [
    "Cleaning filters",
    "Wash Outdoor unit", 
    "Check compressor health",
    "AMP check",
    "Gas check"
  ];

  const chemicalServices = [
    "Indoor unit wash",
    "Check copper sensor",
    "Outdoor unit wash", 
    "AMP check",
    "Gas top up if required",
    "Compressor knocking sound check"
  ];

  return (
    <section id="service-areas" className="pt-8 pb-0 sm:pt-12 sm:pb-0 lg:pt-16 lg:pb-0 bg-frost relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="text-center mb-12">
            <div className="section-label mb-4 animate-fade-up">
              <DollarSign className="w-4 h-4" />
              <span>Competitive Pricing</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-foreground animate-fade-up">
           Aircond Service Packages
            </h2>

            <div className="rounded-lg p-4animate-fade-up">
              <p className="text-foreground font-medium">
                We provide 25psi free gas top up along with competitive prices
              </p>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pb-8">
            
            {/* Basic Service */}
            <div className="clean-card p-6 hover:shadow-elevated transition-all duration-300 animate-fade-up">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-foreground mb-2">Basic Service</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-sm text-muted-foreground">as low as</span>
                  <span className="text-3xl font-bold text-primary">MYR70</span>
                </div>
              </div>
              
              <div className="space-y-3">
                {basicServices.map((service, index) => (
                  <div
                    key={service}
                    className="flex items-center gap-3"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-foreground">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Chemical Service */}
            <div className="clean-card p-6 hover:shadow-elevated transition-all duration-300 animate-fade-up border-primary/20">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-foreground mb-2">Chemical Service</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-3xl font-bold text-primary">MYR130</span>
                </div>
                <span className="text-sm text-primary font-medium">Most Popular</span>
              </div>
              
              <div className="space-y-3">
                {chemicalServices.map((service, index) => (
                  <div
                    key={service}
                    className="flex items-center gap-3"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-foreground">{service}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ServiceAreasSection;