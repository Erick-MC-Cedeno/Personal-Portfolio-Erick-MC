"use client"
import { Container, Typography, Box, Grid, Card, CardContent } from "@mui/material"
import { experiences } from "../data/portfolioData"
import { TypewriterText } from "./TypewriterText"

export function ExperienceSection() {
  return (
    <Container maxWidth="lg" sx={{ mb: 6 }}>
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography
          variant="h4"
          component="h2"
          sx={{
            fontFamily: "Orbitron",
            fontWeight: "bold",
            color: "#00ffff",
            textShadow: "0 0 20px #00ffff",
            mb: 1,
          }}
        >
          EXPERIENCIA_PROFESIONAL
        </Typography>
        <Box
          sx={{
            height: 2,
            width: 100,
            background: "linear-gradient(90deg, transparent, #00ff41, transparent)",
            mx: "auto",
          }}
        />
      </Box>

      <Grid container spacing={3}>
        {experiences.map((exp, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card
              sx={{
                height: "100%",
                position: "relative",
                animation: `slideInRight 0.6s ease-out ${index * 0.2}s both`,
                "@keyframes slideInRight": {
                  from: { opacity: 0, transform: "translateX(30px)" },
                  to: { opacity: 1, transform: "translateX(0)" },
                },
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: -10,
                  right: 20,
                  bgcolor: exp.status === "ACTIVE" ? "#00ff41" : "#ff0080",
                  color: "#000",
                  px: 2,
                  py: 0.5,
                  borderRadius: 1,
                  fontSize: "0.75rem",
                  fontWeight: "bold",
                  fontFamily: "Orbitron",
                  boxShadow: `0 0 15px ${exp.status === "ACTIVE" ? "#00ff41" : "#ff0080"}`,
                  animation: "pulse 2s infinite",
                }}
              >
                {exp.status}
              </Box>
              <CardContent sx={{ pt: 4, p: 3 }}>
                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: "Roboto Mono",
                    color: "#00ffff",
                    mb: 1,
                    textShadow: "0 0 5px #00ffff",
                  }}
                >
                  {exp.period}
                </Typography>
                <TypewriterText
                  text={exp.title}
                  variant="h6"
                  component="h3"
                  speed={40}
                  delay={1000 + index * 500}
                  showCursor={false}
                  sx={{
                    fontFamily: "Orbitron",
                    fontWeight: "bold",
                    color: "#ffffff",
                    mb: 2,
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{
                    color: "#b0b0b0",
                    fontFamily: "Roboto Mono",
                    lineHeight: 1.6,
                  }}
                >
                  {exp.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
