import Link from "next/link"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface CTAButtonProps {
  href: string
  children: ReactNode
  variant?: "primary" | "secondary" | "gradient"
  className?: string
}

export function CTAButton({ href, children, variant = "primary", className }: CTAButtonProps) {
  const variantClasses = {
    primary: "bg-primary text-primary-foreground hover:bg-[var(--pawsome-hover)]",
    secondary: "border border-primary bg-card text-primary hover:bg-primary hover:text-primary-foreground",
    gradient: "bg-gradient-to-r from-[#c27aff] to-[#9810fa] text-white hover:opacity-90",
  }

  return (
    <Link href={href}>
      <button
        className={cn(
          "border-none rounded-full px-6 py-3 cursor-pointer text-sm transition-all duration-300 hover:scale-105",
          variantClasses[variant],
          className
        )}
      >
        {children}
      </button>
    </Link>
  )
}
