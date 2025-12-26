'use client'

import { MapPin, CheckCircle } from "lucide-react";

const ServiceAreasSection = () => {
  const serviceAreas = [
    "ac service",
    "Aircon service",
    "Aircond service",
    "Aircond cuci",
    "Nearby aircon service",
    "aircon service",
    "Aircon service KL",
    "Aircond service klang",
    "Klang valley aircon cuci",
    "Chemical wash aircon",
    "Reliable aircond service",
    "Harini aircond cuci",
    "Bagus aircond service"
  ];

  return (
    <section id="service-areas" className="py-0 sm:py-16 lg:py-20 bg-frost relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">

          {/* Header */}
          <div className="text-center mb-12">
            <div className="section-label mb-6 animate-fade-up">
              <MapPin className="w-4 h-4" />
              <span>Service Coverage</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-foreground animate-fade-up">
              Aircond Service Areas
            </h2>

            <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-up">
              We provide professional air conditioning services across Klang Valley, Selangor and Kuala Lumpur.
              Fast response times and reliable aircond repair services in your area.
            </p>
          </div>

          {/* Service Areas Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {serviceAreas.map((area, index) => (
              <div
                key={area}
                className="clean-card p-6 hover:shadow-elevated transition-all duration-300 opacity-0 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-foreground text-sm sm:text-base">{area}</h3>
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 ml-2" />
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