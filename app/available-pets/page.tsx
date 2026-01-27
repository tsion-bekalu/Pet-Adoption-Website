"use client"

import { useState, useMemo } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SectionTitle } from "@/components/section-title"
import { CTAButton } from "@/components/cta-button"
import { Dog, Cat, Calendar } from "lucide-react"

const pets = [
  {
    id: 1,
    name: "Charlie",
    breed: "Beagle",
    description: "Friendly and energetic, loves to play fetch!",
    age: "1 year",
    tags: ["dog", "beagle", "young", "friendly", "energetic"],
  },
  {
    id: 2,
    name: "Max",
    breed: "Border Collie",
    description: "Active and adventurous, perfect hiking companion!",
    age: "3 years",
    tags: ["dog", "border collie", "adult", "active", "adventurous"],
  },
  {
    id: 3,
    name: "Rocky",
    breed: "Mixed breed",
    description: "Playful kitten with lots of love to give!",
    age: "3 months",
    tags: ["cat", "mixed breed", "kitten", "playful"],
  },
  {
    id: 4,
    name: "Luna",
    breed: "Scottish Fold",
    description: "Calm and gentle, loves quiet afternoons by the window.",
    age: "2 years",
    tags: ["cat", "scottish fold", "young", "calm"],
  },
  {
    id: 5,
    name: "Bella",
    breed: "Highlander",
    description: "Sweet and cuddly, perfect lap cat for cozy evenings.",
    age: "3 years",
    tags: ["cat", "highlander", "adult", "sweet"],
  },
  {
    id: 6,
    name: "Milo",
    breed: "Golden Retriever",
    description: "Loyal companion, great with kids and other pets.",
    age: "4 years",
    tags: ["dog", "golden retriever", "adult", "loyal"],
  },
]

const filterOptions = [
  { label: "All Pets", value: "all" },
  { label: "Dogs", value: "dog" },
  { label: "Cats", value: "cat" },
  { label: "Beagle", value: "beagle" },
  { label: "Border Collie", value: "border collie" },
  { label: "Mixed Breed", value: "mixed breed" },
  { label: "Scottish Fold", value: "scottish fold" },
  { label: "Highlander", value: "highlander" },
  { label: "Golden Retriever", value: "golden retriever" },
  { label: "Under 1 year", value: "kitten" },
  { label: "1-3 years", value: "young" },
  { label: "3-5 years", value: "adult" },
]

export default function AvailablePetsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeFilter, setActiveFilter] = useState("all")

  const filteredPets = useMemo(() => {
    return pets.filter((pet) => {
      const matchesSearch = searchTerm === "" || 
        pet.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pet.breed.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pet.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pet.tags.some(tag => tag.includes(searchTerm.toLowerCase()))

      const matchesFilter = activeFilter === "all" || 
        pet.tags.some(tag => tag.includes(activeFilter.toLowerCase()))

      return matchesSearch && matchesFilter
    })
  }, [searchTerm, activeFilter])

  return (
    <main>
      <Navbar />
      
      <section className="py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Available Pets"
            subtitle="Meet your new friends"
          />
          
          {/* Search and Filter */}
          <div className="mt-8 flex flex-col items-center gap-6">
            <input
              type="text"
              placeholder="Search by name, breed, or description..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full max-w-3xl px-6 py-4 text-lg bg-input text-foreground border-2 border-accent rounded-full outline-none transition-all duration-300 focus:border-primary focus:shadow-lg"
            />
            
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl">
              {filterOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setActiveFilter(option.value)}
                  className={`px-5 py-2 text-sm font-medium rounded-full border transition-all duration-300 cursor-pointer ${
                    activeFilter === option.value
                      ? "bg-primary text-primary-foreground border-primary shadow-lg"
                      : "bg-secondary text-foreground border-accent hover:bg-accent hover:-translate-y-0.5"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
          
          {/* No Results */}
          {filteredPets.length === 0 && (
            <div className="text-center mt-12 p-10 bg-accent border border-dashed border-primary rounded-2xl max-w-xl mx-auto">
              <p className="text-foreground font-medium">No pets found matching your search. Try different keywords!</p>
            </div>
          )}
          
          {/* Pet Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {filteredPets.map((pet) => (
              <div
                key={pet.id}
                className="bg-card rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="h-64 bg-accent flex items-center justify-center">
                  {pet.tags.includes("dog") ? (
                    <Dog className="w-24 h-24 text-primary" />
                  ) : (
                    <Cat className="w-24 h-24 text-primary" />
                  )}
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-medium text-foreground mb-1">{pet.name}</h3>
                  <p className="text-muted-foreground mb-2">{pet.breed}</p>
                  <p className="text-muted-foreground mb-2">{pet.description}</p>
                  <p className="text-muted-foreground mb-4 flex items-center justify-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {pet.age}
                  </p>
                  <CTAButton href="/contact" variant="gradient" className="w-full">
                    Meet {pet.name}
                  </CTAButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
