import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Ship, Plane, Package, Truck, Globe, Container } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Freight Forwarding',
    description: 'Complete end-to-end forwarding solutions with documentation, customs, and delivery support for both imports and exports.',
    image: 'https://images.unsplash.com/photo-1634638022229-5a52221886dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  },
  {
    icon: Ship,
    title: 'FCL Services',
    description: 'Dedicated container shipments ensuring speed, safety, and reliability with flexible scheduling and secure handling.',
    image: 'https://images.unsplash.com/photo-1632517306067-b54ab4d1f98d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  },
  {
    icon: Package,
    title: 'LCL Services',
    description: 'Cost-effective option for smaller shipments with secure consolidation and regular sailings to key destinations.',
    image: 'https://images.unsplash.com/photo-1634638021403-70f46d19fc02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  },
  {
    icon: Plane,
    title: 'Air Freight',
    description: 'Fast and efficient delivery for time-sensitive cargo with real-time tracking and expedited customs clearance.',
    image: 'https://images.unsplash.com/photo-1713846047266-12aa96cbbb6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  },
  {
    icon: Truck,
    title: 'Door-to-Door',
    description: 'Hassle-free pickup and delivery ensuring smooth movement from origin to destination with comprehensive logistics support.',
    image: 'https://images.unsplash.com/photo-1634638026221-4c1c4cf9f881?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow h-full"
      >
        <div className="relative h-48 overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-4">
            <div className="bg-blue-600 p-3 rounded-lg">
              <Icon className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
          <p className="text-gray-600 leading-relaxed">{service.description}</p>

          <motion.button
            whileHover={{ x: 5 }}
            className="mt-4 text-blue-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all"
          >
            Learn More
            <span>→</span>
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Services() {
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true, margin: '-100px' });

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive logistics solutions tailored to meet your global shipping needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-10 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
          >
            View All Services
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
