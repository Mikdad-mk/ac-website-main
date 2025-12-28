'use client'

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import HeroImageCarousel from "@/components/HeroImageCarousel";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const fadeInLeft = {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // Show content immediately on first render, then animate
  const contentVariants = {
    initial: isLoaded ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: isLoaded ? 0.6 : 0 }
  };

  return (
    <motion.section 
      id="home" 
      className="relative min-h-screen bg-white overflow-hidden flex items-center justify-center"
      initial="initial"
      animate="animate"
      variants={staggerContainer}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

        {/* Mobile Layout */}
        <div className="lg:hidden flex flex-col justify-center items-center min-h-screen py-20 px-4 space-y-4 text-center">
          {/* 1. Badge */}
          <motion.div className="flex justify-center" variants={contentVariants}>
            <span className="inline-block bg-primary/10 text-primary text-sm font-medium px-4 py-2.5 rounded-lg uppercase tracking-wide">
              Professional & Reliable
            </span>
          </motion.div>

          {/* 2. Headline and Description */}
          <motion.div className="space-y-3" variants={contentVariants}>
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground leading-tight">
              Expert AC Service and Reliable Climate Control
            </h1>

            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-md mx-auto">
              Professional HVAC service designed to keep your home cool and comfortable year-round with expert technicians and quality equipment.
            </p>
          </motion.div>

          {/* 3. Image */}
          <motion.div className="relative w-full max-w-sm" variants={contentVariants}>
            <div className="relative rounded-3xl overflow-hidden h-[30vh] sm:h-[35vh]">
              <HeroImageCarousel />
            </div>
          </motion.div>

          {/* 4. CTA Button */}
          <motion.div className="flex justify-center pt-2" variants={contentVariants}>
            <Button
              size="lg"
              className="px-8 py-4 text-lg font-semibold bg-primary rounded-xl transition-all duration-300"
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
          </motion.div>

        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid grid-cols-2 gap-12 items-center w-full min-h-[80vh] py-12">

          {/* Left Content */}
          <motion.div className="space-y-8 text-left flex flex-col justify-center" variants={contentVariants}>
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
                className="px-8 py-4 text-lg font-semibold bg-primary rounded-xl transition-all"
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

          </motion.div>

          {/* Right Image */}
          <motion.div className="relative flex items-center justify-end" variants={contentVariants}>
            <div className="relative w-full max-w-none">
              <div className="relative overflow-hidden h-[65vh] rounded-3xl">
                <HeroImageCarousel />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;