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
    <section className="section-spacing relative">
      {/* Background decoration */}
      <div className="absolute inset-0 subtle-gradient"></div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4 gradient-text">
              Skills & Technologies
            </h2>
            <p className="text-lg max-w-2xl mx-auto leading-relaxed mb-6"
               style={{ color: 'var(--text-secondary)' }}>
              A comprehensive toolkit for building modern, scalable applications
            </p>
            <div className="w-32 h-1 rounded-full mx-auto accent-gradient"></div>
          </div>

          {/* Skills Grid */}
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group"
                >
                  <div className="card card-hover h-full flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-20 h-20 rounded-full blur-2xl"
                         style={{ backgroundColor: 'var(--bg-secondary)' }}></div>
                    
                    <div className="relative z-10">
                      <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300 floating-animation">
                        {skill.icon}
                      </div>
                      <h3 className="text-lg font-semibold mb-2 group-hover:opacity-80 transition-opacity duration-300"
                          style={{ color: 'var(--text-primary)' }}>
                        {skill.name}
                      </h3>
                      <span className="px-3 py-1 text-xs font-medium rounded-full border shadow-lg"
                            style={{
                              backgroundColor: 'var(--bg-secondary)',
                              color: 'var(--text-secondary)',
                              borderColor: 'var(--border-primary)'
                            }}>
                        {skill.category}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12"
          >
            <div className="glass-card p-8 max-w-2xl mx-auto relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl"
                   style={{ backgroundColor: 'var(--bg-secondary)' }}></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full blur-2xl"
                   style={{ backgroundColor: 'var(--bg-secondary)' }}></div>
              
              <div className="relative z-10 text-center">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-4 border"
                     style={{ 
                       backgroundColor: 'var(--bg-secondary)',
                       borderColor: 'var(--border-primary)'
                     }}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                       style={{ color: 'var(--text-secondary)' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2"
                    style={{ color: 'var(--text-primary)' }}>Always Learning</h3>
                <p className="text-center"
                   style={{ color: 'var(--text-secondary)' }}>
                  Continuously expanding my skill set with new technologies and frameworks to stay at the forefront of modern development.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
