import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Avatar, Chip, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import useContent from '../hooks/useContent';
import { useTheme } from '../contexts/ThemeContext';

const ProjectsPage: React.FC = () => {
  const content = useContent();
  const navigate = useNavigate();
  const { currentThemeConfig } = useTheme();

  return (
    <Box sx={{ py: 4, backgroundColor: currentThemeConfig.background, minHeight: '100vh' }}>
      {/* Header Section */}
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography 
            variant="h2" 
            sx={{ 
              fontWeight: 800, 
              mb: 3, 
              background: `linear-gradient(135deg, ${currentThemeConfig.textPrimary} 0%, ${currentThemeConfig.primary} 100%)`,
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
              color: currentThemeConfig.textSecondary, 
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
                  background: `linear-gradient(135deg, ${currentThemeConfig.paper}E6 0%, ${currentThemeConfig.background}CC 100%)`,
                  border: `1px solid ${currentThemeConfig.primary}33`,
                  borderRadius: 3,
                  transition: 'all 0.4s ease',
                  position: 'relative',
                  overflow: 'hidden',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: `0 20px 40px ${currentThemeConfig.primary}40`,
                    borderColor: currentThemeConfig.primary,
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
                    background: `radial-gradient(circle, ${currentThemeConfig.primary}20 0%, transparent 70%)`,
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
                        border: `2px solid ${currentThemeConfig.primary}50`,
                        transition: 'all 0.3s ease'
                      }}
                    />
                    <Box>
                      <Typography 
                        variant="h5" 
                        sx={{ 
                          fontWeight: 600, 
                          color: currentThemeConfig.primary, 
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
                              backgroundColor: `${currentThemeConfig.primary}20`,
                              color: currentThemeConfig.primary
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
                      color: currentThemeConfig.textSecondary,
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
                        color: currentThemeConfig.textPrimary, 
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
                            borderColor: `${currentThemeConfig.primary}50`,
                            color: currentThemeConfig.textSecondary,
                            '&:hover': {
                              borderColor: currentThemeConfig.primary,
                              color: currentThemeConfig.primary,
                              backgroundColor: `${currentThemeConfig.primary}10`
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
                        color: currentThemeConfig.textPrimary, 
                        fontWeight: 600, 
                        mb: 1 
                      }}
                    >
                      Key Features:
                    </Typography>
                    {project.title === 'Roko Network' && (
                      <Box>
                        <Typography variant="body2" sx={{ color: currentThemeConfig.textSecondary, fontSize: '0.9rem' }}>
                          • Custom consensus mechanisms<br/>
                          • Advanced governance features<br/>
                          • Substrate-based architecture
                        </Typography>
                      </Box>
                    )}
                    {project.title === 'Alchemix Leverager' && (
                      <Box>
                        <Typography variant="body2" sx={{ color: currentThemeConfig.textSecondary, fontSize: '0.9rem' }}>
                          • Leveraged yield farming<br/>
                          • Automated liquidation protection<br/>
                          • DeFi protocol integration
                        </Typography>
                      </Box>
                    )}
                    {project.title === 'ChicoCrypto Trading Bot' && (
                      <Box>
                        <Typography variant="body2" sx={{ color: currentThemeConfig.textSecondary, fontSize: '0.9rem' }}>
                          • Automated trading strategies<br/>
                          • Risk management systems<br/>
                          • Multi-exchange integration
                        </Typography>
                      </Box>
                    )}
                    {project.title === 'GraphLinq DEX' && (
                      <Box>
                        <Typography variant="body2" sx={{ color: currentThemeConfig.textSecondary, fontSize: '0.9rem' }}>
                          • Decentralized exchange protocol<br/>
                          • Liquidity mining rewards<br/>
                          • Cross-chain compatibility
                        </Typography>
                      </Box>
                    )}
                    {project.title === 'NEXTEP Ecosystem' && (
                      <Box>
                        <Typography variant="body2" sx={{ color: currentThemeConfig.textSecondary, fontSize: '0.9rem' }}>
                          • Complete blockchain ecosystem<br/>
                          • Custom tokenomics<br/>
                          • Validator network management
                        </Typography>
                      </Box>
                    )}
                    {project.title === 'RevoPaid Network' && (
                      <Box>
                        <Typography variant="body2" sx={{ color: currentThemeConfig.textSecondary, fontSize: '0.9rem' }}>
                          • Payment processing system<br/>
                          • Multi-currency support<br/>
                          • Enterprise integration
                        </Typography>
                      </Box>
                    )}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Call to Action */}
        <Box sx={{ textAlign: 'center', mt: 8 }}>
          <Typography 
            variant="h4" 
            sx={{ 
              fontWeight: 700, 
              mb: 3, 
              color: currentThemeConfig.textPrimary 
            }}
          >
            Ready to Build Your Project?
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              color: currentThemeConfig.textSecondary, 
              mb: 4, 
              maxWidth: 600, 
              mx: 'auto' 
            }}
          >
            Let's discuss how we can help bring your blockchain or AI vision to life with our proven expertise.
          </Typography>
          <Button 
            variant="contained" 
            size="large"
            onClick={() => navigate('/contact')}
            sx={{ 
              background: `linear-gradient(135deg, ${currentThemeConfig.primary} 0%, ${currentThemeConfig.secondary} 100%)`,
              px: 4,
              py: 2,
              fontSize: '1.1rem',
              fontWeight: 600,
              boxShadow: `0 8px 32px ${currentThemeConfig.primary}40`,
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: `0 12px 40px ${currentThemeConfig.primary}60`
              }
            }}
          >
            Start Your Project
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ProjectsPage; 