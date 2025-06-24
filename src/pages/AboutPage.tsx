import React from 'react';
import { Box, Container, Typography, Grid, Card, Chip } from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business';
import SecurityIcon from '@mui/icons-material/Security';
import GroupIcon from '@mui/icons-material/Group';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import useContent from '../hooks/useContent';
import { useTheme } from '../contexts/ThemeContext';
import LinkedInSection from '../components/LinkedInSection';

const AboutPage: React.FC = () => {
  const content = useContent();
  const { currentThemeConfig } = useTheme();

  const stats = [
    { icon: <BusinessIcon />, label: 'Founded', value: '2016' },
    { icon: <TrendingUpIcon />, label: 'Projects Delivered', value: '50+' },
    { icon: <SecurityIcon />, label: 'Security Record', value: '100%' },
    { icon: <GroupIcon />, label: 'Global Team', value: '24/7' }
  ];

  const technologies = [
    'Substrate', 'Solidity', 'Rust', 'TypeScript', 'React', 'Node.js',
    'Python', 'Docker', 'Kubernetes', 'AWS', 'PostgreSQL', 'Redis',
    'Chainlink', 'Uniswap', 'IPFS', 'GraphQL', 'Web3.js', 'Ethers.js'
  ];

  return (
    <Box sx={{ backgroundColor: currentThemeConfig.background, minHeight: '100vh', pt: 10 }}>
      {/* Hero Section with Prominent Logo */}
      <Box 
        sx={{ 
          py: 8, 
          backgroundColor: currentThemeConfig.background,
          color: currentThemeConfig.textPrimary,
          textAlign: 'center',
          position: 'relative'
        }}
      >
        <Container maxWidth="lg">
          {/* Massive Logo Section */}
          <Box sx={{ mb: 6 }}>
            <Box
              sx={{
                width: { xs: 250, md: 350 },
                height: { xs: 250, md: 350 },
                mx: 'auto',
                mb: 4,
                position: 'relative',
                borderRadius: '50%',
                border: `3px solid ${currentThemeConfig.primary}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'transparent',
              }}
            >
              <img 
                src="/images/logo - !f (orange - no bg).png" 
                alt="Unforkable Logo" 
                style={{ 
                  width: '80%', 
                  height: '80%',
                  objectFit: 'contain'
                }} 
              />
            </Box>
            
            <Typography 
              variant="h2" 
              sx={{ 
                fontWeight: 800,
                mb: 2,
                color: currentThemeConfig.textPrimary,
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                textTransform: 'uppercase',
                letterSpacing: '0.1em'
              }}
            >
              UNFORKABLE
            </Typography>
            
            <Typography 
              variant="h5" 
              sx={{ 
                color: currentThemeConfig.primary,
                fontWeight: 600,
                mb: 6
              }}
            >
              Blockchain Development Agency
            </Typography>
          </Box>

          {/* Company Stats */}
          <Grid container spacing={4} sx={{ mb: 8 }}>
            {stats.map((stat, index) => (
              <Grid item xs={6} md={3} key={index}>
                <Card
                  elevation={0}
                  sx={{
                    backgroundColor: 'transparent',
                    border: `1px solid ${currentThemeConfig.primary}`,
                    borderRadius: 3,
                    p: 3,
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: currentThemeConfig.secondary,
                      transform: 'translateY(-4px)',
                    }
                  }}
                >
                  <Box sx={{ color: currentThemeConfig.primary, mb: 2, fontSize: '2rem' }}>
                    {stat.icon}
                  </Box>
                  <Typography 
                    variant="h4" 
                    sx={{ 
                      fontWeight: 700, 
                      color: currentThemeConfig.primary,
                      mb: 1
                    }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: currentThemeConfig.textSecondary,
                      fontWeight: 500
                    }}
                  >
                    {stat.label}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Story Section */}
      <Box sx={{ py: 8, backgroundColor: currentThemeConfig.background }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography 
                variant="overline" 
                sx={{ 
                  color: currentThemeConfig.primary,
                  fontWeight: 600,
                  letterSpacing: '0.2em'
                }}
              >
                {content.about.overline}
              </Typography>
              <Typography 
                variant="h3" 
                sx={{ 
                  fontWeight: 700, 
                  mb: 3,
                  color: currentThemeConfig.textPrimary
                }}
              >
                {content.about.title}
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  p: 4,
                  borderRadius: 3,
                  backgroundColor: 'transparent',
                  border: `1px solid ${currentThemeConfig.primary}`,
                  position: 'relative',
                }}
              >
                <Typography 
                  variant="body1" 
                  sx={{ 
                    lineHeight: 1.8,
                    color: currentThemeConfig.textSecondary,
                    fontSize: '1.1rem'
                  }}
                >
                  {content.about.description}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Benefits Section */}
      <Box sx={{ py: 8, backgroundColor: currentThemeConfig.background }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h4" 
            sx={{ 
              textAlign: 'center', 
              mb: 6,
              fontWeight: 700,
              color: currentThemeConfig.textPrimary
            }}
          >
            Why Choose Unforkable
          </Typography>
          <Grid container spacing={3}>
            {content.about.benefits.map((benefit, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card
                  elevation={0}
                  sx={{
                    p: 3,
                    backgroundColor: 'transparent',
                    border: `1px solid ${currentThemeConfig.primary}`,
                    borderRadius: 2,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: currentThemeConfig.secondary,
                      transform: 'translateY(-2px)',
                    }
                  }}
                >
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      color: currentThemeConfig.textSecondary,
                      lineHeight: 1.6,
                      '&::before': {
                        content: '"✓"',
                        color: currentThemeConfig.primary,
                        fontWeight: 'bold',
                        marginRight: 1
                      }
                    }}
                  >
                    {benefit}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Technology Arsenal */}
      <Box sx={{ py: 8, backgroundColor: currentThemeConfig.background }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h4" 
            sx={{ 
              textAlign: 'center', 
              mb: 6,
              fontWeight: 700,
              color: currentThemeConfig.textPrimary
            }}
          >
            Technology Arsenal
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center' }}>
            {technologies.map((tech, index) => (
              <Chip
                key={index}
                label={tech}
                variant="outlined"
                sx={{
                  borderColor: currentThemeConfig.primary,
                  color: currentThemeConfig.primary,
                  backgroundColor: 'transparent',
                  fontWeight: 500,
                  fontSize: '0.9rem',
                  '&:hover': {
                    borderColor: currentThemeConfig.secondary,
                    color: currentThemeConfig.secondary,
                  }
                }}
              />
            ))}
          </Box>
        </Container>
      </Box>

      {/* LinkedIn Section */}
      <Box sx={{ py: 8, backgroundColor: currentThemeConfig.background }}>
        <Container maxWidth="lg">
          <LinkedInSection variant="full" />
        </Container>
      </Box>
    </Box>
  );
};

export default AboutPage; 