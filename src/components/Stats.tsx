"use client";

import { motion } from "framer-motion";

interface Stat {
  value: string;
  label: string;
  suffix?: string;
}

const stats: Stat[] = [
  { value: "250", label: "Global Partners", suffix: "+" },
  { value: "5000", label: "Shipments Completed", suffix: "+" },
  { value: "45", label: "Countries Served", suffix: "+" },
  { value: "15", label: "Years Experience", suffix: "+" },
];

export default function Stats() {
  return (
    <section id="stats" className="py-24 bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">Our Track Record</h2>
          <p className="text-orange-100 text-base font-medium">Proven Excellence in International Trade</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ scale: 1.03, y: -3 }}
              className="text-center bg-white/15 backdrop-blur-sm rounded-lg p-6 md:p-8 border border-white/30 hover:bg-white/25 hover:border-white/40 transition-all duration-300"
            >
              <div className="text-5xl md:text-6xl font-bold mb-3 text-white">
                {stat.value}
                {stat.suffix && <span className="text-orange-200">{stat.suffix}</span>}
              </div>
              <div className="text-sm md:text-base text-orange-50 font-semibold uppercase tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

