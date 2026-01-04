import { Card, CardContent } from "@/components/ui/card";
import { LeafIcon } from "@/components/icons";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Miss Meg has been a game-changer for our daughter. She went from dreading reading time to asking for extra books at bedtime!",
    author: "Sarah M.",
    child: "Parent of 2nd grader",
  },
  {
    quote: "The individualized approach and patience Miss Meg shows is incredible. My son finally feels confident about his reading skills.",
    author: "Michael T.",
    child: "Parent of 3rd grader",
  },
  {
    quote: "We noticed improvement within weeks. The virtual sessions are so convenient, and my daughter looks forward to every lesson.",
    author: "Jennifer L.",
    child: "Parent of 1st grader",
  },
];

export function Testimonials() {
  return (
    <section className="py-16 sm:py-20 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            What Parents Are Saying
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Real stories from families who've seen their children blossom
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative" data-testid={`card-testimonial-${index}`}>
              <CardContent className="p-6">
                <div className="absolute top-4 right-4 opacity-10">
                  <Quote className="w-12 h-12 text-primary" />
                </div>
                <div className="mb-4">
                  <LeafIcon className="w-5 h-5 text-primary" />
                </div>
                <blockquote className="text-foreground mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="border-t border-border pt-4">
                  <p className="font-medium text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.child}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
