import { CTAButton } from "@/components/cta-button"
import { PawPrint, Heart, Users, Star } from "lucide-react"

export function HeroSection() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-4 py-8 lg:px-24 lg:py-4 gap-8 lg:gap-32 max-w-7xl mx-auto font-[family-name:var(--font-dosis)]">
      <div className="flex flex-col gap-6 text-center lg:text-left">
        <h1 className="text-5xl lg:text-7xl font-medium leading-tight text-foreground">
          Looking for a <span className="text-primary">good</span> time?
        </h1>
        <p className="text-lg font-light text-muted-foreground">
          Every pet deserves a loving home and every family deserves the joy of pet companionship. 
          Browse our adorable pets waiting for their forever families and start your journey today!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <CTAButton href="/contact" variant="primary" className="flex items-center gap-2">
            Adopt now
            <PawPrint className="w-4 h-4" />
          </CTAButton>
          <CTAButton href="/about" variant="secondary">
            Learn More
          </CTAButton>
        </div>
        
        {/* Experience Stats */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-8 mt-4">
          <div className="text-center">
            <p className="text-4xl font-medium text-foreground">2K+</p>
            <p className="text-muted-foreground">Pets Adopted</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-medium text-foreground">1.5K+</p>
            <p className="text-muted-foreground">Happy Families</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-medium text-foreground">1K+</p>
            <p className="text-muted-foreground">Positive Reviews</p>
          </div>
        </div>
      </div>
      
      {/* Hero Image Placeholder */}
      <div className="relative w-full lg:w-auto">
        <div className="w-full lg:w-[400px] h-[400px] lg:h-[500px] bg-gradient-to-br from-accent to-secondary rounded-3xl flex items-center justify-center">
          <div className="text-center p-8">
            <div className="flex justify-center gap-4 mb-6">
              <Heart className="w-16 h-16 text-primary animate-pulse" />
              <PawPrint className="w-16 h-16 text-primary" />
            </div>
            <p className="text-xl text-muted-foreground">Your future best friend awaits</p>
          </div>
        </div>
      </div>
    </section>
  )
}
