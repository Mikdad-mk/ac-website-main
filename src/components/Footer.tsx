import { Snowflake } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const menuLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Service Areas", href: "#service-areas" },
    { name: "Blog", href: "#" },
    { name: "Shop", href: "#" },
  ];



  return (
    <footer className="bg-card border-t border-border py-12 lg:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8 lg:mb-12">

          {/* Brand Section */}
          <div>
            <a href="#home" className="inline-flex items-center gap-2 mb-4 group">
              <Snowflake className="w-6 h-6 text-primary transition-transform duration-500 group-hover:rotate-180" />
              <span className="text-xl font-semibold text-foreground">CoolAir</span>
            </a>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            {/* Social Icons */}
            <div className="flex gap-2">
              {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                >
                  <span className="text-xs font-bold">{social[0].toUpperCase()}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Menu Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Menu</h4>
            <ul className="space-y-3">
              {menuLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        

          {/* Subscribe */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Subscribe for our newsletter</h4>
            <div className="space-y-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 text-sm border border-border rounded-l-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
                <Button
                  size="sm"
                  className="rounded-l-none px-4"
                  asChild
                >
                  <a
                    href="https://wa.me/60122742875"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Subscribe
                  </a>
                </Button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            Copyright © CoolAir | Designed by <span className="text-primary">Hibal Team</span> 
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;