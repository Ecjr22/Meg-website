import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LeafIcon, BudIcon, SproutIcon } from "@/components/icons";
import { Flower2 } from "lucide-react";

const packages = [
  {
    name: "Seedling",
    icon: BudIcon,
    sessions: "8 sessions",
    description: "30-minute tutoring sessions + 1 progress report",
  },
  {
    name: "Sprout",
    icon: SproutIcon,
    sessions: "12 sessions",
    description: "30-minute tutoring sessions + progress reports",
  },
  {
    name: "Bloom",
    icon: Flower2,
    sessions: "16 sessions",
    description: "30-minute tutoring sessions + progress reports",
  },
  {
    name: "Wings",
    icon: LeafIcon,
    sessions: "20 sessions",
    description: "30-minute tutoring sessions + progress reports",
    popular: true,
  },
];

export function PricingPreview() {
  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Packages
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose the package that fits your child's learning journey
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg, index) => (
            <Card 
              key={pkg.name} 
              className={`relative hover-elevate transition-all duration-300 ${pkg.popular ? "ring-2 ring-primary" : ""}`}
              data-testid={`card-pricing-${pkg.name.toLowerCase()}`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                    Popular
                  </span>
                </div>
              )}
              <CardHeader className="text-center pb-2">
                <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                  <pkg.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="font-serif text-xl">{pkg.name}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-lg font-semibold text-foreground mb-2">{pkg.sessions}</div>
                <p className="text-muted-foreground text-sm">{pkg.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/pricing">
            <Button className="bg-blush text-blush-foreground rounded-full" data-testid="button-view-pricing">
              View Full Pricing
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
