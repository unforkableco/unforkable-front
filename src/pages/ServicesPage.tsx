import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Avatar, Chip, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import StorageIcon from '@mui/icons-material/Storage';
import CodeIcon from '@mui/icons-material/Code';
import ComputerIcon from '@mui/icons-material/Computer';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import SupportIcon from '@mui/icons-material/Support';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import useContent from '../hooks/useContent';

const serviceIcons = {
  'Blockchain Development': StorageIcon,
  'Smart Contract Development': CodeIcon,
  'AI Automation': SmartToyIcon,
  'DApp Development': ComputerIcon,
  'AI-Powered Analytics': AnalyticsIcon,
  'Bridge Development': CompareArrowsIcon,
  'Tokenomics': LocalAtmIcon,
  'Maintenance & Support': SupportIcon,
};

const serviceFeatures = {
  'Blockchain Development': [
    'Custom Substrate chains',
    'Hyperledger solutions',
    'Cosmos SDK implementation',
    'Private & public networks'
  ],
  'Smart Contract Development': [
    'Solidity & Vyper contracts',
    'Gas optimization',
    'Security audits',
    'DeFi protocols'
  ],
  'AI Automation': [
    'Trading bot algorithms',
    'Smart contract automation',
    'Decision systems',
    'ML model integration'
  ],
  'DApp Development': [
    'Frontend guidance',
    'Web3 integration',
    'User experience design',
    'Smart contract connection'
  ],
  'AI-Powered Analytics': [
    'Blockchain data analysis',
    'Predictive modeling',
    'Market insights',
    'Performance metrics'
  ],
  'Bridge Development': [
    'Cross-chain bridges',
    'Asset transfers',
    'Multi-chain support',
    'Security protocols'
  ],
  'Tokenomics': [
    'Economic modeling',
    'Token distribution',
    'Legal compliance',
    'Incentive design'
  ],
  'Maintenance & Support': [
    '24/7 monitoring',
    'Infrastructure management',
    'API maintenance',
    'Technical support'
  ]
};

const ServicesPage: React.FC = () => {
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
            {content.services.title}
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
            We provide comprehensive Web3 and AI solutions, from blockchain development to intelligent automation systems.
          </Typography>
        </Box>

        {/* Services Grid */}
        <Grid container spacing={4}>
          {content.services.services.map((service, index) => {
            const IconComponent = serviceIcons[service.title as keyof typeof serviceIcons];
            const features = serviceFeatures[service.title as keyof typeof serviceFeatures] || [];
            
            return (
              <Grid item xs={12} md={6} lg={4} key={index}>
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
                      '& .service-icon': {
                        transform: 'scale(1.1) rotate(5deg)',
                      }
                    }
                  }}
                >
                  {/* Background Pattern */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: -50,
                      right: -50,
                      width: 100,
                      height: 100,
                      borderRadius: '50%',
                      background: 'radial-gradient(circle, rgba(212, 175, 55, 0.1) 0%, transparent 70%)',
                      zIndex: 1
                    }}
                  />
                  
                  <CardContent sx={{ p: 4, position: 'relative', zIndex: 2 }}>
                    <Box sx={{ textAlign: 'center', mb: 3 }}>
                      <Avatar
                        sx={{
                          width: 80,
                          height: 80,
                          mx: 'auto',
                          mb: 2,
                          backgroundColor: 'rgba(212, 175, 55, 0.1)',
                          border: '2px solid rgba(212, 175, 55, 0.3)',
                          transition: 'all 0.3s ease'
                        }}
                        className="service-icon"
                      >
                        {IconComponent && (
                          <IconComponent sx={{ fontSize: 40, color: 'primary.main' }} />
                        )}
                      </Avatar>
                      
                      <Typography 
                        variant="h5" 
                        sx={{ 
                          fontWeight: 600, 
                          color: 'primary.main', 
                          mb: 2 
                        }}
                      >
                        {service.title}
                      </Typography>
                      
                      <Typography 
                        variant="body1" 
                        sx={{ 
                          color: 'text.secondary',
                          lineHeight: 1.6,
                          mb: 3
                        }}
                      >
                        {service.description}
                      </Typography>
                    </Box>

                    {/* Features List */}
                    <Box sx={{ mb: 3 }}>
                      {features.map((feature, featureIndex) => (
                        <Box 
                          key={featureIndex}
                          sx={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            mb: 1 
                          }}
                        >
                          <CheckCircleIcon 
                            sx={{ 
                              color: 'primary.main', 
                              fontSize: 16, 
                              mr: 1 
                            }} 
                          />
                          <Typography 
                            variant="body2" 
                            sx={{ 
                              color: 'text.secondary',
                              fontSize: '0.9rem'
                            }}
                          >
                            {feature}
                          </Typography>
                        </Box>
                      ))}
                    </Box>

                    {/* Technology Tags */}
                    <Box sx={{ mb: 3 }}>
                      {service.title === 'Blockchain Development' && (
                        <>
                          <Chip label="Substrate" size="small" sx={{ mr: 1, mb: 1, backgroundColor: 'rgba(212, 175, 55, 0.1)', color: 'primary.light' }} />
                          <Chip label="Rust" size="small" sx={{ mr: 1, mb: 1, backgroundColor: 'rgba(212, 175, 55, 0.1)', color: 'primary.light' }} />
                          <Chip label="Golang" size="small" sx={{ mr: 1, mb: 1, backgroundColor: 'rgba(212, 175, 55, 0.1)', color: 'primary.light' }} />
                        </>
                      )}
                      {service.title === 'Smart Contract Development' && (
                        <>
                          <Chip label="Solidity" size="small" sx={{ mr: 1, mb: 1, backgroundColor: 'rgba(212, 175, 55, 0.1)', color: 'primary.light' }} />
                          <Chip label="Vyper" size="small" sx={{ mr: 1, mb: 1, backgroundColor: 'rgba(212, 175, 55, 0.1)', color: 'primary.light' }} />
                          <Chip label="Ethereum" size="small" sx={{ mr: 1, mb: 1, backgroundColor: 'rgba(212, 175, 55, 0.1)', color: 'primary.light' }} />
                        </>
                      )}
                      {service.title === 'AI Automation' && (
                        <>
                          <Chip label="Python" size="small" sx={{ mr: 1, mb: 1, backgroundColor: 'rgba(212, 175, 55, 0.1)', color: 'primary.light' }} />
                          <Chip label="TensorFlow" size="small" sx={{ mr: 1, mb: 1, backgroundColor: 'rgba(212, 175, 55, 0.1)', color: 'primary.light' }} />
                          <Chip label="ML" size="small" sx={{ mr: 1, mb: 1, backgroundColor: 'rgba(212, 175, 55, 0.1)', color: 'primary.light' }} />
                        </>
                      )}
                    </Box>

                    <Button
                      variant="outlined"
                      fullWidth
                      endIcon={<ArrowForwardIcon />}
                      onClick={() => navigate('/contact')}
                      sx={{
                        borderColor: 'primary.main',
                        color: 'primary.main',
                        fontWeight: 600,
                        '&:hover': {
                          borderColor: 'primary.light',
                          backgroundColor: 'rgba(212, 175, 55, 0.1)'
                        }
                      }}
                    >
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>

        {/* Call to Action */}
        <Box sx={{ textAlign: 'center', mt: 8, p: 6, borderRadius: 3, background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(20,20,20,0.9) 100%)', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 2, color: 'white' }}>
            Ready to Build Your Next Project?
          </Typography>
          <Typography variant="h6" sx={{ color: 'text.secondary', mb: 4, maxWidth: 600, mx: 'auto' }}>
            Let's discuss how we can help you achieve your Web3 and AI goals with our expert development services.
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
            Start Your Project
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ServicesPage; 