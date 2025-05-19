import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import useContent from '../hooks/useContent';

const AboutSection: React.FC = () => {
  const content = useContent();
  const { overline, title, description, benefits } = content.about;

  return (
    <Box 
      id="about" 
      className="about-section"
      sx={{ 
        py: 10, 
        backgroundColor: 'black',
        color: 'white'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          {/* About Content */}
          <Grid item xs={12} md={7} className="about-content-grid">
            <Typography 
              variant="overline" 
              component="div" 
              className="about-overline"
              sx={{ 
                color: 'primary.main', 
                fontWeight: 600,
                letterSpacing: 1.5,
                mb: 1
              }}
            >
              {overline}
            </Typography>
            
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }} className="about-title-container">
              <img 
                src="/images/logo - !f (orange - black bg).png" 
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
                {title}
              </Typography>
            </Box>
            
            <Typography 
              variant="body1" 
              className="about-description"
              sx={{ 
                mb: 4,
                lineHeight: 1.7,
                fontSize: '1.1rem',
                color: 'text.secondary'
              }}
            >
              {description}
            </Typography>
            
            <Box className="about-benefits-list">
              {benefits.map((benefit, index) => (
                <Box 
                  key={index}
                  className={`about-benefit-item about-benefit-${index + 1}`}
                  sx={{ 
                    display: 'flex', 
                    alignItems: 'flex-start',
                    mb: 2 
                  }}
                >
                  <CheckCircleOutlineIcon 
                    className="about-benefit-icon"
                    sx={{ 
                      color: 'primary.main',
                      mr: 1,
                      mt: 0.3
                    }} 
                  />
                  <Typography 
                    variant="body1"
                    className="about-benefit-text"
                  >
                    {benefit}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>
          
          {/* About Image */}
          <Grid item xs={12} md={5} className="about-image-grid">
            <Paper 
              elevation={24}
              className="about-image-container"
              sx={{ 
                borderRadius: 3,
                overflow: 'hidden',
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '400px',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3), 0 0 30px rgba(212, 175, 55, 0.2) inset',
                border: '1px solid rgba(212, 175, 55, 0.2)',
              }}
            >
              <Box 
                component="img" 
                src="/images/logo - !f (orange - black bg).png"
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