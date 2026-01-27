import { cn } from "@/lib/utils"

interface SectionTitleProps {
  title: string
  subtitle?: string
  className?: string
  centered?: boolean
}

export function SectionTitle({ title, subtitle, className, centered = true }: SectionTitleProps) {
  return (
    <div className={cn(centered && "text-center", className)}>
      <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-4">{title}</h2>
      {subtitle && (
        <p className="text-lg font-light text-muted-foreground">{subtitle}</p>
      )}
    </div>
  )
}
