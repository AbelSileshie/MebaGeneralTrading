"use client";

import { motion } from "framer-motion";

export default function Certificates() {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide mb-6">
            Recognition
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6">
            Certificate of Recognition
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            MINISTRY OF REVENUE has given our company gratitude for achieving better results by complying with TAX law.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50, rotateY: -15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.05, rotateY: 5 }}
            className="bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 text-white p-10 rounded-3xl text-center shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 border-4 border-white/20"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              className="text-7xl mb-6"
            >
              🏆
            </motion.div>
            <h3 className="text-3xl font-bold mb-6">
              Certificate of Recognition
            </h3>
            <p className="text-orange-100 text-lg leading-relaxed">
              MINISTRY OF REVENUE has given our company gratitude for achieving better results in the 2020/2021 fiscal year by complying with TAX law.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: 15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.05, rotateY: -5 }}
            className="bg-gradient-to-br from-yellow-400 via-orange-500 to-orange-600 text-white p-10 rounded-3xl text-center shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 border-4 border-white/20"
          >
            <motion.div
              animate={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              className="text-7xl mb-6"
            >
              ⭐
            </motion.div>
            <h3 className="text-3xl font-bold mb-6">
              GOLD Tax Payer
            </h3>
            <p className="text-orange-100 text-lg leading-relaxed">
              Recognized as a GOLD Tax Payer from the year 2013-2017 EC.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

