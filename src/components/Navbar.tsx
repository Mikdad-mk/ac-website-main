'use client'

import { useState } from "react";
import { Menu, X, Snowflake } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <Snowflake className="w-7 h-7 text-primary transition-transform duration-500 group-hover:rotate-180" />
            <span className="text-lg lg:text-xl font-bold text-foreground">CoolAir</span>
          </a>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm lg:text-base font-medium relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              variant="hero"
              size="sm"
              className="px-4 lg:px-6 py-2 lg:py-3 text-sm lg:text-base font-semibold"
              asChild
            >
              <a
                href="https://wa.me/60122742875"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact us
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-16 lg:top-18 left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border animate-fade-up shadow-lg">
            <div className="container py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-foreground hover:text-primary transition-colors py-2 text-sm font-medium border-b border-border/50 last:border-b-0"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3">
                <Button
                  variant="hero"
                  className="w-full py-3 text-sm font-semibold"
                  size="default"
                  asChild
                >
                  <a
                    href="https://wa.me/60122742875"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Contact us
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
