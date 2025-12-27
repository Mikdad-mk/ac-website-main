'use client'

import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation, fadeInUp, staggerContainer } from "@/hooks/useScrollAnimation";

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);
  const { ref, isInView } = useScrollAnimation();

  const faqs = [
    {
      question: "How often should I service my air conditioner?",
      answer: "We recommend servicing your air conditioner every 3-6 months for optimal performance. Regular maintenance helps prevent breakdowns, improves energy efficiency, and extends the lifespan of your unit."
    },
    {
      question: "What areas do you provide HVAC services in?",
      answer: "We provide comprehensive HVAC services across Klang Valley, including Petaling Jaya, Kuala Lumpur, Shah Alam, Subang Jaya, Kota Damansara, and surrounding areas in Selangor."
    },
    {
      question: "Do you offer emergency AC repair services?",
      answer: "Yes, we provide 24/7 emergency AC repair services. Our certified technicians are available for urgent repairs to ensure your comfort is restored as quickly as possible."
    },
    {
      question: "How long does an AC installation take?",
      answer: "A standard split unit AC installation typically takes 2-4 hours. The exact time depends on the complexity of the installation, location, and any additional electrical work required."
    },
    {
      question: "What brands of air conditioners do you service?",
      answer: "We service all major AC brands including Daikin, Mitsubishi, Panasonic, LG, Samsung, Toshiba, Sharp, and Carrier. Our technicians are trained to work with various models and systems."
    },
    {
      question: "Do you provide warranty on your services?",
      answer: "Yes, we provide warranty on all our services and installations. Service warranty ranges from 30-90 days, while new installations come with manufacturer warranty plus our workmanship guarantee."
    },
    {
      question: "What is chemical wash and when is it needed?",
      answer: "Chemical wash is a deep cleaning process that removes stubborn dirt, bacteria, and mold from your AC unit. It's recommended when your AC has poor cooling, bad odors, or hasn't been serviced for a long time."
    },
    {
      question: "How can I improve my AC's energy efficiency?",
      answer: "Regular maintenance, cleaning filters monthly, setting optimal temperature (24-26°C), ensuring proper insulation, and upgrading to inverter AC units can significantly improve energy efficiency and reduce electricity bills."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <motion.section 
      className="pt-4 pb-16 sm:pt-4 sm:pb-20 lg:pt-4 lg:pb-24 bg-background"
      ref={ref}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      variants={staggerContainer}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div className="text-center mb-8" variants={fadeInUp}>
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <HelpCircle className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary uppercase tracking-wide">FAQ</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Frequently Asked Questions
          </h2>
          
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get answers to common questions about our HVAC services, maintenance, and air conditioning solutions.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden"
              variants={fadeInUp}
              transition={{ delay: index * 0.1 }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-accent/50 transition-colors"
              >
                <h3 className="text-base sm:text-lg font-semibold text-foreground pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openFAQ === index ? (
                    <ChevronUp className="w-5 h-5 text-primary" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-muted-foreground" />
                  )}
                </div>
              </button>
              
              {openFAQ === index && (
                <motion.div 
                  className="px-6 pb-5"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="pt-2 border-t border-border/50">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </motion.section>
  );
};

export default FAQSection;