'use client'

import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      content: "NO. 4-5-16, CEMPAKA 4, JALAN CECAWI, SEKSYEN 6/19, KOTA DAMANSARA, 47810 PETALING JAYA",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+60 12-274 2875",
    },
    {
      icon: Mail,
      title: "Email Us",
      content: "servicecoolcare73@gmail.com",
    },
    {
      icon: Clock,
      title: "Hours",
      content: "24/7 Emergency Available",
    },
  ];

  return (
    <section id="contact" className="py-16 sm:py-24 relative overflow-hidden bg-frost">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Contact section content removed */}
      </div>
    </section>
  );
};

export default ContactSection;
