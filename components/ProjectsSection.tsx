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
    link: 'https://pmarchitect.vercel.app/'
  },
  {
    name: 'FoundryStack',
    description: 'An AI-powered assistant that helps founders turn startup ideas into complete MVP blueprints with tech stacks, APIs, and execution plans — making product planning faster and easier.',
    status: 'In Progress',
    link: '#'
  }
]

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState('Projects')

  const tabs = ['Projects', 'AI MVP', 'AI Tools/Audit']

  return (
    <section className="section-spacing" style={{ backgroundColor: 'rgba(31, 41, 55, 0.2)' }}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gradient">
              Stuff I'm Building
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Explore my latest projects and experiments in AI, web development, and full-stack applications.
            </p>
          </div>

          {/* Enhanced Tabs */}
          <div className="flex justify-center mb-12">
            <div className="glass-card p-2">
              <div className="flex space-x-1">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-3 text-sm font-medium rounded-lg transition-all duration-300 ${
                      activeTab === tab
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                        : 'text-gray-400 hover:text-gray-300 hover:bg-gray-800/50'
                    }`}
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
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="card card-hover group">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-gray-100 group-hover:text-gradient transition-colors duration-300">
                              {project.name}
                            </h3>
                            {project.status && (
                              <span className="inline-flex items-center px-3 py-1 text-xs font-medium bg-green-900/30 text-green-300 rounded-full border border-green-700/50">
                                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                                {project.status}
                              </span>
                            )}
                          </div>
                        </div>
                        <p className="text-base text-gray-300 leading-relaxed mb-4">
                          {project.description}
                        </p>
                      </div>
                      {project.link && (
                        <div className="ml-6 flex-shrink-0">
                          <a
                            href={project.link}
                            className="w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 group-hover:scale-110"
                            aria-label={`View ${project.name}`}
                          >
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
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
              <div className="glass-card p-12">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-100 mb-2">AI MVP Projects</h3>
                <p className="text-gray-400">Coming soon... Working on some exciting AI-powered applications.</p>
              </div>
            </div>
          )}

          {/* AI Tools/Audit Tab Content */}
          {activeTab === 'AI Tools/Audit' && (
            <div className="max-w-3xl mx-auto text-center">
              <div className="glass-card p-12">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-100 mb-2">AI Tools & Audit</h3>
                <p className="text-gray-400">Coming soon... Building tools to help developers and teams work smarter with AI.</p>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
