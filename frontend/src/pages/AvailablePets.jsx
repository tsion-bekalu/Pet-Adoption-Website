'use client';

import { useState, useEffect } from 'react'
import { Search, Filter, X } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import PetCard from '../components/PetCard'

// Sample data (will be replaced with API call)
const samplePets = [
  {
    id: 1,
    name: "Buddy",
    species: "dog",
    breed: "Golden Retriever",
    age: "3 years",
    gender: "Male",
    description: "Buddy is a friendly and energetic Golden Retriever who loves to play fetch and go on long walks.",
    image: "https://placehold.co/400x300/e9d4ff/8880ff?text=Buddy",
    status: "available"
  },
  {
    id: 2,
    name: "Luna",
    species: "cat",
    breed: "Siamese",
    age: "2 years",
    gender: "Female",
    description: "Luna is a graceful Siamese cat with stunning blue eyes. She enjoys lounging in sunny spots.",
    image: "https://placehold.co/400x300/e9d4ff/8880ff?text=Luna",
    status: "available"
  },
  {
    id: 3,
    name: "Max",
    species: "dog",
    breed: "German Shepherd",
    age: "4 years",
    gender: "Male",
    description: "Max is a loyal and intelligent German Shepherd. He's great with kids and loves outdoor adventures.",
    image: "https://placehold.co/400x300/e9d4ff/8880ff?text=Max",
    status: "available"
  },
  {
    id: 4,
    name: "Whiskers",
    species: "cat",
    breed: "Maine Coon",
    age: "5 years",
    gender: "Male",
    description: "Whiskers is a gentle giant with a fluffy coat. He loves being brushed and cuddling on the couch.",
    image: "https://placehold.co/400x300/e9d4ff/8880ff?text=Whiskers",
    status: "available"
  },
  {
    id: 5,
    name: "Bella",
    species: "dog",
    breed: "Labrador",
    age: "1 year",
    gender: "Female",
    description: "Bella is an enthusiastic puppy who brings joy everywhere she goes. Great for active families.",
    image: "https://placehold.co/400x300/e9d4ff/8880ff?text=Bella",
    status: "available"
  },
  {
    id: 6,
    name: "Oliver",
    species: "cat",
    breed: "British Shorthair",
    age: "3 years",
    gender: "Male",
    description: "Oliver is a calm and affectionate cat who enjoys peaceful environments and gentle pets.",
    image: "https://placehold.co/400x300/e9d4ff/8880ff?text=Oliver",
    status: "available"
  },
  {
    id: 7,
    name: "Coco",
    species: "other",
    breed: "Holland Lop Rabbit",
    age: "1 year",
    gender: "Female",
    description: "Coco is an adorable bunny with floppy ears. She loves fresh vegetables and gentle handling.",
    image: "https://placehold.co/400x300/e9d4ff/8880ff?text=Coco",
    status: "available"
  },
  {
    id: 8,
    name: "Rocky",
    species: "dog",
    breed: "Bulldog",
    age: "6 years",
    gender: "Male",
    description: "Rocky is a laid-back bulldog who prefers relaxing on the couch. Perfect for apartment living.",
    image: "https://placehold.co/400x300/e9d4ff/8880ff?text=Rocky",
    status: "available"
  }
]

const speciesFilters = [
  { value: 'all', label: 'All Pets' },
  { value: 'dog', label: 'Dogs' },
  { value: 'cat', label: 'Cats' },
  { value: 'other', label: 'Other' }
]

function AvailablePets() {
  const [pets, setPets] = useState(samplePets)
  const [filteredPets, setFilteredPets] = useState(samplePets)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedSpecies, setSelectedSpecies] = useState('all')
  const [showAdoptModal, setShowAdoptModal] = useState(false)
  const [selectedPet, setSelectedPet] = useState(null)

  useEffect(() => {
    let result = [...pets]

    // Filter by species
    if (selectedSpecies !== 'all') {
      result = result.filter(pet => pet.species === selectedSpecies)
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(pet =>
        pet.name.toLowerCase().includes(query) ||
        pet.breed.toLowerCase().includes(query) ||
        pet.description.toLowerCase().includes(query)
      )
    }

    setFilteredPets(result)
  }, [pets, selectedSpecies, searchQuery])

  const handleAdopt = (pet) => {
    setSelectedPet(pet)
    setShowAdoptModal(true)
  }

  const handleSubmitAdoption = (e) => {
    e.preventDefault()
    // Here you would submit to the API
    alert('Thank you for your interest! We will contact you soon.')
    setShowAdoptModal(false)
    setSelectedPet(null)
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-lighter via-pawsome-bg to-primary-light dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-pawsome-text dark:text-white mb-4">
            Available <span className="text-primary">Pets</span>
          </h1>
          <p className="text-lg text-pawsome-subtitle dark:text-gray-300 max-w-2xl mx-auto">
            Meet our adorable animals looking for their forever homes. Each one has a unique personality and lots of love to give.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white dark:bg-gray-900 sticky top-16 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-pawsome-subtitle" />
              <input
                type="text"
                placeholder="Search by name, breed..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input-field pl-12"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2"
                >
                  <X className="w-5 h-5 text-pawsome-subtitle hover:text-primary" />
                </button>
              )}
            </div>

            {/* Species Filter */}
            <div className="flex gap-2 flex-wrap justify-center">
              {speciesFilters.map((filter) => (
                <button
                  key={filter.value}
                  onClick={() => setSelectedSpecies(filter.value)}
                  className={`px-4 py-2 rounded-full font-medium transition-all ${
                    selectedSpecies === filter.value
                      ? 'bg-primary text-white'
                      : 'bg-primary-light dark:bg-gray-700 text-pawsome-text dark:text-white hover:bg-primary-lighter dark:hover:bg-gray-600'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pet Grid */}
      <section className="py-12 bg-pawsome-bg dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPets.length > 0 ? (
            <>
              <p className="text-pawsome-subtitle dark:text-gray-400 mb-8">
                Showing {filteredPets.length} pet{filteredPets.length !== 1 ? 's' : ''}
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredPets.map((pet) => (
                  <PetCard key={pet.id} pet={pet} onAdopt={handleAdopt} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <Filter className="w-16 h-16 text-primary/30 mx-auto mb-4" />
              <h3 className="text-xl font-heading font-bold text-pawsome-text dark:text-white mb-2">
                No pets found
              </h3>
              <p className="text-pawsome-subtitle dark:text-gray-400">
                Try adjusting your search or filters to find more pets.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Adoption Modal */}
      {showAdoptModal && selectedPet && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-2xl font-heading font-bold text-pawsome-text dark:text-white">
                  Adopt {selectedPet.name}
                </h2>
                <p className="text-pawsome-subtitle dark:text-gray-400">
                  Fill out this form to start the adoption process
                </p>
              </div>
              <button
                onClick={() => setShowAdoptModal(false)}
                className="p-2 hover:bg-primary-light dark:hover:bg-gray-700 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleSubmitAdoption} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-pawsome-text dark:text-white mb-1">
                  Your Name *
                </label>
                <input type="text" required className="input-field" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-pawsome-text dark:text-white mb-1">
                  Email Address *
                </label>
                <input type="email" required className="input-field" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-pawsome-text dark:text-white mb-1">
                  Phone Number
                </label>
                <input type="tel" className="input-field" placeholder="(555) 123-4567" />
              </div>
              <div>
                <label className="block text-sm font-medium text-pawsome-text dark:text-white mb-1">
                  Why do you want to adopt {selectedPet.name}?
                </label>
                <textarea
                  rows={4}
                  className="input-field resize-none"
                  placeholder="Tell us about yourself and why you'd be a great match..."
                />
              </div>
              <div className="flex gap-4 pt-4">
                <button type="submit" className="btn-primary flex-1">
                  Submit Application
                </button>
                <button
                  type="button"
                  onClick={() => setShowAdoptModal(false)}
                  className="btn-secondary flex-1"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default AvailablePets
