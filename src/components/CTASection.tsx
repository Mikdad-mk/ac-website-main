import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Having a problem?
            </h2>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
              We'll fixed it today!
            </h3>
            <p className="text-primary-foreground/90 mb-8 leading-relaxed max-w-lg">
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation.
            </p>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <div className="flex items-center gap-3">
                <Phone className="w-6 h-6" />
                <span className="text-xl font-semibold">+60 12-274 2875</span>
              </div>
              <Button
                variant="secondary"
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
                asChild
              >
                <a
                  href="https://wa.me/60122742875"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get a quote
                </a>
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1621905252472-e8ace8b05de8?w=400&h=500&fit=crop"
                alt="HVAC Technician"
                className="w-80 h-96 object-cover rounded-2xl"
              />
              {/* Optional: Add some decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTASection;