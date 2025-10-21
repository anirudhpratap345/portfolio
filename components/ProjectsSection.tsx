'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface Project {
  name: string
  description: string
  status?: 'In Progress'
  link?: string
}

const projects: Project[] = [
  {
    name: 'PMarchitect.ai',
    description: 'A tool that helps PMs and EMs quickly compare ML models (like CNNs vs Transformers) on cost, speed, and feasibility to make faster, informed architecture decisions.',
    link: 'https://pm-architect-ai.vercel.app/'
  },
  {
    name: 'FinIQ.ai',
    description: 'An AI-powered assistant that helps founders turn startup ideas into complete MVP blueprints with tech stacks, APIs, and execution plans — making product planning faster and easier.',
    status: 'In Progress',
    link: 'https://fin-iq-ai.vercel.app/'
  }
]

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState('Projects')

  const tabs = ['Projects', 'AI MVP', 'AI Tools/Audit']

  return (
    <section className="section-spacing relative">
      {/* Background decoration */}
      <div className="absolute inset-0 subtle-gradient"></div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 gradient-text">
              Stuff I'm Building
            </h2>
            <p className="text-lg max-w-2xl mx-auto leading-relaxed"
               style={{ color: 'var(--text-secondary)' }}>
              Explore my latest projects and experiments in AI, web development, and full-stack applications.
            </p>
            <div className="w-32 h-1 rounded-full mx-auto mt-6 accent-gradient"></div>
          </div>

          {/* Enhanced Tabs */}
          <div className="flex justify-center mb-12">
            <div className="glass-card p-2 glow-effect">
              <div className="flex space-x-2">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-3 text-sm font-medium rounded-lg transition-all duration-300 ${
                      activeTab === tab
                        ? 'text-white shadow-lg scale-105 border'
                        : 'hover:text-white hover:bg-opacity-10'
                    }`}
                    style={{
                      backgroundColor: activeTab === tab ? 'var(--accent-primary)' : 'transparent',
                      color: activeTab === tab ? 'white' : 'var(--text-secondary)',
                      borderColor: activeTab === tab ? 'var(--border-primary)' : 'transparent',
                      '--tw-bg-opacity': '0.1'
                    } as React.CSSProperties}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Projects Content */}
          {activeTab === 'Projects' && (
            <div className="max-w-4xl mx-auto space-y-6">
              {projects.map((project, index) => (
                <motion.div
                  key={project.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className="card card-hover group relative overflow-hidden">
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-24 h-24 rounded-full blur-2xl"
                         style={{ backgroundColor: 'var(--bg-secondary)' }}></div>
                    
                    <div className="flex items-start justify-between relative z-10">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 rounded-xl flex items-center justify-center border"
                               style={{ 
                                 backgroundColor: 'var(--bg-secondary)',
                                 borderColor: 'var(--border-primary)'
                               }}>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                 style={{ color: 'var(--text-secondary)' }}>
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold mb-2 group-hover:opacity-80 transition-opacity duration-300"
                                style={{ color: 'var(--text-primary)' }}>
                              {project.name}
                            </h3>
                            {project.status && (
                              <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full border shadow-lg"
                                    style={{
                                      backgroundColor: 'rgba(34, 197, 94, 0.1)',
                                      color: '#22c55e',
                                      borderColor: 'rgba(34, 197, 94, 0.3)'
                                    }}>
                                <div className="w-2 h-2 rounded-full mr-2 animate-pulse"
                                     style={{ backgroundColor: '#22c55e' }}></div>
                                {project.status}
                              </span>
                            )}
                          </div>
                        </div>
                        <p className="text-base leading-relaxed mb-4"
                           style={{ color: 'var(--text-secondary)' }}>
                          {project.description}
                        </p>
                      </div>
                      {project.link && (
                        <div className="ml-6 flex-shrink-0">
                          <a
                            href={project.link}
                            className="rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 border"
                            style={{
                              width: '48px',
                              height: '48px',
                              backgroundColor: 'var(--bg-secondary)',
                              borderColor: 'var(--border-primary)'
                            }}
                            aria-label={`View ${project.name}`}
                          >
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              style={{ color: 'var(--text-secondary)' }}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </svg>
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* AI MVP Tab Content */}
          {activeTab === 'AI MVP' && (
            <div className="max-w-3xl mx-auto text-center">
              <div className="glass-card p-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl"
                     style={{ backgroundColor: 'var(--bg-secondary)' }}></div>
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 border"
                     style={{ 
                       backgroundColor: 'var(--bg-secondary)',
                       borderColor: 'var(--border-primary)'
                     }}>
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                       style={{ color: 'var(--text-secondary)' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2"
                    style={{ color: 'var(--text-primary)' }}>AI MVP Projects</h3>
                <p style={{ color: 'var(--text-secondary)' }}>Coming soon... Working on some exciting AI-powered applications.</p>
              </div>
            </div>
          )}

          {/* AI Tools/Audit Tab Content */}
          {activeTab === 'AI Tools/Audit' && (
            <div className="max-w-3xl mx-auto text-center">
              <div className="glass-card p-12 relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full blur-3xl"
                     style={{ backgroundColor: 'var(--bg-secondary)' }}></div>
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 border"
                     style={{ 
                       backgroundColor: 'var(--bg-secondary)',
                       borderColor: 'var(--border-primary)'
                     }}>
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                       style={{ color: 'var(--text-secondary)' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2"
                    style={{ color: 'var(--text-primary)' }}>AI Tools & Audit</h3>
                <p style={{ color: 'var(--text-secondary)' }}>Coming soon... Building tools to help developers and teams work smarter with AI.</p>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
