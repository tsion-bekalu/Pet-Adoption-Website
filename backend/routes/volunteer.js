import express from 'express';
import { 
  getOpportunities, 
  submitVolunteerApplication,
  getRequirements
} from '../controllers/volunteerController.js';

const router = express.Router();

// GET /api/volunteer/opportunities - Get all volunteer opportunities
router.get('/opportunities', getOpportunities);

// GET /api/volunteer/requirements - Get volunteer requirements
router.get('/requirements', getRequirements);

// POST /api/volunteer/apply - Submit volunteer application
router.post('/apply', submitVolunteerApplication);

export default router;
