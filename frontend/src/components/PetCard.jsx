'use client';

import { Heart } from 'lucide-react'

function PetCard({ pet, onAdopt }) {
  return (
    <div className="card group overflow-hidden">
      <div className="relative overflow-hidden rounded-xl mb-4">
        <img
          src={pet.image || `https://placehold.co/400x300/e9d4ff/8880ff?text=${pet.name}`}
          alt={pet.name}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <span className="absolute top-3 right-3 bg-primary text-white text-xs px-3 py-1 rounded-full">
          {pet.status === 'available' ? 'Available' : pet.status}
        </span>
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-heading font-bold text-pawsome-text dark:text-white">
            {pet.name}
          </h3>
          <button 
            className="p-2 rounded-full hover:bg-primary-light dark:hover:bg-gray-700 transition-colors"
            aria-label="Add to favorites"
          >
            <Heart className="w-5 h-5 text-primary" />
          </button>
        </div>
        
        <p className="text-sm text-pawsome-subtitle dark:text-gray-400">
          {pet.breed} &bull; {pet.age} &bull; {pet.gender}
        </p>
        
        <p className="text-sm text-pawsome-subtitle dark:text-gray-400 line-clamp-2">
          {pet.description}
        </p>
        
        <button
          onClick={() => onAdopt?.(pet)}
          className="btn-primary w-full mt-4"
        >
          Adopt Me
        </button>
      </div>
    </div>
  )
}

export default PetCard
