'use client'

import { motion } from 'framer-motion'

export default function AboutSection() {
  return (
    <section className="section-spacing">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Profile Section */}
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="relative inline-block">
              <div className="w-28 h-28 mx-auto mb-6 rounded-full overflow-hidden border-4 border-gray-800 shadow-2xl">
                <img 
                  src="/pfp.jpg" 
                  alt="Anirudh Pratap Singh" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-3 text-gradient">
              Anirudh Pratap Singh
            </h1>
            <p className="text-xl text-gray-300 font-medium">
              Full-Stack Engineer
            </p>
          </motion.div>

          {/* About Text Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl mx-auto"
          >
            <div className="glass-card p-8">
              <div className="flex items-center justify-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-gray-100">About Me</h2>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed text-left">
                Hi, I'm Anirudh — 21, and just graduated. I spend most of my time building AI-driven and full-stack applications, experimenting with ideas that can scale into real-world solutions. Outside tech, I enjoy exploring history, philosophy, brainstorming startup concepts, and a good game of chess or Matiks (recently discovered, do check it out), always aiming to outthink the competition.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
