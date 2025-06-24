import React from 'react';
import { Box, Container, Typography, Grid, Card, Chip } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import useContent from '../hooks/useContent';

const AboutPage: React.FC = () => {
  const content = useContent();



  return (
    <Box sx={{ py: 4 }}>
      <Container maxWidth="lg">
        {/* Header Section */}
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
            {content.about.title}
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
            Learn about our journey, expertise, and commitment to delivering exceptional Web3 and AI solutions.
          </Typography>
        </Box>

        {/* Main Content */}
        <Grid container spacing={6} alignItems="center">
          {/* Company Story */}
          <Grid item xs={12} md={8}>
            <Card 
              elevation={8}
              sx={{ 
                background: 'linear-gradient(135deg, rgba(20,20,20,0.9) 0%, rgba(40,40,40,0.8) 100%)',
                border: '1px solid rgba(212, 175, 55, 0.2)',
                borderRadius: 3,
                p: 4
              }}
            >
              <Typography 
                variant="h4" 
                sx={{ 
                  fontWeight: 600, 
                  color: 'primary.main', 
                  mb: 3 
                }}
              >
                Our Story
              </Typography>
              
              <Typography 
                variant="body1" 
                sx={{ 
                  color: 'text.secondary',
                  lineHeight: 1.8,
                  mb: 4,
                  fontSize: '1.1rem'
                }}
              >
                {content.about.description}
              </Typography>
            </Card>
          </Grid>

          {/* Company Image */}
          <Grid item xs={12} md={4}>
            <Box 
              sx={{ 
                display: 'flex', 
                justifyContent: 'center',
                position: 'relative'
              }}
            >
              <Box
                sx={{
                  width: 250,
                  height: 250,
                  borderRadius: 3,
                  background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.2) 0%, rgba(0,0,0,0.8) 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '2px solid rgba(212, 175, 55, 0.3)',
                  position: 'relative',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    inset: -10,
                    borderRadius: 3,
                    background: 'linear-gradient(45deg, transparent, rgba(212, 175, 55, 0.2), transparent)',
                    zIndex: -1
                  }
                }}
              >
                <img 
                  src="/images/logo - !f (orange - black bg).png" 
                  alt="Unforkable Team" 
                  style={{ 
                    width: '60%', 
                    height: 'auto',
                    filter: 'drop-shadow(0 0 20px rgba(212, 175, 55, 0.5))'
                  }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>



        {/* Benefits Section */}
        <Box sx={{ mt: 10 }}>
          <Typography 
            variant="h4" 
            align="center" 
            sx={{ 
              fontWeight: 700, 
              mb: 6, 
              color: 'white'
            }}
          >
            Why Choose Us
          </Typography>
          
          <Grid container spacing={4}>
            {content.about.benefits.map((benefit, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card 
                  elevation={4}
                  sx={{ 
                    p: 3,
                    background: 'linear-gradient(135deg, rgba(20,20,20,0.9) 0%, rgba(40,40,40,0.8) 100%)',
                    border: '1px solid rgba(212, 175, 55, 0.2)',
                    borderRadius: 2,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      borderColor: 'primary.main',
                      boxShadow: '0 12px 24px rgba(212, 175, 55, 0.15)'
                    }
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                    <CheckCircleIcon 
                      sx={{ 
                        color: 'primary.main', 
                        fontSize: 24, 
                        mr: 2, 
                        mt: 0.5,
                        flexShrink: 0
                      }} 
                    />
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        color: 'text.secondary',
                        lineHeight: 1.6,
                        fontWeight: 500
                      }}
                    >
                      {benefit}
                    </Typography>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Technology Expertise */}
        <Box sx={{ mt: 10 }}>
          <Typography 
            variant="h4" 
            align="center" 
            sx={{ 
              fontWeight: 700, 
              mb: 6, 
              color: 'white'
            }}
          >
            Our Expertise
          </Typography>
          
          <Card 
            elevation={8}
            sx={{ 
              p: 4,
              background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(20,20,20,0.9) 100%)',
              border: '1px solid rgba(212, 175, 55, 0.2)',
              borderRadius: 3,
              textAlign: 'center'
            }}
          >
            <Typography 
              variant="h6" 
              sx={{ 
                color: 'white', 
                mb: 3,
                fontWeight: 600
              }}
            >
              Technologies We Master
            </Typography>
            
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center' }}>
              {[
                'Substrate', 'Rust', 'Solidity', 'Vyper', 'Python', 'TensorFlow',
                'Golang', 'React', 'Node.js', 'Polkadot', 'Ethereum', 'Cosmos SDK',
                'Hyperledger', 'Web3.js', 'Ethers.js', 'Machine Learning', 'AI Automation'
              ].map((tech, index) => (
                <Chip 
                  key={index}
                  label={tech} 
                  sx={{ 
                    backgroundColor: 'rgba(212, 175, 55, 0.1)',
                    color: 'primary.light',
                    fontWeight: 500,
                    '&:hover': {
                      backgroundColor: 'rgba(212, 175, 55, 0.2)',
                      transform: 'translateY(-2px)'
                    },
                    transition: 'all 0.3s ease'
                  }}
                />
              ))}
            </Box>
          </Card>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutPage; 