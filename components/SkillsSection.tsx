'use client'

import { motion } from 'framer-motion'

const skills = [
  { name: 'Python', icon: '🐍', category: 'Backend' },
  { name: 'Next.js', icon: '⚡', category: 'Frontend' },
  { name: 'TypeScript', icon: '📘', category: 'Language' },
  { name: 'Supabase', icon: '🔥', category: 'Database' },
  { name: 'PyTorch', icon: '🧠', category: 'AI/ML' },
  { name: 'AWS', icon: '☁️', category: 'Cloud' }
]

const categories = ['All', 'Frontend', 'Backend', 'AI/ML', 'Cloud', 'Database', 'Language']

export default function SkillsSection() {
  return (
    <section className="section-spacing">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gradient">
              Skills & Technologies
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A comprehensive toolkit for building modern, scalable applications
            </p>
          </div>

          {/* Skills Grid */}
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group"
                >
                  <div className="card card-hover h-full flex flex-col items-center justify-center p-6 text-center">
                    <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-100 mb-2 group-hover:text-gradient transition-colors duration-300">
                      {skill.name}
                    </h3>
                    <span className="px-3 py-1 text-xs font-medium bg-gray-800/50 text-gray-400 rounded-full border border-gray-700/50">
                      {skill.category}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12"
          >
            <div className="glass-card p-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-100">Always Learning</h3>
              </div>
              <p className="text-gray-300 text-center">
                Continuously expanding my skill set with new technologies and frameworks to stay at the forefront of modern development.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
