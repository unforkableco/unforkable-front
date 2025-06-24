import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import StorageIcon from '@mui/icons-material/Storage';
import CodeIcon from '@mui/icons-material/Code';
import ComputerIcon from '@mui/icons-material/Computer';
import ExploreIcon from '@mui/icons-material/Explore';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import SupportIcon from '@mui/icons-material/Support';
import useContent from '../hooks/useContent';

const iconMapping = {
  'Blockchain Development': StorageIcon,
  'Smart Contract Development': CodeIcon,
  'DApp Development': ComputerIcon,
  'Explorers': ExploreIcon,
  'Bridge Development': CompareArrowsIcon,
  'Tokenomics': LocalAtmIcon,
  'Maintenance & Support': SupportIcon,
};

const ServicesSection: React.FC = () => {
  const content = useContent();
  const { title, services } = content.services;

  return (
    <Box 
      id="services" 
      className="services-section"
      sx={{ 
        py: 4, 
        backgroundColor: 'background.default',
        backgroundImage: 'linear-gradient(135deg, rgba(212, 175, 55, 0.05) 0%, rgba(0, 0, 0, 0.1) 100%)'
      }}
    >
      <Container maxWidth="lg">
        <Typography 
          variant="h4" 
          component="h2" 
          align="center" 
          className="services-title"
          sx={{ 
            mb: 1,
            color: 'white',
            fontWeight: 700,
          }}
                >
          {title}
        </Typography>
        
        <Grid container spacing={2} className="services-grid" sx={{ mt: 3 }}>
          {services.map((service, index) => {
            const IconComponent = iconMapping[service.title as keyof typeof iconMapping];
            
            return (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Paper 
                  elevation={3}
                  className={`service-card service-card-${index + 1}`}
                  sx={{
                    p: 2,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    border: '1px solid rgba(212, 175, 55, 0.2)',
                    borderRadius: 2,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      borderColor: 'primary.main',
                      backgroundColor: 'rgba(0, 0, 0, 0.9)',
                      boxShadow: '0 10px 30px rgba(212, 175, 55, 0.2)',
                      '& .service-icon': {
                        color: 'primary.light',
                        transform: 'scale(1.1) rotate(5deg)',
                      }
                    }
                  }}
                >
                  {IconComponent && (
                    <IconComponent 
                      className="service-icon"
                      sx={{ 
                        fontSize: 40,
                        color: 'primary.main',
                        mb: 1,
                        transition: 'all 0.3s ease',
                      }} 
                    />
                  )}
                  
                  <Typography 
                    variant="h6" 
                    component="h3" 
                    className="service-title"
                    sx={{ 
                      mb: 1,
                      color: 'white',
                      fontWeight: 600,
                      fontSize: '1rem'
                    }}
                  >
                    {service.title}
                  </Typography>
                  
                  <Typography 
                    variant="body2" 
                    className="service-description"
                    sx={{ 
                      color: 'text.secondary',
                      fontSize: '0.9rem'
                    }}
                  >
                    {service.description}
                  </Typography>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default ServicesSection; 