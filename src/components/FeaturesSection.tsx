import { ArrowRight, Cloud, CreditCard, Shield, Zap } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Request Service",
    description: "Contact us through our form or call directly. We respond within 30 minutes.",
    icon: Cloud,
    position: "left",
  },
  {
    step: "02", 
    title: "Free Assessment",
    description: "Our experts evaluate your needs and provide a transparent quote.",
    icon: CreditCard,
    position: "right",
  },
  {
    step: "03",
    title: "Professional Service",
    description: "Licensed technicians complete the work with precision and care.",
    icon: Zap,
    position: "left",
  },
  {
    step: "04",
    title: "Satisfaction Guaranteed",
    description: "Enjoy perfect climate control backed by our warranty and support.",
    icon: Shield,
    position: "right",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-16 sm:py-24 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-frost" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-foreground">
            How It Works
          </h2>
          <p className="text-muted-foreground">
            Simple process, professional results. We make climate control easy.
          </p>
        </div>

        {/* Process Steps - Clean alternating layout like reference */}
        <div className="max-w-4xl mx-auto space-y-12">
          {steps.map((step, index) => (
            <div
              key={step.step}
              className={`flex flex-col md:flex-row items-center gap-8 opacity-0 animate-fade-up ${
                step.position === "right" ? "md:flex-row-reverse" : ""
              }`}
              style={{ animationDelay: `${index * 200}ms`, animationFillMode: 'forwards' }}
            >
              {/* Text Content */}
              <div className={`flex-1 text-center ${step.position === "left" ? "md:text-left" : "md:text-right"}`}>
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {step.description}
                </p>
              </div>

              {/* Icon */}
              <div className="relative group">
                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center transition-all duration-500 group-hover:bg-primary/20 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/20">
                  <step.icon className="w-8 h-8 text-primary transition-transform duration-300 group-hover:rotate-12" />
                </div>
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-full left-1/2 -translate-x-1/2 w-px h-12 bg-border" />
                )}
              </div>

              {/* Placeholder for balance */}
              <div className="flex-1 hidden md:block" />
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="mt-20 pt-16 border-t border-border">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 max-w-3xl mx-auto text-center">
            {[
              { value: "15+", label: "Years Experience" },
              { value: "15K+", label: "Happy Customers" },
              { value: "99%", label: "Satisfaction Rate" },
              { value: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <div 
                key={stat.label} 
                className="group opacity-0 animate-fade-up cursor-default"
                style={{ animationDelay: `${800 + index * 100}ms`, animationFillMode: 'forwards' }}
              >
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 transition-transform duration-300 group-hover:scale-110">{stat.value}</div>
                <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
