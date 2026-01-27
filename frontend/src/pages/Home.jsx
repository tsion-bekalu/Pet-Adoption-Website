import { Link } from 'react-router-dom'
import { Heart, Shield, Users, Clock, Search, FileText, Home as HomeIcon, CheckCircle, Quote } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'

const features = [
  {
    icon: Heart,
    title: 'Healthy Pets',
    description: 'All our pets receive comprehensive health checks and vaccinations before adoption.'
  },
  {
    icon: Shield,
    title: 'Safe Environment',
    description: 'Our shelter provides a clean, safe, and loving environment for all animals.'
  },
  {
    icon: Users,
    title: 'Expert Support',
    description: 'Our team of experienced staff is here to help you find your perfect match.'
  },
  {
    icon: Clock,
    title: 'Ongoing Care',
    description: 'We provide post-adoption support and resources for new pet parents.'
  }
]

const adoptionSteps = [
  {
    icon: Search,
    step: '1',
    title: 'Browse Pets',
    description: 'Explore our available pets and find ones that match your lifestyle.'
  },
  {
    icon: FileText,
    step: '2',
    title: 'Apply',
    description: 'Fill out our simple adoption application to start the process.'
  },
  {
    icon: Users,
    step: '3',
    title: 'Meet & Greet',
    description: 'Visit our shelter to meet your potential new family member.'
  },
  {
    icon: HomeIcon,
    step: '4',
    title: 'Take Home',
    description: 'Complete the adoption and welcome your new pet to their forever home.'
  }
]

const testimonials = [
  {
    name: 'Sarah Johnson',
    pet: 'Adopted Max',
    image: 'https://placehold.co/100x100/e9d4ff/8880ff?text=SJ',
    quote: 'The adoption process was so smooth! The staff helped us find the perfect dog for our family. Max has brought so much joy into our lives.'
  },
  {
    name: 'Michael Chen',
    pet: 'Adopted Luna',
    image: 'https://placehold.co/100x100/e9d4ff/8880ff?text=MC',
    quote: 'I was nervous about adopting my first cat, but the team at Pawsome Adopt made everything easy. Luna is now my best friend!'
  },
  {
    name: 'Emily Rodriguez',
    pet: 'Adopted Buddy',
    image: 'https://placehold.co/100x100/e9d4ff/8880ff?text=ER',
    quote: 'We adopted Buddy two years ago and he has been the best addition to our family. Thank you Pawsome Adopt!'
  }
]

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-lighter via-pawsome-bg to-primary-light dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-pawsome-text dark:text-white mb-6">
                Find Your <span className="text-primary">Perfect</span> Furry Friend
              </h1>
              <p className="text-lg text-pawsome-subtitle dark:text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0">
                Open your heart and home to a loving companion. Every adoption saves a life and creates a forever bond.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <Link to="/available-pets" className="btn-primary">
                  Find a Pet
                </Link>
                <Link to="/about" className="btn-secondary">
                  Learn More
                </Link>
              </div>
              <div className="flex justify-center lg:justify-start gap-8 mt-12">
                <div className="text-center">
                  <div className="text-3xl font-heading font-bold text-primary">500+</div>
                  <div className="text-sm text-pawsome-subtitle dark:text-gray-400">Pets Adopted</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-heading font-bold text-primary">1000+</div>
                  <div className="text-sm text-pawsome-subtitle dark:text-gray-400">Happy Families</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-heading font-bold text-primary">50+</div>
                  <div className="text-sm text-pawsome-subtitle dark:text-gray-400">Volunteers</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://placehold.co/600x500/e9d4ff/8880ff?text=Happy+Pets"
                  alt="Happy pets waiting for adoption"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-pawsome-text dark:text-white">Verified Shelter</div>
                    <div className="text-sm text-pawsome-subtitle dark:text-gray-400">Licensed & Trusted</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Why Choose Pawsome Adopt?"
            subtitle="We're dedicated to finding the perfect match between pets and families, ensuring happy endings for everyone."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card text-center">
                <div className="w-16 h-16 bg-primary-light dark:bg-gray-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-bold text-pawsome-text dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-pawsome-subtitle dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Adoption Works */}
      <section className="py-20 bg-pawsome-bg dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="How Adoption Works"
            subtitle="Our simple 4-step process makes it easy to welcome a new furry friend into your home."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {adoptionSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="card text-center">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <div className="w-14 h-14 bg-primary-light dark:bg-gray-700 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-pawsome-text dark:text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-pawsome-subtitle dark:text-gray-400">
                    {step.description}
                  </p>
                </div>
                {index < adoptionSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <div className="w-8 h-0.5 bg-primary/30"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/available-pets" className="btn-primary">
              Start Your Adoption Journey
            </Link>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Happy Adoption Stories"
            subtitle="Hear from families who found their perfect companions through Pawsome Adopt."
          />
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card">
                <Quote className="w-10 h-10 text-primary/30 mb-4" />
                <p className="text-pawsome-subtitle dark:text-gray-400 mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-pawsome-text dark:text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-primary">
                      {testimonial.pet}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
