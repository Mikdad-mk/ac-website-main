import { Wind, Wrench, Thermometer, RefreshCw, Cog, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: Wind,
    title: "AC Installation",
    description: "Professional installation of all AC types with expert precision and care.",
  },
  {
    icon: Wrench,
    title: "Repair Services",
    description: "Fast and reliable repairs to keep your system running smoothly.",
  },
  {
    icon: Thermometer,
    title: "Climate Control",
    description: "Smart thermostat installation and home automation integration.",
  },
  {
    icon: RefreshCw,
    title: "AC Replacement",
    description: "Upgrade to energy-efficient systems and save on bills.",
  },
  {
    icon: Cog,
    title: "Duct Services",
    description: "Complete duct cleaning, repair, and installation services.",
  },
  {
    icon: ShieldCheck,
    title: "Maintenance Plans",
    description: "Annual maintenance packages for worry-free cooling.",
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
