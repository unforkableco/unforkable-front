import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const benefits = [
  'Unforkable engineering expertise in all major blockchain ecosystems',
  'Strong focus on security and code quality',
  'Proven track record with complex blockchain projects',
  'End-to-end development, from concept to deployment',
  'Ongoing support and maintenance services',
  'Transparent communication and project management'
];

const AboutSection: React.FC = () => {
  return (
    <Box id="about" className="about-section" sx={{ py: 10, backgroundColor: 'background.paper' }}>
      <Container maxWidth="lg" className="about-container">
        <Grid container spacing={6} alignItems="center" className="about-grid">
          <Grid item xs={12} md={6} className="about-content-grid">
            <Box className="about-content">
              <Typography 
                variant="overline" 
                className="about-overline"
                sx={{ 
                  color: 'primary.main',
                  fontWeight: 600,
                  letterSpacing: 1.5,
                  mb: 1,
                  display: 'block'
                }}
              >
                ABOUT US
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }} className="about-title-container">
                <img 
                  src="/images/logo - !f (white - no bg).png" 
                  alt="Unforkable Logo Symbol" 
                  className="about-title-logo"
                  style={{ height: '30px', marginRight: '10px' }} 
                />
                <Typography 
                  variant="h2" 
                  component="h2" 
                  className="about-title"
                  sx={{ 
                    fontWeight: 700,
                  }}
                >
                  Why Choose Unforkable?
                </Typography>
              </Box>
              <Typography 
                variant="body1" 
                color="text.secondary" 
                className="about-description"
                sx={{ mb: 4 }}
              >
                Unforkable is a specialized blockchain development agency with a passion for building 
                robust, scalable, and secure blockchain solutions. We combine technical expertise with 
                a deep understanding of the blockchain ecosystem to deliver exceptional results for our 
                clients across various industries.
              </Typography>
              
              <Grid container spacing={2} className="benefits-grid">
                {benefits.map((benefit, index) => (
                  <Grid item xs={12} key={index} className={`benefit-item benefit-item-${index}`}>
                    <Box 
                      className="benefit-container"
                      sx={{ 
                        display: 'flex', 
                        alignItems: 'flex-start',
                        mb: 1 
                      }}
                    >
                      <CheckCircleOutlineIcon 
                        color="primary" 
                        className="benefit-icon"
                        sx={{ mr: 1, fontSize: 20 }} 
                      />
                      <Typography variant="body1" className="benefit-text">
                        {benefit}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={6} className="about-image-grid">
            <Paper 
              className="about-image-paper"
              sx={{ 
                height: 500, 
                borderRadius: 4,
                overflow: 'hidden',
                boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'black'
              }}
            >
              <Box 
                component="img" 
                src="/images/logo - !f (white - no bg).png"
                alt="Unforkable Logo" 
                className="about-image-logo"
                sx={{ 
                  width: 'auto',
                  height: 'auto',
                  maxWidth: '60%',
                  maxHeight: '60%',
                }}
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutSection; 