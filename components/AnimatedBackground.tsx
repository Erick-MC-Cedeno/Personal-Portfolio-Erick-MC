"use client"

export function AnimatedBackground() {
  return (
    <>
      {/* Grid Background */}
      <div
        className="fixed top-0 left-0 right-0 bottom-0 -z-20 animate-gridMove"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Floating Particles */}
      <div className="fixed top-0 left-0 right-0 bottom-0 -z-10 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-0.5 h-0.5 rounded-full ${
              i % 3 === 0 ? "bg-cyber-cyan" : i % 3 === 1 ? "bg-cyber-magenta" : "bg-cyber-green"
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </>
  )
}
