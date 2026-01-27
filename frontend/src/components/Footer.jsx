import { Link } from 'react-router-dom'
import { PawPrint, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react'

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-footer-gradient1 to-footer-gradient2 text-white">
      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Ready to Find Your Perfect Companion?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Every pet deserves a loving home. Start your adoption journey today and change a life forever.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/available-pets" className="btn-primary bg-white text-primary hover:bg-gray-100">
              Browse Pets
            </Link>
            <Link to="/volunteer" className="btn-secondary bg-white/20 text-white hover:bg-white/30">
              Become a Volunteer
            </Link>
          </div>
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <PawPrint className="w-8 h-8" />
              <span className="text-xl font-heading font-bold">
                Pawsome<span className="text-primary-light">Adopt</span>
              </span>
            </Link>
            <p className="text-white/70 mb-4">
              Connecting loving families with pets in need of forever homes since 2015.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-white/70 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-white/70 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/available-pets" className="text-white/70 hover:text-white transition-colors">Available Pets</Link></li>
              <li><Link to="/volunteer" className="text-white/70 hover:text-white transition-colors">Volunteer</Link></li>
              <li><Link to="/contact" className="text-white/70 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2 text-white/70">
              <li>Pet Adoption</li>
              <li>Foster Programs</li>
              <li>Pet Training</li>
              <li>Veterinary Care</li>
              <li>Community Events</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-white/70">123 Pet Haven Lane, Pawsville, CA 90210</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a href="tel:+15551234567" className="text-white/70 hover:text-white transition-colors">(555) 123-4567</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a href="mailto:info@pawsomeadopt.com" className="text-white/70 hover:text-white transition-colors">info@pawsomeadopt.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/60 text-sm">
            <p>&copy; {new Date().getFullYear()} Pawsome Adopt. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
