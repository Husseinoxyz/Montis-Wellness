import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { services } from '../data/services';

export default function Services() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/hero-services.jpg"
            alt="Montis Wellness Services"
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
              Our Offerings
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mt-4 mb-6">
              All <span style={{ color: '#CDB06A' }}>Services</span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Everything in one place—therapy, diagnostics, beauty, and recovery—planned around your schedule.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                  className="group flex flex-col lg:flex-row bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className="lg:w-2/5 relative overflow-hidden">
                    <img
                      src={service.heroImage}
                      alt={service.title}
                      className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center">
                        <service.icon className="w-6 h-6" style={{ color: '#007A59' }} />
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-3/5 p-8 flex flex-col justify-center">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2 group-hover:text-[#007A59] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-500 mb-4">{service.subtitle}</p>
                    <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">
                      {service.description}
                    </p>
                    <div className="flex items-center text-sm font-medium" style={{ color: '#007A59' }}>
                      Explore Service
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
