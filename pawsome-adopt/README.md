# Pawsome Adopt

A full-stack pet adoption platform built with Vite + React (frontend) and Node.js + Express (backend).

## Project Structure

```
pawsome-adopt/
├── frontend/           # Vite + React frontend
│   ├── src/
│   │   ├── components/ # Reusable UI components
│   │   ├── pages/      # Page components
│   │   ├── context/    # React context providers
│   │   ├── services/   # API service functions
│   │   └── ...
│   └── ...
├── backend/            # Node.js + Express backend
│   ├── controllers/    # Route controllers
│   ├── routes/         # API routes
│   └── server.js       # Express server entry
└── package.json        # Root package.json for running both
```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone or download the project

2. Install all dependencies:
```bash
npm run install:all
```

### Running in Development

Run both frontend and backend concurrently:
```bash
npm run dev
```

Or run them separately:

**Frontend (Vite):**
```bash
cd frontend
npm run dev
```
Frontend runs at: http://localhost:3000

**Backend (Express):**
```bash
cd backend
npm run dev
```
Backend runs at: http://localhost:5000

### Building for Production

```bash
npm run build
```

This builds the frontend. The backend can be started with:
```bash
npm start
```

## API Endpoints

### Pets
- `GET /api/pets` - Get all pets (with optional filters: species, search, status)
- `GET /api/pets/:id` - Get single pet by ID
- `POST /api/pets/adopt` - Submit adoption application

### Contact
- `GET /api/contact/info` - Get contact information
- `POST /api/contact` - Submit contact form

### Volunteer
- `GET /api/volunteer/opportunities` - Get volunteer opportunities
- `GET /api/volunteer/requirements` - Get volunteer requirements
- `POST /api/volunteer/apply` - Submit volunteer application

## Features

- Browse available pets with search and filter
- Submit adoption applications
- Contact form with validation
- Volunteer application system
- Dark/Light theme toggle
- Fully responsive design
- React Router for navigation
- Tailwind CSS for styling

## Technologies

**Frontend:**
- React 18
- Vite
- React Router DOM
- Tailwind CSS
- Lucide React (icons)

**Backend:**
- Node.js
- Express.js
- CORS
- dotenv
