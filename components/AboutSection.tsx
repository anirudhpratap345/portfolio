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
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative inline-block">
              <div className="w-28 h-28 mx-auto mb-6 rounded-full overflow-hidden border shadow-lg glow-effect floating-animation"
                   style={{ borderColor: 'var(--border-primary)' }}>
                <img 
                  src="/pfp.jpg" 
                  alt="Anirudh Pratap Singh" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center shadow-lg border"
                   style={{ 
                     backgroundColor: 'var(--bg-secondary)',
                     borderColor: 'var(--border-primary)'
                   }}>
                <div className="w-3 h-3 rounded-full shimmer"
                     style={{ backgroundColor: 'var(--text-muted)' }}></div>
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-3 gradient-text">
              Anirudh Pratap Singh
            </h1>
            <p className="text-xl font-medium mb-2"
               style={{ color: 'var(--text-secondary)' }}>
              Full-Stack Engineer
            </p>
            <div className="w-24 h-1 rounded-full mx-auto accent-gradient"></div>
          </motion.div>

          {/* About Text Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-3xl mx-auto"
          >
            <div className="glass-card p-8 relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl"
                   style={{ backgroundColor: 'var(--bg-secondary)' }}></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full blur-2xl"
                   style={{ backgroundColor: 'var(--bg-secondary)' }}></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mr-4 border"
                       style={{ 
                         backgroundColor: 'var(--bg-secondary)',
                         borderColor: 'var(--border-primary)'
                       }}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                         style={{ color: 'var(--text-secondary)' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-semibold"
                      style={{ color: 'var(--text-primary)' }}>About Me</h2>
                </div>
                <p className="text-lg leading-relaxed text-left"
                   style={{ color: 'var(--text-secondary)' }}>
                  Hi, I'm Anirudh — 21, and just graduated. I spend most of my time building AI-driven and full-stack applications, experimenting with ideas that can scale into real-world solutions. Outside tech, I enjoy exploring history, philosophy, brainstorming startup concepts, and a good game of chess or Matiks (recently discovered, do check it out), always aiming to outthink the competition.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
