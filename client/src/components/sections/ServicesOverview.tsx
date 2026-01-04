import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LeafIcon, BudIcon, SproutIcon } from "@/components/icons";
import { BookOpen, Pencil } from "lucide-react";

const services = [
  {
    icon: LeafIcon,
    title: "Dyslexia Support",
    description: "Specialized instruction using evidence-based approaches for learners with dyslexia.",
  },
  {
    icon: BudIcon,
    title: "Foundational Literacy",
    description: "Building strong phonemic awareness and decoding skills from the ground up.",
  },
  {
    icon: BookOpen,
    title: "Reading Intervention",
    description: "Targeted support for struggling readers to close gaps and build confidence.",
  },
  {
    icon: Pencil,
    title: "Spelling & Writing",
    description: "Developing written expression skills through structured, multisensory methods.",
  },
  {
    icon: SproutIcon,
    title: "Comprehension",
    description: "Strengthening understanding and critical thinking through engaging activities.",
  },
];

export function ServicesOverview() {
  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            How I Can Help
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Every child's literacy journey is unique. I offer specialized support in these key areas:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={service.title} className="hover-elevate transition-all duration-300" data-testid={`card-service-${index}`}>
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-bold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/services">
            <Button variant="outline" className="rounded-full" data-testid="button-view-all-services">
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
