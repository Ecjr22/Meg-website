import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImage from "@assets/Untitled_design_(5)_1767493515512.png";

const BOOKING_LINK = "https://calendly.com/yourlink";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          <Link href="/" className="flex items-center gap-2 group" data-testid="link-logo">
            <img 
              src={logoImage} 
              alt="Roots & Wings Literacy logo" 
              className="h-10 w-auto transition-transform group-hover:scale-105"
            />
            <span className="font-serif text-lg sm:text-xl font-bold text-foreground">
              roots & wings literacy
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1" data-testid="nav-desktop">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <Button
                  variant="ghost"
                  size="sm"
                  className={location === link.href ? "bg-secondary" : ""}
                  data-testid={`link-nav-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </Button>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a href={BOOKING_LINK} target="_blank" rel="noopener noreferrer" className="hidden sm:block">
              <Button className="bg-blush text-blush-foreground rounded-full" data-testid="button-book-consult-header">
                Book a Free Consult
              </Button>
            </a>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border" data-testid="nav-mobile">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <Button
                    variant="ghost"
                    className={`w-full justify-start ${location === link.href ? "bg-secondary" : ""}`}
                    onClick={() => setMobileMenuOpen(false)}
                    data-testid={`link-nav-mobile-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </Button>
                </Link>
              ))}
              <a href={BOOKING_LINK} target="_blank" rel="noopener noreferrer" className="mt-2">
                <Button className="w-full bg-blush text-blush-foreground rounded-full" data-testid="button-book-consult-mobile">
                  Book a Free Consult
                </Button>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
