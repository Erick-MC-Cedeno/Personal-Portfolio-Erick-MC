import type React from "react"
import type { Metadata } from "next"
import { Orbitron, Roboto_Mono } from "next/font/google"
import { createTheme } from "@mui/material/styles"
import "./globals.css"
import "../styles/lockScroll.css"

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  weight: ["400", "500", "600", "700", "800", "900"],
})

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  weight: ["300", "400", "500", "600", "700"],
})

const cyberpunkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#00ffff",
      light: "#64ffff",
      dark: "#00b2b2",
    },
    secondary: {
      main: "#ff0080",
      light: "#ff5aa6",
      dark: "#b20059",
    },
    background: {
      default: "#0a0a0a",
      paper: "#1a1a1a",
    },
    text: {
      primary: "#ffffff",
      secondary: "#b0b0b0",
    },
    success: {
      main: "#00ff41",
    },
    warning: {
      main: "#ffff00",
    },
  },
  typography: {
    fontFamily: '"Orbitron", "Roboto Mono", "Courier New", monospace',
    h1: {
      fontWeight: 700,
      textShadow: "0 0 10px #00ffff",
    },
    h3: {
      fontWeight: 700,
      textShadow: "0 0 8px #00ffff",
    },
    h4: {
      fontWeight: 600,
      textShadow: "0 0 6px #00ffff",
    },
    h6: {
      fontWeight: 600,
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          background: "linear-gradient(145deg, #1a1a1a 0%, #2d2d2d 100%)",
          border: "1px solid #00ffff33",
          boxShadow: "0 0 20px rgba(0, 255, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
          transition: "all 0.3s ease",
          "&:hover": {
            border: "1px solid #00ffff66",
            boxShadow: "0 0 30px rgba(0, 255, 255, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
            transform: "translateY(-2px)",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "uppercase",
          fontWeight: 600,
          letterSpacing: "1px",
          border: "1px solid transparent",
          transition: "all 0.3s ease",
        },
        contained: {
          background: "linear-gradient(45deg, #00ffff 0%, #0080ff 100%)",
          boxShadow: "0 0 20px rgba(0, 255, 255, 0.3)",
          "&:hover": {
            background: "linear-gradient(45deg, #00b2b2 0%, #0066cc 100%)",
            boxShadow: "0 0 30px rgba(0, 255, 255, 0.5)",
            transform: "translateY(-2px)",
          },
        },
        outlined: {
          borderColor: "#00ffff",
          color: "#00ffff",
          "&:hover": {
            borderColor: "#00ffff",
            backgroundColor: "rgba(0, 255, 255, 0.1)",
            boxShadow: "0 0 15px rgba(0, 255, 255, 0.3)",
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          background: "rgba(0, 255, 255, 0.1)",
          border: "1px solid #00ffff66",
          color: "#00ffff",
          fontWeight: 500,
          transition: "all 0.3s ease",
          "&:hover": {
            background: "rgba(0, 255, 255, 0.2)",
            boxShadow: "0 0 10px rgba(0, 255, 255, 0.4)",
            transform: "scale(1.05)",
          },
        },
      },
    },
  },
})

export const metadata: Metadata = {
  title: "Erick MC Cedeno",
  description:
    "Portafolio profesional de Erick MC Cedeno, desarrollador Full Stack especializado en MERN, MEAN, Web3 y Ciberseguridad",
    generator: 'v0.dev'
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
