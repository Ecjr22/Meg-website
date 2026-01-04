import { Button } from "@/components/ui/button";
import { SproutIcon } from "@/components/icons";
import { TornPaperDivider, OrganicBlob } from "@/components/decorative/OrganicShapes";

const BOOKING_LINK = "https://calendly.com/yourlink";

export function CTABanner() {
  return (
    <div className="relative">
      <TornPaperDivider className="text-primary -mb-1 relative z-10" />
      <section className="relative py-16 sm:py-20 bg-primary text-primary-foreground overflow-hidden">
        <OrganicBlob className="absolute -top-20 -right-20 w-64 h-64 opacity-10" variant="muted" />
        <OrganicBlob className="absolute -bottom-20 -left-20 w-56 h-56 opacity-10" variant="muted" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SproutIcon className="w-10 h-10 mx-auto mb-6 opacity-80" />
        <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
          Ready to Help Your Child Flourish?
        </h2>
        <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8 text-lg">
          Let's chat about your child's unique needs and how I can support their literacy journey.
        </p>
        <a href={BOOKING_LINK} target="_blank" rel="noopener noreferrer">
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-white/90 rounded-full text-lg px-8"
            data-testid="button-cta-book-consult"
          >
            Book Your Free Consultation
          </Button>
        </a>
        </div>
      </section>
      <TornPaperDivider className="text-primary -mt-1 relative z-10" flip />
    </div>
  );
}
