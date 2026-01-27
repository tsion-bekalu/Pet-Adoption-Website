"use client"

import React from "react"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SectionTitle } from "@/components/section-title"
import { MapPin, Phone, Mail, Clock, AlertTriangle } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fname: "",
    email: "",
    phone: "",
    date: "",
    time: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (formData.fname.trim().length < 2) {
      newErrors.fname = "First name must be at least 2 characters."
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/
    if (!emailPattern.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address."
    }

    const phonePattern = /^[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}$/
    if (!phonePattern.test(formData.phone.trim())) {
      newErrors.phone = "Phone number must follow the format 09-12-34-56-78."
    }

    if (!formData.date.trim()) {
      newErrors.date = "Please select a preferred date."
    }

    if (!formData.time.trim()) {
      newErrors.time = "Please select a preferred time."
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      setSubmitted(true)
      setFormData({ fname: "", email: "", phone: "", date: "", time: "" })
    }
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      lines: ["123 Pet Adoption Street,", "Addis Ababa"],
    },
    {
      icon: Phone,
      title: "Call Us",
      lines: ["09-12-34-56-78", "09-23-45-67-89"],
    },
    {
      icon: Mail,
      title: "Email Us",
      lines: ["info@Pawsomeadopt.com", "support@Pawsomeadopt.com"],
    },
    {
      icon: Clock,
      title: "Hours",
      lines: ["Monday-Friday: 9am-6pm", "Saturday: 10am-4pm", "Sunday: Closed"],
    },
  ]

  return (
    <main>
      <Navbar />
      
      <section className="bg-muted py-12 px-4 md:px-8 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Get In Touch"
            subtitle="We'd love to hear from you! Reach out with any questions."
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
            {/* Contact Form */}
            <div className="bg-card rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-medium text-foreground mb-6">Schedule Your Pet Visit</h2>
              
              {submitted ? (
                <div className="text-center py-8">
                  <p className="text-lg text-primary font-medium">Thank you for scheduling a visit! We&apos;ll contact you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="fname" className="block text-muted-foreground mb-1">First name:</label>
                    <input
                      type="text"
                      id="fname"
                      name="fname"
                      placeholder="John"
                      value={formData.fname}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-foreground bg-input text-foreground outline-none focus:border-primary transition-colors"
                    />
                    {errors.fname && <p className="text-destructive text-sm mt-1">{errors.fname}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-muted-foreground mb-1">Email:</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="abc@gmail.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-foreground bg-input text-foreground outline-none focus:border-primary transition-colors"
                    />
                    {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-muted-foreground mb-1">Phone Number:</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="09-12-34-56-78"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-foreground bg-input text-foreground outline-none focus:border-primary transition-colors"
                    />
                    {errors.phone && <p className="text-destructive text-sm mt-1">{errors.phone}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="date" className="block text-muted-foreground mb-1">Preferred Date:</label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full px-4 py-3 rounded-xl border border-foreground bg-input text-foreground outline-none focus:border-primary transition-colors"
                    />
                    {errors.date && <p className="text-destructive text-sm mt-1">{errors.date}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="time" className="block text-muted-foreground mb-1">Preferred Time:</label>
                    <input
                      type="time"
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-foreground bg-input text-foreground outline-none focus:border-primary transition-colors"
                    />
                    {errors.time && <p className="text-destructive text-sm mt-1">{errors.time}</p>}
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground border-none rounded-full px-6 py-4 cursor-pointer text-base transition-all duration-300 hover:bg-[var(--pawsome-hover)] hover:scale-[1.02]"
                  >
                    Submit
                  </button>
                </form>
              )}
            </div>
            
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-card rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-medium text-foreground mb-6">Contact Information</h2>
                <div className="space-y-6">
                  {contactInfo.map((info) => (
                    <div key={info.title} className="flex items-start gap-4">
                      <info.icon className="w-10 h-10 text-primary flex-shrink-0" />
                      <div>
                        <p className="font-medium text-foreground">{info.title}</p>
                        {info.lines.map((line, index) => (
                          <p key={index} className="text-muted-foreground">{line}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Emergency */}
              <div className="bg-primary rounded-2xl p-6 shadow-lg text-primary-foreground">
                <div className="flex items-center gap-2 mb-4">
                  <AlertTriangle className="w-6 h-6" />
                  <h3 className="text-xl font-medium">Emergency?</h3>
                </div>
                <p className="mb-4">
                  If you&apos;ve found a stray or injured animal, please call our 24/7 emergency hotline:
                </p>
                <div className="bg-card text-foreground rounded-xl px-4 py-2 inline-block font-medium">
                  09-12-34-56-78
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
