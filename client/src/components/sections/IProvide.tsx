import { CheckLeafIcon } from "@/components/icons";

const features = [
  "1:1 Virtual learning",
  "Multiple sessions/week",
  "Play-based lessons",
  "High quality literacy instruction",
  "Lesson plans individually tailored to your child's interests & needs",
];

export function IProvide() {
  return (
    <section className="py-16 sm:py-20 bg-card">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            What I Provide
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Every session is designed with your child in mind
          </p>
        </div>

        <div className="bg-background rounded-2xl p-8 sm:p-10 border border-border">
          <ul className="space-y-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3" data-testid={`text-feature-${index}`}>
                <CheckLeafIcon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
