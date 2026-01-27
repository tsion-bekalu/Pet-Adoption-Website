import { Link } from 'react-router-dom'
import { Heart, Target, Users, Award, Calendar, PawPrint } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'

const stats = [
  { value: '500+', label: 'Pets Adopted', icon: Heart },
  { value: '1000+', label: 'Happy Families', icon: Users },
  { value: '8+', label: 'Years of Service', icon: Calendar },
  { value: '50+', label: 'Active Volunteers', icon: Award }
]

const values = [
  {
    icon: Heart,
    title: 'Compassion',
    description: 'We treat every animal with love, care, and respect they deserve.'
  },
  {
    icon: Target,
    title: 'Commitment',
    description: 'We are dedicated to finding the perfect forever home for every pet.'
  },
  {
    icon: Users,
    title: 'Community',
    description: 'We believe in building strong relationships with adopters and volunteers.'
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We maintain the highest standards in animal care and adoption services.'
  }
]

const team = [
  {
    name: 'Dr. Amanda Foster',
    role: 'Founder & Director',
    image: 'https://placehold.co/300x300/e9d4ff/8880ff?text=AF',
    bio: 'Veterinarian with 15+ years of experience in animal welfare.'
  },
  {
    name: 'James Wilson',
    role: 'Operations Manager',
    image: 'https://placehold.co/300x300/e9d4ff/8880ff?text=JW',
    bio: 'Oversees daily shelter operations and volunteer coordination.'
  },
  {
    name: 'Sarah Martinez',
    role: 'Adoption Counselor',
    image: 'https://placehold.co/300x300/e9d4ff/8880ff?text=SM',
    bio: 'Helps match families with their perfect furry companions.'
  },
  {
    name: 'Dr. Michael Chang',
    role: 'Lead Veterinarian',
    image: 'https://placehold.co/300x300/e9d4ff/8880ff?text=MC',
    bio: 'Ensures all pets receive top-quality medical care.'
  }
]

function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-lighter via-pawsome-bg to-primary-light dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            <span className="text-pawsome-aboutH1">About</span>{' '}
            <span className="text-pawsome-text dark:text-white">Pawsome Adopt</span>
          </h1>
          <p className="text-lg text-pawsome-subtitle dark:text-gray-300 max-w-3xl mx-auto">
            We're on a mission to create a world where every pet has a loving home. Since 2015, we've been connecting animals in need with caring families.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-light dark:bg-gray-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-pawsome-subtitle dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-pawsome-bg dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://placehold.co/600x400/e9d4ff/8880ff?text=Our+Story"
                alt="Our shelter"
                className="rounded-3xl shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-pawsome-text dark:text-white mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-pawsome-subtitle dark:text-gray-300">
                <p>
                  Pawsome Adopt was founded in 2015 by Dr. Amanda Foster, a veterinarian who saw firsthand the struggles of homeless animals in our community. What started as a small rescue operation has grown into a full-service adoption center.
                </p>
                <p>
                  Our journey began with a simple belief: every animal deserves a chance at a happy life. Over the years, we've rescued, rehabilitated, and rehomed hundreds of pets, from playful puppies to senior cats.
                </p>
                <p>
                  Today, our dedicated team of staff and volunteers works tirelessly to provide the best care for our animals while matching them with loving families. We're proud of what we've accomplished, but we know there's still more work to be done.
                </p>
              </div>
              <Link to="/volunteer" className="btn-primary mt-8 inline-block">
                Join Our Mission
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Our Core Values"
            subtitle="These principles guide everything we do at Pawsome Adopt."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card text-center">
                <div className="w-16 h-16 bg-primary-light dark:bg-gray-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-bold text-pawsome-text dark:text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-pawsome-subtitle dark:text-gray-400">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-20 bg-pawsome-bg dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Meet Our Team"
            subtitle="The passionate people behind Pawsome Adopt who make it all possible."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="card text-center">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-heading font-bold text-pawsome-text dark:text-white">
                  {member.name}
                </h3>
                <p className="text-primary font-medium mb-2">{member.role}</p>
                <p className="text-sm text-pawsome-subtitle dark:text-gray-400">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-hover">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <PawPrint className="w-16 h-16 text-white/50 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Whether you're looking to adopt, volunteer, or donate, there are many ways to help animals in need.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/available-pets" className="btn-primary bg-white text-primary hover:bg-gray-100">
              Adopt a Pet
            </Link>
            <Link to="/volunteer" className="btn-secondary bg-white/20 text-white hover:bg-white/30 border-white/30">
              Become a Volunteer
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
