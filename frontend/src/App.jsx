import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import AvailablePets from './pages/AvailablePets'
import Contact from './pages/Contact'
import Volunteer from './pages/Volunteer'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/available-pets" element={<AvailablePets />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/volunteer" element={<Volunteer />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
