import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import petsRoutes from './routes/pets.js';
import contactRoutes from './routes/contact.js';
import volunteerRoutes from './routes/volunteer.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/pets', petsRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/volunteer', volunteerRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Pawsome Adopt API is running' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
