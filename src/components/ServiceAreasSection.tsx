'use client'

import { DollarSign, CheckCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const ServiceAreasSection = () => {
  const basicServices = [
    "Cleaning filters",
    "Wash Outdoor unit", 
    "Check compressor health",
    "AMP check",
    "Gas check"
  ];

  const chemicalServices = [
    "Indoor unit wash",
    "Check copper sensor",
    "Outdoor unit wash", 
    "AMP check",
    "Gas top up if required",
    "Compressor knocking sound check"
  ];

  return (
    <section id="service-areas" className="pt-8 md:pt-12 pb-0 bg-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        
        {/* Header */}
        <div className="mx-auto max-w-2xl space-y-4 text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <DollarSign className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary uppercase tracking-wide">Competitive Pricing</span>
          </div>
          
          <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
          Aircond Service Packages
          </h1>
          
          <div className="">
            <p className="text-foreground font-medium">
              We provide 25psi free gas top up along with competitive prices
            </p>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="mt-6 grid gap-6 md:mt-8 md:grid-cols-2 max-w-4xl mx-auto">
          
          {/* Basic Service Card */}
          <Card className="flex flex-col hover:shadow-lg transition-all duration-300">
            <CardHeader className="text-center">
              <CardTitle className="font-semibold text-xl">Basic Service</CardTitle>
              <div className="my-3">
                <span className="text-sm text-muted-foreground">as low as</span>
                <div className="text-3xl font-bold text-foreground">MYR70</div>
              </div>
              <CardDescription className="text-sm">
                Essential maintenance for your aircond
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-4 flex-grow">
              <hr className="border-dashed" />
              <ul className="space-y-3 text-sm">
                {basicServices.map((service, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-foreground">{service}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            
            <CardFooter className="mt-auto">
              <Button 
                asChild 
                variant="outline" 
                className="w-full"
              >
                <a
                  href="https://wa.me/60122742875"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book Basic Service
                </a>
              </Button>
            </CardFooter>
          </Card>

          {/* Chemical Service Card - Popular */}
          <Card className="relative flex flex-col hover:shadow-lg transition-all duration-300 border-primary/30">
            <span className="absolute inset-x-0 -top-3 mx-auto flex h-6 w-fit items-center rounded-full bg-gradient-to-r from-primary to-primary/80 px-3 py-1 text-xs font-medium text-primary-foreground ring-1 ring-inset ring-white/20">
              Most Popular
            </span>
            
            <CardHeader className="text-center">
              <CardTitle className="font-semibold text-xl">Chemical Service</CardTitle>
              <div className="my-3">
                <div className="text-3xl font-bold text-primary">MYR130</div>
              </div>
              <CardDescription className="text-sm">
                Deep cleaning with chemical wash
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-4 flex-grow">
              <hr className="border-dashed" />
              <ul className="space-y-3 text-sm">
                {chemicalServices.map((service, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-foreground">{service}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            
            <CardFooter className="mt-auto">
              <Button 
                asChild 
                className="w-full"
              >
                <a
                  href="https://wa.me/60122742875"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book Chemical Service
                </a>
              </Button>
            </CardFooter>
          </Card>

        </div>

        {/* Additional Info */}
        <div className="text-center mt-6">
          <p className="text-muted-foreground text-sm">
            All prices are subject to inspection. Additional charges may apply for complex repairs.
          </p>
        </div>

      </div>
    </section>
  );
};

export default ServiceAreasSection;