import Link from "next/link"
import { PawPrint, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="px-4 py-12 md:px-8 bg-gradient-to-br from-[var(--footer-gradient1)] via-[var(--footer-gradient2)] to-[var(--footer-gradient1)] text-[#e9d4ff]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {/* Logo and Description */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 bg-[#e9d4ff] rounded-full flex items-center justify-center">
              <PawPrint className="w-5 h-5 text-[var(--footer-gradient1)]" />
            </div>
            <h2 className="text-white font-medium text-xl">Pawsome Adopt</h2>
          </div>
          <p className="text-[#e9d4ff] text-lg font-light">
            Connecting loving families with pets in need of forever homes. Every adoption saves a life.
          </p>
          <div className="flex gap-4 mt-4">
            <Facebook className="w-5 h-5 cursor-pointer hover:text-primary transition-colors" />
            <Twitter className="w-5 h-5 cursor-pointer hover:text-primary transition-colors" />
            <Linkedin className="w-5 h-5 cursor-pointer hover:text-primary transition-colors" />
            <Instagram className="w-5 h-5 cursor-pointer hover:text-primary transition-colors" />
          </div>
        </div>

        {/* Quick Links */}
        <div className="md:mx-auto">
          <h3 className="text-white font-normal text-lg mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li>
              <Link href="/" className="text-[#e9d4ff] hover:text-primary transition-colors">Home</Link>
            </li>
            <li>
              <Link href="/about" className="text-[#e9d4ff] hover:text-primary transition-colors">About</Link>
            </li>
            <li>
              <Link href="/available-pets" className="text-[#e9d4ff] hover:text-primary transition-colors">Available Pets</Link>
            </li>
            <li>
              <Link href="/contact" className="text-[#e9d4ff] hover:text-primary transition-colors">Contact Us</Link>
            </li>
            <li>
              <Link href="/volunteer" className="text-[#e9d4ff] hover:text-primary transition-colors">Become a volunteer</Link>
            </li>
          </ul>
        </div>

        {/* Contact Options */}
        <div>
          <h3 className="text-white font-normal text-lg mb-4">Contact Us</h3>
          <div className="space-y-3 text-[#e9d4ff]">
            <p>📍 123 Pet Adoption Street, Addis Ababa</p>
            <p>📞 09-12-34-56-78</p>
            <p>💌 info@pawsomeadopt.com</p>
          </div>
        </div>

        {/* CTA Card */}
        <div className="text-center bg-card rounded-2xl p-4 text-primary">
          <h3 className="text-primary font-normal text-xl mb-2">Ready to change a Life?</h3>
          <p className="text-sm text-primary mb-4">
            Start your journey today and give a pet the loving home they deserve. Together, we can make a difference!
          </p>
          <div className="flex flex-col sm:flex-row gap-2 justify-center">
            <Link href="/available-pets">
              <button className="bg-primary text-primary-foreground border-none rounded-full px-4 py-3 cursor-pointer text-sm transition-all duration-300 hover:bg-[var(--pawsome-hover)] hover:scale-105">
                Browse Pets
              </button>
            </Link>
            <Link href="/volunteer">
              <button className="border border-primary bg-card text-primary rounded-full px-4 py-3 cursor-pointer text-sm transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-105">
                Become a volunteer
              </button>
            </Link>
          </div>
        </div>
      </div>

      <hr className="my-8 border-[#e9d4ff] opacity-50" />

      <div className="text-right text-sm text-[#e9d4ff]">
        <p>Made with ❤️ for animals in need</p>
        <p>©2025 PawsomeAdopt. All rights reserved.</p>
      </div>
    </footer>
  )
}
