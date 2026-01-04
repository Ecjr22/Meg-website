import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LeafIcon, CheckLeafIcon } from "@/components/icons";
import { OrganicBlob, CornerDecoration } from "@/components/decorative/OrganicShapes";
import { Heart, Star, Award, ArrowRight } from "lucide-react";
import missMegPhoto from "@assets/Virtual_Literacy_Tutoring!_1767490339127.png";

const BOOKING_LINK = "https://calendly.com/yourlink";

const values = [
  {
    icon: Heart,
    title: "Nurturing Approach",
    description: "Every child deserves to feel safe, supported, and encouraged as they learn.",
  },
  {
    icon: Star,
    title: "Research-Based Methods",
    description: "I use proven, evidence-based instructional strategies that really work.",
  },
  {
    icon: Award,
    title: "Individualized Learning",
    description: "No cookie-cutter lessons here - every plan is tailored to your child.",
  },
];

const reasons = [
  "Strong roots in foundational literacy skills give children the confidence to take risks",
  "Play-based, engaging lessons make learning feel like an adventure, not a chore",
  "Virtual sessions mean flexibility for busy families - learn from anywhere",
  "Progress reports keep you informed and involved in your child's journey",
  "A nurturing environment where mistakes are celebrated as part of learning",
];

export default function About() {
  return (
    <Layout>
      <section className="relative py-16 sm:py-20 overflow-hidden">
        <OrganicBlob className="absolute -top-32 -right-32 w-96 h-96" variant="primary" />
        <OrganicBlob className="absolute bottom-0 -left-32 w-80 h-80" variant="blush" />
        <CornerDecoration className="absolute bottom-8 right-8 w-28 h-28 text-primary hidden lg:block" position="bottom-right" />
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              About Miss Meg
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Passionate about helping every child discover the joy of reading
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
            <div className="flex items-center justify-center">
              <div className="relative">
                <img 
                  src={missMegPhoto} 
                  alt="Miss Meg holding a children's book, smiling warmly" 
                  className="w-72 h-72 sm:w-96 sm:h-96 object-cover object-top rounded-2xl shadow-lg"
                  data-testid="img-miss-meg"
                />
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-blush/40 rounded-xl flex items-center justify-center">
                  <LeafIcon className="w-8 h-8 text-primary" />
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-6">
                Hi, I'm Miss Meg!
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a dedicated literacy specialist with a deep passion for helping children build the skills 
                  and confidence they need to become lifelong readers. With years of experience working with 
                  elementary-aged learners, I've seen firsthand how the right support can transform a struggling 
                  reader into a confident one.
                </p>
                <p>
                  I believe that every child can learn to read - they just need instruction that meets them 
                  where they are. That's why I use evidence-based, structured literacy approaches combined 
                  with play-based activities that keep learning fun and engaging.
                </p>
                <p>
                  My specialty is supporting learners with dyslexia and those who need reading intervention. 
                  I use multisensory techniques and Orton-Gillingham based methods that have been proven to 
                  help these learners succeed.
                </p>
                <p>
                  When I'm not tutoring, you can find me reading (of course!), exploring nature, or 
                  planning new ways to make literacy lessons even more engaging for my students.
                </p>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 mb-16">
            {values.map((value, index) => (
              <Card key={value.title} className="text-center" data-testid={`card-value-${index}`}>
                <CardContent className="p-6">
                  <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-card">
            <CardContent className="p-8 sm:p-10">
              <div className="text-center mb-8">
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  Why Roots & Wings?
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  The name says it all - I help children build strong roots in foundational literacy 
                  while giving them the wings to soar with confidence.
                </p>
              </div>

              <ul className="max-w-2xl mx-auto space-y-4">
                {reasons.map((reason, index) => (
                  <li key={index} className="flex items-start gap-3" data-testid={`text-reason-${index}`}>
                    <CheckLeafIcon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{reason}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-6">
              I'd love to learn more about your child and how I can help.
            </p>
            <a href={BOOKING_LINK} target="_blank" rel="noopener noreferrer">
              <Button className="bg-blush text-blush-foreground rounded-full" data-testid="button-about-book-consult">
                Let's Chat
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
