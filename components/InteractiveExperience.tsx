"use client"
import { useState } from "react"
import { Play, CheckCircle, Clock, Github } from "lucide-react"

import { experiences } from "../data/portfolioData"

export function InteractiveExperience() {
  const [selectedExp, setSelectedExp] = useState(0)

  return (
    <section className="py-12 sm:py-20 bg-gradient-to-br from-cyber-dark via-red-950/20 to-cyan-950/20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-orbitron gradient-text mb-4 px-2">
            SOME OF MY PROJECTS
          </h2>
          <div className="h-1 w-32 sm:w-48 bg-gradient-to-r from-cyber-magenta via-cyber-cyan to-cyber-green mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-5 gap-6 sm:gap-8">
          <div className="lg:col-span-2 space-y-4">
            {experiences.map((exp, index) => (
              <div
                key={index}
                onClick={() => setSelectedExp(index)}
                className={`cyber-card p-4 sm:p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                  selectedExp === index
                    ? "bg-gradient-to-r from-cyber-cyan/20 to-cyber-magenta/20 border-cyber-cyan"
                    : "hover:border-cyber-cyan/40"
                } hover:translate-x-2 animate-slideInRight`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center mb-3 sm:mb-4">
                  {exp.status === "ACTIVE" ? (
                    <Play className="text-cyber-green w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
                  ) : (
                    <CheckCircle className="text-cyber-magenta w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
                  )}
                  <span
                    className={`px-2 sm:px-3 py-1 rounded-full text-xs font-orbitron font-bold ${
                      exp.status === "ACTIVE"
                        ? "bg-cyber-green text-black"
                        : "bg-cyber-magenta text-black"
                    }`}
                  >
                    {exp.status}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold font-orbitron text-white mb-2">{exp.title}</h3>
                <p className="text-cyber-cyan font-roboto-mono text-sm sm:text-base flex items-center">
                  <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                  {exp.period}
                </p>
              </div>
            ))}
          </div>

          <div className="lg:col-span-3">
            <div className="cyber-card p-4 sm:p-8 rounded-xl h-full relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyber-cyan via-cyber-magenta to-cyber-green" />

              <div className="mb-4 sm:mb-6">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold font-orbitron text-cyber-cyan glow-cyan mb-3 sm:mb-4">
                  {experiences[selectedExp].title}
                </h3>
                <p className="text-lg sm:text-xl text-cyber-magenta font-roboto-mono glow-magenta">
                  {experiences[selectedExp].period}
                </p>
              </div>

              <p className="text-gray-300 font-roboto-mono text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                {experiences[selectedExp].description}
              </p>

              {experiences[selectedExp].url && (
                <a
                  href={experiences[selectedExp].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mb-4 sm:mb-6 text-cyber-green font-bold font-orbitron underline hover:text-cyber-cyan transition-all duration-200 text-sm sm:text-base"
                >
                  <Github className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  View project on GitHub
                </a>
              )}

              <div className="flex flex-wrap gap-2 sm:gap-3">
                {experiences[selectedExp].technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-cyber-cyan/20 to-cyber-magenta/20 border border-cyber-cyan/30 rounded-lg font-roboto-mono text-cyber-cyan text-sm sm:text-base transition-all duration-300 hover:bg-cyber-cyan/30 hover:scale-105 hover:border-glow-cyan"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
