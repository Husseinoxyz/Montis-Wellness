import { motion } from 'framer-motion';
import { Award, Users, Clock, Heart, Target, Shield, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { team } from '../data/team';

const values = [
  {
    icon: Heart,
    title: 'Patient-Centered Care',
    description: 'Every treatment plan is designed around your unique needs, health history, and wellness goals.',
  },
  {
    iconImage: '/About icons/Results-Driven Approach.png',
    title: 'Results-Driven Approach',
    description: 'We focus on measurable outcomes and visible improvements in your health and well-being.',
  },
  {
    icon: Shield,
    title: 'Safety First',
    description: 'All our therapies follow strict medical protocols with comprehensive pre and post screening.',
  },
  {
    icon: Award,
    title: 'Expert Team',
    description: 'Our panel of international medical professionals brings decades of combined experience.',
  },
  {
    iconImage: '/About icons/Holistic Wellness.png',
    title: 'Holistic Wellness',
    description: 'We treat the whole person—body, mind, and lifestyle—not just isolated symptoms.',
  },
  {
    icon: Clock,
    title: 'Ongoing Support',
    description: 'Your wellness journey doesnt end after treatment. We provide continuous guidance and follow-up care.',
  },
];

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/hero-about.png"
            alt="Montis Specialist Center Team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="text-sm font-medium tracking-wider uppercase" style={{ color: '#CDB06A' }}>
              About Us
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mt-4 mb-6">
              Montis <span style={{ color: '#CDB06A' }}>Specialist Center</span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              A modern therapy and aesthetics studio built on clarity, comfort, and consistency. We blend hands-on care with thoughtful technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our <span style={{ color: '#007A59' }}>Mission</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                At Montis Specialist Center, we believe that optimal health is not just the absence of disease, but a state of complete physical, mental, and social well-being. Our mission is to empower individuals to take control of their health through personalized, science-backed wellness solutions.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Founded by a team of international medical professionals, we combine cutting-edge diagnostic technology with time-tested therapeutic approaches to deliver results that matter. From hormone balance to cardiovascular health, digestive wellness to anti-aging—every program is designed with your unique biology in mind.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center">
                  <p className="text-4xl font-bold" style={{ color: '#007A59' }}>15K+</p>
                  <p className="text-gray-500 mt-1">Happy Clients</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold" style={{ color: '#007A59' }}>8+</p>
                  <p className="text-gray-500 mt-1">Years of Excellence</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="/hero-home.png"
                alt="Montis Specialist Center Interior"
                className="rounded-3xl shadow-2xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5D Model */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm font-medium tracking-wider uppercase" style={{ color: '#CDB06A' }}>
                Our Framework
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-6">
                OXYZ 5D <span style={{ color: '#007A59' }}>Medical Model</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                At the core of our practice lies a structured, standardized clinical system that ensures consistent, reproducible, and scalable medical outcomes. One model. Consistent results.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  { title: 'Discovery', desc: 'Comprehensive diagnostics and root-cause assessment' },
                  { title: 'Detox', desc: 'Systemic burden reduction and internal optimization' },
                  { title: 'Defence', desc: 'Immune support and cellular repair mechanisms' },
                  { title: 'Dynamic', desc: 'Cellular regeneration and anti-aging activation' },
                  { title: 'Dietary', desc: 'Personalized nutrition and long-term maintenance' },
                ].map((phase, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div
                      className="w-2 h-2 rounded-full mt-2 shrink-0"
                      style={{ backgroundColor: '#007A59' }}
                    />
                    <div>
                      <p className="font-semibold text-gray-900">{phase.title}</p>
                      <p className="text-sm text-gray-600">{phase.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                to="/5d"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-medium transition-all hover:scale-105"
                style={{ backgroundColor: '#007A59' }}
              >
                Explore Full Model
                <TrendingUp className="w-5 h-5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-[#007A59]/10 to-[#CDB06A]/10 rounded-3xl p-12"
            >
              <div className="space-y-6">
                <div>
                  <p className="text-sm font-medium uppercase tracking-wider" style={{ color: '#CDB06A' }}>
                    Medical Consistency
                  </p>
                  <h3 className="text-2xl font-bold text-gray-900 mt-2">
                    Standardized Clinical System
                  </h3>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  Our 5D model is not a flexible concept—it is a standardised clinical framework ensuring:
                </p>

                <ul className="space-y-3">
                  {[
                    'Consistent patient journeys across all centers',
                    'Reproducible clinical outcomes and logic',
                    'Clear progression between treatment phases',
                    'Alignment between doctors, teams, and operations',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span
                        className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-white text-sm font-bold"
                        style={{ backgroundColor: '#007A59' }}
                      >
                        ✓
                      </span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24" style={{ backgroundColor: '#F6F6F2' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-medium tracking-wider uppercase" style={{ color: '#CDB06A' }}>
              Our Principles
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6 text-gray-900">
              Core <span style={{ color: '#007A59' }}>Values</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow"
              >
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 overflow-hidden"
                  style={{ backgroundColor: 'rgba(0, 122, 89, 0.1)' }}
                >
                  {'iconImage' in value ? (
                    <img src={value.iconImage} alt={value.title} className="w-full h-full object-cover" />
                  ) : (
                    <value.icon className="w-10 h-10" style={{ color: '#007A59' }} />
                  )}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-500 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-medium tracking-wider uppercase" style={{ color: '#CDB06A' }}>
              Our Experts
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6 text-gray-900">
              Meet the <span style={{ color: '#007A59' }}>Team</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Our panel of international medical professionals brings decades of combined experience in wellness and preventive medicine.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                <p className="text-sm font-medium mt-1" style={{ color: '#007A59' }}>{member.role}</p>
                <p className="text-gray-500 text-sm mt-2">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
