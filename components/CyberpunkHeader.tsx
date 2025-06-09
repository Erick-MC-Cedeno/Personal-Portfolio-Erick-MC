"use client"
import { Github, Linkedin } from "lucide-react"

export function CyberpunkHeader() {
  return (
    <header className="bg-cyber-gray/95 backdrop-blur-cyber border-b border-cyber-cyan/20 shadow-[0_0_20px_rgba(0,255,255,0.1)]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="w-2 h-2 bg-cyber-green rounded-full mr-3 animate-pulse-glow shadow-[0_0_10px_#00ff41]" />
            <h1 className="font-orbitron font-bold text-xl glow-cyan tracking-wider">ERICK.MC_CEDENO</h1>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="https://linkedin.com/in/erick-mc-cedeno"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-cyber-cyan transition-all duration-300 hover:scale-110 hover:glow-cyan"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/erick-mc-cedeno"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-cyber-cyan transition-all duration-300 hover:scale-110 hover:glow-cyan"
            >
              <Github size={24} />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
