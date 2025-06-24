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
          overflow: 'hidden'
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
                background: `linear-gradient(135deg, #ffffff 0%, ${currentThemeConfig.primary} 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
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
              {/* Connection Lines with improved animations */}
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
                <defs>
                  {/* Gradient definitions for dynamic lines */}
                  <linearGradient id="primaryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor={currentThemeConfig.primary} stopOpacity="0.8">
                      <animate attributeName="stop-opacity" values="0.3;0.9;0.3" dur="3s" repeatCount="indefinite" />
                    </stop>
                    <stop offset="50%" stopColor={currentThemeConfig.secondary} stopOpacity="0.6">
                      <animate attributeName="stop-opacity" values="0.6;0.2;0.6" dur="4s" repeatCount="indefinite" />
                    </stop>
                    <stop offset="100%" stopColor={currentThemeConfig.primary} stopOpacity="0.4">
                      <animate attributeName="stop-opacity" values="0.4;0.8;0.4" dur="3.5s" repeatCount="indefinite" />
                    </stop>
                  </linearGradient>
                  
                  <linearGradient id="secondaryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor={currentThemeConfig.secondary} stopOpacity="0.6" />
                    <stop offset="100%" stopColor={currentThemeConfig.primary} stopOpacity="0.3" />
                  </linearGradient>

                  {/* Animated dash patterns */}
                  <pattern id="flowPattern" patternUnits="userSpaceOnUse" width="20" height="4">
                    <rect width="20" height="4" fill="none" />
                    <circle cx="2" cy="2" r="1" fill={currentThemeConfig.primary} opacity="0.8">
                      <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="10" cy="2" r="1" fill={currentThemeConfig.secondary} opacity="0.6">
                      <animate attributeName="opacity" values="1;0;1" dur="2s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="18" cy="2" r="1" fill={currentThemeConfig.primary} opacity="0.4">
                      <animate attributeName="opacity" values="0;1;0" dur="2s" begin="0.5s" repeatCount="indefinite" />
                    </circle>
                  </pattern>
                </defs>

                {/* Primary curved connections from center to main nodes */}
                <path 
                  d="M 50% 50% Q 35% 32% 20% 15%" 
                  stroke="url(#primaryGradient)" 
                  strokeWidth="3" 
                  fill="none"
                  opacity="0.8"
                  strokeDasharray="5,3"
                >
                  <animate attributeName="stroke-dashoffset" values="0;-16" dur="4s" repeatCount="indefinite" />
                  <animate attributeName="stroke-width" values="2;4;2" dur="5s" repeatCount="indefinite" />
                </path>

                <path 
                  d="M 50% 50% Q 65% 35% 80% 20%" 
                  stroke="url(#primaryGradient)" 
                  strokeWidth="3" 
                  fill="none"
                  opacity="0.8"
                  strokeDasharray="8,4"
                >
                  <animate attributeName="stroke-dashoffset" values="0;-24" dur="3.5s" repeatCount="indefinite" />
                  <animate attributeName="stroke-width" values="3;5;3" dur="4.5s" repeatCount="indefinite" />
                </path>

                <path 
                  d="M 50% 50% Q 32% 57% 15% 65%" 
                  stroke="url(#primaryGradient)" 
                  strokeWidth="3" 
                  fill="none"
                  opacity="0.8"
                  strokeDasharray="6,2"
                >
                  <animate attributeName="stroke-dashoffset" values="0;-16" dur="3s" repeatCount="indefinite" />
                  <animate attributeName="stroke-width" values="2;4;2" dur="4s" repeatCount="indefinite" />
                </path>

                <path 
                  d="M 50% 50% Q 67% 60% 85% 70%" 
                  stroke="url(#primaryGradient)" 
                  strokeWidth="3" 
                  fill="none"
                  opacity="0.8"
                  strokeDasharray="4,3"
                >
                  <animate attributeName="stroke-dashoffset" values="0;-14" dur="4.5s" repeatCount="indefinite" />
                  <animate attributeName="stroke-width" values="2;3;2" dur="3.8s" repeatCount="indefinite" />
                </path>

                <path 
                  d="M 50% 50% Q 37% 67% 25% 85%" 
                  stroke="url(#primaryGradient)" 
                  strokeWidth="3" 
                  fill="none"
                  opacity="0.8"
                  strokeDasharray="7,3"
                >
                  <animate attributeName="stroke-dashoffset" values="0;-20" dur="3.8s" repeatCount="indefinite" />
                  <animate attributeName="stroke-width" values="3;5;3" dur="4.2s" repeatCount="indefinite" />
                </path>

                <path 
                  d="M 50% 50% Q 62% 29% 75% 8%" 
                  stroke="url(#primaryGradient)" 
                  strokeWidth="3" 
                  fill="none"
                  opacity="0.8"
                  strokeDasharray="5,4"
                >
                  <animate attributeName="stroke-dashoffset" values="0;-18" dur="4.2s" repeatCount="indefinite" />
                  <animate attributeName="stroke-width" values="2;4;2" dur="3.5s" repeatCount="indefinite" />
                </path>

                {/* Complex secondary connections between outer nodes */}
                <path 
                  d="M 20% 15% Q 50% 5% 80% 20%" 
                  stroke="url(#secondaryGradient)" 
                  strokeWidth="2" 
                  fill="none"
                  opacity="0.4"
                  strokeDasharray="3,6"
                >
                  <animate attributeName="stroke-dashoffset" values="0;-18" dur="6s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.2;0.6;0.2" dur="8s" repeatCount="indefinite" />
                </path>

                <path 
                  d="M 15% 65% Q 20% 75% 25% 85%" 
                  stroke="url(#secondaryGradient)" 
                  strokeWidth="2" 
                  fill="none"
                  opacity="0.4"
                  strokeDasharray="4,5"
                >
                  <animate attributeName="stroke-dashoffset" values="0;-18" dur="5.5s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.3;0.5;0.3" dur="7s" repeatCount="indefinite" />
                </path>

                <path 
                  d="M 80% 20% Q 90% 45% 85% 70%" 
                  stroke="url(#secondaryGradient)" 
                  strokeWidth="2" 
                  fill="none"
                  opacity="0.4"
                  strokeDasharray="2,4"
                >
                  <animate attributeName="stroke-dashoffset" values="0;-12" dur="7s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.2;0.5;0.2" dur="6.5s" repeatCount="indefinite" />
                </path>

                {/* Tertiary connections to smaller nodes with organic curves */}
                <path 
                  d="M 50% 50% Q 29% 42% 8% 35%" 
                  stroke={`${currentThemeConfig.primary}60`} 
                  strokeWidth="1.5" 
                  fill="none"
                  opacity="0.5"
                  strokeDasharray="2,3"
                >
                  <animate attributeName="stroke-dashoffset" values="0;-10" dur="5s" repeatCount="indefinite" />
                </path>

                <path 
                  d="M 50% 50% Q 71% 52% 92% 45%" 
                  stroke={`${currentThemeConfig.primary}60`} 
                  strokeWidth="1.5" 
                  fill="none"
                  opacity="0.5"
                  strokeDasharray="3,4"
                >
                  <animate attributeName="stroke-dashoffset" values="0;-14" dur="4.5s" repeatCount="indefinite" />
                </path>

                <path 
                  d="M 50% 50% Q 72% 62% 75% 55%" 
                  stroke={`${currentThemeConfig.primary}60`} 
                  strokeWidth="1.5" 
                  fill="none"
                  opacity="0.5"
                  strokeDasharray="2,2"
                >
                  <animate attributeName="stroke-dashoffset" values="0;-8" dur="3.5s" repeatCount="indefinite" />
                </path>

                <path 
                  d="M 50% 50% Q 42% 75% 35% 50%" 
                  stroke={`${currentThemeConfig.primary}60`} 
                  strokeWidth="1.5" 
                  fill="none"
                  opacity="0.5"
                  strokeDasharray="1,3"
                >
                  <animate attributeName="stroke-dashoffset" values="0;-8" dur="4s" repeatCount="indefinite" />
                </path>

                <path 
                  d="M 50% 50% Q 47% 37% 45% 25%" 
                  stroke={`${currentThemeConfig.primary}60`} 
                  strokeWidth="1.5" 
                  fill="none"
                  opacity="0.5"
                  strokeDasharray="2,4"
                >
                  <animate attributeName="stroke-dashoffset" values="0;-12" dur="3.8s" repeatCount="indefinite" />
                </path>

                <path 
                  d="M 50% 50% Q 70% 79% 60% 92%" 
                  stroke={`${currentThemeConfig.primary}60`} 
                  strokeWidth="1.5" 
                  fill="none"
                  opacity="0.5"
                  strokeDasharray="3,2"
                >
                  <animate attributeName="stroke-dashoffset" values="0;-10" dur="4.2s" repeatCount="indefinite" />
                </path>

                {/* Micro connections to tiny nodes */}
                <path 
                  d="M 50% 50% Q 45% 31% 40% 12%" 
                  stroke={`${currentThemeConfig.secondary}80`} 
                  strokeWidth="1" 
                  fill="none"
                  opacity="0.4"
                  strokeDasharray="1,2"
                >
                  <animate attributeName="stroke-dashoffset" values="0;-6" dur="3s" repeatCount="indefinite" />
                </path>

                <path 
                  d="M 50% 50% Q 55% 62% 60% 75%" 
                  stroke={`${currentThemeConfig.secondary}80`} 
                  strokeWidth="1" 
                  fill="none"
                  opacity="0.4"
                  strokeDasharray="2,1"
                >
                  <animate attributeName="stroke-dashoffset" values="0;-6" dur="3.5s" repeatCount="indefinite" />
                </path>

                <path 
                  d="M 50% 50% Q 62% 40% 65% 30%" 
                  stroke={`${currentThemeConfig.secondary}80`} 
                  strokeWidth="1" 
                  fill="none"
                  opacity="0.4"
                  strokeDasharray="1,1"
                >
                  <animate attributeName="stroke-dashoffset" values="0;-4" dur="2.8s" repeatCount="indefinite" />
                </path>

                <path 
                  d="M 50% 50% Q 72% 62% 55% 75%" 
                  stroke={`${currentThemeConfig.secondary}80`} 
                  strokeWidth="1" 
                  fill="none"
                  opacity="0.4"
                  strokeDasharray="1,3"
                >
                  <animate attributeName="stroke-dashoffset" values="0;-8" dur="4s" repeatCount="indefinite" />
                </path>

                {/* Dynamic energy pulses */}
                <circle r="3" fill={currentThemeConfig.primary} opacity="0.9">
                  <animateMotion dur="5s" repeatCount="indefinite">
                    <path d="M 50% 50% Q 35% 32% 20% 15%" />
                  </animateMotion>
                  <animate attributeName="r" values="2;5;2" dur="5s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0;1;0" dur="5s" repeatCount="indefinite" />
                </circle>

                <circle r="2" fill={currentThemeConfig.secondary} opacity="0.8">
                  <animateMotion dur="6s" repeatCount="indefinite">
                    <path d="M 50% 50% Q 65% 35% 80% 20%" />
                  </animateMotion>
                  <animate attributeName="r" values="1;4;1" dur="6s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0;0.8;0" dur="6s" repeatCount="indefinite" />
                </circle>

                <circle r="2" fill={currentThemeConfig.primary} opacity="0.7">
                  <animateMotion dur="4s" repeatCount="indefinite">
                    <path d="M 50% 50% Q 32% 57% 15% 65%" />
                  </animateMotion>
                  <animate attributeName="r" values="1;3;1" dur="4s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0;0.9;0" dur="4s" repeatCount="indefinite" />
                </circle>

                <circle r="1.5" fill={currentThemeConfig.secondary} opacity="0.6">
                  <animateMotion dur="7s" repeatCount="indefinite">
                    <path d="M 20% 15% Q 50% 5% 80% 20%" />
                  </animateMotion>
                  <animate attributeName="r" values="1;3;1" dur="7s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0;0.7;0" dur="7s" repeatCount="indefinite" />
                </circle>
              </svg>

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
                  src="/images/logo - !f (orange - no bg).png" 
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

              {/* Secondary Tech Nodes - Supporting technologies */}
              {[
                { tech: 'ElizaOS', pos: { top: '35%', left: '8%' }, size: '50px', category: 'ai' },
                { tech: 'Foundry', pos: { top: '45%', right: '8%' }, size: '50px', category: 'tooling' },
                { tech: 'Chainlink', pos: { top: '55%', right: '25%' }, size: '50px', category: 'oracle' },
                { tech: 'Uniswap', pos: { bottom: '50%', left: '35%' }, size: '50px', category: 'defi' },
                { tech: 'React', pos: { top: '25%', left: '45%' }, size: '45px', category: 'frontend' },
                { tech: 'Python', pos: { bottom: '8%', right: '40%' }, size: '45px', category: 'backend' },
              ].map((node, index) => (
                <Box
                  key={`small-${index}`}
                  sx={{
                    position: 'absolute',
                    ...node.pos,
                    width: node.size,
                    height: node.size,
                    borderRadius: '50%',
                    background: `${currentThemeConfig.primary}25`,
                    border: `1px solid ${currentThemeConfig.primary}60`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.65rem',
                    fontWeight: 600,
                    color: `${currentThemeConfig.primary}CC`,
                    textAlign: 'center',
                    animation: `smallFloat 4s ease-in-out infinite ${index * 0.7}s`,
                    zIndex: 2,
                    backdropFilter: 'blur(3px)',
                    '@keyframes smallFloat': {
                      '0%, 100%': { transform: 'translateY(0px) scale(1)' },
                      '33%': { transform: 'translateY(-5px) scale(1.05)' },
                      '66%': { transform: 'translateY(-8px) scale(0.95)' },
                    },
                    '&:hover': {
                      color: currentThemeConfig.primary,
                      background: `${currentThemeConfig.primary}40`,
                      transform: 'scale(1.1)',
                      borderColor: currentThemeConfig.primary,
                    },
                  }}
                >
                  {node.tech}
                </Box>
              ))}

              {/* Micro nodes for additional technologies */}
              {[
                { tech: 'LLM', pos: { top: '12%', left: '40%' } },
                { tech: 'RAG', pos: { top: '75%', left: '60%' } },
                { tech: 'n8n', pos: { top: '30%', right: '35%' } },
                { tech: 'TWAP', pos: { bottom: '25%', right: '45%' } },
              ].map((node, index) => (
                <Box
                  key={`micro-${index}`}
                  sx={{
                    position: 'absolute',
                    ...node.pos,
                    width: '35px',
                    height: '35px',
                    borderRadius: '50%',
                    background: `${currentThemeConfig.secondary}30`,
                    border: `1px solid ${currentThemeConfig.secondary}50`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.55rem',
                    fontWeight: 500,
                    color: `${currentThemeConfig.secondary}E0`,
                    textAlign: 'center',
                    animation: `microFloat 3s ease-in-out infinite ${index * 0.5}s`,
                    zIndex: 1,
                    '@keyframes microFloat': {
                      '0%, 100%': { opacity: 0.6, transform: 'scale(1)' },
                      '50%': { opacity: 1, transform: 'scale(1.1)' },
                    },
                    '&:hover': {
                      opacity: 1,
                      color: currentThemeConfig.secondary,
                      background: `${currentThemeConfig.secondary}50`,
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

      {/* Timeline Section */}
      <Box 
        sx={{ 
          py: 10, 
          backgroundColor: currentThemeConfig.background,
          position: 'relative' 
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Typography 
            variant="h2" 
            component="h2" 
            sx={{ 
              textAlign: 'center', 
              mb: 6, 
              color: currentThemeConfig.textPrimary,
              fontWeight: 700,
              background: `linear-gradient(135deg, #ffffff 0%, ${currentThemeConfig.primary} 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Our Journey
          </Typography>
          
          <Box sx={{ position: 'relative', maxWidth: '800px', mx: 'auto' }}>
            {/* Timeline line */}
            <Box 
              sx={{
                position: 'absolute',
                left: '50%',
                top: 0,
                bottom: 0,
                width: '2px',
                background: `linear-gradient(to bottom, transparent 0%, ${currentThemeConfig.primary}80 20%, ${currentThemeConfig.primary}CC 50%, ${currentThemeConfig.primary}80 80%, transparent 100%)`,
                transform: 'translateX(-50%)',
                zIndex: 1,
              }}
            />
            
            {[
              { year: '2016', title: 'The Beginning', description: 'Started building when ETH was $300' },
              { year: '2021', title: 'DeFi Breakthrough', description: 'Major DeFi players noticed our work' },
              { year: '2024', title: 'Full Stack Web3', description: 'Complete blockchain ecosystems' }
            ].map((item, index) => (
              <Box 
                key={index}
                sx={{ 
                  display: 'flex', 
                  alignItems: 'center',
                  mb: 6,
                  position: 'relative',
                  '&:nth-of-type(even)': {
                    flexDirection: 'row-reverse',
                    '& .timeline-content': {
                      textAlign: 'right',
                    }
                  }
                }}
              >
                <Box 
                  className="timeline-content"
                  sx={{ 
                    flex: 1, 
                    p: 3,
                    mr: index % 2 === 0 ? 4 : 0,
                    ml: index % 2 === 1 ? 4 : 0,
                    background: `linear-gradient(135deg, ${currentThemeConfig.primary}15 0%, ${currentThemeConfig.background}E6 100%)`,
                    borderRadius: 2,
                    border: `1px solid ${currentThemeConfig.primary}33`,
                  }}
                >
                  <Typography variant="h6" sx={{ color: currentThemeConfig.primary, fontWeight: 600, mb: 1 }}>
                    {item.year}
                  </Typography>
                  <Typography variant="body1" sx={{ color: currentThemeConfig.textPrimary, mb: 1 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: currentThemeConfig.textSecondary }}>
                    {item.description}
                  </Typography>
                </Box>
                
                {/* Timeline dot */}
                <Box 
                  sx={{
                    position: 'absolute',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    background: `linear-gradient(135deg, ${currentThemeConfig.primary} 0%, ${currentThemeConfig.secondary} 100%)`,
                    border: `3px solid ${currentThemeConfig.background}`,
                    zIndex: 2,
                    animation: 'pulse 2s ease-in-out infinite',
                    '@keyframes pulse': {
                      '0%, 100%': { 
                        boxShadow: `0 0 0 0 ${currentThemeConfig.primary}66`
                      },
                      '50%': { 
                        boxShadow: `0 0 0 10px ${currentThemeConfig.primary}00`
                      }
                    }
                  }}
                />
              </Box>
            ))}
          </Box>
          
          <Box sx={{ textAlign: 'center', mt: 8 }}>
            <Button 
              variant="contained" 
              size="large"
              onClick={() => navigate('/contact')}
              sx={{ 
                background: `linear-gradient(135deg, ${currentThemeConfig.primary} 0%, ${currentThemeConfig.secondary} 100%)`,
                px: 6,
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
              Let's Build Together
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage; 