"use client"

export function HexagonGrid() {
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden -z-10">
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute w-24 h-24"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        >
          <div
            className={`absolute top-1/4 left-[6.7%] w-[86.6%] h-1/2 border ${
              i % 3 === 0
                ? "border-cyber-cyan/30 bg-cyber-cyan/10"
                : i % 3 === 1
                  ? "border-cyber-magenta/30 bg-cyber-magenta/10"
                  : "border-cyber-green/30 bg-cyber-green/10"
            } animate-hexRotate`}
            style={{
              animationDuration: `${5 + i}s`,
            }}
          />
          <div
            className={`absolute top-1/4 left-[6.7%] w-[86.6%] h-1/2 border ${
              i % 3 === 0
                ? "border-cyber-cyan/30 bg-cyber-cyan/10"
                : i % 3 === 1
                  ? "border-cyber-magenta/30 bg-cyber-magenta/10"
                  : "border-cyber-green/30 bg-cyber-green/10"
            } rotate-60 animate-hexRotate`}
            style={{
              animationDuration: `${5 + i}s`,
              animationDirection: "reverse",
            }}
          />
        </div>
      ))}
    </div>
  )
}
