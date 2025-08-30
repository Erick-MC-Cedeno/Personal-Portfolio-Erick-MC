import { Code, Storage, Cloud, Security, Web, Terminal } from "@mui/icons-material"

export const skillCategories = [
  {
    title: "Frontend Development",
    icon: Web,
    skills: ["React", "React Native", "Next.js", "Angular", "JavaScript", "TypeScript", "HTML5", "CSS3", "Material UI"],
    color: "#00ffff",
  },
  {
    title: "Backend Development",
    icon: Terminal,
    skills: ["Node.js", "Express.js", "Nest.js", "RESTful APIs", "GraphQL", "Docker", "Sockets", "Postman", "AI"],
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
    skills: ["AWS", "Google Cloud", "Serverless", "Docker", "Cloudflare", "CI/CD"],
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

    description: "DeepPlay is a video streaming platform where users can upload, watch, rate, and comment on videos.",
    url: "https://github.com/Erick-MC-Cedeno/Video-Play-DeepPlay",
    status: "COMPLETED" as const,
    technologies: ["React", "Node.js", "MongoDB", "TypeScript", "AWS"],
  },
  {
    title: "Crypto Wallet (Full Stack App)",

    description:
      "This is a local demo focused on facilitating secure and efficient transfers on the Ethereum network using smart contracts. It provides a hands-on approach to blockchain transactions, making it easi…",
    url: "https://github.com/Erick-MC-Cedeno/Crypto-Wallet",
    status: "COMPLETED" as const,
    technologies: ["NestJs", "React", "NodeJs", "Web3Js", "Solidity"],
  },
  {
    title: "SafeRide (Mobile App)",

    description:
      "The Ryde or Uber-clone is a React Native-based mobile application that mimics the core functionalities of ride-hailing services like Uber. The project focuses on building a robust and user-friendly…",
    url: "https://github.com/Erick-MC-Cedeno/SafeRide",
    status: "COMPLETED" as const,
    technologies: ["React Native", "NEON", "TypeScript", "RESTful APIs"],
  },
]
