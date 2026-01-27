// Sample pets data (in production, this would come from a database)
const pets = [
  {
    id: 1,
    name: "Buddy",
    species: "dog",
    breed: "Golden Retriever",
    age: "3 years",
    gender: "Male",
    description: "Buddy is a friendly and energetic Golden Retriever who loves to play fetch and go on long walks.",
    image: "/images/pets/buddy.jpg",
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
    image: "/images/pets/luna.jpg",
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
    image: "/images/pets/max.jpg",
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
    image: "/images/pets/whiskers.jpg",
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
    image: "/images/pets/bella.jpg",
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
    image: "/images/pets/oliver.jpg",
    status: "available"
  },
  {
    id: 7,
    name: "Coco",
    species: "rabbit",
    breed: "Holland Lop",
    age: "1 year",
    gender: "Female",
    description: "Coco is an adorable bunny with floppy ears. She loves fresh vegetables and gentle handling.",
    image: "/images/pets/coco.jpg",
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
    image: "/images/pets/rocky.jpg",
    status: "available"
  }
];

// Get all pets with optional filtering
export const getAllPets = (req, res) => {
  try {
    let filteredPets = [...pets];
    const { species, search, status } = req.query;

    if (species && species !== 'all') {
      filteredPets = filteredPets.filter(pet => 
        pet.species.toLowerCase() === species.toLowerCase()
      );
    }

    if (search) {
      const searchLower = search.toLowerCase();
      filteredPets = filteredPets.filter(pet =>
        pet.name.toLowerCase().includes(searchLower) ||
        pet.breed.toLowerCase().includes(searchLower) ||
        pet.description.toLowerCase().includes(searchLower)
      );
    }

    if (status) {
      filteredPets = filteredPets.filter(pet => pet.status === status);
    }

    res.json({
      success: true,
      count: filteredPets.length,
      data: filteredPets
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get single pet by ID
export const getPetById = (req, res) => {
  try {
    const pet = pets.find(p => p.id === parseInt(req.params.id));
    
    if (!pet) {
      return res.status(404).json({ success: false, error: 'Pet not found' });
    }

    res.json({ success: true, data: pet });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Submit adoption application
export const submitAdoptionApplication = (req, res) => {
  try {
    const { petId, name, email, phone, message } = req.body;

    if (!petId || !name || !email) {
      return res.status(400).json({ 
        success: false, 
        error: 'Pet ID, name, and email are required' 
      });
    }

    // In production, save to database and send email notification
    console.log('Adoption application received:', { petId, name, email, phone, message });

    res.json({
      success: true,
      message: 'Adoption application submitted successfully! We will contact you soon.'
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
