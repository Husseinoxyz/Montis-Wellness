import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Star, ChevronRight } from 'lucide-react';
import { services, testimonials } from '../data/services';

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0">
          <video
            src="/hero-video.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="inline-block px-4 py-2 rounded-full text-sm font-medium text-white border border-[#CDB06A]/50 mb-6" style={{ backgroundColor: 'rgba(205, 176, 106, 0.15)' }}>
                Premium Wellness & Medical Spa
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            >
              Feel Good,{' '}
              <span style={{ color: '#CDB06A' }}>Live Well</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-gray-200 mb-10 leading-relaxed"
            >
              A calm space for recovery, balance, and care—designed around you. 
              From targeted therapy to everyday wellness, we keep care personal and results visible.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-medium transition-all hover:scale-105"
                style={{ backgroundColor: '#007A59' }}
              >
                Explore Services
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/appointment"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-medium border-2 border-white/30 hover:border-white transition-all"
              >
                <Play className="w-5 h-5" />
                Book Appointment
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Floating Stats */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-20 right-8 lg:right-20 hidden lg:block"
        >
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-3xl font-bold text-white">8+</p>
                <p className="text-sm text-gray-300">Specialized Services</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">15K+</p>
                <p className="text-sm text-gray-300">Happy Clients</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">20+</p>
                <p className="text-sm text-gray-300">Expert Doctors</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">98%</p>
                <p className="text-sm text-gray-300">Success Rate</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Services Overview */}
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
              What We Offer
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6 text-gray-900">
              Our <span style={{ color: '#007A59' }}>Services</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Everything in one place—therapy, diagnostics, beauty, and recovery—planned around your schedule.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={`/services/${service.id}`}
                  className="group block bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-colors group-hover:scale-110"
                    style={{ backgroundColor: 'rgba(0, 122, 89, 0.1)' }}
                  >
                    <service.icon className="w-7 h-7" style={{ color: '#007A59' }} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#007A59] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                    {service.subtitle}
                  </p>
                  <div className="flex items-center text-sm font-medium" style={{ color: '#007A59' }}>
                    Learn More
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium border-2 transition-all hover:scale-105"
              style={{ borderColor: '#007A59', color: '#007A59' }}
            >
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24" style={{ backgroundColor: '#F6F6F2' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm font-medium tracking-wider uppercase" style={{ color: '#CDB06A' }}>
                Why Montis
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6 text-gray-900">
                Wellness Built on{' '}
                <span style={{ color: '#007A59' }}>Science</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Montis Wellness is a modern therapy and aesthetics studio built on clarity, comfort, and consistency. We blend hands-on care with thoughtful technology to deliver results you can see and feel.
              </p>

              <div className="space-y-6">
                {[
                  { title: 'Expert Medical Team', desc: 'Our panel of international medical professionals ensures the highest standard of care.' },
                  { title: 'Personalized Treatment', desc: 'Every program is tailored to your unique needs, health history, and wellness goals.' },
                  { title: 'Advanced Technology', desc: 'We use cutting-edge diagnostic and therapeutic equipment for optimal results.' },
                  { title: 'Holistic Approach', desc: 'We address root causes, not just symptoms, for lasting wellness.' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: 'rgba(0, 122, 89, 0.1)' }}>
                      <span className="text-lg font-bold" style={{ color: '#007A59' }}>{i + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
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
                src="/hero-about.jpg"
                alt="Montis Wellness Team"
                className="rounded-3xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(0, 122, 89, 0.1)' }}>
                    <Star className="w-6 h-6" style={{ color: '#CDB06A' }} fill="#CDB06A" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">4.9/5 Rating</p>
                    <p className="text-sm text-gray-500">From 2,000+ reviews</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
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
              Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6 text-gray-900">
              What Our <span style={{ color: '#007A59' }}>Clients Say</span>
            </h2>
          </motion.div>

          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[0, 1, 2].map((offset) => {
                const index = (currentTestimonial + offset) % testimonials.length;
                const testimonial = testimonials[index];
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: offset === 0 ? 1 : 0, x: offset === 0 ? 0 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-[#F6F6F2] rounded-2xl p-8"
                  >
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5" style={{ color: '#CDB06A' }} fill="#CDB06A" />
                      ))}
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-6 italic">
                      "{testimonial.text}"
                    </p>
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.service}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 mt-12">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className="transition-all"
                  style={{
                    width: currentTestimonial === index ? '32px' : '8px',
                    height: '8px',
                    borderRadius: '4px',
                    backgroundColor: currentTestimonial === index ? '#007A59' : '#D1D5DB',
                  }}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/hero-services.jpg"
            alt="Wellness Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0, 122, 89, 0.85)' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Start Your Wellness Journey Today
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              New guests start with a quick consultation so we can recommend the right plan for your unique needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/appointment"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-gray-900 font-medium transition-all hover:scale-105"
                style={{ backgroundColor: '#CDB06A' }}
              >
                Book Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-medium border-2 border-white/30 hover:border-white transition-all"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
