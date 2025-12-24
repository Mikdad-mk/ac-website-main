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
      content: "123 Cool Street, AC City, ST 12345",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "1-800-COOL-AIR",
    },
    {
      icon: Mail,
      title: "Email Us",
      content: "hello@coolair.com",
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-foreground">
              Get In Touch
            </h2>
            <p className="text-muted-foreground mb-8">
              Ready to experience perfect climate control? Contact us today for a free consultation.
            </p>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {contactInfo.map((item, index) => (
                <div 
                  key={item.title} 
                  className="group flex items-start gap-3 p-4 rounded-xl hover:bg-card transition-all duration-500 hover:-translate-y-1 hover:shadow-card opacity-0 animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
                >
                  <div className="icon-box-sm flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/15">
                    <item.icon className="w-4 h-4 text-primary transition-transform duration-300 group-hover:rotate-6" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground text-sm mb-0.5 group-hover:text-primary transition-colors duration-300">{item.title}</div>
                    <div className="text-sm text-muted-foreground">{item.content}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="clean-card p-6 lg:p-8 opacity-0 animate-fade-up hover:shadow-elevated transition-all duration-500" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
            <h3 className="text-xl font-semibold mb-6 text-foreground">Request a Free Quote</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none transition-all text-sm"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none transition-all text-sm"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2 text-foreground">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none transition-all text-sm"
                    placeholder="(123) 456-7890"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-2 text-foreground">
                    Service Needed
                  </label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none transition-all text-sm"
                  >
                    <option value="">Select a service</option>
                    <option value="installation">AC Installation</option>
                    <option value="repair">Repair & Maintenance</option>
                    <option value="replacement">AC Replacement</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-2.5 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none transition-all resize-none text-sm"
                  placeholder="Tell us about your needs..."
                />
              </div>

              <Button variant="hero" size="lg" className="w-full">
                <Send className="w-4 h-4" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
