import React from 'react';
import { Box, Container, Typography, Grid, Card, Chip } from '@mui/material';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import SecurityIcon from '@mui/icons-material/Security';
import StorageIcon from '@mui/icons-material/Storage';
import CloudIcon from '@mui/icons-material/Cloud';
import ExploreIcon from '@mui/icons-material/Explore';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import SpeedIcon from '@mui/icons-material/Speed';
import CodeIcon from '@mui/icons-material/Code';
import useContent from '../hooks/useContent';

const ProjectsSection: React.FC = () => {
  const content = useContent();
  const { overline, title, projects, capabilities } = content.projects;

  // Function to get icons for each capability
  const getCapabilityIcon = (capability: string, index: number) => {
    const iconMap = [
      <StorageIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      <RocketLaunchIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      <SecurityIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      <CloudIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      <ExploreIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      <CompareArrowsIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      <SpeedIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      <CodeIcon sx={{ fontSize: 40, color: 'primary.main' }} />
    ];
    return iconMap[index] || <CodeIcon sx={{ fontSize: 40, color: 'primary.main' }} />;
  };

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
        
        {/* Enhanced Capabilities Section */}
        <Box 
          className="capabilities-section"
          sx={{ 
            mt: 12,
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Animated Background Elements */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(0, 0, 0, 0.8) 50%, rgba(212, 175, 55, 0.05) 100%)',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: '-50%',
                left: '-50%',
                width: '200%',
                height: '200%',
                background: 'radial-gradient(circle, rgba(212, 175, 55, 0.1) 0%, transparent 70%)',
                animation: 'rotate 20s linear infinite',
              },
              '@keyframes rotate': {
                '0%': { transform: 'rotate(0deg)' },
                '100%': { transform: 'rotate(360deg)' },
              },
            }}
          />
          
          <Box
            sx={{
              position: 'relative',
              zIndex: 2,
              p: 6,
              borderRadius: 4,
              border: '2px solid rgba(212, 175, 55, 0.3)',
              backdropFilter: 'blur(10px)',
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(212, 175, 55, 0.2)',
            }}
          >
            {/* Title Section with Enhanced Graphics */}
            <Box 
              sx={{ 
                textAlign: 'center', 
                mb: 6,
                position: 'relative'
              }} 
              className="capabilities-title-container"
            >
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 2,
                  p: 2,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.2), rgba(212, 175, 55, 0.05))',
                  border: '1px solid rgba(212, 175, 55, 0.3)',
                  animation: 'pulse 2s ease-in-out infinite',
                  '@keyframes pulse': {
                    '0%, 100%': { transform: 'scale(1)', boxShadow: '0 0 20px rgba(212, 175, 55, 0.3)' },
                    '50%': { transform: 'scale(1.05)', boxShadow: '0 0 30px rgba(212, 175, 55, 0.5)' },
                  },
                }}
              >
                <img 
                  src="/images/logo - !f (orange - no bg).png" 
                  alt="Unforkable Logo Symbol" 
                  className="capabilities-logo"
                  style={{ height: '50px' }} 
                />
              </Box>
              
              <Typography 
                variant="h2" 
                component="h3" 
                className="capabilities-title"
                sx={{ 
                  fontWeight: 800,
                  background: 'linear-gradient(135deg, #ffffff 0%, rgba(212, 175, 55, 1) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  textAlign: 'center',
                  mb: 2,
                  textShadow: '0 0 30px rgba(212, 175, 55, 0.3)',
                }}
              >
                {capabilities.title}
              </Typography>
              
              <Box
                sx={{
                  width: '100px',
                  height: '4px',
                  background: 'linear-gradient(90deg, transparent, rgba(212, 175, 55, 1), transparent)',
                  margin: '0 auto',
                  borderRadius: '2px',
                  animation: 'shimmer 2s ease-in-out infinite',
                  '@keyframes shimmer': {
                    '0%, 100%': { opacity: 0.5 },
                    '50%': { opacity: 1 },
                  },
                }}
              />
            </Box>
            
            {/* Enhanced Capabilities Grid */}
            <Grid container spacing={4} className="capabilities-grid">
              {capabilities.items.map((capability, index) => (
                <Grid item xs={12} sm={6} md={3} key={index} className={`capability-item capability-item-${index + 1}`}>
                  <Box 
                    className="capability-card"
                    sx={{ 
                      p: 3,
                      borderRadius: 3,
                      background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%)',
                      border: '1px solid rgba(212, 175, 55, 0.2)',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      position: 'relative',
                      overflow: 'hidden',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      cursor: 'pointer',
                      '&:hover': {
                        borderColor: 'rgba(212, 175, 55, 0.6)',
                        background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.2) 0%, rgba(0, 0, 0, 0.6) 100%)',
                        transform: 'translateY(-8px) scale(1.02)',
                        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.7), 0 0 30px rgba(212, 175, 55, 0.3)',
                        '& .capability-icon': {
                          transform: 'scale(1.2) rotate(5deg)',
                          filter: 'drop-shadow(0 0 10px rgba(212, 175, 55, 0.7))',
                        },
                        '& .capability-text': {
                          color: 'white',
                        },
                        '&::before': {
                          opacity: 1,
                        }
                      },
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: '-50%',
                        left: '-50%',
                        width: '200%',
                        height: '200%',
                        background: 'conic-gradient(from 0deg, transparent, rgba(212, 175, 55, 0.1), transparent)',
                        animation: 'rotate 3s linear infinite',
                        opacity: 0,
                        transition: 'opacity 0.3s ease',
                      },
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        inset: '1px',
                        borderRadius: '11px',
                        background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.9) 100%)',
                        zIndex: -1,
                      }
                    }}
                  >
                    <Box
                      className="capability-icon"
                      sx={{
                        mb: 2,
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        zIndex: 2,
                      }}
                    >
                      {getCapabilityIcon(capability, index)}
                    </Box>
                    
                    <Typography 
                      variant="body1" 
                      className="capability-text"
                      sx={{ 
                        color: 'text.secondary',
                        fontWeight: 600,
                        lineHeight: 1.4,
                        transition: 'color 0.3s ease',
                        zIndex: 2,
                        fontSize: '0.95rem',
                      }}
                    >
                      {capability}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ProjectsSection; 