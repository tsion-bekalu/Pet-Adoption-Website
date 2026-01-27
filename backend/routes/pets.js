import express from 'express';
import { 
  getAllPets, 
  getPetById, 
  submitAdoptionApplication 
} from '../controllers/petsController.js';

const router = express.Router();

// GET /api/pets - Get all pets with optional filtering
router.get('/', getAllPets);

// GET /api/pets/:id - Get single pet by ID
router.get('/:id', getPetById);

// POST /api/pets/adopt - Submit adoption application
router.post('/adopt', submitAdoptionApplication);

export default router;
