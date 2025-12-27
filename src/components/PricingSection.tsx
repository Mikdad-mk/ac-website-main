'use client'

import { Button } from '@/components/ui/button'
import { Check, Phone, Wrench, Shield, Star, Clock } from 'lucide-react'
import { motion } from 'framer-motion'
import { useScrollAnimation, fadeInUp, staggerContainer } from '@/hooks/useScrollAnimation'

export default function PricingSection() {
  const { ref, isInView } = useScrollAnimation();

  const plans = [
    {
      name: "Basic Service",
      price: "RM 89",
      period: "per visit",
      description: "Essential AC maintenance for optimal performance",
      icon: <Wrench className="w-6 h-6" />,
      features: [
        "Basic AC Cleaning",
        "Filter Replacement",
        "Performance Check",
        "Basic Troubleshooting",
        "Service Report"
      ],
      buttonText: "Book Service",
      popular: false,
      image: "/our-service/image4.png"
    },
    {
      name: "Premium Service",
      price: "RM 159",
      period: "per visit", 
      description: "Complete AC care package with warranty",
      icon: <Shield className="w-6 h-6" />,
      features: [
        "Everything in Basic Service",
        "Chemical Wash",
        "Gas Top-up (if needed)",
        "Electrical Component Check",
        "Thermostat Calibration",
        "Duct Inspection",
        "3-Month Warranty",
        "Priority Support"
      ],
      buttonText: "Choose Premium",
      popular: true,
      image: "/our-service/image2.png"
    },
    {
      name: "Annual Contract",
      price: "RM 599",
      period: "per year",
      description: "Year-round AC protection with savings",
      icon: <Clock className="w-6 h-6" />,
      features: [
        "4 Quarterly Services",
        "All Premium Features",
        "24/7 Emergency Support",
        "Free Minor Repairs",
        "Parts Discount (20%)",
        "Priority Scheduling"
      ],
      buttonText: "Get Contract",
      popular: false,
      image: "/our-service/image8.png"
    }
  ];

  return (
    <motion.section 
      id="pricing"
      className="py-16 sm:py-20 lg:py-24 bg-background"
      ref={ref}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      variants={staggerContainer}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div className="text-center mb-12 lg:mb-16" variants={fadeInUp}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
            <Star className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary uppercase tracking-wide">Pricing Plans</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            AC Service Plans
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Transparent pricing for professional air conditioning services. Choose the plan that best fits your needs with no hidden fees.
          </p>
        </motion.div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`bg-card rounded-2xl overflow-hidden shadow-sm border transition-all duration-300 hover:shadow-md ${
                plan.popular 
                  ? 'border-primary ring-2 ring-primary/20 scale-105' 
                  : 'border-border hover:border-primary/50'
              }`}
              variants={fadeInUp}
              transition={{ delay: index * 0.1 }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="bg-primary text-primary-foreground text-center py-2 px-4">
                  <span className="text-sm font-semibold uppercase tracking-wide">Most Popular</span>
                </div>
              )}

              {/* Service Image */}
              <div className="relative h-48 bg-muted">
                <img
                  src={plan.image}
                  alt={plan.name}
                  className="w-full h-full object-cover"
                />
                {/* Icon Overlay */}
                <div className={`absolute bottom-4 left-4 w-12 h-12 rounded-full flex items-center justify-center ${
                  plan.popular ? 'bg-white text-primary' : 'bg-primary text-primary-foreground'
                }`}>
                  {plan.icon}
                </div>
              </div>

              {/* Plan Content */}
              <div className="p-6">
                {/* Plan Header */}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    {plan.name}
                  </h3>
                  <div className="mb-2">
                    <span className="text-3xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground ml-1">/ {plan.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {plan.description}
                  </p>
                </div>

                {/* Features List */}
                <div className="mb-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                        <span className="text-sm text-muted-foreground leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <Button
                  className={`w-full py-3 text-base font-semibold transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-primary hover:bg-primary/90 text-primary-foreground' 
                      : 'bg-card border border-primary text-primary hover:bg-primary hover:text-primary-foreground'
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                  asChild
                >
                  <a
                    href="https://wa.me/60122742875"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {plan.buttonText}
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div 
          className="mt-16 text-center"
          variants={fadeInUp}
        >
          <div className="bg-card rounded-2xl p-8 border border-border">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">Need a Custom Solution?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
              Have multiple units or special requirements? Contact us for a personalized quote 
              tailored to your specific needs and get the best value for your investment.
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
                className="flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Get Custom Quote
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}