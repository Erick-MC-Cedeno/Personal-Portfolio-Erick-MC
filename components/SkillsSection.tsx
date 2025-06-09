"use client"
import { Container, Typography, Box, Grid, Card, CardContent, Chip } from "@mui/material"
import { skillCategories } from "../data/portfolioData"
import { TypewriterText } from "./TypewriterText"

export function SkillsSection() {
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
          STACK_TECNOLÓGICO
        </Typography>
        <Box
          sx={{
            height: 2,
            width: 100,
            background: "linear-gradient(90deg, transparent, #ff0080, transparent)",
            mx: "auto",
          }}
        />
      </Box>

      <Grid container spacing={3}>
        {skillCategories.map((category, index) => {
          const IconComponent = category.icon
          return (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <Card
                sx={{
                  height: "100%",
                  position: "relative",
                  animation: `slideInUp 0.6s ease-out ${index * 0.1}s both`,
                  "@keyframes slideInUp": {
                    from: { opacity: 0, transform: "translateY(30px)" },
                    to: { opacity: 1, transform: "translateY(0)" },
                  },
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 3,
                    background: `linear-gradient(90deg, ${category.color}, transparent)`,
                  },
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                    <Box
                      sx={{
                        color: category.color,
                        mr: 2,
                        filter: `drop-shadow(0 0 8px ${category.color})`,
                      }}
                    >
                      <IconComponent />
                    </Box>
                    <TypewriterText
                      text={category.title}
                      variant="h6"
                      component="h3"
                      speed={50}
                      delay={1000 + index * 200}
                      showCursor={false}
                      sx={{
                        fontFamily: "Orbitron",
                        fontWeight: "bold",
                        color: category.color,
                        textShadow: `0 0 10px ${category.color}`,
                      }}
                    />
                  </Box>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    {category.skills.map((skill, skillIndex) => (
                      <Chip
                        key={skillIndex}
                        label={skill}
                        size="small"
                        sx={{
                          fontFamily: "Roboto Mono",
                          fontSize: "0.75rem",
                          fontWeight: 500,
                          animation: `fadeIn 0.5s ease-out ${2000 + index * 200 + skillIndex * 100}ms both`,
                          "@keyframes fadeIn": {
                            from: { opacity: 0 },
                            to: { opacity: 1 },
                          },
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          )
        })}
      </Grid>
    </Container>
  )
}
