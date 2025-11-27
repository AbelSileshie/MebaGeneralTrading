"use client";

import { motion } from "framer-motion";

interface TeamMember {
  name: string;
  position: string;
  email: string;
  phone: string;
  avatar: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Ato Yonas Ayalew",
    position: "Managing Director",
    email: "yonas@mebatrading.com",
    phone: "+251 911-21-99-16",
    avatar: "YA",
  },
  {
    name: "Ato Dinku Tesfaye",
    position: "Project Manager",
    email: "dinku@mebatrading.com",
    phone: "+251 905-34-44-44",
    avatar: "DT",
  },
];

export default function ManagementTeam() {
  return (
    <section id="team" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
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
            Our Team
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6">
            Our Management Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Meet the dedicated professionals leading our company to success. Engaging with the community and driving excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-orange-300 group"
            >
              <div className="text-center">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-28 h-28 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-8 shadow-lg group-hover:shadow-orange-500/50 transition-shadow"
                >
                  {member.avatar}
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                  {member.name}
                </h3>
                <p className="text-orange-500 font-bold text-lg mb-6">
                  {member.position}
                </p>
                <div className="space-y-3 text-gray-600 bg-gray-50 rounded-xl p-6">
                  <p className="text-sm flex items-center justify-center gap-2">
                    <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="font-semibold">Email:</span> {member.email}
                  </p>
                  <p className="text-sm flex items-center justify-center gap-2">
                    <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="font-semibold">Phone:</span> {member.phone}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

