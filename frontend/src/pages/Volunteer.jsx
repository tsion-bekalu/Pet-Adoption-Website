'use client';

import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Heart, Users, Calendar, Award, Dog, Cat, Clipboard, Home, Megaphone, FileText, CheckCircle, X } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'

const benefits = [
  {
    icon: Heart,
    title: 'Make a Difference',
    description: 'Directly impact the lives of animals in need and help them find forever homes.'
  },
  {
    icon: Users,
    title: 'Join a Community',
    description: 'Connect with fellow animal lovers who share your passion for helping pets.'
  },
  {
    icon: Calendar,
    title: 'Flexible Schedule',
    description: 'Choose volunteer hours that fit your lifestyle and availability.'
  },
  {
    icon: Award,
    title: 'Gain Experience',
    description: 'Learn valuable skills in animal care, customer service, and more.'
  }
]

const opportunities = [
  {
    icon: Dog,
    title: 'Dog Walker',
    description: 'Help our dogs get their daily exercise by taking them on walks around our facility or nearby parks.',
    commitment: '2-4 hours/week'
  },
  {
    icon: Cat,
    title: 'Cat Socializer',
    description: 'Spend time with our cats to help them become more comfortable with human interaction.',
    commitment: '2-3 hours/week'
  },
  {
    icon: Clipboard,
    title: 'Adoption Counselor',
    description: 'Help match potential adopters with the perfect pet by conducting interviews and providing guidance.',
    commitment: '4-6 hours/week'
  },
  {
    icon: Home,
    title: 'Foster Parent',
    description: 'Provide temporary homes for pets who need extra care or socialization before adoption.',
    commitment: '2 weeks - 3 months'
  },
  {
    icon: Megaphone,
    title: 'Event Helper',
    description: 'Assist with adoption events, fundraisers, and community outreach programs.',
    commitment: 'Weekends as needed'
  },
  {
    icon: FileText,
    title: 'Administrative Support',
    description: 'Help with office tasks including data entry, phone calls, and organizing paperwork.',
    commitment: '3-5 hours/week'
  }
]

const requirements = [
  'Must be at least 14 years old (some positions require 16 or 18+)',
  'Complete volunteer orientation session',
  'Commit to at least 3 months of service',
  'Pass background check (for positions working with minors)',
  'Physical ability to stand for extended periods',
  'No severe allergies to animals'
]

function Volunteer() {
  const [showApplicationModal, setShowApplicationModal] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    birthdate: '',
    availability: [],
    interests: [],
    experience: '',
    agreeToTerms: false
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    if (type === 'checkbox') {
      if (name === 'agreeToTerms') {
        setFormData(prev => ({ ...prev, [name]: checked }))
      } else {
        const arrayName = name.includes('availability') ? 'availability' : 'interests'
        const actualValue = name.split('-')[1]
        setFormData(prev => ({
          ...prev,
          [arrayName]: checked
            ? [...prev[arrayName], actualValue]
            : prev[arrayName].filter(item => item !== actualValue)
        }))
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would submit to the API
    alert('Thank you for your application! We will contact you within 5-7 business days.')
    setShowApplicationModal(false)
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      birthdate: '',
      availability: [],
      interests: [],
      experience: '',
      agreeToTerms: false
    })
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-lighter via-pawsome-bg to-primary-light dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-pawsome-text dark:text-white mb-6">
                Become a <span className="text-primary">Volunteer</span>
              </h1>
              <p className="text-lg text-pawsome-subtitle dark:text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0">
                Join our amazing team of volunteers and help us make a difference in the lives of animals. Every hour you give helps save lives.
              </p>
              <button
                onClick={() => setShowApplicationModal(true)}
                className="btn-primary"
              >
                Apply Now
              </button>
            </div>
            <div className="relative">
              <img
                src="https://placehold.co/600x400/e9d4ff/8880ff?text=Volunteers"
                alt="Happy volunteers with pets"
                className="rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Why Volunteer With Us?"
            subtitle="Volunteering at Pawsome Adopt is more than just giving your time - it's an enriching experience."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="card text-center">
                <div className="w-16 h-16 bg-primary-light dark:bg-gray-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-bold text-pawsome-text dark:text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-pawsome-subtitle dark:text-gray-400">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Opportunities */}
      <section className="py-20 bg-pawsome-bg dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Volunteer Opportunities"
            subtitle="We have a variety of roles to match your skills and interests."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {opportunities.map((opp, index) => (
              <div key={index} className="card">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-primary-light dark:bg-gray-700 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <opp.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold text-pawsome-text dark:text-white mb-1">
                      {opp.title}
                    </h3>
                    <span className="text-sm text-primary font-medium">
                      {opp.commitment}
                    </span>
                  </div>
                </div>
                <p className="text-pawsome-subtitle dark:text-gray-400 mt-4">
                  {opp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Volunteer Requirements"
            subtitle="To ensure the safety of our animals and volunteers, we have a few basic requirements."
          />
          <div className="card">
            <ul className="space-y-4">
              {requirements.map((req, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-pawsome-subtitle dark:text-gray-300">{req}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-center mt-8">
            <button
              onClick={() => setShowApplicationModal(true)}
              className="btn-primary"
            >
              Start Your Application
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-hover">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Join our family of volunteers and help us create happy endings for pets in need.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setShowApplicationModal(true)}
              className="btn-primary bg-white text-primary hover:bg-gray-100"
            >
              Apply to Volunteer
            </button>
            <Link to="/contact" className="btn-secondary bg-white/20 text-white hover:bg-white/30">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Application Modal */}
      {showApplicationModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 overflow-y-auto">
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 max-w-2xl w-full my-8">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-2xl font-heading font-bold text-pawsome-text dark:text-white">
                  Volunteer Application
                </h2>
                <p className="text-pawsome-subtitle dark:text-gray-400">
                  Fill out this form to join our volunteer team
                </p>
              </div>
              <button
                onClick={() => setShowApplicationModal(false)}
                className="p-2 hover:bg-primary-light dark:hover:bg-gray-700 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Personal Info */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-pawsome-text dark:text-white mb-1">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="input-field"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-pawsome-text dark:text-white mb-1">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="input-field"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-pawsome-text dark:text-white mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="input-field"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-pawsome-text dark:text-white mb-1">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="input-field"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-pawsome-text dark:text-white mb-1">
                  Date of Birth *
                </label>
                <input
                  type="date"
                  name="birthdate"
                  required
                  value={formData.birthdate}
                  onChange={handleChange}
                  className="input-field"
                />
              </div>

              {/* Availability */}
              <div>
                <label className="block text-sm font-medium text-pawsome-text dark:text-white mb-2">
                  Availability *
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {['Weekday Mornings', 'Weekday Afternoons', 'Weekday Evenings', 'Saturday', 'Sunday'].map((day) => (
                    <label key={day} className="flex items-center gap-2 text-sm cursor-pointer">
                      <input
                        type="checkbox"
                        name={`availability-${day}`}
                        checked={formData.availability.includes(day)}
                        onChange={handleChange}
                        className="w-4 h-4 rounded border-primary-light text-primary focus:ring-primary"
                      />
                      <span className="text-pawsome-subtitle dark:text-gray-300">{day}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Interests */}
              <div>
                <label className="block text-sm font-medium text-pawsome-text dark:text-white mb-2">
                  Areas of Interest *
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {['Dog Walking', 'Cat Socializing', 'Adoption Counseling', 'Fostering', 'Events', 'Admin Work'].map((interest) => (
                    <label key={interest} className="flex items-center gap-2 text-sm cursor-pointer">
                      <input
                        type="checkbox"
                        name={`interests-${interest}`}
                        checked={formData.interests.includes(interest)}
                        onChange={handleChange}
                        className="w-4 h-4 rounded border-primary-light text-primary focus:ring-primary"
                      />
                      <span className="text-pawsome-subtitle dark:text-gray-300">{interest}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Experience */}
              <div>
                <label className="block text-sm font-medium text-pawsome-text dark:text-white mb-1">
                  Previous Experience with Animals
                </label>
                <textarea
                  name="experience"
                  rows={3}
                  value={formData.experience}
                  onChange={handleChange}
                  className="input-field resize-none"
                  placeholder="Tell us about any experience you have with animals..."
                />
              </div>

              {/* Terms */}
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  required
                  checked={formData.agreeToTerms}
                  onChange={handleChange}
                  className="w-4 h-4 mt-1 rounded border-primary-light text-primary focus:ring-primary"
                />
                <span className="text-sm text-pawsome-subtitle dark:text-gray-300">
                  I agree to the volunteer terms and conditions, including completing orientation and committing to at least 3 months of service. *
                </span>
              </label>

              <div className="flex gap-4 pt-4">
                <button type="submit" className="btn-primary flex-1">
                  Submit Application
                </button>
                <button
                  type="button"
                  onClick={() => setShowApplicationModal(false)}
                  className="btn-secondary flex-1"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default Volunteer
