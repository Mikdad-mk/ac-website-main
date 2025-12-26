"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const CTASection = () => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section className=" sm:py-16 lg:py-0 bg-primary text-primary-foreground" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0  lg:gap-32 items-center min-h-[200px] sm:min-h-[200px] lg:min-h-[200px]">

          {/* Left Content */}
          <motion.div
            className="text-center lg:text-left flex flex-col justify-center h-full lg:mt-0 mt-10"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="space-y-4 lg:space-y-6">
              <motion.div
                className="space-y-3"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                  Having a problem?
                </h2>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                  We&apos;ll fix it today!
                </h3>
              </motion.div>

              <motion.p
                className="text-primary-foreground/90 leading-relaxed max-w-lg mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              >
                Professional HVAC service with same-day repairs. Our certified technicians are ready to solve your air conditioning problems quickly and efficiently.
              </motion.p>

              {/* Contact Info */}
              <motion.div
                className="flex flex-col sm:flex-row items-center gap-2 justify-center lg:justify-start pt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              >

                <Button
                  variant="secondary"
                  size="default"
                  className="bg-white text-primary hover:bg-white/90 transition-all duration-300 hover:scale-105"
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
              </motion.div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="flex justify-end lg:justify-end h-full"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <div className="relative w-full max-w-md lg:max-w-lg h-full flex items-center">
              <motion.div
                className="relative rounded-3xl overflow-hidden w-full"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              >
                <img
                  src="/ctasectionimage/ac with man.png"
                  alt="HVAC Technician"
                  className="w-full h-[315px] sm:h-[450px] lg:h-[400px] object-cover object-center transition-transform duration-500 hover:scale-105"
                />
              </motion.div>


            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CTASection;