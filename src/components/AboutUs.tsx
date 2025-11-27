"use client";

import { motion } from "framer-motion";

interface StatCard {
  label: string;
  value: string;
  icon: React.ReactNode;
  bgColor: string;
}

const statCards: StatCard[] = [
  {
    label: "GLOBAL PARTNERS",
    value: "250+",
    bgColor: "bg-orange-500",
    icon: (
      <svg
        className="w-6 h-6 text-black"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
          clipRule="evenodd"
        />
        <path d="M8.707 10.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4a1 1 0 00-1.414-1.414L10 11.586l-1.293-1.293z" />
      </svg>
    ),
  },
  {
    label: "YEARS OF EXPERIENCE",
    value: "15+",
    bgColor: "bg-black",
    icon: (
      <svg
        className="w-6 h-6 text-black"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ),
  },
  {
    label: "COUNTRIES SERVED",
    value: "45+",
    bgColor: "bg-slate-700",
    icon: (
      <svg
        className="w-6 h-6 text-black"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
        />
      </svg>
    ),
  },
];

export default function AboutUs() {
  return (
    <section id="about" className="bg-gradient-to-b from-white to-gray-50 py-24 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-orange-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-20 right-0 w-72 h-72 bg-orange-100 rounded-full blur-3xl opacity-30"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-8">
        <div className="text-center">
          {/* About Us Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-8"
          >
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg">
              ABOUT US
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent"
          >
            Who are we
          </motion.h2>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 text-lg md:text-xl max-w-4xl mx-auto mb-12 leading-relaxed space-y-4"
          >
            <p>
              Meba General Trading PLC is an import and export company which started its business as a private limited company as a family business. The core business focus revolves around exporting of livestock, sesame, coffee and agricultural products to different countries.
            </p>


          </motion.div>

          {/* Statistical Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-16">
            {statCards.map((card, index) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.3 + index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`${card.bgColor} rounded-3xl p-8 flex items-center gap-6 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 border-4 border-transparent hover:border-white/20`}
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-lg"
                >
                  {card.icon}
                </motion.div>

                {/* Text Content */}
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-wider mb-2 opacity-90 font-semibold">
                    {card.label}
                  </span>
                  <span className="text-4xl md:text-5xl font-extrabold">
                    {card.value}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

