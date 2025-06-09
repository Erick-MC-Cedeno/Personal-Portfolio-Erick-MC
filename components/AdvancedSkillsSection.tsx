"use client"
import { Code, Terminal, Database, Cloud, Shield, Globe } from "lucide-react"

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Globe,
    skills: ["React", "React Native", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"],
    color: "cyber-cyan",
  },
  {
    title: "Backend Development",
    icon: Terminal,
    skills: ["Node.js", "Express.js", "Nest.js", "RESTful APIs", "GraphQL"],
    color: "cyber-magenta",
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MongoDB", "SQL", "PostgreSQL", "MySQL", "Redis"],
    color: "cyber-green",
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["AWS", "Serverless", "Docker", "Cloudflare", "CI/CD"],
    color: "cyber-yellow",
  },
  {
    title: "Blockchain & Web3",
    icon: Code,
    skills: ["Web3.js", "Smart Contracts", "DeFi", "Blockchain Development"],
    color: "cyber-orange",
  },
  {
    title: "Security & Networking",
    icon: Shield,
    skills: ["Cybersecurity", "Network Security", "Cloudflare", "SSL/TLS", "Penetration Testing"],
    color: "cyber-magenta",
  },
]

const skillLevels: Record<string, number> = {
  React: 95,
  "Node.js": 90,
  MongoDB: 85,
  TypeScript: 88,
  "Web3.js": 75,
  Cybersecurity: 80,
  AWS: 82,
  Docker: 78,
}

const colorMap: Record<string, string> = {
  "cyber-cyan": "#00ffff",
  "cyber-magenta": "#ff0080",
  "cyber-green": "#00ff41",
  "cyber-yellow": "#ffff00",
  "cyber-orange": "#ff6600",
}

export function AdvancedSkillsSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(0, 255, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 0, 128, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(0, 255, 65, 0.1) 0%, transparent 50%)
          `,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold font-orbitron gradient-text mb-4">ARSENAL TECNOLÓGICO</h2>
          <div className="h-1 w-48 bg-gradient-to-r from-cyber-cyan via-cyber-magenta to-cyber-green mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon
            const colorValue = colorMap[category.color]
            return (
              <div
                key={index}
                className="cyber-card p-6 rounded-xl relative overflow-hidden group animate-slideInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-1"
                  style={{
                    background: `linear-gradient(90deg, ${colorValue}, transparent)`,
                  }}
                />

                <div className="flex items-center mb-6">
                  <div
                    className="p-3 rounded-lg border mr-4"
                    style={{
                      background: `linear-gradient(45deg, ${colorValue}20, transparent)`,
                      borderColor: `${colorValue}30`,
                    }}
                  >
                    <IconComponent
                      className="w-8 h-8"
                      style={{
                        color: colorValue,
                        filter: `drop-shadow(0 0 10px ${colorValue})`,
                      }}
                    />
                  </div>
                  <div>
                    <h3
                      className="text-xl font-bold font-orbitron"
                      style={{
                        color: colorValue,
                        textShadow: `0 0 10px ${colorValue}`,
                      }}
                    >
                      {category.title}
                    </h3>
                    <p className="text-gray-400 font-roboto-mono text-sm">{category.skills.length} tecnologías</p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  {category.skills.slice(0, 4).map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-white font-roboto-mono font-medium">{skill}</span>
                        <span className="font-roboto-mono font-bold" style={{ color: colorValue }}>
                          {skillLevels[skill] || 85}%
                        </span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: `${skillLevels[skill] || 85}%`,
                            background: `linear-gradient(90deg, ${colorValue}, ${colorValue}60)`,
                            boxShadow: `0 0 10px ${colorValue}`,
                            animationDelay: `${1000 + index * 200 + skillIndex * 100}ms`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {category.skills.length > 4 && (
                  <div className="flex flex-wrap gap-2">
                    {category.skills.slice(4).map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 border rounded-lg text-xs font-roboto-mono transition-all duration-300 hover:scale-105"
                        style={{
                          background: `linear-gradient(45deg, ${colorValue}20, transparent)`,
                          borderColor: `${colorValue}30`,
                          color: colorValue,
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
