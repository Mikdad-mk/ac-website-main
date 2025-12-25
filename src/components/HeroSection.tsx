import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen bg-white overflow-hidden flex items-center justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full min-h-[80vh]">

          {/* Left Content - Order 2 on mobile, 1 on desktop */}
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left order-2 lg:order-1 flex flex-col justify-center">
            {/* Badge */}
            <div className="flex justify-center lg:justify-start">
              <span className="inline-block bg-primary/10 text-primary text-sm font-medium px-4 py-2.5 rounded-lg uppercase tracking-wide">
                Professional & Reliable
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight">
                Expert AC Service and Reliable Climate Control
              </h1>

              <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed max-w-lg mx-auto lg:mx-0">
                Professional HVAC service designed to keep your home cool and comfortable year-round with expert technicians and quality equipment.
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center lg:justify-start">
              <Button
                size="lg"
                className="px-8 py-4 text-lg font-semibold bg-primary hover:bg-primary/90 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <a
                  href="https://wa.me/60122742875"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Schedule AC Repair
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
            </div>

            {/* Additional Info */}
            <div className="pt-4 space-y-2 text-center lg:text-left">
              <p className="text-sm text-muted-foreground">
                ✓ 24/7 Emergency Service  ✓ Licensed Technicians  ✓ Free Estimates
              </p>
            </div>
          </div>

          {/* Right Image - Order 1 on mobile, 2 on desktop */}
          <div className="relative flex items-center justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative w-full max-w-lg lg:max-w-none">
              <div className="relative rounded-3xl overflow-hidden h-[50vh] sm:h-[55vh] lg:h-[65vh]">
                <img
                  src="/hero section image.png"
                  alt="HVAC Service"
                  className="w-full h-full object-cover object-center scale-110 hover:scale-105 transition-transform duration-700"
                />
              </div>

            
            </div>
          </div>

        </div>
      </div>

     
    </section>
  );
};

export default HeroSection;