import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1634638022229-5a52221886dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
          alt="Cargo ship logistics"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-900/85 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Global Logistics,
              <br />
              Delivered with Trust
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-blue-100 mb-8 leading-relaxed"
          >
            At Valcargo, we believe logistics is more than just moving goods — it's about delivering reliability and efficiency in every shipment.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold border border-white/30 hover:bg-white/20 transition-colors"
            >
              Our Services
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-3 gap-8 mt-16"
          >
            {[
              { value: '500+', label: 'Global Partners' },
              { value: '24/7', label: 'Support' },
              { value: '99.9%', label: 'On-Time Delivery' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
              >
                <div className="text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-blue-200 text-sm mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-white rounded-full" />
        </motion.div>
      </motion.div>
    </div>
  );
}
