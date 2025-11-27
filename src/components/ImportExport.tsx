"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface ImportItem {
  title: string;
  description: string;
  icon: string;
}

const importItems: ImportItem[] = [
  {
    title: "Reinforcement Bars",
    description: "The steel industry has recorded high growth rates with a fast increase in its demand in the construction industry.",
    icon: "🔩",
  },
  {
    title: "Industrial Raw Material",
    description: "Industrial production and processing inputs and others based on our clients demand. Food & Beverage Industry raw materials.",
    icon: "🏭",
  },
  {
    title: "Bottling Machineries & Accessories",
    description: "We import different bottling machineries and accessories.",
    icon: "🍾",
  },
  {
    title: "Chemicals",
    description: "Collaborated with the best in the business to offer quality chemical products utilized in different industries.",
    icon: "🧪",
  },
];

const exportItems: ImportItem[] = [
  {
    title: "Live Stock Export",
    description: "Many argue that as Ethiopia is the leading country in Africa with its large livestock inventory and potential supply base for the live animals' export, the quality and quantity being exported are not as it would be compared to the stock.",
    icon: "🐄",
  },
  {
    title: "Sesame",
    description: "High-quality sesame seeds exported to various international markets.",
    icon: "🌾",
  },
  {
    title: "Coffee",
    description: "Premium Ethiopian coffee beans exported worldwide.",
    icon: "☕",
  },
  {
    title: "Agricultural Products",
    description: "Various agricultural products meeting international quality standards.",
    icon: "🌽",
  },
];

export default function ImportExport() {
  return (
    <>
      {/* Import Section */}
      <section id="import" className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-20 right-20 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
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
              Import Services
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6">
              Import in Ethiopia
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Meba is also engaged in import of various products that have contributed to development and success of customers and our country as a whole.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {importItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ y: -10, rotateX: 5 }}
                className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-orange-300 group"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="text-6xl mb-6"
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {item.description}
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 font-semibold group-hover:gap-3 transition-all"
                >
                  Import Contact
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Export Section */}
      <section id="export" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute top-0 right-0 w-full h-full opacity-5">
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
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
              Export Services
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6">
              Export Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Meba has been engaged in the following major business areas. Discover our export capabilities and global reach.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {exportItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ y: -10, rotateX: 5 }}
                className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-orange-300 group"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="text-6xl mb-6"
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {item.description}
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 font-semibold group-hover:gap-3 transition-all"
                >
                  Export Contact
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

