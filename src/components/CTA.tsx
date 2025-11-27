"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTA() {
  return (
    <section id="cta" className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            y: [0, 100, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          animate={{ 
            x: [0, -100, 0],
            y: [0, -100, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl"
        ></motion.div>
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
          >
            Ready to Expand Your Business Globally?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Partner with Meba General Trading PLC for professional import and export solutions. Trusted by businesses worldwide for reliable international trade services.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/contact"
                className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-12 py-4 rounded-lg transition-all duration-300 shadow-xl hover:shadow-2xl text-base uppercase tracking-wide border-2 border-orange-500"
              >
                Request a Quote
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/contact"
                className="border-2 border-white hover:bg-white hover:text-gray-900 text-white font-semibold px-12 py-4 rounded-lg transition-all duration-300 backdrop-blur-sm bg-white/10 text-base uppercase tracking-wide"
              >
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

