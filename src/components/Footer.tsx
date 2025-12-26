'use client'

import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useScrollAnimation, fadeInUp, staggerContainer } from "@/hooks/useScrollAnimation";

const Footer = () => {
  const { ref, isInView } = useScrollAnimation();

  const menuLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Service Areas", href: "#service-areas" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "AC Installation",
    "AC Repair",
    "AC Maintenance",
    "Chemical Wash",
    "Gas Top Up",
    "Emergency Service"
  ];

  const serviceAreas = [
    "Petaling Jaya",
    "Kuala Lumpur",
    "Shah Alam",
    "Subang Jaya",
    "Kota Damansara",
    "Klang Valley"
  ];

  return (
    <motion.footer
      className="bg-card border-t border-border py-12 lg:py-16"
      ref={ref}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      variants={staggerContainer}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8 lg:mb-12">

          {/* Brand Section */}
          <motion.div className="lg:col-span-1" variants={fadeInUp}>
            <a href="#home" className="inline-flex items-center gap-3 mb-6 group">
              <img
                src="/logo/navbar-logo.png"
                alt="CoolAir Logo"
                className="w-8 h-8 transition-transform duration-500 group-hover:scale-110"
              />
              <span className="text-2xl font-bold mt-1 text-foreground">CoolAir</span>
            </a>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Professional HVAC services across Klang Valley. We provide reliable air conditioning solutions with expert technicians and quality equipment.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+60122742875" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  +60 12-274 2875
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  Kota Damansara, Petaling Jaya, Selangor
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">
                  Mon-Fri: 8AM-6PM, Sat: 9AM-5PM
                </span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3">
              {['F', 'T', 'I', 'W'].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-200 text-sm font-bold"
                >
                  {social}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeInUp}>
            <h4 className="font-semibold mb-6 text-foreground text-lg">Quick Links</h4>
            <ul className="space-y-3">
              {menuLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-primary rounded-full"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={fadeInUp}>
            <h4 className="font-semibold mb-6 text-foreground text-lg">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-primary rounded-full"></span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Service Areas */}
          <motion.div variants={fadeInUp}>
            <h4 className="font-semibold mb-6 text-foreground text-lg">Service Areas</h4>
            <ul className="space-y-3 mb-6">
              {serviceAreas.map((area) => (
                <li key={area}>
                  <span className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="w-1 h-1 bg-primary rounded-full"></span>
                    {area}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <Button
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              asChild
            >
              <a
                href="https://wa.me/60122742875"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Free Quote
              </a>
            </Button>
          </motion.div>

        </div>

        {/* Bottom Bar */}
        <motion.div
          className="pt-8 border-t border-border"
          variants={fadeInUp}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © 2025 CoolAir Services. All rights reserved
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </motion.footer>
  );
};

export default Footer;