import React from 'react';
import { Box, Container, Typography, Grid, Paper, Chip } from '@mui/material';
import useContent from '../hooks/useContent';

const ProjectsSection: React.FC = () => {
  const content = useContent();
  const { overline, title, projects, capabilities } = content.projects;

  return (
    <Box id="projects" className="projects-section" sx={{ py: 4, backgroundColor: 'black', color: 'white' }}>
      <Container maxWidth="lg">
        {/* Projects Header */}
        <Box sx={{ textAlign: 'center', mb: 3 }} className="projects-header">
          <Typography 
            variant="overline" 
            component="div" 
            className="projects-overline"
            sx={{ 
              color: 'primary.main', 
              fontWeight: 600,
              letterSpacing: 1.5,
              mb: 1
            }}
          >
            {overline}
          </Typography>
          
          <Typography 
            variant="h4" 
            component="h2" 
            className="projects-title"
            sx={{ 
              fontWeight: 700,
            }}
          >
            {title}
          </Typography>
        </Box>
        
        {/* Projects Grid */}
        <Grid container spacing={2} className="projects-grid" sx={{ mb: 6 }}>
          {projects.slice(0, 6).map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} className={`project-item project-item-${index + 1}`}>
              <Paper 
                className="project-card"
                elevation={6}
                sx={{
                  p: 2.5,
                  height: '100%',
                  backgroundColor: 'rgba(30, 30, 30, 0.7)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-3px)',
                    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.6), 0 0 10px rgba(212, 175, 55, 0.15)',
                    backgroundColor: 'rgba(40, 40, 40, 0.8)',
                    '& .project-title': {
                      color: 'primary.main'
                    }
                  },
                  borderRadius: 2,
                  border: '1px solid rgba(212, 175, 55, 0.1)',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                {/* Project Logo */}
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                  <Box
                    component="img"
                    src={project.logoSrc}
                    alt={`${project.title} logo`}
                    sx={{
                      height: '30px',
                      width: 'auto',
                      mr: 1.5,
                      filter: 'brightness(1.2)',
                    }}
                  />
                  <Typography 
                    variant="h6" 
                    component="h3" 
                    className="project-title"
                    sx={{ 
                      fontWeight: 600,
                      transition: 'color 0.3s ease',
                      fontSize: '1rem'
                    }}
                  >
                    {project.title}
                  </Typography>
                </Box>
                
                <Typography 
                  variant="body2" 
                  className="project-description"
                  sx={{ 
                    mb: 1.5,
                    color: 'text.secondary',
                    flexGrow: 1,
                    fontSize: '0.85rem'
                  }}
                >
                  {project.description}
                </Typography>
                
                <Box className="project-technologies">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <Chip
                      key={techIndex}
                      label={tech}
                      size="small"
                      className="tech-chip"
                      sx={{
                        mr: 0.5,
                        mb: 0.5,
                        backgroundColor: 'rgba(212, 175, 55, 0.1)',
                        color: 'primary.light',
                        border: '1px solid rgba(212, 175, 55, 0.3)',
                        fontSize: '0.7rem',
                        height: '20px'
                      }}
                    />
                  ))}
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
        
        {/* Capabilities Section - Buzzword Cloud */}
        <Box className="capabilities-section" sx={{ mt: 6 }}>
          <Typography 
            variant="h4" 
            component="h3" 
            align="center" 
            className="capabilities-title"
            sx={{ 
              mb: 4,
              fontWeight: 700,
              background: 'linear-gradient(135deg, #ffffff 0%, rgba(212, 175, 55, 1) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontSize: { xs: '1.8rem', md: '2.2rem' }
            }}
          >
            {capabilities.title}
          </Typography>
          
          <Box 
            className="buzzword-cloud"
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: 1,
              maxWidth: '800px',
              margin: '0 auto'
            }}
          >
            {capabilities.items.map((buzzword, index) => {
              // Create variety in chip sizes and colors
              const isCore = ['Substrate', 'Solidity', 'DeFi Protocols', 'Smart Contracts', 'Rust', 'TypeScript'].includes(buzzword);
              const isFramework = ['Foundry', 'Hardhat', 'Uniswap V2/V3', 'Chainlink', 'React/Vue'].includes(buzzword);
              
              return (
                <Chip
                  key={index}
                  label={buzzword}
                  className={`buzzword-chip buzzword-${index}`}
                  sx={{
                    fontSize: isCore ? '0.9rem' : isFramework ? '0.8rem' : '0.75rem',
                    height: isCore ? '36px' : isFramework ? '32px' : '28px',
                    backgroundColor: isCore 
                      ? 'rgba(212, 175, 55, 0.2)' 
                      : isFramework 
                        ? 'rgba(212, 175, 55, 0.15)' 
                        : 'rgba(212, 175, 55, 0.1)',
                    color: isCore 
                      ? 'rgba(212, 175, 55, 1)' 
                      : isFramework 
                        ? 'rgba(212, 175, 55, 0.9)' 
                        : 'rgba(212, 175, 55, 0.8)',
                    border: isCore 
                      ? '1px solid rgba(212, 175, 55, 0.4)' 
                      : '1px solid rgba(212, 175, 55, 0.2)',
                    fontWeight: isCore ? 600 : isFramework ? 500 : 400,
                    transition: 'all 0.3s ease',
                    cursor: 'default',
                    '&:hover': {
                      backgroundColor: 'rgba(212, 175, 55, 0.3)',
                      color: 'rgba(212, 175, 55, 1)',
                      borderColor: 'rgba(212, 175, 55, 0.6)',
                      transform: 'translateY(-2px) scale(1.05)',
                      boxShadow: '0 4px 12px rgba(212, 175, 55, 0.2)'
                    }
                  }}
                />
              );
            })}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ProjectsSection; 