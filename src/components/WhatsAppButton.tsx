'use client'

import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "60122742875"; // +60 12-274 2875 formatted for WhatsApp
  const message = "Hello! I'm interested in your air conditioning services. Could you please provide more information?";
  
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="whatsapp-button">
      <button
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 active:bg-green-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group flex items-center justify-center touch-manipulation"
        aria-label="Contact us on WhatsApp"
        style={{ 
          width: '56px', 
          height: '56px',
          minWidth: '56px',
          minHeight: '56px',
          padding: '12px'
        }}
      >
        <MessageCircle className="w-6 h-6 flex-shrink-0" />
        
        {/* Tooltip - hidden on mobile, shown on desktop */}
        <div className="hidden sm:block absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          Chat with us on WhatsApp
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
        </div>
      </button>
    </div>
  );
};

export default WhatsAppButton;