"use client"

import React from "react"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SectionTitle } from "@/components/section-title"
import { SectionCard } from "@/components/section-card"
import { Heart, Users, Award, Gift, PawPrint, Calendar, Home, Megaphone, Settings, Mail, Phone, Check } from "lucide-react"

const whyVolunteer = [
  { icon: Heart, title: "Make a Difference", description: "Directly impact the lives of animals in need" },
  { icon: Users, title: "Join Our Community", description: "Connect with fellow animal lovers" },
  { icon: Award, title: "Gain Experience", description: "Learn valuable skills in animal care" },
  { icon: Gift, title: "Feel Fulfilled", description: "Experience the joy of helping animals" },
]

const opportunities = [
  { icon: Heart, title: "Pet Caretaker", description: "Help with daily care, feeding, and playtime with our adorable pets." },
  { icon: PawPrint, title: "Dog Walker", description: "Take our energetic dogs for walks and outdoor activities." },
  { icon: Calendar, title: "Event Coordinator", description: "Assist in organizing adoption events and fundraisers." },
  { icon: Home, title: "Foster Parent", description: "Provide temporary homes for pets awaiting adoption." },
  { icon: Megaphone, title: "Social Media Helper", description: "Help showcase our pets online and manage social media." },
  { icon: Settings, title: "Administrative Support", description: "Assist with paperwork, scheduling, and office tasks." },
]

const requirements = [
  "Must be 18 years or older (16+ with parental consent)",
  "Ability to follow instructions and work as part of a team",
  "Physical ability to handle pets safely",
  "Genuine love for animals and commitment to their welfare",
  "Reliable and able to commit to a regular schedule",
  "Pass a background check (for certain roles)",
]

const interestOptions = [
  { id: "caretaker", label: "Pet Caretaker" },
  { id: "dogwalker", label: "Dog Walker" },
  { id: "eventcoordinator", label: "Event Coordinator" },
  { id: "fosterparent", label: "Foster Parent" },
  { id: "socialmedia", label: "Social Media" },
  { id: "admin", label: "Administrative Support" },
]

export default function VolunteerPage() {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    availability: "",
    interests: [] as string[],
    experience: "",
    reason: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (id: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(id)
        ? prev.interests.filter((i) => i !== id)
        : [...prev.interests, id],
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-muted py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-medium text-foreground mb-4">
              Become a <span className="text-primary">volunteer</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              Join our passionate team of volunteers and make a difference in the lives of pets. 
              Whether you have a few hours a week or want a more involved role, we have opportunities for everyone!
            </p>
            <a href="#apply-form">
              <button className="bg-primary text-primary-foreground border-none rounded-full px-8 py-4 cursor-pointer text-base transition-all duration-300 hover:bg-[var(--pawsome-hover)] hover:scale-105">
                Apply Now
              </button>
            </a>
          </div>
          
          <div className="flex-1 grid grid-cols-2 gap-4 max-w-md">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square bg-accent rounded-xl flex items-center justify-center">
                <PawPrint className="w-16 h-16 text-primary opacity-50" />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Volunteer */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Why Volunteer with us?"
            subtitle="The rewards of volunteering go both ways"
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {whyVolunteer.map((item) => (
              <SectionCard key={item.title} variant="accent" className="text-center">
                <item.icon className="w-10 h-10 mx-auto mb-4 text-primary" />
                <h3 className="text-lg font-medium text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </SectionCard>
            ))}
          </div>
        </div>
      </section>
      
      {/* Opportunities */}
      <section className="bg-muted py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Volunteer Opportunities"
            subtitle="Find the perfect role that matches your interest"
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
            {opportunities.map((item) => (
              <SectionCard key={item.title} className="h-full">
                <item.icon className="w-10 h-10 mb-4 text-primary" />
                <h3 className="text-lg font-medium text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </SectionCard>
            ))}
          </div>
        </div>
      </section>
      
      {/* Requirements */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <SectionTitle
            title="Volunteer Requirements"
            subtitle="Simple qualifications to join our team"
          />
          
          <div className="bg-muted rounded-2xl p-8 mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {requirements.map((req, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <p className="text-foreground">{req}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Application Form */}
      <section id="apply-form" className="bg-muted py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <SectionTitle
            title="Apply To Volunteer"
            subtitle="Fill out the form below and we'll get back to you soon"
          />
          
          {submitted ? (
            <div className="bg-card rounded-2xl p-12 mt-8 text-center">
              <Heart className="w-16 h-16 mx-auto text-primary mb-4" />
              <h3 className="text-2xl font-medium text-foreground mb-2">Thank You!</h3>
              <p className="text-muted-foreground">Your volunteer application has been submitted. We&apos;ll be in touch soon!</p>
            </div>
          ) : (
            <div className="bg-card rounded-2xl p-8 mt-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fname" className="block text-muted-foreground mb-2">First name:</label>
                    <input
                      type="text"
                      id="fname"
                      name="fname"
                      placeholder="John"
                      value={formData.fname}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-foreground bg-input text-foreground outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="lname" className="block text-muted-foreground mb-2">Last name:</label>
                    <input
                      type="text"
                      id="lname"
                      name="lname"
                      placeholder="Doe"
                      value={formData.lname}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-foreground bg-input text-foreground outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-muted-foreground mb-2">Email:</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="abc@gmail.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-foreground bg-input text-foreground outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-muted-foreground mb-2">Phone Number:</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="09-12-34-56-78"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-foreground bg-input text-foreground outline-none focus:border-primary transition-colors"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="availability" className="block text-muted-foreground mb-2">Availability:</label>
                  <input
                    type="text"
                    id="availability"
                    name="availability"
                    placeholder="e.g., Two times a week"
                    value={formData.availability}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-foreground bg-input text-foreground outline-none focus:border-primary transition-colors"
                  />
                </div>
                
                <div>
                  <p className="text-muted-foreground mb-4">Areas of Interest:</p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {interestOptions.map((option) => (
                      <label key={option.id} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.interests.includes(option.id)}
                          onChange={() => handleCheckboxChange(option.id)}
                          className="w-4 h-4 accent-primary"
                        />
                        <span className="text-foreground">{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="experience" className="block text-muted-foreground mb-2">Previous Experience with Animals:</label>
                  <input
                    type="text"
                    id="experience"
                    name="experience"
                    placeholder="Mention any previous experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-foreground bg-input text-foreground outline-none focus:border-primary transition-colors"
                  />
                </div>
                
                <div>
                  <label htmlFor="reason" className="block text-muted-foreground mb-2">Why Do You Want To Volunteer:</label>
                  <input
                    type="text"
                    id="reason"
                    name="reason"
                    placeholder="Tell us about your passion for animals and why you would want to volunteer with us"
                    value={formData.reason}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-foreground bg-input text-foreground outline-none focus:border-primary transition-colors"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground border-none rounded-xl px-6 py-4 cursor-pointer text-lg transition-all duration-300 hover:bg-[var(--pawsome-hover)]"
                >
                  Submit
                </button>
              </form>
            </div>
          )}
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-medium text-foreground mb-2">Have Questions?</h2>
          <p className="text-muted-foreground mb-8">
            Our volunteer coordinator is here to help answer any questions you may have.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-12">
            <div className="flex items-center justify-center gap-4">
              <Mail className="w-10 h-10 text-primary" />
              <div className="text-left">
                <p className="font-medium text-foreground">Email</p>
                <p className="text-muted-foreground">pawsome@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4">
              <Phone className="w-10 h-10 text-primary" />
              <div className="text-left">
                <p className="font-medium text-foreground">Phone</p>
                <p className="text-muted-foreground">+2519-12-34-57-89</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
