import { Wind, Wrench, Thermometer, RefreshCw, Cog, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: Wind,
    title: "Aircond Installation",
    description: "Professional installation of split unit, window & central air conditioning systems with expert precision.",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=300&h=200&fit=crop"
  },
  {
    icon: Wrench,
    title: "Aircond Repair Services", 
    description: "Fast and reliable repair for all aircond brands - Daikin, Mitsubishi, Panasonic, LG with warranty.",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=300&h=200&fit=crop"
  },
  {
    icon: Thermometer,
    title: "Aircond Gas Top Up",
    description: "R410A and R32 refrigerant gas refill service with leak detection and repair for optimal cooling.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop"
  },
  {
    icon: RefreshCw,
    title: "Aircond Replacement",
    description: "Upgrade to energy-efficient 5-star inverter aircond systems and save on monthly electricity bills.",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=300&h=200&fit=crop"
  },
  {
    icon: Cog,
    title: "Aircond Cleaning Service",
    description: "Chemical wash, general service, and maintenance for optimal performance and better air quality.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=300&h=200&fit=crop"
  },
  {
    icon: ShieldCheck,
    title: "Aircond Maintenance",
    description: "Regular servicing packages to extend aircond lifespan and prevent costly breakdowns.",
    image: "https://images.unsplash.com/photo-1621905252472-e8ace8b05de8?w=300&h=200&fit=crop"
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Our Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud.
          </p>
        </div>

        {/* Services Grid - 3x2 layout like the reference */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-card rounded-2xl overflow-hidden shadow-sm border border-border hover:shadow-md transition-shadow duration-300"
            >
              {/* Service Image */}
              <div className="relative h-48 bg-muted">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                {/* Icon Overlay */}
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>
              
              {/* Service Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-foreground">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>
                <button className="text-primary text-sm font-medium hover:text-primary/80 transition-colors">
                  View Service →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;