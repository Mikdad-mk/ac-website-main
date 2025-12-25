import { Wind, Wrench, Thermometer, RefreshCw, Cog, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: Wind,
    title: "Aircond Installation",
    description: "Professional installation of split unit, window & central air conditioning systems.",
  },
  {
    icon: Wrench,
    title: "Aircond Repair Services",
    description: "Fast and reliable repair for all aircond brands - Daikin, Mitsubishi, Panasonic, LG.",
  },
  {
    icon: Thermometer,
    title: "Aircond Gas Top Up",
    description: "R410A and R32 refrigerant gas refill service with leak detection and repair.",
  },
  {
    icon: RefreshCw,
    title: "Aircond Replacement",
    description: "Upgrade to energy-efficient 5-star inverter aircond systems and save on electricity.",
  },
  {
    icon: Cog,
    title: "Aircond Cleaning Service",
    description: "Chemical wash, general service, and maintenance for optimal performance.",
  },
  {
    icon: ShieldCheck,
    title: "Aircond Maintenance",
    description: "Regular servicing packages to extend aircond lifespan and prevent breakdowns.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 sm:py-24 bg-background relative">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-foreground">
            What We Offer
          </h2>
          <p className="text-muted-foreground">
            Comprehensive AC solutions for residential and commercial spaces. 
            Quality service you can trust.
          </p>
        </div>

        {/* Services Grid - Clean card layout like reference */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-6 rounded-2xl hover:bg-card hover:shadow-card transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-[1.02] opacity-0 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
            >
              <div className="icon-box mb-4 group-hover:bg-primary/15 group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-6 h-6 text-primary group-hover:rotate-6 transition-transform duration-300" />
              </div>
              
              <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
