import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className=" sm:py-16 lg:py-0 bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0  lg:gap-32 items-center min-h-[200px] sm:min-h-[200px] lg:min-h-[200px]">

          {/* Left Content */}
          <div className="text-center lg:text-left flex flex-col justify-center h-full lg:mt-0 mt-10">
            <div className="space-y-4 lg:space-y-6">
              <div className="space-y-3">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                  Having a problem?
                </h2>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                  We&apos;ll fix it today!
                </h3>
              </div>
              
              <p className="text-primary-foreground/90 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Professional HVAC service with same-day repairs. Our certified technicians are ready to solve your air conditioning problems quickly and efficiently.
              </p>

              {/* Contact Info */}
              <div className="flex flex-col sm:flex-row items-center gap-2 justify-center lg:justify-start pt-2">
               
                <Button
                  variant="secondary"
                  size="default"
                  className="bg-white text-primary hover:bg-white/90"
                  asChild
                >
                  <a
                    href="https://wa.me/60122742875"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get a Quote
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-end lg:justify-end h-full">
            <div className="relative w-full max-w-md lg:max-w-lg h-full flex items-center">
              <div className="relative rounded-3xl overflow-hidden w-full">
                <img
                  src="/ctasectionimage/ac with man.png"
                  alt="HVAC Technician"
                  className="w-full h-[315px] sm:h-[450px] lg:h-[400px] object-cover object-center"
                />
              </div>

             
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTASection;