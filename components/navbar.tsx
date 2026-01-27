"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { PawPrint } from "lucide-react"

export function Navbar() {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/available-pets", label: "Available Pets" },
    { href: "/contact", label: "Contact Us" },
  ]

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <nav className="flex flex-col md:flex-row justify-between items-center px-4 py-4 md:px-8 shadow-md bg-card font-[family-name:var(--font-dosis)]">
      <Link href="/" className="flex items-center gap-2">
        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
          <PawPrint className="w-6 h-6 text-primary-foreground" />
        </div>
      </Link>

      <div className="flex items-center gap-4 md:gap-8 mt-4 md:mt-0">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-base md:text-lg font-bold transition-colors duration-300 hover:text-primary ${
              pathname === link.href ? "text-primary" : "text-foreground"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-4 mt-4 md:mt-0">
        <Link href="/volunteer">
          <button className="bg-primary text-primary-foreground border-none rounded-full px-4 py-3 cursor-pointer text-sm transition-all duration-300 hover:bg-[var(--pawsome-hover)] hover:scale-105">
            Become a volunteer
          </button>
        </Link>
        <button
          onClick={toggleTheme}
          className="text-xl cursor-pointer bg-transparent border-none"
          aria-label="Toggle theme"
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </div>
    </nav>
  )
}
