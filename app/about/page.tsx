import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SectionTitle } from "@/components/section-title"
import { SectionCard } from "@/components/section-card"
import { Heart, Users, Shield, Award, User } from "lucide-react"

const stats = [
  { icon: Heart, value: "2500+", label: "Pets Rescued" },
  { icon: Users, value: "1800+", label: "Happy Families" },
  { icon: Shield, value: "15+", label: "Years of Service" },
  { icon: Award, value: "98%", label: "Success Rate" },
]

const values = [
  {
    title: "Compassion First",
    description: "Every decision we make is guided by compassion for animals and the people who love them.",
  },
  {
    title: "Transparency",
    description: "We believe in honest communication about each pet's history, health, and needs.",
  },
  {
    title: "Community",
    description: "Building a supportive community of pet lovers who help each other thrive.",
  },
]

const team = [
  { initial: "T", name: "Tsion Bekalu", role: "Founder and CEO" },
  { initial: "F", name: "Fayka Kumel", role: "Founder and CEO" },
]

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-muted py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-medium text-foreground mb-4">About Pawsome Adopt</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We&apos;re on a mission to give every pet a loving home and every family the joy of pet companionship
            </p>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <SectionCard key={stat.label} className="text-center">
                <stat.icon className="w-10 h-10 mx-auto mb-4 text-primary" />
                <p className="text-4xl font-bold text-[var(--pawsome-about-h1)] mb-2">{stat.value}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </SectionCard>
            ))}
          </div>
          
          {/* Our Story */}
          <div className="mt-16 bg-card rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-medium text-foreground mb-6">Our Story</h2>
            <div className="text-muted-foreground space-y-4 leading-relaxed">
              <p>
                Founded in 2009, PawsomeAdopt began with a simple yet powerful vision: to create a world where every pet has a loving home and every family experiences the unconditional love of a furry companion.
              </p>
              <p>
                What started as a small shelter in a converted garage has grown into one of the region&apos;s most trusted pet adoption organizations. We&apos;ve helped thousands of pets find their forever homes and supported countless families in their pet parenting journey.
              </p>
              <p>
                Our dedicated team of animal lovers, veterinarians, and volunteers work tirelessly to ensure every pet receives the care, love, and attention they deserve while waiting for their perfect match. We believe that adoption is not just about finding a home for a pet—it&apos;s about creating lifelong bonds and enriching lives.
              </p>
            </div>
          </div>
          
          {/* Our Values */}
          <div className="mt-16">
            <SectionTitle title="Our Values" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {values.map((value) => (
                <SectionCard key={value.title} variant="accent" className="h-full">
                  <h3 className="text-xl font-medium text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </SectionCard>
              ))}
            </div>
          </div>
          
          {/* Meet Our Team */}
          <div className="mt-16">
            <h2 className="text-2xl font-medium text-foreground text-center mb-8">Meet Our Team</h2>
            <div className="flex flex-wrap justify-center gap-12">
              {team.map((member) => (
                <SectionCard key={member.name} className="text-center w-full max-w-[280px]">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary-foreground font-bold text-xl">{member.initial}</span>
                  </div>
                  <h3 className="text-lg font-medium text-foreground">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </SectionCard>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
