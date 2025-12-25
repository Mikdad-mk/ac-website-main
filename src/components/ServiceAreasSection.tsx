'use client'

import { MapPin, CheckCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServiceAreasSection = () => {
  const serviceAreas = [
    { city: "Petaling Jaya", zip: "47xxx", responseTime: "15 min" },
    { city: "Kuala Lumpur", zip: "50xxx", responseTime: "25 min" },
    { city: "Shah Alam", zip: "40xxx", responseTime: "30 min" },
    { city: "Subang Jaya", zip: "47xxx", responseTime: "20 min" },
    { city: "Puchong", zip: "47xxx", responseTime: "35 min" },
    { city: "Klang", zip: "41xxx", responseTime: "40 min" }
  ];

  return (
    <section id="service-areas" className="py-16 sm:py-24 bg-frost relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <div className="section-label mb-6 animate-fade-up">
              <MapPin className="w-4 h-4" />
              <span>Service Coverage</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-foreground animate-fade-up">
              Aircond Service Areas in Malaysia
            </h2>
            
            <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-up">
              We provide professional air conditioning services across Klang Valley, Selangor and Kuala Lumpur. 
              Fast response times and reliable aircond repair services in your area.
            </p>
          </div>

          {/* Service Areas Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {serviceAreas.map((area, index) => (
              <div 
                key={area.city}
                className="clean-card p-6 hover:shadow-elevated transition-all duration-300 opacity-0 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{area.city}</h3>
                    <p className="text-sm text-muted-foreground">ZIP: {area.zip}</p>
                  </div>
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-sm text-muted-foreground">
                    Avg. Response: <span className="font-medium text-foreground">{area.responseTime}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>



        </div>
      </div>
    </section>
  );
};

export default ServiceAreasSection;