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
    <section id="about" className="py-16 sm:py-24 bg-background relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-foreground">
            About CoolAir
          </h2>
          
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-12">
            Professional air conditioning service company providing reliable installation, 
            repair, and maintenance for residential and commercial clients.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="text-center"
              >
                <div className="icon-box mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground text-sm mb-2">{feature.title}</h4>
                <p className="text-xs text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;