import React from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SecurityIcon from '@mui/icons-material/Security';
import useContent from '../hooks/useContent';
import { useTheme } from '../contexts/ThemeContext';

const HeroSection: React.FC = () => {
  const content = useContent();
  const { title, subtitle, primaryButton, secondaryButton } = content.hero;
  const { currentThemeConfig } = useTheme();

  return (
    <Box 
      id="hero" 
      className="hero-section"
      sx={{ 
        height: '85vh', 
        display: 'flex', 
        alignItems: 'center', 
        backgroundColor: currentThemeConfig.background,
        color: currentThemeConfig.textPrimary,
        position: 'relative',
        overflow: 'hidden'
      }}
    >
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
                    background: `linear-gradient(135deg, ${currentThemeConfig.primary}33, ${currentThemeConfig.primary}0D)`,
                    border: `1px solid ${currentThemeConfig.primary}4D`,
                    mr: 2,
                  }}
                >
                <img 
                  src="/images/logo - !f (white - no bg).png" 
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
                  background: `linear-gradient(135deg, #ffffff 0%, ${currentThemeConfig.primary} 100%)`,
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
                  color: currentThemeConfig.textSecondary,
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
                      background: `${currentThemeConfig.primary}1A`,
                      border: `1px solid ${currentThemeConfig.primary}33`,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        background: `${currentThemeConfig.primary}33`,
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

              {/* CTA Buttons */}
              <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
                <Button 
                  variant="contained" 
                  size="large" 
                  sx={{ 
                    background: `linear-gradient(135deg, ${currentThemeConfig.primary} 0%, ${currentThemeConfig.secondary} 100%)`,
                    px: 4,
                    py: 2,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    boxShadow: `0 8px 32px ${currentThemeConfig.primary}4D`,
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: `0 12px 40px ${currentThemeConfig.primary}66`,
                    }
                  }}
                >
                  {primaryButton}
                </Button>
                <Button 
                  variant="outlined" 
                  size="large"
                  sx={{ 
                    borderColor: 'primary.main',
                    color: 'primary.main',
                    px: 4,
                    py: 2,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    borderWidth: 2,
                    '&:hover': {
                      borderWidth: 2,
                      backgroundColor: `${currentThemeConfig.primary}1A`,
                      transform: 'translateY(-2px)'
                    }
                  }}
                >
                  {secondaryButton}
                </Button>
              </Box>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={5}>
            <Box 
              sx={{ 
                display: 'flex', 
                justifyContent: 'center',
                position: 'relative',
                height: '400px',
                alignItems: 'center'
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
                {/* Central Node - Unforkable Logo with orbital ring */}
                <Box
                  className="central-node"
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    background: `radial-gradient(circle, ${currentThemeConfig.primary}60 0%, ${currentThemeConfig.primary}20 70%, transparent 100%)`,
                    border: `3px solid ${currentThemeConfig.primary}B3`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: `0 0 30px ${currentThemeConfig.primary}80, inset 0 0 20px ${currentThemeConfig.primary}40`,
                    animation: 'centralPulse 3s ease-in-out infinite',
                    zIndex: 3,
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: '-10px',
                      left: '-10px',
                      right: '-10px',
                      bottom: '-10px',
                      borderRadius: '50%',
                      border: `1px solid ${currentThemeConfig.primary}40`,
                      animation: 'orbitalRing 8s linear infinite',
                    },
                    '@keyframes centralPulse': {
                      '0%, 100%': { 
                        boxShadow: `0 0 30px ${currentThemeConfig.primary}80, inset 0 0 20px ${currentThemeConfig.primary}40`,
                        transform: 'translate(-50%, -50%) scale(1)'
                      },
                      '50%': { 
                        boxShadow: `0 0 50px ${currentThemeConfig.primary}CC, inset 0 0 30px ${currentThemeConfig.primary}60`,
                        transform: 'translate(-50%, -50%) scale(1.05)'
                      },
                    },
                    '@keyframes orbitalRing': {
                      '0%': { transform: 'rotate(0deg)' },
                      '100%': { transform: 'rotate(360deg)' },
                    },
                  }}
                >
                  <img 
                    src="/images/logo - !f (white - no bg).png" 
                    alt="Unforkable" 
                    style={{ 
                      width: '60px', 
                      height: 'auto',
                      filter: `drop-shadow(0 0 15px ${currentThemeConfig.primary}B3)`,
                      animation: 'logoFloat 4s ease-in-out infinite',
                    }} 
                  />
                </Box>

                {/* Primary Tech Nodes - Main technologies */}
                {[
                  { tech: 'Substrate', pos: { top: '15%', left: '20%' }, delay: '0s', category: 'blockchain' },
                  { tech: 'Solidity', pos: { top: '20%', right: '20%' }, delay: '0.8s', category: 'smart-contract' },
                  { tech: 'DeFi', pos: { bottom: '35%', left: '15%' }, delay: '1.6s', category: 'protocol' },
                  { tech: 'AI Agents', pos: { bottom: '30%', right: '15%' }, delay: '2.4s', category: 'ai' },
                  { tech: 'TypeScript', pos: { bottom: '15%', left: '25%' }, delay: '3.2s', category: 'frontend' },
                  { tech: 'Rust', pos: { top: '8%', left: '75%' }, delay: '4s', category: 'systems' },
                ].map((node, index) => (
                  <Box
                    key={index}
                    className={`tech-node tech-node-${index}`}
                    sx={{
                      position: 'absolute',
                      ...node.pos,
                      width: '75px',
                      height: '75px',
                      borderRadius: '50%',
                      background: `linear-gradient(135deg, ${currentThemeConfig.primary}40, ${currentThemeConfig.primary}10)`,
                      border: `2px solid ${currentThemeConfig.primary}80`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: `${currentThemeConfig.primary}F0`,
                      textAlign: 'center',
                      boxShadow: `0 0 20px ${currentThemeConfig.primary}50`,
                      animation: `techFloat 6s ease-in-out infinite ${node.delay}`,
                      transition: 'all 0.4s ease',
                      zIndex: 2,
                      cursor: 'default',
                      backdropFilter: 'blur(5px)',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: '-5px',
                        left: '-5px',
                        right: '-5px',
                        bottom: '-5px',
                        borderRadius: '50%',
                        border: `1px solid ${currentThemeConfig.primary}30`,
                        animation: `nodeRing 4s linear infinite ${node.delay}`,
                      },
                      '@keyframes techFloat': {
                        '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
                        '25%': { transform: 'translateY(-8px) rotate(2deg)' },
                        '50%': { transform: 'translateY(-15px) rotate(0deg)' },
                        '75%': { transform: 'translateY(-8px) rotate(-2deg)' },
                      },
                      '@keyframes nodeRing': {
                        '0%': { transform: 'rotate(0deg) scale(1)' },
                        '50%': { transform: 'rotate(180deg) scale(1.1)' },
                        '100%': { transform: 'rotate(360deg) scale(1)' },
                      },
                      '&:hover': {
                        transform: 'scale(1.15) translateY(-10px)',
                        boxShadow: `0 0 35px ${currentThemeConfig.primary}80`,
                        borderColor: `${currentThemeConfig.primary}FF`,
                        background: `linear-gradient(135deg, ${currentThemeConfig.primary}60, ${currentThemeConfig.secondary}40)`,
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