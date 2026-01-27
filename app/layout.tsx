import React from "react"
import type { Metadata } from 'next'
import { Outfit, Dosis } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const outfit = Outfit({ subsets: ["latin"], variable: '--font-outfit' });
const dosis = Dosis({ subsets: ["latin"], variable: '--font-dosis' });

export const metadata: Metadata = {
  title: 'Pawsome Adopt',
  description: 'Connecting loving families with pets in need of forever homes. Every adoption saves a life.',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.variable} ${dosis.variable} font-sans antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
