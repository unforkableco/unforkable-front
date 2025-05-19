import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import useContent from '../hooks/useContent';
import BlockchainIcon from '@mui/icons-material/Storage';
import SmartContractIcon from '@mui/icons-material/Code';
import DAppIcon from '@mui/icons-material/Computer';
import ExplorerIcon from '@mui/icons-material/Explore';
import BridgeIcon from '@mui/icons-material/CompareArrows';
import TokenomicsIcon from '@mui/icons-material/LocalAtm';
import SupportIcon from '@mui/icons-material/Support';

const ServicesSection: React.FC = () => {
  const content = useContent();
  const { overline, title, services } = content.services;

  // Function to get the appropriate icon based on service title
  const getServiceIcon = (serviceTitle: string) => {
    const iconMap: Record<string, React.ReactNode> = {
      'Blockchain Development': <BlockchainIcon sx={{ color: 'primary.main', fontSize: 48 }} />,
      'Smart Contract Development': <SmartContractIcon sx={{ color: 'primary.main', fontSize: 48 }} />,
      'DApp Development': <DAppIcon sx={{ color: 'primary.main', fontSize: 48 }} />,
      'Explorers': <ExplorerIcon sx={{ color: 'primary.main', fontSize: 48 }} />,
      'Bridge Development': <BridgeIcon sx={{ color: 'primary.main', fontSize: 48 }} />,
      'Tokenomics': <TokenomicsIcon sx={{ color: 'primary.main', fontSize: 48 }} />,
      'Maintenance & Support': <SupportIcon sx={{ color: 'primary.main', fontSize: 48 }} />
    };

    return iconMap[serviceTitle] || null;
  };

  return (
    <Box 
      id="services" 
      className="services-section"
      sx={{ 
        py: 10, 
        backgroundColor: 'black',
        color: 'white'
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }} className="services-header">
          <Typography 
            variant="overline" 
            component="div" 
            className="services-overline"
            sx={{ 
              color: 'primary.main', 
              fontWeight: 600,
              letterSpacing: 1.5,
              mb: 1
            }}
          >
            {overline}
          </Typography>
          
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, justifyContent: 'center' }} className="services-title-container">
            <img 
              src="/images/logo - !f (orange - no bg).png" 
              alt="Unforkable Logo Symbol" 
              className="services-title-logo"
              style={{ height: '30px', marginRight: '10px' }} 
            />
            <Typography 
              variant="h2" 
              component="h2" 
              className="services-title"
              sx={{ 
                fontWeight: 700,
              }}
            >
              {title}
            </Typography>
          </Box>
        </Box>
        
        <Grid container spacing={4} className="services-grid">
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} className={`service-item service-item-${index + 1}`}>
              <Paper 
                className="service-card"
                elevation={6}
                sx={{ 
                  p: 4, 
                  height: '100%',
                  backgroundColor: 'rgba(30, 30, 30, 0.7)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 12px 24px rgba(0, 0, 0, 0.6), 0 0 15px rgba(212, 175, 55, 0.15)',
                    backgroundColor: 'rgba(40, 40, 40, 0.8)',
                    '& .service-title': {
                      color: 'primary.main'
                    },
                    '& .service-icon': {
                      transform: 'scale(1.1)',
                    }
                  },
                  borderRadius: 2,
                  border: '1px solid rgba(212, 175, 55, 0.1)',
                }}
              >
                <Box 
                  className="service-icon-container"
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    mb: 3
                  }}
                >
                  <Box 
                    className="service-icon"
                    sx={{
                      transition: 'transform 0.3s ease',
                    }}
                  >
                    {getServiceIcon(service.title)}
                  </Box>
                </Box>
                <Typography 
                  variant="h5" 
                  component="h3" 
                  className="service-title"
                  sx={{ 
                    mb: 2,
                    fontWeight: 600,
                    transition: 'color 0.3s ease',
                    textAlign: 'center'
                  }}
                >
                  {service.title}
                </Typography>
                <Typography 
                  variant="body1" 
                  className="service-description"
                  sx={{ 
                    color: 'text.secondary' 
                  }}
                >
                  {service.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ServicesSection; 