import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RootsIcon, BudIcon, SproutIcon, FlowerIcon, ButterflyIcon, LeafIcon, CheckLeafIcon } from "@/components/icons";
import { OrganicBlob, CornerDecoration } from "@/components/decorative/OrganicShapes";
import { ArrowRight } from "lucide-react";

const packages = [
  {
    name: "Roots Assessment",
    icon: RootsIcon,
    description: "A comprehensive starting point",
    details: [
      "30-minute assessment session",
      "Written assessment report",
      "Personalized recommendations",
    ],
    highlighted: false,
  },
  {
    name: "Seedling",
    icon: BudIcon,
    description: "Perfect for getting started",
    details: [
      "8 thirty-minute tutoring sessions",
      "1 progress report",
      "Personalized lesson plans",
    ],
    highlighted: false,
  },
  {
    name: "Sprout",
    icon: SproutIcon,
    description: "Building momentum",
    details: [
      "12 thirty-minute tutoring sessions",
      "Progress reports",
      "Personalized lesson plans",
    ],
    highlighted: false,
  },
  {
    name: "Bloom",
    icon: FlowerIcon,
    description: "Comprehensive support",
    details: [
      "16 thirty-minute tutoring sessions",
      "Progress reports",
      "Personalized lesson plans",
    ],
    highlighted: true,
  },
  {
    name: "Wings",
    icon: ButterflyIcon,
    description: "Our most comprehensive package",
    details: [
      "20 thirty-minute tutoring sessions",
      "Progress reports",
      "Personalized lesson plans",
    ],
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <Layout>
      <section className="relative py-16 sm:py-20 overflow-hidden">
        <OrganicBlob className="absolute -top-32 -right-32 w-80 h-80" variant="primary" />
        <OrganicBlob className="absolute top-1/2 -left-40 w-72 h-72" variant="blush" />
        <CornerDecoration className="absolute top-8 left-8 w-24 h-24 text-primary hidden lg:block" position="top-left" />
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Pricing & Packages
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Flexible packages designed to support your child's literacy journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {packages.map((pkg, index) => (
              <Card 
                key={pkg.name} 
                className={`relative ${pkg.highlighted ? "ring-2 ring-primary" : ""}`}
                data-testid={`card-pricing-${pkg.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {pkg.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <div className="w-14 h-14 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <pkg.icon className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="font-serif text-xl">{pkg.name}</CardTitle>
                  <p className="text-muted-foreground text-sm">{pkg.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {pkg.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <CheckLeafIcon className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-card/50">
            <CardContent className="p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <LeafIcon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-foreground mb-2">A Note on Pricing</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Prices reflect the sessions with your learner as well as the time and effort that goes into 
                    creating individualized resources and planning engaging, effective, and FUN lessons! 
                    Every session is carefully prepared to meet your child exactly where they are.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-6">
              Ready to get started? Let's find the right package for your child.
            </p>
            <a href="/contact">
              <Button className="bg-blush text-blush-foreground rounded-full" data-testid="button-pricing-contact">
                Get in Touch
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
