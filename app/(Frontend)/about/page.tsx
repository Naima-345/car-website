'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/shared/Container';
import { Section } from '@/components/shared/Section';
import { SectionTitle } from '@/components/shared/sectionTitle';
import { Users, Target, Award, Heart, TrendingUp, Shield } from 'lucide-react';

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              AL Qaswa Imports - Your trusted partner in importing premium Japanese vehicles to Bangladesh
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Behind the Scenes - Image Gallery */}
      <Section className="bg-white">
        <Container>
          <SectionTitle subtitle="Our Journey">
            Behind the Scenes of Our Global Reach
          </SectionTitle>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {galleryImages.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative h-64 md:h-80 bg-gray-200 rounded-2xl overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-gray-500 text-lg">{item.title}</p>
                </div>
                <div className="absolute bottom-6 left-6 right-6 z-20">
                  <h3 className="text-white text-xl font-bold">{item.title}</h3>
                  <p className="text-gray-200 text-sm mt-1">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Images Row */}
          <div className="grid md:grid-cols-3 gap-6">
            {additionalImages.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative h-48 bg-gray-200 rounded-xl overflow-hidden"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-gray-500">{item.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Company Description */}
      <Section className="bg-gray-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-center">
              AL Qaswa Imports
            </h2>
            <div className="text-lg text-gray-600 space-y-4 text-justify">
              <p>
                AL Qaswa Imports, a trusted name in Bangladesh's automotive industry, offers comprehensive car import solutions from Japan. Founded with the vision that quality vehicles should be accessible to everyone, we are committed to reshaping the car import experience through dependable, innovative, and customer-focused solutions.
              </p>
              <p>
                Our approach is centered on simplifying the complex import process and strengthening the entire automotive ecosystem—ensuring customers, dealers, and enthusiasts have the support they need to make informed decisions effectively.
              </p>
              <p>
                As a trusted partner, we go beyond product delivery to provide strategic guidance, technical expertise, and long-term support that enable our customers to navigate the import process with confidence. From vehicle selection to customs clearance and delivery, we focus on building resilient, high-performing relationships that can adapt to the evolving demands of car ownership.
              </p>
              <p>
                With deep industry knowledge and a mission-driven mindset, AL Qaswa Imports stands dedicated to creating a better automotive future—one quality vehicle at a time.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Mission & Vision Cards */}
      <Section className="bg-white">
        <Container>
          <SectionTitle subtitle="Where Our Mission Meets Our Future">
            Our Purpose
          </SectionTitle>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-2xl p-8 md:p-12"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-cyan-500 rounded-lg flex items-center justify-center">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold">Vision</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                To upgrade car import systems through modern technology and become the leading one-stop solution provider, making reliable and affordable Japanese vehicles accessible to every community in Bangladesh.
              </p>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-pink-50 to-red-100 rounded-2xl p-8 md:p-12"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-red-500 rounded-lg flex items-center justify-center">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold">Mission</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                To empower customers with innovative import solutions and comprehensive support, ensuring that quality Japanese vehicles reach every corner of Bangladesh with complete transparency and reliability.
              </p>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Certifications & Awards Section */}
      <Section className="bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Certifications <span className="text-red-500">Awards</span>
            </h2>
            <p className="text-gray-600">
              The QA process for AL Qaswa Imports aims to ensure that the website meets high standards of quality and performance
            </p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center gap-4 mb-12">
            <button className="px-8 py-3 bg-red-500 text-white rounded-lg font-semibold">
              Certifications
            </button>
            <button className="px-8 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition-colors">
              Awards
            </button>
          </div>

          {/* Certification Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md"
              >
                <div className="h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                  <Award className="w-16 h-16 text-gray-400" />
                </div>
                <h3 className="font-bold text-lg mb-2">{cert.title}</h3>
                <p className="text-sm text-gray-600">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Values Section */}
      <Section className="bg-white">
        <Container>
          <SectionTitle subtitle="What We Stand For">
            Our Core Values
          </SectionTitle>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center mx-auto mb-4 transform hover:rotate-6 transition-transform">
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}

// Data
const galleryImages = [
  {
    title: 'Partnership Events',
    description: 'Building strong relationships across Japan',
  },
  {
    title: 'Forging Global Alliances',
    description: 'Creating partnerships for a tech-driven future',
  },
  {
    title: 'Quality Inspections',
    description: 'Ensuring every vehicle meets our standards',
  },
  {
    title: 'Delivery Excellence',
    description: 'Timely and safe vehicle delivery',
  },
];

const additionalImages = [
  { title: 'Awards Ceremony' },
  { title: 'Team Collaboration' },
  { title: 'Customer Handover' },
];

const certifications = [
  {
    title: "Manufacturer's Authorization",
    description: 'Certified to import authentic Japanese vehicles',
  },
  {
    title: 'ISO Quality Standards',
    description: 'Maintaining international quality benchmarks',
  },
  {
    title: 'Import License',
    description: 'Authorized vehicle import operations',
  },
];

const values = [
  {
    icon: Users,
    title: 'Customer First',
    description: 'Your satisfaction is our top priority',
  },
  {
    icon: Target,
    title: 'Quality Focus',
    description: 'Only the best vehicles in our stock',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Committed to exceptional service',
  },
  {
    icon: Heart,
    title: 'Integrity',
    description: 'Transparent and honest dealings',
  },
];