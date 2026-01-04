import { Button } from "@/components/ui/button";
import { SproutIcon } from "@/components/icons";

const BOOKING_LINK = "https://calendly.com/yourlink";

export function Hero() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-card/50 to-background" />
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />
      
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
