"use client"
import { Code, Terminal, Database, Cloud, Shield, Globe } from "lucide-react"

const skillCategories = [
	{
		title: "Frontend Development",
		icon: Globe,
		skills: [
			"React",
			"React Native",
			"JavaScript",
			"TypeScript",
			"HTML5",
			"CSS3",
			"Tailwind CSS",
		],
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
		skills: [
			"Cybersecurity",
			"Network Security",
			"Cloudflare",
			"SSL/TLS",
			"Penetration Testing",
		],
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
		<section className="py-12 sm:py-20 relative overflow-hidden">
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
				<div className="text-center mb-12 sm:mb-16">
					<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-orbitron gradient-text mb-4 px-2">
						TECH_STACK
					</h2>
					<div className="h-1 w-32 sm:w-48 bg-gradient-to-r from-cyber-cyan via-cyber-magenta to-cyber-green mx-auto rounded-full" />
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
					{skillCategories.map((category, index) => {
						const IconComponent = category.icon
						const colorValue = colorMap[category.color]
						return (
							<div
								key={index}
								className="cyber-card p-4 sm:p-6 rounded-xl relative overflow-hidden group animate-slideInUp"
								style={{ animationDelay: `${index * 100}ms` }}
							>
								<div
									className="absolute top-0 left-0 right-0 h-1"
									style={{
										background: `linear-gradient(90deg, ${colorValue}, transparent)`,
									}}
								/>

								<div className="flex items-center mb-4 sm:mb-6">
									<div
										className="p-2.5 sm:p-3 rounded-lg border mr-3 sm:mr-4"
										style={{
											background: `linear-gradient(45deg, ${colorValue}22, transparent)`,
											borderColor: `${colorValue}44`,
										}}
									>
										<IconComponent
											className="w-5 h-5 sm:w-6 sm:h-6"
											style={{ color: colorValue }}
										/>
									</div>
									<h3 className="text-lg sm:text-xl font-bold font-orbitron text-white">
										{category.title}
									</h3>
								</div>

								<div className="flex flex-wrap gap-2">
									{category.skills.map((skill, idx) => (
										<span
											key={idx}
											className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-gradient-to-r from-cyber-cyan/10 to-cyber-magenta/10 border border-cyber-cyan/20 rounded text-sm sm:text-base text-cyber-cyan font-roboto-mono whitespace-nowrap"
											style={{
												...(skillLevels[skill] && {
													background: `linear-gradient(90deg, ${colorValue}22, transparent ${
														skillLevels[skill]
													}%)`,
												}),
											}}
										>
											{skill}
										</span>
									))}
								</div>

								<div className="absolute inset-0 border-2 border-transparent transition-colors duration-300 group-hover:border-cyber-cyan/30 rounded-xl pointer-events-none" />
							</div>
						)
					})}
				</div>
			</div>
		</section>
	)
}
