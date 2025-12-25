'use client'

import { MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppSection = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "60122742875";
    const message = "Hello! I'm interested in your air conditioning services. Could you please provide more information?";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCallClick = () => {
    window.open('tel:+60122742875', '_self');
  };

  return (
    <section className="py-8 bg-green-50 border-t border-green-200">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          
          <h3 className="text-xl font-semibold mb-4 text-foreground">
            Get Instant Support
          </h3>
          
          <p className="text-muted-foreground mb-6">
            Contact us directly for immediate assistance with your air conditioning needs
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            
            {/* WhatsApp Button */}
            <button
              onClick={handleWhatsAppClick}
              className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 w-full sm:w-auto"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Chat on WhatsApp</span>
            </button>

            {/* Call Button */}
            <button
              onClick={handleCallClick}
              className="flex items-center gap-3 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 w-full sm:w-auto"
            >
              <Phone className="w-5 h-5" />
              <span>Call +60 12-274 2875</span>
            </button>

          </div>

          <div className="mt-4 text-sm text-muted-foreground">
            Available 24/7 for emergency services
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhatsAppSection;