import type React from "react"
import type { Metadata } from "next"
import { Orbitron, Roboto_Mono } from "next/font/google"
import "./globals.css"
import "../styles/lockScroll.css"

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  weight: ["400", "600", "700"],
  display: "swap",
})

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  weight: ["400", "500", "600"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Erick MC Cedeno",
  description:
    "Portafolio profesional de Erick MC Cedeno, desarrollador Full Stack especializado en MERN, MEAN, Web3 y Ciberseguridad",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${orbitron.variable} ${robotoMono.variable}`}>
      <body className="bg-cyber-dark text-white font-roboto-mono">{children}</body>
    </html>
  )
}
