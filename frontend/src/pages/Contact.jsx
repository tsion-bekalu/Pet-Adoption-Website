'use client';

import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, AlertCircle, Send, CheckCircle } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'

const contactInfo = [
  {
    icon: MapPin,
    title: 'Visit Us',
    details: ['123 Pet Haven Lane', 'Pawsville, CA 90210']
  },
  {
    icon: Phone,
    title: 'Call Us',
    details: ['(555) 123-4567', 'Mon-Sat: 9AM-6PM']
  },
  {
    icon: Mail,
    title: 'Email Us',
    details: ['info@pawsomeadopt.com', 'adoptions@pawsomeadopt.com']
  },
  {
    icon: Clock,
    title: 'Business Hours',
    details: ['Mon-Fri: 9AM-6PM', 'Sat: 10AM-4PM', 'Sun: Closed']
  }
]

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [errors, setErrors] = useState({})

  const validateForm = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setSubmitSuccess(true)
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    
    setTimeout(() => setSubmitSuccess(false), 5000)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-lighter via-pawsome-bg to-primary-light dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-pawsome-text dark:text-white mb-4">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="text-lg text-pawsome-subtitle dark:text-gray-300 max-w-2xl mx-auto">
            Have questions about adoption? Want to learn more about volunteering? We'd love to hear from you!
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="card text-center">
                <div className="w-14 h-14 bg-primary-light dark:bg-gray-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-heading font-bold text-pawsome-text dark:text-white mb-2">
                  {info.title}
                </h3>
                {info.details.map((detail, i) => (
                  <p key={i} className="text-sm text-pawsome-subtitle dark:text-gray-400">
                    {detail}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-pawsome-bg dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="card">
              <h2 className="text-2xl font-heading font-bold text-pawsome-text dark:text-white mb-6">
                Send Us a Message
              </h2>
              
              {submitSuccess && (
                <div className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-xl flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <span className="text-green-700 dark:text-green-300">
                    Message sent successfully! We'll get back to you soon.
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-pawsome-text dark:text-white mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`input-field ${errors.name ? 'border-red-500 focus:ring-red-500' : ''}`}
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-pawsome-text dark:text-white mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`input-field ${errors.email ? 'border-red-500 focus:ring-red-500' : ''}`}
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-pawsome-text dark:text-white mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="input-field"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-pawsome-text dark:text-white mb-1">
                      Subject
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="input-field"
                    >
                      <option value="">Select a subject</option>
                      <option value="adoption">Adoption Inquiry</option>
                      <option value="volunteer">Volunteering</option>
                      <option value="donation">Donations</option>
                      <option value="general">General Question</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-pawsome-text dark:text-white mb-1">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`input-field resize-none ${errors.message ? 'border-red-500 focus:ring-red-500' : ''}`}
                    placeholder="How can we help you?"
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Map & Emergency */}
            <div className="space-y-6">
              {/* Map Placeholder */}
              <div className="card p-0 overflow-hidden h-80">
                <div className="w-full h-full bg-primary-light dark:bg-gray-700 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
                    <p className="text-pawsome-subtitle dark:text-gray-400">
                      Interactive map would go here
                    </p>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="card bg-gradient-to-r from-red-500 to-orange-500 text-white">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold mb-2">
                      Emergency Pet Line
                    </h3>
                    <p className="text-white/80 mb-3">
                      Found a stray or injured animal? Our emergency line is available 24/7.
                    </p>
                    <a
                      href="tel:+15559876543"
                      className="inline-flex items-center gap-2 bg-white text-red-500 px-4 py-2 rounded-full font-semibold hover:bg-white/90 transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      (555) 987-6543
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionTitle
            title="Frequently Asked Questions"
            subtitle="Quick answers to common questions about our adoption process."
          />
          <div className="space-y-4 text-left">
            {[
              {
                q: 'What are the adoption fees?',
                a: 'Adoption fees range from $50-$200 depending on the animal. This includes vaccinations, microchipping, and spay/neuter surgery.'
              },
              {
                q: 'How long does the adoption process take?',
                a: 'Most adoptions are completed within 1-3 days after your application is approved.'
              },
              {
                q: 'Can I return an adopted pet?',
                a: 'Yes, we have a 30-day return policy. We want every adoption to be successful, so please contact us if you have concerns.'
              }
            ].map((faq, index) => (
              <div key={index} className="card">
                <h4 className="font-heading font-bold text-pawsome-text dark:text-white mb-2">
                  {faq.q}
                </h4>
                <p className="text-pawsome-subtitle dark:text-gray-400">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
