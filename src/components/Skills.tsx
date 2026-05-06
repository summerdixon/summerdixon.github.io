import { Box, Chip, Divider, Typography } from '@mui/material';

const programmingLanguages = ["Python", "C", "C++", "Java", "JavaScript", "TypeScript", "Rust", "Verilog", "SQL"];
const aiMl = ["PyTorch", "Tensorflow", "Hugging Face", "Pandas", "NumPy", "Stable Diffusion", "RAG"];
const frameworksLibraries = ["React", "Node.js", "FastAPI", "Flask", "Vite", "Three.js", "MUI", "GraphQL", "Jest"];
const systemsDatabasesDevOps = ["Docker", "Azure", "Git/GitHub", "Linux/Unix", "PostgreSQL", "MongoDB", "Supabase", "REST APIs", "Grafana"];
const hardwareEmbeddedSystems = ["Xilinx Vivado", "Arduino", "STM32", "KiCad", "Soldering", "FPGAs"];
const toolsMethodologies = ["Figma", "Adobe", "Tableau", "Jira", "Agile/Scrum"];

export default function Skills() {
    return (
        <Box className="contentContainer">
            <Typography className="heading">Skills</Typography>
            <Typography className="headingSecondary">Programming Languages</Typography>
            <Box className="chipGroup">
                {programmingLanguages.map((item) => (
                    <Chip label={item} className="chip"/>
                ))}
            </Box>
            <Divider/>
            <Typography className="headingSecondary">AI/ML</Typography>
            <Box className="chipGroup">
                {aiMl.map((item) => (
                    <Chip label={item} className="chip"/>
                ))}
            </Box>
            <Divider/>
            <Typography className="headingSecondary">Frameworks & Libraries</Typography>
            <Box className="chipGroup">
                {frameworksLibraries.map((item) => (
                    <Chip label={item} className="chip"/>
                ))}
            </Box>
            <Divider/>
            <Typography className="headingSecondary">Systems, Databases, & DevOps</Typography>
            <Box className="chipGroup">
                {systemsDatabasesDevOps.map((item) => (
                    <Chip label={item} className="chip"/>
                ))}
            </Box>
            <Divider/>
            <Typography className="headingSecondary">Hardware & Embedded Systems</Typography>
            <Box className="chipGroup">
                {hardwareEmbeddedSystems.map((item) => (
                    <Chip label={item} className="chip"/>
                ))}
            </Box>
            <Divider/>
            <Typography className="headingSecondary">Tools & Methodologies</Typography>
            <Box className="chipGroup">
                {toolsMethodologies.map((item) => (
                    <Chip label={item} className="chip"/>
                ))}
            </Box>
        </Box>
    );
}