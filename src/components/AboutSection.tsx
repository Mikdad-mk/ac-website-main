'use client'

import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation, fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from "@/hooks/useScrollAnimation";

const AboutSection = () => {
  const [expandedCard, setExpandedCard] = useState<string | null>("mission");
  const { ref, isInView } = useScrollAnimation();

  const cards = [
    {
      id: "mission",
      title: "Our Mission",
      content: "With years of experience in the industry, our team of skilled professionals is dedicated to delivering top HVAC services prioritizing durability, quality, and safety. We take pride in our craftsmanship."
    },
    {
      id: "vision",
      title: "Our Vision",
      content: "To be Malaysia's leading HVAC service provider, setting the standard for excellence in air conditioning repair, installation, and maintenance across the region."
    },
    {
      id: "values",
      title: "Our Values",
      content: "We believe in transparency, reliability, and customer satisfaction. Every project is approached with integrity and commitment to delivering exceptional results."
    }
  ];

  const toggleCard = (cardId: string) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  return (
    <motion.section 
      id="about" 
      className="py-16 sm:py-20 lg:py-24 bg-background"
      ref={ref}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      variants={staggerContainer}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Content */}
          <motion.div variants={fadeInLeft}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-medium text-primary uppercase tracking-wide">About Us</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-foreground leading-tight">
              Transforming Homes with Quality HVAC Solutions
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-8">
              From repairs to full AC system replacements, we treat each home as our own, providing personalized solutions
              tailored to meet the unique needs of our clients.
            </p>

            <Button
              size="lg"
              className="px-8 py-4 text-lg font-semibold"
              asChild
            >
              <a
                href="https://wa.me/60122742875"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn More
              </a>
            </Button>
          </motion.div>

          {/* Right Content */}
          <motion.div className="space-y-4" variants={fadeInRight}>
            {/* Image */}
            <div className="relative mb-8">
              <img
                src="/about image.png"
                alt="HVAC Professional at Work"
                className="w-full h-80 object-cover rounded-2xl"
              />
            </div>

            {/* Expandable Cards */}
            <div className="space-y-4">
              {cards.map((card, index) => (
                <motion.div
                  key={card.id}
                  className={`rounded-2xl border transition-all duration-300 ${expandedCard === card.id
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'bg-card border-border hover:border-primary/50'
                    }`}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.1 }}
                >
                  <button
                    onClick={() => toggleCard(card.id)}
                    className="w-full p-6 flex items-center justify-between text-left"
                  >
                    <h3 className="text-lg font-semibold">
                      {card.title}
                    </h3>
                    {expandedCard === card.id ? (
                      <ChevronUp className="w-5 h-5 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 flex-shrink-0" />
                    )}
                  </button>

                  {expandedCard === card.id && (
                    <motion.div 
                      className="px-6 pb-6"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="leading-relaxed opacity-90">
                        {card.content}
                      </p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;