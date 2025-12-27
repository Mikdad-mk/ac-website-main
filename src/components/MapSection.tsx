'use client'

import { MapPin, Phone, Clock, Mail } from "lucide-react";

const MapSection = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Our Service Location
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Visit our office or contact us for professional HVAC services across Klang Valley and Selangor.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* Map Container */}
          <div className="relative">
            <div className="w-full h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.6234567890123!2d101.5678901234567!3d3.1234567890123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4c123456789a%3A0x1234567890abcdef!2sKota%20Damansara%2C%20Petaling%20Jaya%2C%20Selangor%2C%20Malaysia!5e0!3m2!1sen!2smy!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="CoolAir HVAC Service Location"
              ></iframe>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            
            {/* Address Card */}
            <div className="bg-card rounded-2xl p-6 border border-border shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Our Address</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    NO. 4-5-16, CEMPAKA 4,<br />
                    JALAN CECAWI, SEKSYEN 6/19,<br />
                    KOTA DAMANSARA,<br />
                    47810 PETALING JAYA<br />
                    Selangor, Malaysia
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Phone */}
              <div className="bg-card rounded-2xl p-6 border border-border shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground">Phone</h4>
                </div>
                <a 
                  href="tel:+60122742875" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +60 12-274 2875
                </a>
              </div>

              {/* Business Hours */}
              <div className="bg-card rounded-2xl p-6 border border-border shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground">Hours</h4>
                </div>
                <div className="text-muted-foreground text-sm space-y-1">
                  <p>Mon - Fri: 8:00 AM - 6:00 PM</p>
                  <p>Sat: 9:00 AM - 5:00 PM</p>
                  <p>Sun: 9:00 AM - 6:00 PM</p>
                </div>
              </div>

            </div>

          

            {/* CTA */}
            <div className="text-center pt-4">
              <a
                href="https://wa.me/60122742875"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Contact Us Now
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;