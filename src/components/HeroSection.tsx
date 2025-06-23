import React from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SecurityIcon from '@mui/icons-material/Security';
import useContent from '../hooks/useContent';

const HeroSection: React.FC = () => {
  const content = useContent();
  const { title, subtitle, primaryButton, secondaryButton } = content.hero;

  return (
    <Box 
      id="hero" 
      className="hero-section"
      sx={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        backgroundColor: 'black',
        color: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Animated Background Elements */}
      <Box 
        className="hero-bg-animations"
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          zIndex: 1,
        }}
      >
        {/* Floating geometric shapes */}
        <Box
          sx={{
            position: 'absolute',
            top: '10%',
            right: '10%',
            width: '150px',
            height: '150px',
            borderRadius: '30%',
            background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.2), rgba(212, 175, 55, 0.05))',
            animation: 'float 6s ease-in-out infinite',
            '@keyframes float': {
              '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
              '50%': { transform: 'translateY(-20px) rotate(180deg)' },
            },
          }}
        />
        
        <Box
          sx={{
            position: 'absolute',
            bottom: '15%',
            left: '5%',
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            border: '2px solid rgba(212, 175, 55, 0.3)',
            animation: 'pulse 4s ease-in-out infinite',
            '@keyframes pulse': {
              '0%, 100%': { transform: 'scale(1)', opacity: 0.3 },
              '50%': { transform: 'scale(1.2)', opacity: 0.6 },
            },
          }}
        />

        {/* Gradient orbs */}
        <Box
          sx={{
            position: 'absolute',
            top: '20%',
            left: '15%',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(212, 175, 55, 0.1) 0%, transparent 70%)',
            animation: 'rotate 20s linear infinite',
            '@keyframes rotate': {
              '0%': { transform: 'rotate(0deg)' },
              '100%': { transform: 'rotate(360deg)' },
            },
          }}
        />

        {/* Grid pattern overlay */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `
              linear-gradient(rgba(212, 175, 55, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(212, 175, 55, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            opacity: 0.3,
            animation: 'gridMove 30s linear infinite',
            '@keyframes gridMove': {
              '0%': { transform: 'translate(0, 0)' },
              '100%': { transform: 'translate(50px, 50px)' },
            },
          }}
        />
      </Box>

      <Container maxWidth="lg" className="hero-container" sx={{ position: 'relative', zIndex: 2 }}>
        <Grid container spacing={6} alignItems="center" className="hero-grid">
          <Grid item xs={12} md={7} className="hero-content-grid">
            <Box className="hero-content">
              {/* Enhanced Logo Section */}
              <Box 
                sx={{ 
                  mb: 4, 
                  display: 'flex', 
                  alignItems: 'center',
                  animation: 'slideInLeft 1s ease-out',
                  '@keyframes slideInLeft': {
                    '0%': { transform: 'translateX(-50px)', opacity: 0 },
                    '100%': { transform: 'translateX(0)', opacity: 1 },
                  },
                }} 
                className="hero-logo-container"
              >
                <Box
                  sx={{
                    p: 1.5,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.2), rgba(212, 175, 55, 0.05))',
                    border: '1px solid rgba(212, 175, 55, 0.3)',
                    mr: 2,
                    animation: 'glow 2s ease-in-out infinite alternate',
                    '@keyframes glow': {
                      '0%': { boxShadow: '0 0 20px rgba(212, 175, 55, 0.3)' },
                      '100%': { boxShadow: '0 0 30px rgba(212, 175, 55, 0.6)' },
                    },
                  }}
                >
                  <img 
                    src="/images/logo - !f (orange - no bg).png" 
                    alt="Unforkable Logo" 
                    className="hero-logo-symbol"
                    style={{ height: '40px' }} 
                  />
                </Box>
                <img 
                  src="/images/logo - unforkable - white.png" 
                  alt="Unforkable Text Logo" 
                  className="hero-logo-text"
                  style={{ height: '35px' }} 
                />
              </Box>
              
              {/* Enhanced Title */}
              <Typography 
                variant="h1" 
                component="h1" 
                className="hero-title"
                sx={{ 
                  fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem', lg: '4rem' },
                  fontWeight: 800,
                  mb: 3,
                  lineHeight: 1.2,
                  background: 'linear-gradient(135deg, #ffffff 0%, rgba(212, 175, 55, 1) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  animation: 'slideInUp 1s ease-out 0.2s both',
                  '@keyframes slideInUp': {
                    '0%': { transform: 'translateY(30px)', opacity: 0 },
                    '100%': { transform: 'translateY(0)', opacity: 1 },
                  },
                }}
              >
                {title}
              </Typography>
              
              {/* Enhanced Subtitle */}
              <Typography 
                variant="h5" 
                component="p" 
                className="hero-subtitle"
                sx={{ 
                  mb: 5,
                  fontWeight: 400,
                  opacity: 0.9,
                  maxWidth: '600px',
                  color: 'text.secondary',
                  fontSize: { xs: '1.1rem', md: '1.3rem' },
                  lineHeight: 1.6,
                  animation: 'slideInUp 1s ease-out 0.4s both',
                }}
              >
                {subtitle}
              </Typography>

              {/* Feature highlights */}
              <Box 
                sx={{ 
                  mb: 5,
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 3,
                  animation: 'slideInUp 1s ease-out 0.6s both',
                }}
                className="hero-features"
              >
                {[
                  { icon: <RocketLaunchIcon />, text: 'Rapid Deployment' },
                  { icon: <SecurityIcon />, text: 'Enterprise Security' },
                  { icon: <TrendingUpIcon />, text: 'Scalable Solutions' }
                ].map((feature, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      p: 1.5,
                      borderRadius: 2,
                      background: 'rgba(212, 175, 55, 0.1)',
                      border: '1px solid rgba(212, 175, 55, 0.2)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        background: 'rgba(212, 175, 55, 0.2)',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
                      },
                    }}
                  >
                    <Box sx={{ color: 'primary.main', mr: 1, fontSize: '1.2rem' }}>
                      {feature.icon}
                    </Box>
                    <Typography variant="body2" sx={{ fontWeight: 500 }}>
                      {feature.text}
                    </Typography>
                  </Box>
                ))}
              </Box>
              
              {/* Enhanced CTA Buttons */}
              <Box 
                className="hero-cta-buttons"
                sx={{
                  animation: 'slideInUp 1s ease-out 0.8s both',
                }}
              >
                <Button 
                  variant="contained" 
                  color="primary" 
                  size="large" 
                  href="#contact"
                  className="hero-primary-button"
                  sx={{ 
                    py: 2, 
                    px: 5,
                    mr: 3,
                    borderRadius: 3,
                    fontWeight: 600,
                    fontSize: '1.1rem',
                    textTransform: 'none',
                    background: 'linear-gradient(135deg, rgba(212, 175, 55, 1) 0%, rgba(255, 193, 7, 1) 100%)',
                    boxShadow: '0 10px 30px rgba(212, 175, 55, 0.3)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-3px)',
                      boxShadow: '0 15px 40px rgba(212, 175, 55, 0.4)',
                    }
                  }}
                >
                  {primaryButton}
                </Button>
                <Button 
                  variant="outlined" 
                  size="large"
                  href="#services"
                  className="hero-secondary-button" 
                  sx={{ 
                    py: 2, 
                    px: 4,
                    borderRadius: 3,
                    fontWeight: 600,
                    fontSize: '1.1rem',
                    textTransform: 'none',
                    color: 'white',
                    borderColor: 'primary.main',
                    borderWidth: '2px',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: 'primary.light',
                      backgroundColor: 'rgba(212, 175, 55, 0.1)',
                      transform: 'translateY(-3px)',
                      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                    }
                  }}
                >
                  {secondaryButton}
                </Button>
              </Box>
            </Box>
          </Grid>
          
          {/* Enhanced Visual Section */}
          <Grid item xs={12} md={5} className="hero-visual-grid">
            <Box
              sx={{
                position: 'relative',
                height: '500px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                animation: 'slideInRight 1s ease-out 1s both',
                '@keyframes slideInRight': {
                  '0%': { transform: 'translateX(50px)', opacity: 0 },
                  '100%': { transform: 'translateX(0)', opacity: 1 },
                },
              }}
            >
              {/* Central logo with enhanced effects */}
              <Box
                sx={{
                  position: 'relative',
                  width: '300px',
                  height: '300px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(212, 175, 55, 0.2) 0%, rgba(0, 0, 0, 0.1) 70%)',
                  border: '2px solid rgba(212, 175, 55, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  animation: 'heroFloat 8s ease-in-out infinite',
                  boxShadow: '0 0 50px rgba(212, 175, 55, 0.3)',
                  '@keyframes heroFloat': {
                    '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
                    '50%': { transform: 'translateY(-20px) rotate(5deg)' },
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    inset: '-20px',
                    borderRadius: '50%',
                    border: '1px solid rgba(212, 175, 55, 0.2)',
                    animation: 'ring 4s linear infinite',
                  },
                  '@keyframes ring': {
                    '0%': { transform: 'rotate(0deg) scale(1)', opacity: 1 },
                    '100%': { transform: 'rotate(360deg) scale(1.1)', opacity: 0 },
                  },
                }}
              >
                <img 
                  src="/images/logo - !f (orange - no bg).png" 
                  alt="Unforkable Logo" 
                  style={{ 
                    width: '60%', 
                    height: 'auto',
                    filter: 'drop-shadow(0 0 20px rgba(212, 175, 55, 0.5))',
                  }} 
                />
              </Box>

              {/* Orbiting elements */}
              {[...Array(3)].map((_, index) => (
                <Box
                  key={index}
                  sx={{
                    position: 'absolute',
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.3), rgba(212, 175, 55, 0.1))',
                    border: '1px solid rgba(212, 175, 55, 0.4)',
                    animation: `orbit${index} ${8 + index * 2}s linear infinite`,
                    [`@keyframes orbit${index}`]: {
                      '0%': { 
                        transform: `rotate(${index * 120}deg) translateX(200px) rotate(-${index * 120}deg)` 
                      },
                      '100%': { 
                        transform: `rotate(${360 + index * 120}deg) translateX(200px) rotate(-${360 + index * 120}deg)` 
                      },
                    },
                  }}
                />
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection; 