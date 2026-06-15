import { motion } from 'framer-motion';

export default function Blog() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative overflow-hidden py-32">
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, rgba(0,122,89,0.08) 0%, rgba(205,176,106,0.16) 100%)',
          }}
        />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block text-sm font-medium tracking-[0.3em] uppercase"
            style={{ color: '#CDB06A' }}
          >
            Blog
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-5xl md:text-6xl font-bold text-gray-900"
          >
            Coming Soon
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-600 leading-relaxed"
          >
            We are preparing articles, updates, and expert insights from Montis Specialist Center.
          </motion.p>
        </div>
      </section>
    </div>
  );
}
