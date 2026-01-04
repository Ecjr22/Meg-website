import { Link } from "wouter";
import { BookSproutIcon, BranchIcon } from "@/components/icons";
import { Mail, MapPin } from "lucide-react";

const BOOKING_LINK = "https://calendly.com/yourlink";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-primary mb-8">
          <BranchIcon className="w-full h-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <BookSproutIcon className="w-7 h-7 text-primary" />
              <span className="font-serif text-lg font-bold text-foreground">
                roots & wings literacy
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Nurturing confident readers, one child at a time. 
              Virtual literacy tutoring that grows with your learner.
            </p>
          </div>

          <div>
            <h4 className="font-serif font-bold text-foreground mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link href="/services" className="text-muted-foreground hover:text-foreground text-sm transition-colors" data-testid="link-footer-services">
                Services
              </Link>
              <Link href="/pricing" className="text-muted-foreground hover:text-foreground text-sm transition-colors" data-testid="link-footer-pricing">
                Pricing
              </Link>
              <Link href="/about" className="text-muted-foreground hover:text-foreground text-sm transition-colors" data-testid="link-footer-about">
                About Miss Meg
              </Link>
              <Link href="/contact" className="text-muted-foreground hover:text-foreground text-sm transition-colors" data-testid="link-footer-contact">
                Contact
              </Link>
              <a 
                href={BOOKING_LINK} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-primary hover:text-primary/80 text-sm font-medium transition-colors"
                data-testid="link-footer-booking"
              >
                Book a Free Consult
              </a>
            </nav>
          </div>

          <div>
            <h4 className="font-serif font-bold text-foreground mb-4">Contact</h4>
            <div className="flex flex-col gap-3">
              <a 
                href="mailto:hello@rootsandwingsliteracy.com" 
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm transition-colors"
                data-testid="link-footer-email"
              >
                <Mail className="w-4 h-4" />
                hello@rootsandwingsliteracy.com
              </a>
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4" />
                Virtual Sessions Nationwide
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} Roots & Wings Literacy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
