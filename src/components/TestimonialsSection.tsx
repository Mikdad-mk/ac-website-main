'use client'

import { Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Homeowner",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    content: "CoolAir transformed our home! The installation was quick, professional, and the new system is incredibly quiet.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Business Owner",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    content: "We needed a complete HVAC overhaul for our restaurant. CoolAir delivered on time and on budget.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Property Manager",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    content: "Managing 50+ units means constant AC needs. CoolAir's maintenance plan has been a lifesaver.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-background relative">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-foreground">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground">
            Don&apos;t just take our word for it. Here&apos;s what our satisfied customers have to say.
          </p>
        </div>

        {/* Testimonials Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="clean-card p-6 hover:shadow-elevated transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-[1.02] opacity-0 animate-fade-up"
              style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary transition-transform duration-300 hover:scale-125" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground mb-6 text-sm leading-relaxed">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div>
                  <div className="font-medium text-foreground text-sm">{testimonial.name}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-20 pt-12 border-t border-border">
          <p className="text-center text-sm text-muted-foreground mb-8">Trusted by leading brands</p>
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-infinite whitespace-nowrap">
              {/* First set of brands */}
              {["Daikin", "Mitsubishi", "Panasonic", "LG", "Samsung", "Toshiba", "Sharp", "Carrier"].map((brand, index) => (
                <div key={`first-${brand}-${index}`} className="inline-flex items-center justify-center min-w-[150px] px-6 text-base sm:text-lg font-semibold text-muted-foreground/40 hover:text-muted-foreground/60 transition-colors">
                  {brand}
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {["Daikin", "Mitsubishi", "Panasonic", "LG", "Samsung", "Toshiba", "Sharp", "Carrier"].map((brand, index) => (
                <div key={`second-${brand}-${index}`} className="inline-flex items-center justify-center min-w-[150px] px-6 text-base sm:text-lg font-semibold text-muted-foreground/40 hover:text-muted-foreground/60 transition-colors">
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
