import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to simplify your logistics? Contact us today for a customized solution
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>

            <div className="space-y-6">
              {[
                {
                  icon: Phone,
                  title: '24/7 Support',
                  details: '+1 (555) 123-4567',
                  subdetails: 'Available round the clock',
                },
                {
                  icon: Mail,
                  title: 'Email Us',
                  details: 'info@valcargo.com',
                  subdetails: 'We reply within 24 hours',
                },
                {
                  icon: MapPin,
                  title: 'Visit Us',
                  details: 'Global Operations Center',
                  subdetails: 'Serving worldwide destinations',
                },
              ].map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <motion.div
                    key={contact.title}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    whileHover={{ x: 8 }}
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-white transition-colors"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{contact.title}</h4>
                      <p className="text-blue-600 font-medium">{contact.details}</p>
                      <p className="text-sm text-gray-500">{contact.subdetails}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-12 p-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl text-white"
            >
              <h4 className="text-xl font-bold mb-2">Why Choose Valcargo?</h4>
              <ul className="space-y-2 text-blue-100">
                <li>✓ End-to-end logistics management</li>
                <li>✓ Transparent communication & tracking</li>
                <li>✓ Global expertise & local knowledge</li>
                <li>✓ Competitive pricing & on-time delivery</li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                      placeholder="John"
                    />
                  </motion.div>

                  <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                      placeholder="Doe"
                    />
                  </motion.div>
                </div>

                <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </motion.div>

                <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Service Interested In
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all">
                    <option>Select a service</option>
                    <option>Freight Forwarding</option>
                    <option>FCL Services</option>
                    <option>LCL Services</option>
                    <option>Air Freight</option>
                    <option>Door-to-Door Logistics</option>
                  </select>
                </motion.div>

                <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell us about your shipping needs..."
                  />
                </motion.div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors shadow-lg"
                >
                  Send Message
                  <Send className="w-5 h-5" />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
