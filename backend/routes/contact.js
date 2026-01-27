import express from 'express';
import { 
  submitContactForm, 
  getContactInfo 
} from '../controllers/contactController.js';

const router = express.Router();

// GET /api/contact/info - Get contact information
router.get('/info', getContactInfo);

// POST /api/contact - Submit contact form
router.post('/', submitContactForm);

export default router;
