import { SectionTitle } from "@/components/section-title";
import { SectionCard } from "@/components/section-card";
import { Heart, Settings, Shield, Headphones } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Loving care",
    description:
      "All pets are well-cared for, vaccinated, and ready for their forever families.",
  },
  {
    icon: Settings,
    title: "Easy Process",
    description: "Simple adoption process with guidance every step of the way.",
  },
  {
    icon: Shield,
    title: "Health Guaranteed",
    description: "Complete health checks and medical records for every pet.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "We're here for you and your pet long after adoption.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-secondary py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Why Choose Us"
          subtitle="We make pet adoption simple, safe, and joyful"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {features.map((feature) => (
            <SectionCard key={feature.title} className="text-center h-full">
              <div className="w-10 h-10 mx-auto mb-4">
                <feature.icon className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-medium text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </SectionCard>
          ))}
        </div>
      </div>
    </section>
  );
}
