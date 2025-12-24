'use client'

import { MapPin, CheckCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServiceAreasSection = () => {
  const serviceAreas = [
    { city: "Downtown", zip: "12345", responseTime: "15 min" },
    { city: "Westside", zip: "12346", responseTime: "20 min" },
    { city: "Eastside", zip: "12347", responseTime: "25 min" },
    { city: "Northside", zip: "12348", responseTime: "20 min" },
    { city: "Southside", zip: "12349", responseTime: "25 min" },
    { city: "Suburbs", zip: "12350", responseTime: "30 min" }
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
              Areas We Serve
            </h2>
            
            <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-up">
              We proudly serve the greater metropolitan area with fast, reliable HVAC services. 
              Check if we service your area and see our typical response times.
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

          {/* Coverage Info */}
          <div className="clean-card p-8 text-center animate-fade-up">
            <h3 className="text-xl font-semibold mb-4 text-foreground">
              Don't See Your Area Listed?
            </h3>
            <p className="text-muted-foreground mb-6">
              We're constantly expanding our service coverage. Contact us to check if we can serve your location.
            </p>
            <Button variant="hero" size="lg">
              <Phone className="w-5 h-5" />
              Check Service Availability
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServiceAreasSection;