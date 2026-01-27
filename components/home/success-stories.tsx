import { SectionTitle } from "@/components/section-title"
import { User } from "lucide-react"

const stories = [
  {
    name: "Sarah & Max",
    breed: "Golden Retriever",
    quote: "Max has brought so much joy to our family. He's the perfect companion!",
    image: "/placeholder-dog-1.jpg",
  },
  {
    name: "John & Luna",
    breed: "Domestic Shorthair",
    quote: "Luna is the sweetest cat. She's made our house a home with her cuddles.",
    image: "/placeholder-cat-1.jpg",
  },
  {
    name: "Emily & Charlie",
    breed: "Mixed Breed",
    quote: "Charlie is amazing with our kids. Best decision we ever made!",
    image: "/placeholder-dog-2.jpg",
  },
]

export function SuccessStories() {
  return (
    <section className="bg-secondary py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Success Stories"
          subtitle="See how adoption changed lives for the better"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {stories.map((story) => (
            <div
              key={story.name}
              className="bg-card rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="h-64 bg-accent flex items-center justify-center">
                <User className="w-24 h-24 text-muted-foreground" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-1">{story.name}</h3>
                <p className="text-primary mb-4">{story.breed}</p>
                <p className="text-muted-foreground italic leading-relaxed">"{story.quote}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
