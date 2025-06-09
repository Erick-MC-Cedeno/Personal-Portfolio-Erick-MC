"use client"
import { Container, Paper, Avatar, Box, Button } from "@mui/material"
import { Email, Visibility } from "@mui/icons-material"
import { TypewriterText } from "./TypewriterText"

const codeLines = [
  "> Especialista en arquitecturas MERN & MEAN",
  "> Desarrollador Web3 & Blockchain",
  "> Experto en Ciberseguridad & Cloud Computing",
  "> Innovador en tecnologías emergentes",
]

export function HeroSection() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Paper
        elevation={0}
        sx={{
          p: 6,
          textAlign: "center",
          background: "linear-gradient(135deg, rgba(26, 26, 26, 0.9) 0%, rgba(45, 45, 45, 0.9) 100%)",
          border: "2px solid #00ffff33",
          borderRadius: 2,
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: "-100%",
            width: "100%",
            height: "100%",
            background: "linear-gradient(90deg, transparent, rgba(0, 255, 255, 0.1), transparent)",
            animation: "scan 3s infinite",
            "@keyframes scan": {
              "0%": { left: "-100%" },
              "100%": { left: "100%" },
            },
          },
        }}
      >
        <Avatar
          sx={{
            width: 120,
            height: 120,
            mx: "auto",
            mb: 3,
            background: "linear-gradient(45deg, #00ffff 0%, #ff0080 100%)",
            fontSize: "3rem",
            fontFamily: "Orbitron",
            fontWeight: "bold",
            boxShadow: "0 0 30px rgba(0, 255, 255, 0.5)",
            border: "2px solid #00ffff",
            animation: "glow 2s ease-in-out infinite alternate",
            "@keyframes glow": {
              from: { boxShadow: "0 0 30px rgba(0, 255, 255, 0.5)" },
              to: { boxShadow: "0 0 40px rgba(0, 255, 255, 0.8)" },
            },
          }}
        >
          EMC
        </Avatar>

        <TypewriterText
          text="ERICK MC CEDENO"
          variant="h3"
          component="h1"
          speed={100}
          delay={500}
          sx={{
            fontFamily: "Orbitron",
            fontWeight: "bold",
            background: "linear-gradient(45deg, #00ffff 0%, #ff0080 50%, #00ff41 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "none",
            mb: 2,
          }}
        />

        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mb: 2 }}>
          <Box
            sx={{
              height: 2,
              width: 50,
              background: "linear-gradient(90deg, transparent, #00ffff, transparent)",
              mr: 2,
            }}
          />
          <TypewriterText
            text="FULL STACK DEVELOPER"
            variant="h5"
            component="h2"
            speed={80}
            delay={2000}
            sx={{
              fontFamily: "Roboto Mono",
              color: "#00ffff",
              textShadow: "0 0 10px #00ffff",
              letterSpacing: "3px",
            }}
          />
          <Box
            sx={{
              height: 2,
              width: 50,
              background: "linear-gradient(90deg, transparent, #00ffff, transparent)",
              ml: 2,
            }}
          />
        </Box>

        <Box sx={{ maxWidth: 600, mx: "auto", mt: 3, textAlign: "left" }}>
          {codeLines.map((line, index) => (
            <TypewriterText
              key={index}
              text={line}
              variant="body1"
              speed={30}
              delay={4000 + index * 1000}
              showCursor={index === codeLines.length - 1}
              sx={{
                color: "#b0b0b0",
                fontFamily: "Roboto Mono",
                lineHeight: 1.8,
                display: "block",
                mb: 0.5,
              }}
            />
          ))}
        </Box>

        <Box sx={{ mt: 4, display: "flex", justifyContent: "center", gap: 2, flexWrap: "wrap" }}>
          <Button
            variant="contained"
            size="large"
            startIcon={<Email />}
            sx={{
              fontFamily: "Orbitron",
              px: 4,
              py: 1.5,
              animation: "fadeInUp 1s ease-out 8s both",
              "@keyframes fadeInUp": {
                from: { opacity: 0, transform: "translateY(30px)" },
                to: { opacity: 1, transform: "translateY(0)" },
              },
            }}
          >
            INICIAR_CONTACTO
          </Button>
          <Button
            variant="outlined"
            size="large"
            startIcon={<Visibility />}
            sx={{
              fontFamily: "Orbitron",
              px: 4,
              py: 1.5,
              animation: "fadeInUp 1s ease-out 8.5s both",
            }}
          >
            VER_PROYECTOS
          </Button>
        </Box>
      </Paper>
    </Container>
  )
}
