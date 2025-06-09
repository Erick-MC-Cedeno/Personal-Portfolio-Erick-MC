"use client"
import { Mail, Eye, Code, Rocket, Shield, Cloud } from "lucide-react"
import { GlitchText } from "./GlitchText"
import { TypewriterText } from "./TypewriterText"
import { HexagonGrid } from "./HexagonGrid"

const stats = [
  { icon: Code, value: "50+", label: "Proyectos", color: "#00ffff" },
  { icon: Rocket, value: "5+", label: "Años Exp.", color: "#ff0080" },
  { icon: Shield, value: "100%", label: "Seguridad", color: "#00ff41" },
  { icon: Cloud, value: "24/7", label: "Disponible", color: "#ffff00" },
]

export function ModernHeroSection() {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden bg-cyber-gradient">
      <HexagonGrid />

      {/* Floating Elements */}
      <div className="absolute top-1/5 right-1/10 w-48 h-48 border-2 border-cyber-cyan/20 rounded-full animate-float">
        <div
          className="absolute top-1/2 left-1/2 w-24 h-24 border border-cyber-magenta/20 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-float"
          style={{ animationDuration: "4s", animationDirection: "reverse" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2 text-center lg:text-left">
            <div className="mb-8">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black gradient-text mb-4 font-orbitron">
                ERICK MC CEDENO
              </h1>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-6">
                <div className="px-6 py-2 bg-gradient-to-r from-cyber-cyan/20 to-cyber-magenta/20 border border-cyber-cyan/40 rounded-full backdrop-blur-cyber">
                  <span className="font-orbitron text-cyber-cyan glow-cyan tracking-wider text-lg">
                    CYBERPUNK DEVELOPER
                  </span>
                </div>
                <div className="px-6 py-2 bg-gradient-to-r from-cyber-magenta/20 to-cyber-green/20 border border-cyber-magenta/40 rounded-full backdrop-blur-cyber">
                  <span className="font-orbitron text-cyber-magenta glow-magenta tracking-wide">
                    FULL STACK ARCHITECT
                  </span>
                </div>
              </div>

              <div className="mb-8 max-w-2xl mx-auto lg:mx-0">
                <p className="text-gray-300 text-lg leading-relaxed">
                  Arquitecto de soluciones digitales especializando en ecosistemas MERN/MEAN, blockchain y ciberseguridad. Transformando ideas en realidades tecnológicas del futuro.
                </p>
              </div>

              <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
                <a
                  href="/contacto"
                  className="cyber-button px-8 py-4 rounded-lg flex items-center gap-3 text-lg"
                >
                  <Mail size={20} />
                  CONTACTAR
                </a>
                <a
                  href="https://github.com/Erick-MC-Cedeno"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cyber-button-outline px-8 py-4 rounded-lg flex items-center gap-3 text-lg"
                >
                  <Eye size={20} />
                  PROYECTOS
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="flex flex-col gap-4 animate-slideInRight" style={{ animationDelay: "2s" }}>
              {stats.map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <div
                    key={index}
                    className="cyber-card p-4 rounded-lg transition-all duration-300 hover:translate-x-2 group"
                  >
                    <div className="flex items-center">
                      <div
                        className="p-3 rounded-lg border mr-4"
                        style={{
                          background: `linear-gradient(45deg, ${stat.color}22, transparent)`,
                          borderColor: `${stat.color}44`,
                        }}
                      >
                        <IconComponent
                          className="w-6 h-6"
                          style={{
                            color: stat.color,
                            filter: `drop-shadow(0 0 8px ${stat.color})`,
                          }}
                        />
                      </div>
                      <div>
                        <div
                          className="text-2xl font-bold font-orbitron"
                          style={{
                            color: stat.color,
                            textShadow: `0 0 10px ${stat.color}`,
                          }}
                        >
                          {stat.value}
                        </div>
                        <div className="text-gray-400 font-roboto-mono text-sm">{stat.label}</div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
