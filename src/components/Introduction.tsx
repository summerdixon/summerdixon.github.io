import { Box, Typography } from '@mui/material';

const introText = "I'm a 3rd-year Computer Science and Engineering student at UCLA focusing on Al/ML, human-centered computing, and building intuitive, impactful software systems. I worked full-time as a Software Engineering Intern at Cast & Crew, contributing to backend features, frontend redesigns, and internal tooling for large-scale production systems. My technical experience also includes deep-learning research in computational imaging at the Ozcan Lab and explorations in generative Al and 3D modeling. My Digital Humanities minor complements my engineering work by helping me design websites and Al tools that are practical, accessible, and user-centered."

export default function Introduction() {
    return (
        <Box className="contentContainer">
            <Typography className="heading">Introduction</Typography>
            <Typography className="body">{introText}</Typography>
        </Box>
    );
}