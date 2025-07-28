import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Code2, User, Briefcase, FileText, MessageCircle, Home } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Inicio", href: "#home", icon: Home },
    { name: "Servicios", href: "#services", icon: Briefcase },
    { name: "Portfolio", href: "#portfolio", icon: Code2 },
    { name: "Sobre mí", href: "#about", icon: User },
    { name: "Blog", href: "#blog", icon: FileText },
    { name: "Contacto", href: "#contact", icon: MessageCircle },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50 shadow-professional-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              DevTech
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors duration-300 hover:bg-primary/10 rounded-lg"
                >
                  {item.name}
                </button>
              ))}
              <Button variant="cta" size="sm" onClick={() => scrollToSection("#contact")}>
                Contáctame
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-b border-border">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="flex items-center gap-3 text-foreground hover:text-primary px-3 py-2 text-base font-medium w-full text-left transition-colors duration-300 hover:bg-primary/10 rounded-lg"
                >
                  <Icon className="h-5 w-5" />
                  {item.name}
                </button>
              );
            })}
            <div className="pt-2">
              <Button 
                variant="cta" 
                className="w-full" 
                onClick={() => scrollToSection("#contact")}
              >
                Contáctame
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;