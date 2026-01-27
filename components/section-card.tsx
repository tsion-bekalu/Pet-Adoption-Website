import React from "react";

interface SectionCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "muted";
}

export function SectionCard({
  children,
  className = "",
  variant = "default",
}: SectionCardProps) {
  // This logic handles that "variant" prop you had earlier!
  const variantStyles = {
    default: "bg-white border-slate-100 shadow-sm",
    muted: "bg-slate-50 border-transparent",
  };

  return (
    <div
      className={`
        p-8 rounded-2xl border transition-all duration-200 
        ${variantStyles[variant]} 
        ${className}
      `}
    >
      {children}
    </div>
  );
}
