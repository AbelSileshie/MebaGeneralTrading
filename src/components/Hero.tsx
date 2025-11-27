"use client";

import { motion } from "framer-motion";

interface HeroProps {
  preHeading?: string;
  heading?: string;
  description?: string;
  primaryCTA?: {
    label: string;
    href: string;
  };
  secondaryCTA?: {
    label: string;
    href: string;
  };
}

export default function Hero({
  heading = "Meba General Trading",
  description = "Meba is a legally established organization with strong and fast growing track record in international trade",
  primaryCTA = { label: "Read More", href: "/#about" },
  secondaryCTA = { label: "Contact", href: "/contact" },
}: HeroProps) {
  return (
    <section
      id="hero"
      className="relative overflow-hidden text-white h-screen flex items-center"
      style={{
        backgroundImage: "url('https://www.rimongeneraltradingplc.com/uploads/slider_01.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-8 py-24 md:py-32 w-full flex items-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto w-full"
        >
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-8 text-white drop-shadow-2xl"
          >
            {heading}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-gray-100 text-lg md:text-xl lg:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed font-normal"
          >
            {description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <motion.a
              href={primaryCTA.href}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-12 py-4 rounded-lg transition-all duration-300 w-full sm:w-auto shadow-xl hover:shadow-2xl text-center text-base uppercase tracking-wide border-2 border-orange-500"
            >
              {primaryCTA.label}
            </motion.a>
            <motion.a
              href={secondaryCTA.href}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="border-2 border-white hover:bg-white hover:text-gray-900 text-white font-semibold px-12 py-4 rounded-lg transition-all duration-300 w-full sm:w-auto text-center text-base uppercase tracking-wide bg-white/10 backdrop-blur-md"
            >
              {secondaryCTA.label}
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

