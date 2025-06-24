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
        height: '85vh', 
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
            width: '100px',
            height: '100px',
            borderRadius: '30%',
            background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.2), rgba(212, 175, 55, 0.05))',
            animation: 'float 6s ease-in-out infinite',
            '@keyframes float': {
              '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
              '50%': { transform: 'translateY(-15px) rotate(180deg)' },
            },
          }}
        />
        
        <Box
          sx={{
            position: 'absolute',
            bottom: '15%',
            left: '5%',
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            border: '2px solid rgba(212, 175, 55, 0.3)',
            animation: 'pulse 4s ease-in-out infinite',
            '@keyframes pulse': {
              '0%, 100%': { transform: 'scale(1)', opacity: 0.3 },
              '50%': { transform: 'scale(1.2)', opacity: 0.6 },
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
            backgroundSize: '40px 40px',
            opacity: 0.2,
          }}
        />
      </Box>

      <Container maxWidth="lg" className="hero-container" sx={{ position: 'relative', zIndex: 2 }}>
        <Grid container spacing={4} alignItems="center" className="hero-grid">
          <Grid item xs={12} md={7} className="hero-content-grid">
            <Box className="hero-content">
              {/* Enhanced Logo Section */}
              <Box 
                sx={{ 
                  mb: 2, 
                  display: 'flex', 
                  alignItems: 'center',
                }} 
                className="hero-logo-container"
              >
                <Box
                  sx={{
                    p: 1,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.2), rgba(212, 175, 55, 0.05))',
                    border: '1px solid rgba(212, 175, 55, 0.3)',
                    mr: 2,
                  }}
                >
                  <img 
                    src="/images/logo - !f (orange - no bg).png" 
                    alt="Unforkable Logo" 
                    className="hero-logo-symbol"
                    style={{ height: '30px' }} 
                  />
                </Box>
                <img 
                  src="/images/logo - unforkable - white.png" 
                  alt="Unforkable Text Logo" 
                  className="hero-logo-text"
                  style={{ height: '25px' }} 
                />
              </Box>
              
              {/* Enhanced Title */}
              <Typography 
                variant="h1" 
                component="h1" 
                className="hero-title"
                sx={{ 
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                  fontWeight: 800,
                  mb: 2,
                  lineHeight: 1.2,
                  background: 'linear-gradient(135deg, #ffffff 0%, rgba(212, 175, 55, 1) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {title}
              </Typography>
              
              {/* Enhanced Subtitle */}
              <Typography 
                variant="h6" 
                component="p" 
                className="hero-subtitle"
                sx={{ 
                  mb: 3,
                  fontWeight: 400,
                  opacity: 0.9,
                  maxWidth: '600px',
                  color: 'text.secondary',
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  lineHeight: 1.5,
                }}
              >
                {subtitle}
              </Typography>

              {/* Feature highlights */}
              <Box 
                sx={{ 
                  mb: 3,
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 2,
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
                      p: 1,
                      borderRadius: 2,
                      background: 'rgba(212, 175, 55, 0.1)',
                      border: '1px solid rgba(212, 175, 55, 0.2)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        background: 'rgba(212, 175, 55, 0.2)',
                        transform: 'translateY(-2px)',
                      },
                    }}
                  >
                    <Box sx={{ color: 'primary.main', mr: 1, fontSize: '1rem' }}>
                      {feature.icon}
                    </Box>
                    <Typography variant="body2" sx={{ fontWeight: 500, fontSize: '0.85rem' }}>
                      {feature.text}
                    </Typography>
                  </Box>
                ))}
              </Box>
              
              {/* Enhanced CTA Buttons */}
              <Box className="hero-cta-buttons">
                <Button 
                  variant="contained" 
                  color="primary" 
                  size="medium" 
                  href="#contact"
                  className="hero-primary-button"
                  sx={{ 
                    py: 1.5, 
                    px: 4,
                    mr: 2,
                    borderRadius: 2,
                    fontWeight: 600,
                    textTransform: 'none',
                    background: 'linear-gradient(135deg, rgba(212, 175, 55, 1) 0%, rgba(255, 193, 7, 1) 100%)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                    }
                  }}
                >
                  {primaryButton}
                </Button>
                <Button 
                  variant="outlined" 
                  size="medium"
                  href="#services"
                  className="hero-secondary-button" 
                  sx={{ 
                    py: 1.5, 
                    px: 3,
                    borderRadius: 2,
                    fontWeight: 600,
                    textTransform: 'none',
                    color: 'white',
                    borderColor: 'primary.main',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: 'primary.light',
                      backgroundColor: 'rgba(212, 175, 55, 0.1)',
                      transform: 'translateY(-2px)',
                    }
                  }}
                >
                  {secondaryButton}
                </Button>
              </Box>
            </Box>
          </Grid>
          
          {/* Tech Network Visualization - Updated */}
          <Grid item xs={12} md={5} className="hero-visual-grid">
            <Box
              sx={{
                position: 'relative',
                height: '400px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {/* Tech Nodes Network */}
              <Box
                className="tech-network"
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                }}
              >
                {/* Connection Lines */}
                <svg
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 1,
                  }}
                >
                  {/* Central hub connections */}
                  <line x1="50%" y1="50%" x2="20%" y2="20%" stroke="rgba(212, 175, 55, 0.3)" strokeWidth="1" opacity="0.6">
                    <animate attributeName="opacity" values="0.3;0.8;0.3" dur="3s" repeatCount="indefinite" />
                  </line>
                  <line x1="50%" y1="50%" x2="80%" y2="25%" stroke="rgba(212, 175, 55, 0.3)" strokeWidth="1" opacity="0.6">
                    <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2.5s" repeatCount="indefinite" />
                  </line>
                  <line x1="50%" y1="50%" x2="15%" y2="70%" stroke="rgba(212, 175, 55, 0.3)" strokeWidth="1" opacity="0.6">
                    <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite" />
                  </line>
                  <line x1="50%" y1="50%" x2="85%" y2="75%" stroke="rgba(212, 175, 55, 0.3)" strokeWidth="1" opacity="0.6">
                    <animate attributeName="opacity" values="0.8;0.3;0.8" dur="3.5s" repeatCount="indefinite" />
                  </line>
                  <line x1="50%" y1="50%" x2="30%" y2="85%" stroke="rgba(212, 175, 55, 0.3)" strokeWidth="1" opacity="0.6">
                    <animate attributeName="opacity" values="0.5;0.9;0.5" dur="2.8s" repeatCount="indefinite" />
                  </line>
                  <line x1="50%" y1="50%" x2="70%" y2="10%" stroke="rgba(212, 175, 55, 0.3)" strokeWidth="1" opacity="0.6">
                    <animate attributeName="opacity" values="0.4;0.7;0.4" dur="3.2s" repeatCount="indefinite" />
                  </line>
                </svg>

                {/* Central Node - Unforkable Logo */}
                <Box
                  className="central-node"
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(212, 175, 55, 0.3) 0%, rgba(212, 175, 55, 0.1) 70%)',
                    border: '2px solid rgba(212, 175, 55, 0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 0 20px rgba(212, 175, 55, 0.4)',
                    animation: 'pulse 2s ease-in-out infinite',
                    zIndex: 3,
                    '@keyframes pulse': {
                      '0%, 100%': { boxShadow: '0 0 20px rgba(212, 175, 55, 0.4)' },
                      '50%': { boxShadow: '0 0 30px rgba(212, 175, 55, 0.6)' },
                    },
                  }}
                >
                  <img 
                    src="/images/logo - !f (orange - no bg).png" 
                    alt="Unforkable" 
                    style={{ 
                      width: '50px', 
                      height: 'auto',
                      filter: 'drop-shadow(0 0 10px rgba(212, 175, 55, 0.5))',
                    }} 
                  />
                </Box>

                {/* Tech Nodes */}
                {[
                  { tech: 'Substrate', pos: { top: '15%', left: '15%' }, delay: '0s' },
                  { tech: 'Solidity', pos: { top: '20%', right: '15%' }, delay: '0.5s' },
                  { tech: 'DeFi', pos: { bottom: '25%', left: '10%' }, delay: '1s' },
                  { tech: 'Rust', pos: { bottom: '20%', right: '10%' }, delay: '1.5s' },
                  { tech: 'React', pos: { bottom: '10%', left: '25%' }, delay: '2s' },
                  { tech: 'Web3', pos: { top: '5%', left: '65%' }, delay: '2.5s' },
                ].map((node, index) => (
                  <Box
                    key={index}
                    className={`tech-node tech-node-${index}`}
                    sx={{
                      position: 'absolute',
                      ...node.pos,
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.2), rgba(212, 175, 55, 0.05))',
                      border: '1px solid rgba(212, 175, 55, 0.4)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.7rem',
                      fontWeight: 600,
                      color: 'rgba(212, 175, 55, 0.9)',
                      textAlign: 'center',
                      boxShadow: '0 0 15px rgba(212, 175, 55, 0.2)',
                      animation: `float 4s ease-in-out infinite ${node.delay}`,
                      transition: 'all 0.3s ease',
                      zIndex: 2,
                      cursor: 'default',
                      '@keyframes float': {
                        '0%, 100%': { transform: 'translateY(0px)' },
                        '50%': { transform: 'translateY(-10px)' },
                      },
                      '&:hover': {
                        transform: 'scale(1.1) translateY(-5px)',
                        boxShadow: '0 0 25px rgba(212, 175, 55, 0.4)',
                        borderColor: 'rgba(212, 175, 55, 0.7)',
                      },
                    }}
                  >
                    {node.tech}
                  </Box>
                ))}

                {/* Additional smaller nodes */}
                {[
                  { tech: 'TS', pos: { top: '40%', left: '5%' }, size: '40px' },
                  { tech: 'AWS', pos: { top: '60%', right: '5%' }, size: '40px' },
                  { tech: 'ETH', pos: { top: '35%', right: '30%' }, size: '40px' },
                ].map((node, index) => (
                  <Box
                    key={`small-${index}`}
                    className={`small-tech-node small-tech-node-${index}`}
                    sx={{
                      position: 'absolute',
                      ...node.pos,
                      width: node.size,
                      height: node.size,
                      borderRadius: '50%',
                      background: 'rgba(212, 175, 55, 0.1)',
                      border: '1px solid rgba(212, 175, 55, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.6rem',
                      fontWeight: 500,
                      color: 'rgba(212, 175, 55, 0.7)',
                      animation: `float 3s ease-in-out infinite ${index * 0.7}s`,
                      zIndex: 1,
                      '&:hover': {
                        transform: 'scale(1.1)',
                        color: 'rgba(212, 175, 55, 1)',
                      },
                    }}
                  >
                    {node.tech}
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection; 