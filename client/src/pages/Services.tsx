import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LeafIcon, BudIcon, SproutIcon, CheckLeafIcon } from "@/components/icons";
import { OrganicBlob, CornerDecoration } from "@/components/decorative/OrganicShapes";
import { BookOpen, Pencil, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const services = [
  {
    icon: LeafIcon,
    title: "Dyslexia Support",
    description: "I use structured, multisensory approaches that are proven to help learners with dyslexia. Using Orton-Gillingham based methods, we work systematically through phonemic awareness, phonics, fluency, vocabulary, and comprehension.",
    features: [
      "Multisensory instruction techniques",
      "Systematic phonics approach",
      "Orton-Gillingham based methods",
      "Patience and understanding",
    ],
  },
  {
    icon: BudIcon,
    title: "Foundational Literacy Skills",
    description: "Building a strong foundation is essential for reading success. I focus on the building blocks of literacy including letter recognition, phonemic awareness, and early decoding skills.",
    features: [
      "Letter recognition and formation",
      "Phonemic awareness activities",
      "Beginning decoding strategies",
      "Print awareness concepts",
    ],
  },
  {
    icon: BookOpen,
    title: "Reading Intervention",
    description: "For readers who are struggling to keep up, targeted intervention can make all the difference. I assess where gaps exist and create a personalized plan to help your child catch up and feel confident.",
    features: [
      "Gap analysis and assessment",
      "Targeted skill instruction",
      "Progress monitoring",
      "Building reading stamina",
    ],
  },
  {
    icon: Pencil,
    title: "Spelling & Writing Skills",
    description: "Written expression is a key part of literacy. I help students understand spelling patterns, develop sentence structure, and gain confidence in putting their thoughts on paper.",
    features: [
      "Spelling pattern instruction",
      "Sentence structure practice",
      "Paragraph development",
      "Handwriting support (as needed)",
    ],
  },
  {
    icon: SproutIcon,
    title: "Reading Comprehension",
    description: "Understanding what we read is the ultimate goal. I teach strategies for before, during, and after reading that help students engage deeply with texts and think critically.",
    features: [
      "Visualization strategies",
      "Questioning techniques",
      "Making connections",
      "Summarization skills",
    ],
  },
];

export default function Services() {
  return (
    <Layout>
      <section className="relative py-16 sm:py-20 overflow-hidden">
        <OrganicBlob className="absolute -top-40 -left-32 w-80 h-80" variant="blush" />
        <OrganicBlob className="absolute bottom-20 -right-40 w-72 h-72" variant="primary" />
        <CornerDecoration className="absolute top-8 right-8 w-24 h-24 text-primary hidden lg:block" position="top-right" />
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Services
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Comprehensive literacy support tailored to your child's unique needs and learning style.
            </p>
          </div>

          <div className="space-y-8">
            {services.map((service, index) => (
              <Card key={service.title} className="overflow-hidden" data-testid={`card-service-detail-${index}`}>
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="md:col-span-2 p-6 sm:p-8">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <service.icon className="w-6 h-6 text-primary" />
                        </div>
                        <h2 className="font-serif text-xl sm:text-2xl font-bold text-foreground">
                          {service.title}
                        </h2>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                    <div className="bg-card p-6 sm:p-8 border-l border-border">
                      <h3 className="font-medium text-foreground mb-4">What's included:</h3>
                      <ul className="space-y-3">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <CheckLeafIcon className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-12 bg-primary/5 border-primary/20">
            <CardContent className="p-8">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-6 text-center">
                I Provide:
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
                {[
                  "1:1 Virtual learning",
                  "Multiple sessions/week",
                  "Play-based lessons",
                  "High quality literacy instruction",
                  "Lesson plans individually tailored to your child's interests & needs",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckLeafIcon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-6">
              Not sure which service is right for your child? Let's talk about it.
            </p>
            <Link href="/contact">
              <Button className="bg-blush text-blush-foreground rounded-full" data-testid="button-services-contact">
                Get in Touch
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
