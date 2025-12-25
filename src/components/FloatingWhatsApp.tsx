'use client'

import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

const FloatingWhatsApp = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleWhatsAppClick = () => {
    const phoneNumber = "60122742875";
    const message = "Hello! I'm interested in your air conditioning services. Could you please provide more information?";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  if (!isMounted) return null;

  return (
    <button
      onClick={handleWhatsAppClick}
      className="floating-whatsapp-btn"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="whatsapp-icon" />
    </button>
  );
};

export default FloatingWhatsApp;