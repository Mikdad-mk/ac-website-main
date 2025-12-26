'use client'

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import CTASection from "@/components/CTASection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ServiceAreasSection from "@/components/ServiceAreasSection";
import ContactSection from "@/components/ContactSection";
import FAQSection from "@/components/FAQSection";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <CTASection />
        <TestimonialsSection />
        <ServiceAreasSection />
        <ContactSection />
        <FAQSection />
        <MapSection />
      </main>
      <Footer />
    </div>
  );
}