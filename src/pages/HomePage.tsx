import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Button, Chip } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import SecurityIcon from '@mui/icons-material/Security';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import useContent from '../hooks/useContent';

const HomePage: React.FC = () => {
  const content = useContent();
  const navigate = useNavigate();

  return (
    <Box>
      {/* Hero Section */}
      <Box 
        sx={{ 
          background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.15) 0%, rgba(0,0,0,0.9) 100%)',
          py: 8,
          position: 'relative',
          overflow: 'hidden',
          minHeight: '70vh',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        {/* Background Pattern */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `
              radial-gradient(circle at 20% 20%, rgba(212, 175, 55, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(212, 175, 55, 0.1) 0%, transparent 50%),
              linear-gradient(45deg, transparent 40%, rgba(212, 175, 55, 0.05) 50%, transparent 60%)
            `,
            zIndex: 1
          }}
        />
        
        {/* Animated Code Elements */}
        <Box
          sx={{
            position: 'absolute',
            top: '10%',
            left: '5%',
            fontSize: '0.8rem',
            fontFamily: 'monospace',
            color: 'rgba(212, 175, 55, 0.3)',
            animation: 'float 6s ease-in-out infinite',
            '@keyframes float': {
              '0%, 100%': { transform: 'translateY(0px)' },
              '50%': { transform: 'translateY(-20px)' }
            }
          }}
        >
          {'// Building the future\n// one block at a time'}
        </Box>
        
        <Box
          sx={{
            position: 'absolute',
            bottom: '15%',
            right: '8%',
            fontSize: '0.7rem',
            fontFamily: 'monospace',
            color: 'rgba(212, 175, 55, 0.2)',
            animation: 'fadeInOut 4s ease-in-out infinite',
            '@keyframes fadeInOut': {
              '0%, 100%': { opacity: 0.2 },
              '50%': { opacity: 0.6 }
            }
          }}
        >
          {'pragma solidity ^0.8.0;\ncontract Innovation { ... }'}
        </Box>
        
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={7}>
              <Box sx={{ mb: 3 }}>
                <Chip 
                  label="🛠️ We Build. You Ship. Everyone Wins." 
                  sx={{ 
                    backgroundColor: 'rgba(212, 175, 55, 0.2)',
                    color: 'primary.main',
                    fontWeight: 600,
                    mb: 3,
                    fontSize: '0.9rem',
                    px: 2,
                    animation: 'pulse 2s ease-in-out infinite',
                    '@keyframes pulse': {
                      '0%': { 
                        boxShadow: '0 0 0 0 rgba(212, 175, 55, 0.4)' 
                      },
                      '70%': { 
                        boxShadow: '0 0 0 10px rgba(212, 175, 55, 0)' 
                      },
                      '100%': { 
                        boxShadow: '0 0 0 0 rgba(212, 175, 55, 0)' 
                      }
                    }
                  }}
                />
              </Box>
              
              <Typography 
                variant="h1" 
                sx={{ 
                  fontWeight: 900, 
                  mb: 3, 
                  color: 'white',
                  fontSize: { xs: '2.5rem', md: '4rem' },
                  lineHeight: 1.1,
                  background: 'linear-gradient(135deg, #ffffff 0%, rgba(212, 175, 55, 1) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                {content.hero.title}
              </Typography>
              
              <Typography 
                variant="h5" 
                sx={{ 
                  mb: 4, 
                  color: 'text.secondary', 
                  maxWidth: 600,
                  lineHeight: 1.6,
                  fontWeight: 400
                }}
              >
                {content.hero.subtitle}
              </Typography>
              
              <Box sx={{ display: 'flex', gap: 2, mb: 4, flexWrap: 'wrap' }}>
                {[
                  { icon: <RocketLaunchIcon />, text: 'Ship Fast, Break Nothing' },
                  { icon: <SecurityIcon />, text: 'Zero Hack Record' },
                  { icon: <TrendingUpIcon />, text: 'Bull & Bear Tested' }
                ].map((feature, index) => (
                  <Chip
                    key={index}
                    icon={feature.icon}
                    label={feature.text}
                    variant="outlined"
                    sx={{
                      borderColor: 'primary.main',
                      color: 'primary.main',
                      backgroundColor: 'rgba(212, 175, 55, 0.1)',
                      '& .MuiChip-icon': { color: 'primary.main' },
                      fontWeight: 500
                    }}
                  />
                ))}
              </Box>
              
              <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
                <Button 
                  variant="contained" 
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                  onClick={() => navigate('/contact')}
                  sx={{ 
                    background: 'linear-gradient(45deg, #D4AF37 30%, #FFD700 90%)',
                    px: 4,
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
                  {content.hero.primaryButton}
                </Button>
                <Button 
                  variant="outlined" 
                  size="large"
                  onClick={() => navigate('/services')}
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
                      backgroundColor: 'rgba(212, 175, 55, 0.1)',
                      transform: 'translateY(-2px)'
                    }
                  }}
                >
                  {content.hero.secondaryButton}
                </Button>
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
                    { tech: 'AI Agents', pos: { bottom: '20%', right: '10%' }, delay: '1.5s' },
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
                    { tech: 'Python', pos: { top: '40%', left: '5%' }, size: '40px' },
                    { tech: 'LLM', pos: { top: '60%', right: '5%' }, size: '40px' },
                    { tech: 'Rust', pos: { top: '35%', right: '30%' }, size: '40px' },
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

      {/* The Unforkable Difference - Interactive Timeline */}
      <Box sx={{ py: 10, position: 'relative', overflow: 'hidden' }}>
        {/* Background Pattern */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.05) 0%, rgba(0,0,0,0.1) 100%)',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: `
                radial-gradient(circle at 25% 25%, rgba(212, 175, 55, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 75% 75%, rgba(212, 175, 55, 0.1) 0%, transparent 50%)
              `,
            }
          }}
        />
        
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography 
              variant="h3" 
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
              The Unforkable Journey
            </Typography>
            <Typography 
              variant="h6" 
              sx={{ 
                color: 'text.secondary', 
                maxWidth: 600, 
                mx: 'auto',
                fontWeight: 400
              }}
            >
              From first smart contract to sophisticated DeFi infrastructure - here's how we got here
            </Typography>
          </Box>

          {/* Interactive Timeline */}
          <Box sx={{ position: 'relative' }}>
            {/* Central Timeline Line */}
            <Box
              sx={{
                position: 'absolute',
                left: '50%',
                top: 0,
                bottom: 0,
                width: '3px',
                background: 'linear-gradient(to bottom, transparent 0%, rgba(212, 175, 55, 0.5) 20%, rgba(212, 175, 55, 0.8) 50%, rgba(212, 175, 55, 0.5) 80%, transparent 100%)',
                transform: 'translateX(-50%)',
                zIndex: 1,
                display: { xs: 'none', md: 'block' }
              }}
            />

            {/* Timeline Items */}
            {[
              {
                year: '2016',
                title: 'The Beginning',
                description: 'Started building when ETH was $300. Weekend hackathons, analytics tools, learning every deployment.',
                icon: '🌱',
                side: 'left',
                code: 'if (eth_price < 300) { start_building(); }'
              },
              {
                year: '2019',
                title: 'First Production',
                description: 'Deployed our first smart contracts. Learned the hard way about gas optimization and security.',
                icon: '🚀',
                side: 'right',
                code: 'contract.deploy({ gasLimit: "too_much" })'
              },
              {
                year: '2021',
                title: 'DeFi Breakthrough',
                description: 'Major DeFi players noticed our work. Started handling millions in TVL with zero hack record.',
                icon: '💎',
                side: 'left',
                code: 'TVL.add(millions); security_incidents = 0;'
              },
              {
                year: '2023',
                title: 'Unforkable Born',
                description: 'Formalized the company. Now the silent partners behind many innovative builders.',
                icon: '⚡',
                side: 'right',
                code: 'Unforkable.initialize({ stealth: true })'
              },
              {
                year: '2024',
                title: 'Full Stack Web3',
                description: 'Complete blockchain ecosystems. From custom Substrate chains to sophisticated DeFi protocols.',
                icon: '🏗️',
                side: 'left',
                code: 'build_everything().from_scratch().ship_fast()'
              }
            ].map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  justifyContent: { xs: 'center', md: item.side === 'left' ? 'flex-start' : 'flex-end' },
                  mb: 6,
                  position: 'relative'
                }}
              >
                {/* Timeline Node */}
                <Box
                  sx={{
                    position: 'absolute',
                    left: '50%',
                    top: '20px',
                    transform: 'translateX(-50%)',
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, rgba(212, 175, 55, 1) 0%, rgba(255, 193, 7, 1) 100%)',
                    border: '3px solid rgba(0,0,0,1)',
                    zIndex: 2,
                    display: { xs: 'none', md: 'block' },
                    animation: `pulse${index} 3s ease-in-out infinite`,
                    [`@keyframes pulse${index}`]: {
                      '0%, 100%': { 
                        boxShadow: '0 0 0 0 rgba(212, 175, 55, 0.4)' 
                      },
                      '50%': { 
                        boxShadow: '0 0 0 10px rgba(212, 175, 55, 0)' 
                      }
                    }
                  }}
                />

                {/* Content Card */}
                <Card
                  elevation={6}
                  sx={{
                    maxWidth: { xs: '100%', md: '450px' },
                    width: '100%',
                    background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(20,20,20,0.95) 100%)',
                    border: '1px solid rgba(212, 175, 55, 0.3)',
                    borderRadius: 3,
                    transition: 'all 0.4s ease',
                    cursor: 'pointer',
                    mr: { xs: 0, md: item.side === 'left' ? 8 : 0 },
                    ml: { xs: 0, md: item.side === 'right' ? 8 : 0 },
                    '&:hover': {
                      transform: 'translateY(-5px) scale(1.02)',
                      boxShadow: '0 15px 35px rgba(212, 175, 55, 0.2)',
                      borderColor: 'primary.main'
                    }
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Box
                        sx={{
                          fontSize: '2rem',
                          mr: 2,
                          animation: 'bounce 2s ease-in-out infinite',
                          '@keyframes bounce': {
                            '0%, 100%': { transform: 'translateY(0)' },
                            '50%': { transform: 'translateY(-5px)' }
                          }
                        }}
                      >
                        {item.icon}
                      </Box>
                      <Box>
                        <Typography 
                          variant="h4" 
                          sx={{ 
                            fontWeight: 700, 
                            color: 'primary.main',
                            fontFamily: 'monospace'
                          }}
                        >
                          {item.year}
                        </Typography>
                        <Typography 
                          variant="h6" 
                          sx={{ 
                            fontWeight: 600, 
                            color: 'white'
                          }}
                        >
                          {item.title}
                        </Typography>
                      </Box>
                    </Box>
                    
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        color: 'text.secondary',
                        lineHeight: 1.6,
                        mb: 3
                      }}
                    >
                      {item.description}
                    </Typography>

                    {/* Code Block */}
                    <Box
                      sx={{
                        backgroundColor: 'rgba(0,0,0,0.6)',
                        border: '1px solid rgba(212, 175, 55, 0.3)',
                        borderRadius: 2,
                        p: 2,
                        fontFamily: 'monospace',
                        fontSize: '0.85rem',
                        color: 'rgba(212, 175, 55, 0.9)',
                        position: 'relative',
                        overflow: 'hidden',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '2px',
                          background: 'linear-gradient(90deg, transparent 0%, rgba(212, 175, 55, 0.5) 50%, transparent 100%)',
                          animation: 'scan 3s ease-in-out infinite',
                          '@keyframes scan': {
                            '0%': { transform: 'translateX(-100%)' },
                            '100%': { transform: 'translateX(100%)' }
                          }
                        }
                      }}
                    >
                      <Box component="span" sx={{ color: 'rgba(100, 255, 100, 0.8)' }}>
                        {'// '}
                      </Box>
                      {item.code}
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>

          {/* Call to Action */}
          <Box sx={{ textAlign: 'center', mt: 8 }}>
            <Typography 
              variant="h5" 
              sx={{ 
                mb: 3, 
                color: 'white',
                fontWeight: 600
              }}
            >
              Ready to be part of the next chapter?
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
              Let's Build Together
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage; 