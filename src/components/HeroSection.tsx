import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen bg-white overflow-hidden flex items-center justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

        {/* Mobile Layout */}
        <div className="lg:hidden flex flex-col justify-start items-center h-full pt-20 pb-8 space-y-6 text-center">
          {/* 1. Badge */}
          <div className="flex justify-center mt-4">
            <span className="inline-block bg-primary/10 text-primary text-sm font-medium px-4 py-2.5 rounded-lg uppercase tracking-wide">
              Professional & Reliable
            </span>
          </div>

          {/* 2. Headline and Description */}
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight">
              Expert AC Service and Reliable Climate Control
            </h1>

            <p className="text-muted-foreground text-lg leading-relaxed max-w-lg mx-auto">
              Professional HVAC service designed to keep your home cool and comfortable year-round with expert technicians and quality equipment.
            </p>
          </div>

          {/* 3. Image */}
          <div className="relative w-full max-w-md">
            <div className="relative rounded-3xl overflow-hidden h-[35vh] sm:h-[40vh]">
              <img
                src="/hero section image.png"
                alt="HVAC Service"
                className="w-full h-full object-cover object-center scale-110 hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Decorative Elements */}

          </div>

          {/* 4. CTA Button */}
          <div className="flex justify-center">
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
                Contact us
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </div>

        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid grid-cols-2 gap-12 items-center w-full min-h-[80vh]">

          {/* Left Content */}
          <div className="space-y-8 text-left flex flex-col justify-center">
            {/* Badge */}
            <div className="flex justify-start">
              <span className="inline-block bg-primary/10 text-primary text-sm font-medium px-4 py-2.5 rounded-lg uppercase tracking-wide">
                Professional & Reliable
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl xl:text-6xl font-bold text-foreground leading-tight">
                Expert AC Service and Reliable Climate Control
              </h1>

              <p className="text-muted-foreground text-xl leading-relaxed max-w-lg">
                Professional HVAC service designed to keep your home cool and comfortable year-round with expert technicians and quality equipment.
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex justify-start">
              <Button
                size="lg"
                className="px-8 py-4 text-lg font-semibold bg-primary rounded-xl  transition-all "
                asChild
              >
                <a
                  href="https://wa.me/60122742875"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Contact us
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
            </div>

          </div>

          {/* Right Image */}
          <div className="relative flex items-center justify-end">
            <div className="relative w-full max-w-none">
              <div className="relative  overflow-hidden h-[65vh]">
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