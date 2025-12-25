'use client'

import { Award, Users, Clock, Shield } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Award,
      title: "Licensed & Certified",
      description: "EPA certified technicians"
    },
    {
      icon: Users,
      title: "Experienced Team",
      description: "Professional service technicians"
    },
    {
      icon: Clock,
      title: "Reliable Service",
      description: "Prompt and dependable"
    },
    {
      icon: Shield,
      title: "Quality Guarantee",
      description: "All work guaranteed"
    }
  ];

  return (
    <section id="about" className="mobile-padding bg-background relative">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          
          <h2 className="text-responsive-lg font-bold mb-4 sm:mb-6 text-foreground">
            About CoolAir Malaysia
          </h2>
          
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8 sm:mb-12">
            Leading air conditioning service provider in Petaling Jaya, Selangor. We specialize in aircond repair, 
            installation, and maintenance for residential and commercial properties across Klang Valley, Malaysia.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-2xl mx-auto">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="text-center p-4 sm:p-0"
              >
                <div className="icon-box mx-auto mb-3 sm:mb-4">
                  <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground text-sm sm:text-base mb-1 sm:mb-2">{feature.title}</h4>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;