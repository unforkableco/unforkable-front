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
        py: 4, 
        backgroundColor: 'black',
        color: 'white'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          {/* About Content */}
          <Grid item xs={12} md={8} className="about-content-grid">
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
                src="/images/logo - !f (white - black bg).png" 
                alt="Unforkable Logo Symbol" 
                className="about-title-logo"
                style={{ height: '24px', marginRight: '8px' }} 
              />
              <Typography 
                variant="h4" 
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
                mb: 3,
                lineHeight: 1.6,
                color: 'text.secondary'
              }}
            >
              {description}
            </Typography>
            
            <Grid container spacing={1} className="about-benefits-list">
              {benefits.slice(0, 4).map((benefit, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Box 
                    className={`about-benefit-item about-benefit-${index + 1}`}
                    sx={{ 
                      display: 'flex', 
                      alignItems: 'flex-start',
                      mb: 1 
                    }}
                  >
                    <CheckCircleOutlineIcon 
                      className="about-benefit-icon"
                      sx={{ 
                        color: 'primary.main',
                        mr: 1,
                        mt: 0.3,
                        fontSize: '1.2rem'
                      }} 
                    />
                    <Typography 
                      variant="body2"
                      className="about-benefit-text"
                      sx={{ fontSize: '0.9rem' }}
                    >
                      {benefit}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
          
          {/* About Image */}
          <Grid item xs={12} md={4} className="about-image-grid">
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
                height: '200px',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3), 0 0 30px rgba(212, 175, 55, 0.2) inset',
                border: '1px solid rgba(212, 175, 55, 0.2)',
              }}
            >
              <Box 
                component="img" 
                src="/images/logo - !f (white - black bg).png"
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