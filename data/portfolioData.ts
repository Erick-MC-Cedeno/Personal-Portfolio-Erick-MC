import { Code, Storage, Cloud, Security, Web, Terminal } from "@mui/icons-material"

export const skillCategories = [
  {
    title: "Frontend Development",
    icon: Web,
    skills: ["React", "React Native", "JavaScript", "TypeScript", "HTML5", "CSS3", "Material UI"],
    color: "#00ffff",
  },
  {
    title: "Backend Development",
    icon: Terminal,
    skills: ["Node.js", "Express.js", "Nest.js", "RESTful APIs", "GraphQL"],
    color: "#ff0080",
  },
  {
    title: "Databases",
    icon: Storage,
    skills: ["MongoDB", "SQL", "PostgreSQL", "MySQL", "Redis"],
    color: "#00ff41",
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["AWS", "Serverless", "Docker", "Cloudflare", "CI/CD"],
    color: "#ffff00",
  },
  {
    title: "Blockchain & Web3",
    icon: Code,
    skills: ["Web3.js", "Smart Contracts", "DeFi", "Blockchain Development"],
    color: "#ff6600",
  },
  {
    title: "Security & Networking",
    icon: Security,
    skills: ["Cybersecurity", "Network Security", "Cloudflare", "SSL/TLS", "Penetration Testing"],
    color: "#ff0080",
  },
]

export const experiences = [
  {
    title: "Video-Play-DeepPlay (Full Stack App)",
    period: "2022 - Present",
    description:
      "Desarrollo de aplicaciones web completas usando MongoDB, Express.js, React y Node.js. Implementación de arquitecturas escalables y APIs RESTful.",
    url: "https://github.com/Erick-MC-Cedeno/Video-Play-DeepPlay",
    status: "ACTIVE" as const,
    technologies: ["React", "Node.js", "MongoDB", "TypeScript", "AWS"],
  },
  {
    title: "Crypto Wallet (Full Stack App)",
    period: "2021 - 2022",
    description:
      "Desarrollo con MongoDB, NestJs, React, NodeJs, Web3Js, RPC, Solidity, y Smart contracts. Creación de aplicaciones empresariales y sistemas de gestión.",
    url: "https://github.com/Erick-MC-Cedeno/Crypto-Wallet",
    status: "COMPLETED" as const,
    technologies: ["NestJs", "React", "NodeJs", "Web3Js", "Solidity"],
  },
  {
    title: "SafeRide (Mobile App)",
    period: "2020 - 2021",
    description:
      "Desarrollo de aplicaciones móviles con React Native. Integración con servicios cloud y APIs de terceros.",
    url: "https://github.com/Erick-MC-Cedeno/SafeRide",
    status: "COMPLETED" as const,
    technologies: ["React Native", "NEON", "TypeScript", "RESTful APIs"],
  },
]
