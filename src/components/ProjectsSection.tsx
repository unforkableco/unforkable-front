import React from 'react';
import { Box, Container, Typography, Grid, Card, Chip } from '@mui/material';
import useContent from '../hooks/useContent';

const ProjectsSection: React.FC = () => {
  const content = useContent();
  const { overline, title, projects, capabilities } = content.projects;

  return (
    <Box 
      id="projects" 
      className="projects-section"
      sx={{ 
        py: 10, 
        backgroundColor: 'black',
        color: 'white'
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ mb: 8 }} className="projects-header">
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
          
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }} className="projects-title-container">
            <img 
              src="/images/logo - !f (orange - no bg).png" 
              alt="Unforkable Logo Symbol" 
              className="projects-title-logo"
              style={{ height: '30px', marginRight: '10px' }} 
            />
            <Typography 
              variant="h2" 
              component="h2" 
              className="projects-title"
              sx={{ 
                fontWeight: 700,
              }}
            >
              {title}
            </Typography>
          </Box>
        </Box>
        
        <Grid container spacing={4} className="projects-grid">
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} key={index} className={`project-item project-item-${index + 1}`}>
              <Card 
                className="project-card"
                sx={{ 
                  borderRadius: 2,
                  overflow: 'hidden',
                  backgroundColor: 'rgba(30, 30, 30, 0.7)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 12px 24px rgba(0, 0, 0, 0.6), 0 0 15px rgba(212, 175, 55, 0.15)',
                  },
                  border: '1px solid rgba(212, 175, 55, 0.1)',
                }}
              >
                <Box 
                  className="project-image-container"
                  sx={{ 
                    height: 200, 
                    backgroundColor: 'rgba(0, 0, 0, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderBottom: '1px solid rgba(212, 175, 55, 0.1)',
                  }}
                >
                  <Box 
                    component="img"
                    src={project.logoSrc}
                    alt={`${project.title} Logo`}
                    className="project-logo"
                    sx={{ 
                      maxWidth: '50%',
                      maxHeight: '50%',
                    }}
                  />
                </Box>
                
                <Box 
                  className="project-content"
                  sx={{ 
                    p: 3,
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <Typography 
                    variant="h5" 
                    component="h3" 
                    className="project-title"
                    sx={{ 
                      mb: 2,
                      fontWeight: 600
                    }}
                  >
                    {project.title}
                  </Typography>
                  
                  <Typography 
                    variant="body2" 
                    className="project-description"
                    sx={{ 
                      mb: 3,
                      color: 'text.secondary',
                      flexGrow: 1
                    }}
                  >
                    {project.description}
                  </Typography>
                  
                  <Box className="project-technologies">
                    {project.technologies.map((tech, i) => (
                      <Chip 
                        key={i}
                        label={tech}
                        className={`project-technology project-technology-${tech.toLowerCase().replace(/\s+/g, '-')}`}
                        sx={{ 
                          mr: 1,
                          mb: 1,
                          backgroundColor: 'rgba(212, 175, 55, 0.1)',
                          color: 'primary.main',
                          borderColor: 'rgba(212, 175, 55, 0.3)',
                          '&:hover': {
                            backgroundColor: 'rgba(212, 175, 55, 0.2)',
                          }
                        }}
                        variant="outlined"
                        size="small"
                      />
                    ))}
                  </Box>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
        
        <Box 
          className="capabilities-section"
          sx={{ 
            mt: 10,
            p: 5,
            backgroundColor: 'rgba(30, 30, 30, 0.7)',
            borderRadius: 3,
            border: '1px solid rgba(212, 175, 55, 0.2)',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 4 }} className="capabilities-title-container">
            <img 
              src="/images/logo - !f (white - no bg).png" 
              alt="Unforkable Logo Symbol" 
              className="capabilities-logo"
              style={{ height: '30px', marginRight: '10px' }} 
            />
            <Typography variant="h3" component="h3" className="capabilities-title">
              {capabilities.title}
            </Typography>
          </Box>
          
          <Grid container spacing={3} className="capabilities-grid">
            {capabilities.items.map((capability, index) => (
              <Grid item xs={12} sm={6} md={3} key={index} className={`capability-item capability-item-${index + 1}`}>
                <Box 
                  className="capability-box"
                  sx={{ 
                    p: 2,
                    borderRadius: 2,
                    border: '1px solid rgba(212, 175, 55, 0.1)',
                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: 'rgba(212, 175, 55, 0.3)',
                      backgroundColor: 'rgba(0, 0, 0, 0.5)',
                      transform: 'translateY(-2px)'
                    }
                  }}
                >
                  <Typography 
                    variant="body2" 
                    className="capability-text"
                    sx={{ 
                      color: 'text.secondary',
                      textAlign: 'center',
                      fontWeight: 500
                    }}
                  >
                    {capability}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default ProjectsSection; 