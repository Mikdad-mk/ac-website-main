import { ArrowRight, Snowflake } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import heroImage from "@/assets/hero-ac.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Clean gradient background */}
      <div className="absolute inset-0" style={{ background: 'var(--gradient-hero)' }} />
      
      {/* Subtle decorative elements */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[300px] sm:w-[500px] lg:w-[800px] h-[200px] sm:h-[300px] lg:h-[400px] bg-primary/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Centered content layout like reference */}
        <div className="text-center max-w-4xl mx-auto space-y-6 sm:space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 section-label animate-fade-up">
            <Snowflake className="w-4 h-4" />
            <span>Premium Climate Solutions</span>
          </div>
          
          {/* Headline */}
          <div className="space-y-6 animate-fade-up">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] tracking-tight text-foreground px-2 sm:px-0">
              Professional AC Services
              <span className="block sm:inline"><br className="hidden sm:block" /></span>
              <span className="gradient-text">For Every Space</span>
            </h1>
            
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
              Expert installation, repair, and maintenance services. 
              Trusted by thousands of homes and businesses for reliable climate control.
            </p>
          </div>
          
          {/* CTA Button */}
          <div className="flex justify-center animate-fade-up-delayed">
            <Button variant="hero" size="lg" className="group">
              Get Started
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Hero Image */}
          <div className="relative mt-8 sm:mt-12 lg:mt-16 animate-scale-in">
            <div className="relative rounded-3xl overflow-hidden shadow-elevated max-w-3xl mx-auto">
              <Image
                src={heroImage}
                alt="Modern AC unit in stylish living room"
                className="w-full h-auto object-cover aspect-video"
                priority
              />
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent" />
            </div>
          </div>

        </div>
      </div>

      {/* Clean bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
