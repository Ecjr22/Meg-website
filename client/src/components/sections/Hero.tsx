import { Button } from "@/components/ui/button";
import { SproutIcon } from "@/components/icons";
import { OrganicBlob, CornerDecoration } from "@/components/decorative/OrganicShapes";

const BOOKING_LINK = "https://calendly.com/yourlink";

export function Hero() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-card/50 to-background" />
      
      <OrganicBlob className="absolute -top-20 -left-20 w-64 h-64 sm:w-80 sm:h-80" variant="primary" />
      <OrganicBlob className="absolute -bottom-32 -right-20 w-72 h-72 sm:w-96 sm:h-96" variant="blush" />
      <CornerDecoration className="absolute top-4 right-4 w-24 h-24 sm:w-32 sm:h-32 text-primary" position="top-right" />
      <CornerDecoration className="absolute bottom-4 left-4 w-20 h-20 sm:w-28 sm:h-28 text-primary" position="bottom-left" />
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-6">
          <SproutIcon className="w-12 h-12 text-primary" />
        </div>
        
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6 leading-tight">
          Virtual Literacy Tutoring<br className="hidden sm:block" /> with Miss Meg
        </h1>
        
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
          Helping your child build strong reading roots and the confidence to soar. 
          Personalized 1:1 sessions designed to nurture a lifelong love of learning.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={BOOKING_LINK} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-blush text-blush-foreground rounded-full text-lg px-8" data-testid="button-hero-book-consult">
              Book a Free Consult
            </Button>
          </a>
          <a href="/services">
            <Button size="lg" variant="outline" className="rounded-full text-lg px-8" data-testid="button-hero-learn-more">
              Learn More
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
