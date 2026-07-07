import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Shield, Clock, Globe, DollarSign, Target, Users } from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: 'Secure Transport',
    description: 'Every shipment handled with utmost safety and security',
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description: 'Reliable and punctual delivery for every shipment',
  },
  {
    icon: Globe,
    title: 'Global Network',
    description: 'Strong international partnerships and reach',
  },
  {
    icon: DollarSign,
    title: 'Competitive Pricing',
    description: 'Cost-effective solutions without compromising quality',
  },
];

export function About() {
  const titleRef = useRef(null);
  const imageRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true, margin: '-100px' });
  const isImageInView = useInView(imageRef, { once: true, margin: '-100px' });

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Who We Are */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            ref={titleRef}
            initial={{ opacity: 0, x: -60 }}
            animate={isTitleInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Who We Are
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              At Valcargo, we believe logistics is more than just moving goods — it's about delivering trust, reliability, and efficiency in every shipment.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We are a customer-focused logistics and back-office support company, providing tailor-made solutions that simplify global supply chains and empower businesses to achieve their goals.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our team of young, experienced professionals leverages the latest logistics technology and industry expertise to ensure that every shipment is safe, accurate, and on time.
            </p>
          </motion.div>

          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, x: 60 }}
            animate={isImageInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1740914994657-f1cdffdc418e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
                alt="Warehouse operations"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isImageInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-8 -left-8 bg-blue-600 text-white p-8 rounded-2xl shadow-xl"
            >
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-blue-100">Years Experience</div>
            </motion.div>
          </motion.div>
        </div>

        {/* Our Commitment */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Commitment
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We ensure smooth and dependable logistics operations through total quality management and continuous improvement
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-4"
                >
                  <Icon className="w-8 h-8 text-blue-600" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-12 text-center text-white"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Target className="w-16 h-16 mx-auto mb-6 opacity-80" />
            <h3 className="text-3xl font-bold mb-4">Our Aim & Objective</h3>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Our aim is to exceed customer expectations through total quality management and continuous improvement. We are committed to offering cost-effective and reliable logistics solutions that help our clients grow confidently in a fast-paced global market.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
