import React from 'react';
import { Box, Container, Typography, Button, Chip } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import useContent from '../hooks/useContent';
import { useTheme } from '../contexts/ThemeContext';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const content = useContent();
  const { currentThemeConfig } = useTheme();

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: currentThemeConfig.background }}>
      {/* Hero Section */}
      <Box 
        sx={{ 
          minHeight: '90vh', 
          display: 'flex', 
          alignItems: 'center', 
          backgroundColor: currentThemeConfig.background,
          color: currentThemeConfig.textPrimary,
          position: 'relative',
          overflow: 'hidden',
          pt: { xs: 8, md: 10 }
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography 
              variant="h1" 
              component="h1" 
              sx={{ 
                fontSize: { xs: '2.5rem', md: '4rem' },
                fontWeight: 800,
                mb: 3,
                color: currentThemeConfig.textPrimary,
              }}
            >
              {content.hero.title}
            </Typography>
            
            <Typography 
              variant="h5" 
              component="p" 
              sx={{ 
                mb: 4,
                maxWidth: '800px',
                mx: 'auto',
                color: currentThemeConfig.textSecondary,
                lineHeight: 1.6,
              }}
            >
              {content.hero.subtitle}
            </Typography>

            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 6, flexWrap: 'wrap' }}>
              {['Blockchain Development', 'DeFi Protocols', 'AI Automation'].map((feature, index) => (
                <Chip
                  key={index}
                  label={feature}
                  variant="outlined"
                  sx={{
                    borderColor: currentThemeConfig.primary,
                    color: currentThemeConfig.primary,
                    backgroundColor: `${currentThemeConfig.primary}1A`,
                    fontWeight: 500
                  }}
                />
              ))}
            </Box>
            
            <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap', justifyContent: 'center' }}>
              <Button 
                variant="contained" 
                size="large"
                endIcon={<ArrowForwardIcon />}
                onClick={() => navigate('/contact')}
                sx={{ 
                  background: `linear-gradient(135deg, ${currentThemeConfig.primary} 0%, ${currentThemeConfig.secondary} 100%)`,
                  px: 4,
                  py: 2,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  boxShadow: `0 8px 32px ${currentThemeConfig.primary}4D`,
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: `0 12px 40px ${currentThemeConfig.primary}66`
                  }
                }}
              >
                {content.hero.primaryButton}
              </Button>
              <Button 
                variant="outlined" 
                size="large"
                onClick={() => navigate('/services')}
                sx={{ 
                  borderColor: currentThemeConfig.primary,
                  color: currentThemeConfig.primary,
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
                {content.hero.secondaryButton}
              </Button>
            </Box>
          </Box>

          {/* Tech Stack Visualization */}
          <Box 
            sx={{ 
              display: 'flex', 
              justifyContent: 'center',
              position: 'relative',
              height: '400px',
              alignItems: 'center'
            }}
          >
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
                { tech: 'Smart contracts', pos: { top: '20%', right: '20%' }, delay: '0.8s', category: 'smart-contract' },
                { tech: 'DeFi', pos: { bottom: '35%', left: '15%' }, delay: '1.6s', category: 'protocol' },
                { tech: 'AI Agents', pos: { bottom: '30%', right: '15%' }, delay: '2.4s', category: 'ai' },
                { tech: 'Bots', pos: { bottom: '15%', left: '25%' }, delay: '3.2s', category: 'automation' },
                { tech: 'Layer 2', pos: { top: '10%', left: '45%' }, delay: '4s', category: 'systems' },
                { tech: 'Ethereum', pos: { top: '23%', left: '15%' }, delay: '6s', category: 'systems' },
                { tech: 'Bittensor', pos: { top: '60%', left: '65%' }, delay: '8s', category: 'systems' },
              ].map((node, index) => (
                <Box
                  key={index}
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
        </Container>
      </Box>


    </Box>
  );
};

export default HomePage; 