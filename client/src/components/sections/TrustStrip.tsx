import { Users, Sparkles, Target, Monitor } from "lucide-react";

const trustItems = [
  { icon: Users, label: "1:1" },
  { icon: Sparkles, label: "Play-based" },
  { icon: Target, label: "Personalized" },
  { icon: Monitor, label: "Virtual" },
];

export function TrustStrip() {
  return (
    <section className="py-8 bg-primary/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-12">
          {trustItems.map((item, index) => (
            <div key={item.label} className="flex items-center gap-3">
              <item.icon className="w-5 h-5 text-primary" />
              <span className="font-medium text-foreground" data-testid={`text-trust-${item.label.toLowerCase().replace(/[^a-z0-9]/g, '')}`}>
                {item.label}
              </span>
              {index < trustItems.length - 1 && (
                <span className="hidden sm:block w-1.5 h-1.5 rounded-full bg-primary/30 ml-6" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
