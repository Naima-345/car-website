'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Shield, Clock, Award } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/shared/Button';
import { Container } from '@/components/shared/Container';
import { Section } from '@/components/shared/Section';
import { SectionTitle } from '@/components/shared/sectionTitle';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <Container className="relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-primary-400 font-semibold text-sm uppercase tracking-wider mb-4"
            >
              Premium Japanese Cars
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white font-display mb-6"
            >
              Import Your Dream Car
              <br />
              <span className="text-primary-400">From Japan</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
            >
              Trusted dealership bringing you premium quality vehicles with complete documentation and warranty
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/stock">
                <Button size="lg" className="group">
                  Browse Stock
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-gray-900">
                  Contact Us
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </Container>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-white rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Why Choose Us Section */}
      <Section className="bg-white">
        <Container>
          <SectionTitle subtitle="Our Advantages">
            Why Choose Us
          </SectionTitle>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-7 h-7 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Stats Section */}
      <Section className="bg-primary-600 text-white">
        <Container>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-primary-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* How It Works Section */}
      <Section className="bg-gray-50">
        <Container>
          <SectionTitle subtitle="Simple Process">
            How It Works
          </SectionTitle>

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">
                  {index + 1}
                </div>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <Container className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
              Ready to Find Your Perfect Car?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Browse our extensive collection of premium Japanese vehicles or contact us for personalized assistance
            </p>
            <Link href="/stock">
              <Button size="lg" variant="secondary" className="group">
                View Our Stock
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </Container>
      </Section>
    </>
  );
}

// Data
const features = [
  {
    icon: Shield,
    title: 'Quality Assured',
    description: 'Every vehicle undergoes rigorous inspection and comes with complete documentation and history.',
  },
  {
    icon: Clock,
    title: 'Fast Delivery',
    description: 'We handle the entire import process efficiently, ensuring your car arrives on time.',
  },
  {
    icon: Award,
    title: 'Expert Support',
    description: 'Our experienced team guides you through every step, from selection to delivery.',
  },
];

const stats = [
  { value: '500+', label: 'Cars Imported' },
  { value: '10+', label: 'Years Experience' },
  { value: '98%', label: 'Customer Satisfaction' },
  { value: '24/7', label: 'Support Available' },
];

const steps = [
  {
    title: 'Choose Your Car',
    description: 'Browse our stock and select your dream vehicle',
  },
  {
    title: 'Documentation',
    description: 'We handle all paperwork and legal requirements',
  },
  {
    title: 'Shipping',
    description: 'Your car is safely shipped from Japan',
  },
  {
    title: 'Delivery',
    description: 'Receive your car with full warranty',
  },
];