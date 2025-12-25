import { ArrowRight, Snowflake } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import heroImage from "@/assets/hero-ac.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
      {/* Clean gradient background */}
      <div className="absolute inset-0" style={{ background: 'var(--gradient-hero)' }} />
      
      {/* Subtle decorative elements */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[200px] sm:w-[300px] md:w-[500px] lg:w-[800px] h-[150px] sm:h-[200px] md:h-[300px] lg:h-[400px] bg-primary/5 rounded-full blur-[60px] sm:blur-[80px] lg:blur-[100px]" />

      <div className="container relative z-10">
        {/* Centered content layout */}
        <div className="text-center max-w-4xl mx-auto space-y-4 sm:space-y-6 lg:space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 section-label animate-fade-up">
            <Snowflake className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="text-xs sm:text-sm">Premium Climate Solutions</span>
          </div>
          
          {/* Headline */}
          <div className="space-y-4 sm:space-y-6 animate-fade-up px-2">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] sm:leading-[1.15] tracking-tight text-foreground">
              <span className="gradient-text">Professional Aircond Service Malaysia</span>
            </h1>
            
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Expert air conditioner repair, installation & maintenance services in Petaling Jaya, Selangor. 
              24/7 emergency aircond service across Klang Valley. Licensed technicians, guaranteed quality.
            </p>
          </div>
          
          {/* CTA Button */}
          <div className="flex justify-center animate-fade-up-delayed pt-2 sm:pt-4">
            <Button variant="hero" size="lg" className="group w-full sm:w-auto max-w-xs">
              Get Started
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Hero Image */}
          <div className="relative mt-6 sm:mt-8 lg:mt-12 animate-scale-in px-2">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-elevated max-w-3xl mx-auto">
              <Image
                src={heroImage}
                alt="Modern AC unit in stylish living room"
                className="w-full h-auto object-cover aspect-video"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
              />
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent" />
            </div>
          </div>

        </div>
      </div>

      {/* Clean bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 lg:h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
