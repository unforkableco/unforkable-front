import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Avatar, Chip, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import useContent from '../hooks/useContent';

const ProjectsPage: React.FC = () => {
  const content = useContent();
  const navigate = useNavigate();

  return (
    <Box sx={{ py: 4 }}>
      {/* Header Section */}
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography 
            variant="h2" 
            sx={{ 
              fontWeight: 800, 
              mb: 3, 
              color: 'white',
              background: 'linear-gradient(135deg, #ffffff 0%, rgba(212, 175, 55, 1) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            {content.projects.title}
          </Typography>
          <Typography 
            variant="h5" 
            sx={{ 
              color: 'text.secondary', 
              maxWidth: 800, 
              mx: 'auto',
              lineHeight: 1.6
            }}
          >
            Explore our portfolio of successful blockchain and AI implementations across various industries and use cases.
          </Typography>
        </Box>

        {/* Projects Grid */}
        <Grid container spacing={4}>
          {content.projects.projects.map((project, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card 
                elevation={8}
                sx={{ 
                  height: '100%',
                  background: 'linear-gradient(135deg, rgba(20,20,20,0.9) 0%, rgba(40,40,40,0.8) 100%)',
                  border: '1px solid rgba(212, 175, 55, 0.2)',
                  borderRadius: 3,
                  transition: 'all 0.4s ease',
                  position: 'relative',
                  overflow: 'hidden',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 20px 40px rgba(212, 175, 55, 0.2)',
                    borderColor: 'primary.main',
                    '& .project-logo': {
                      transform: 'scale(1.1)',
                    },
                    '& .project-bg': {
                      opacity: 0.8,
                    }
                  }
                }}
              >
                {/* Background Pattern */}
                <Box
                  className="project-bg"
                  sx={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '200px',
                    height: '200px',
                    background: 'radial-gradient(circle, rgba(212, 175, 55, 0.1) 0%, transparent 70%)',
                    opacity: 0.5,
                    transition: 'opacity 0.3s ease',
                    zIndex: 1
                  }}
                />
                
                <CardContent sx={{ p: 4, position: 'relative', zIndex: 2 }}>
                  {/* Project Header */}
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Avatar
                      src={project.logoSrc}
                      className="project-logo"
                      sx={{
                        width: 60,
                        height: 60,
                        mr: 2,
                        border: '2px solid rgba(212, 175, 55, 0.3)',
                        transition: 'all 0.3s ease'
                      }}
                    />
                    <Box>
                      <Typography 
                        variant="h5" 
                        sx={{ 
                          fontWeight: 600, 
                          color: 'primary.main', 
                          mb: 0.5 
                        }}
                      >
                        {project.title}
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {project.technologies.slice(0, 2).map((tech, techIndex) => (
                          <Chip 
                            key={techIndex} 
                            label={tech} 
                            size="small"
                            sx={{ 
                              fontSize: '0.7rem', 
                              height: '20px',
                              backgroundColor: 'rgba(212, 175, 55, 0.1)',
                              color: 'primary.light'
                            }}
                          />
                        ))}
                      </Box>
                    </Box>
                  </Box>

                  {/* Project Description */}
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      color: 'text.secondary',
                      lineHeight: 1.6,
                      mb: 3
                    }}
                  >
                    {project.description}
                  </Typography>

                  {/* Technology Stack */}
                  <Box sx={{ mb: 3 }}>
                    <Typography 
                      variant="subtitle2" 
                      sx={{ 
                        color: 'white', 
                        fontWeight: 600, 
                        mb: 1 
                      }}
                    >
                      Technology Stack:
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {project.technologies.map((tech, techIndex) => (
                        <Chip 
                          key={techIndex} 
                          label={tech} 
                          size="small"
                          variant="outlined"
                          sx={{ 
                            borderColor: 'rgba(212, 175, 55, 0.3)',
                            color: 'text.secondary',
                            '&:hover': {
                              borderColor: 'primary.main',
                              color: 'primary.main'
                            }
                          }}
                        />
                      ))}
                    </Box>
                  </Box>

                  {/* Key Features */}
                  <Box sx={{ mb: 3 }}>
                    <Typography 
                      variant="subtitle2" 
                      sx={{ 
                        color: 'white', 
                        fontWeight: 600, 
                        mb: 1 
                      }}
                    >
                      Key Features:
                    </Typography>
                    {project.title === 'Roko Network' && (
                      <Box>
                        <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.9rem' }}>
                          • Custom consensus mechanisms<br/>
                          • Advanced governance features<br/>
                          • Substrate-based architecture
                        </Typography>
                      </Box>
                    )}
                    {project.title === 'Alchemix Leverager' && (
                      <Box>
                        <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.9rem' }}>
                          • Leveraged yield farming<br/>
                          • Automated liquidation protection<br/>
                          • DeFi protocol integration
                        </Typography>
                      </Box>
                    )}
                    {project.title === 'Bittensor' && (
                      <Box>
                        <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.9rem' }}>
                          • AI network development<br/>
                          • Machine learning integration<br/>
                          • Decentralized AI marketplace
                        </Typography>
                      </Box>
                    )}
                    {!['Roko Network', 'Alchemix Leverager', 'Bittensor'].includes(project.title) && (
                      <Box>
                        <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.9rem' }}>
                          • Custom blockchain solutions<br/>
                          • Smart contract development<br/>
                          • Full-stack implementation
                        </Typography>
                      </Box>
                    )}
                  </Box>


                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Capabilities Section - Buzzword Cloud */}
        <Box sx={{ mt: 10 }}>
          <Typography 
            variant="h3" 
            align="center" 
            sx={{ 
              fontWeight: 700, 
              mb: 6, 
              color: 'white',
              background: 'linear-gradient(135deg, #ffffff 0%, rgba(212, 175, 55, 1) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            {content.projects.capabilities.title}
          </Typography>
          
          <Box 
            className="buzzword-cloud"
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: 1.5,
              maxWidth: '1000px',
              margin: '0 auto'
            }}
          >
            {content.projects.capabilities.items.map((buzzword, index) => {
              // Create variety in chip sizes and colors
              const isCore = ['Substrate', 'Solidity', 'DeFi Protocols', 'Smart Contracts', 'Rust', 'TypeScript'].includes(buzzword);
              const isFramework = ['Foundry', 'Hardhat', 'Uniswap V2/V3', 'Chainlink', 'React/Vue'].includes(buzzword);
              
              return (
                <Chip
                  key={index}
                  label={buzzword}
                  className={`buzzword-chip buzzword-${index}`}
                  sx={{
                    fontSize: isCore ? '1rem' : isFramework ? '0.9rem' : '0.8rem',
                    height: isCore ? '40px' : isFramework ? '36px' : '32px',
                    px: isCore ? 2 : isFramework ? 1.5 : 1,
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
                      transform: 'translateY(-3px) scale(1.08)',
                      boxShadow: '0 6px 16px rgba(212, 175, 55, 0.25)'
                    }
                  }}
                />
              );
            })}
          </Box>
        </Box>

        {/* Call to Action */}
        <Box sx={{ textAlign: 'center', mt: 10, p: 6, borderRadius: 3, background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(20,20,20,0.9) 100%)', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 2, color: 'white' }}>
            Have a Project in Mind?
          </Typography>
          <Typography variant="h6" sx={{ color: 'text.secondary', mb: 4, maxWidth: 600, mx: 'auto' }}>
            Let's bring your blockchain or AI vision to life. Our team is ready to tackle complex challenges and deliver innovative solutions.
          </Typography>
          <Button
            variant="contained"
            size="large"
            endIcon={<ArrowForwardIcon />}
            onClick={() => navigate('/contact')}
            sx={{
              background: 'linear-gradient(45deg, #D4AF37 30%, #FFD700 90%)',
              px: 6,
              py: 2,
              fontSize: '1.1rem',
              fontWeight: 600,
              boxShadow: '0 8px 32px rgba(212, 175, 55, 0.3)',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 12px 40px rgba(212, 175, 55, 0.4)'
              }
            }}
          >
            Discuss Your Project
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ProjectsPage; 