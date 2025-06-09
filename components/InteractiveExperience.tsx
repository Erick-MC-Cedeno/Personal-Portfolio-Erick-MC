"use client"
import { useState } from "react"
import { Play, CheckCircle, Clock, Github } from "lucide-react"

import { experiences } from "../data/portfolioData"

export function InteractiveExperience() {
  const [selectedExp, setSelectedExp] = useState(0)

  return (
    <section className="py-20 bg-gradient-to-br from-cyber-dark via-red-950/20 to-cyan-950/20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold font-orbitron gradient-text mb-4">
            PROFESSIONAL BACKGROUND
          </h2>
          <div className="h-1 w-48 bg-gradient-to-r from-cyber-magenta via-cyber-cyan to-cyber-green mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {experiences.map((exp, index) => (
              <div
                key={index}
                onClick={() => setSelectedExp(index)}
                className={`cyber-card p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                  selectedExp === index
                    ? "bg-gradient-to-r from-cyber-cyan/20 to-cyber-magenta/20 border-cyber-cyan"
                    : "hover:border-cyber-cyan/40"
                } hover:translate-x-2 animate-slideInRight`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center mb-4">
                  {exp.status === "ACTIVE" ? (
                    <Play className="text-cyber-green w-5 h-5 mr-3" />
                  ) : (
                    <CheckCircle className="text-cyber-magenta w-5 h-5 mr-3" />
                  )}
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-orbitron font-bold ${
                      exp.status === "ACTIVE"
                        ? "bg-cyber-green text-black"
                        : "bg-cyber-magenta text-black"
                    }`}
                  >
                    {exp.status}
                  </span>
                </div>
                <h3 className="text-xl font-bold font-orbitron text-white mb-2">{exp.title}</h3>
                <p className="text-cyber-cyan font-roboto-mono flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  {exp.period}
                </p>
              </div>
            ))}
          </div>

          <div className="lg:col-span-3">
            <div className="cyber-card p-8 rounded-xl h-full relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyber-cyan via-cyber-magenta to-cyber-green" />

              <div className="mb-6">
                <h3 className="text-4xl font-bold font-orbitron text-cyber-cyan glow-cyan mb-4">
                  {experiences[selectedExp].title}
                </h3>
                <p className="text-xl text-cyber-magenta font-roboto-mono glow-magenta">
                  {experiences[selectedExp].period}
                </p>
              </div>

              <p className="text-gray-300 font-roboto-mono text-lg leading-relaxed mb-6">
                {experiences[selectedExp].description}
              </p>

              {/* Mostrar enlace a GitHub si existe */}
              {experiences[selectedExp].url && (
                <a
                  href={experiences[selectedExp].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mb-6 text-cyber-green font-bold font-orbitron underline hover:text-cyber-cyan transition-all duration-200"
                >
                  <Github className="w-5 h-5 mr-2" />
                  View project on GitHub
                </a>
              )}

              <div className="flex flex-wrap gap-3">
                {experiences[selectedExp].technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-cyber-cyan/20 to-cyber-magenta/20 border border-cyber-cyan/30 rounded-lg font-roboto-mono text-cyber-cyan transition-all duration-300 hover:bg-cyber-cyan/30 hover:scale-105 hover:border-glow-cyan"
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
