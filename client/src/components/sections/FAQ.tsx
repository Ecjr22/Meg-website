import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do virtual tutoring sessions work?",
    answer: "Sessions are conducted via video call using a secure platform. Your child will need a computer or tablet with a camera and microphone. I use interactive tools and digital resources to make lessons engaging and effective.",
  },
  {
    question: "Do you specialize in dyslexia support?",
    answer: "Yes! I use evidence-based, structured literacy approaches that are particularly effective for learners with dyslexia. This includes multisensory techniques and Orton-Gillingham based methods.",
  },
  {
    question: "How long is each tutoring session?",
    answer: "Each session is 30 minutes long. This duration is optimal for maintaining focus while allowing for meaningful instruction and practice.",
  },
  {
    question: "What materials will my child need?",
    answer: "I provide all digital materials and resources. For some activities, having paper, pencils, and basic craft supplies on hand can be helpful, but nothing special is required to purchase.",
  },
  {
    question: "How do I schedule sessions?",
    answer: "After your free consultation, we'll work together to find times that fit your family's schedule. I offer flexibility with weekday and some weekend availability.",
  },
  {
    question: "How often will I receive progress updates?",
    answer: "You'll receive formal written progress reports based on your package (1-2+ reports depending on package). I'm also happy to provide informal updates and am available for quick check-ins as needed.",
  },
  {
    question: "What age groups do you work with?",
    answer: "I work primarily with elementary-aged children (grades K-5), but I'm happy to discuss your child's specific needs during our free consultation.",
  },
];

export function FAQ() {
  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground">
            Everything you need to know about working together
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4" data-testid="accordion-faq">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card rounded-xl px-6 border border-border"
              data-testid={`accordion-item-${index}`}
            >
              <AccordionTrigger className="text-left font-medium hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
