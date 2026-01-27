import { SectionTitle } from "@/components/section-title";
import { SectionCard } from "@/components/section-card";

const steps = [
  {
    number: "01",
    title: "Browse Pets",
    description:
      "Explore our available pets and find the one that matches your lifestyle.",
  },
  {
    number: "02",
    title: "Meet & Greet",
    description:
      "Schedule a visit to meet your potential new family member in person.",
  },
  {
    number: "03",
    title: "Application",
    description:
      "Fill out our simple adoption application and provide necessary information.",
  },
  {
    number: "04",
    title: "Welcome Home",
    description: "Complete the process and bring your new companion home!",
  },
];

export function HowAdoptionWorks() {
  return (
    <section className="py-16 px-4 md:px-8 bg-card">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="How adoption Work?"
          subtitle="Simple steps to find your perfect companion"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {steps.map((step) => (
            <SectionCard
              key={step.number}
              variant="muted"
              className="text-center h-full"
            >
              <p className="text-4xl font-medium text-primary mb-4">
                {step.number}
              </p>
              <h3 className="text-2xl font-medium text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground">{step.description}</p>
            </SectionCard>
          ))}
        </div>
      </div>
    </section>
  );
}
