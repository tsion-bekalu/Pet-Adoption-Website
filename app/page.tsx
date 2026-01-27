import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { WhyChooseUs } from "@/components/home/why-choose-us"
import { HowAdoptionWorks } from "@/components/home/how-adoption-works"
import { SuccessStories } from "@/components/home/success-stories"

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <WhyChooseUs />
      <HowAdoptionWorks />
      <SuccessStories />
      <Footer />
    </main>
  )
}
