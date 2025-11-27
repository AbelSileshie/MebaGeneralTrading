"use client";

import { motion } from "framer-motion";

const partners = [
  { name: "Partner 1", logo: "🏢" },
  { name: "Partner 2", logo: "🏭" },
  { name: "Partner 3", logo: "🌐" },
  { name: "Partner 4", logo: "🚢" },
  { name: "Partner 5", logo: "✈️" },
  { name: "Partner 6", logo: "🏦" },
];

export default function Partners() {
  return (
    <section className="py-16 bg-white border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold mb-2">
            Trusted By
          </p>
          <h3 className="text-2xl font-bold text-gray-900">
            Our Global Partners
          </h3>
        </motion.div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-orange-300 hover:shadow-md transition-all"
            >
              <div className="text-4xl mb-2">{partner.logo}</div>
              <p className="text-xs text-gray-600 font-medium text-center">
                {partner.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

