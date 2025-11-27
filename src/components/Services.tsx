"use client";

import { motion } from "framer-motion";

interface Service {
  title: string;
  description: string;
  icon: string;
}

const services: Service[] = [
  {
    title: "Import Services",
    description: "Complete import solutions from sourcing to delivery, handling all documentation and customs clearance.",
    icon: "📦",
  },
  {
    title: "Export Services",
    description: "Facilitate your exports with end-to-end support including packaging, shipping, and documentation.",
    icon: "🚢",
  },
  {
    title: "Product Sourcing",
    description: "Connect with verified suppliers worldwide to source quality products at competitive prices.",
    icon: "🔍",
  },
  {
    title: "Trade Consulting",
    description: "Expert guidance on international trade regulations, market analysis, and business development.",
    icon: "💼",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-50 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-50 rounded-full blur-3xl opacity-50"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-orange-50 text-orange-700 px-4 py-2 rounded-md text-xs font-bold uppercase tracking-wider mb-4 border border-orange-200">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Comprehensive Trading Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Professional import and export services designed to facilitate seamless international trade operations for businesses worldwide.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ y: -5 }}
              className="text-center p-8 rounded-xl bg-white border-2 border-gray-200 hover:border-orange-500 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-orange-50 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-100 transition-colors">
                <span className="text-4xl">{service.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

