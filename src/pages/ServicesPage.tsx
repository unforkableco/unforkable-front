import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Card, Chip, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import StorageIcon from '@mui/icons-material/Storage';
import CodeIcon from '@mui/icons-material/Code';
import ComputerIcon from '@mui/icons-material/Computer';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import SupportIcon from '@mui/icons-material/Support';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import LaunchIcon from '@mui/icons-material/Launch';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import useContent from '../hooks/useContent';

const serviceIcons = {
  'AI Agent & Automation Services': SmartToyIcon,
  'Custom Blockchain Development': StorageIcon,
  'DeFi Lending & Borrowing Protocols': LocalAtmIcon,
  'Advanced DeFi Protocol Development': TrendingUpIcon,
  'Frontend & Web3 Integration': ComputerIcon,
  'NFT Marketplaces & Platforms': CodeIcon,
  'Blockchain Migration & Upgrades': CompareArrowsIcon,
  'Oracle Integration & Price Feeds': AnalyticsIcon,
  'Automated Trading & DeFi Integration': TrendingUpIcon,
  'Token Launch Platforms & Factory Systems': LaunchIcon,
};

const serviceFeatures = {
  'AI Agent & Automation Services': [
    'ElizaOS & SmolaAgents integration',
    'Custom AI personalities',
    'Real-time event processing',
    'Social media automation',
    'Self-hosted LLM setups',
    'n8n workflow automation',
    'RAG implementations',
    'Custom MCP Servers'
  ],
  'Custom Blockchain Development': [
    'Advanced Substrate chains',
    'Custom pallets development',
    'Wrapped token economics',
    'EVM precompiles',
    'Governance systems',
    'Hardware security integration',
    'Nanosecond-precision timing',
    'Deployment management'
  ],
  'DeFi Lending & Borrowing Protocols': [
    'Automated risk management',
    'Oracle-based pricing',
    'Liquidation mechanisms',
    'Cooler Loans adaptation',
    'TWAP pricing integration',
    'Chainlink integration',
    'Custom lending facilities',
    'Collateral management'
  ],
  'Advanced DeFi Protocol Development': [
    'Rebasing token mechanics',
    'Dual-token reward systems',
    'Automated trading logic',
    'Dynamic scoring algorithms',
    'Mathematical frameworks',
    'Market condition responses',
    'Supply change adaptation',
    'Complex DeFi protocols'
  ],
  'Frontend & Web3 Integration': [
    'React/Vue frontends',
    'Web3 wallet connections',
    'Smart contract integration',
    'Transaction flow handling',
    'Real-time blockchain data',
    'User interface design',
    'Responsive web design',
    'Web3 best practices'
  ],
  'NFT Marketplaces & Platforms': [
    'Complete NFT ecosystems',
    'Minting platforms',
    'Auction systems',
    'Collection management',
    'ERC721 & ERC1155 support',
    'Metadata handling',
    'Marketplace functionality',
    'Trading mechanisms'
  ],
  'Blockchain Migration & Upgrades': [
    'Cross-chain migrations',
    'User fund protection',
    'Data preservation',
    'Snapshot management',
    'Token swap mechanisms',
    'Validator transitions',
    'Infrastructure upgrades',
    'Migration strategies'
  ],
  'Oracle Integration & Price Feeds': [
    'Chainlink price feeds',
    'Custom TWAP calculations',
    'Sophisticated pricing mechanisms',
    'Market volatility handling',
    'Collateral valuations',
    'DeFi protocol integration',
    'Real-time price updates',
    'Oracle security'
  ],
  'Automated Trading & DeFi Integration': [
    'Uniswap V2/V3 integration',
    'Balancer integration',
    'DEX connectivity',
    'Automated trade execution',
    'Rebase event responses',
    'Market condition analysis',
    'Scoring algorithms',
    'Smart contract automation'
  ],
  'Token Launch Platforms & Factory Systems': [
    'Upgradeable factory architecture',
    'Multiple campaign types',
    'Automated liquidity provisioning',
    'Comprehensive vesting systems',
    'UUPS proxy patterns',
    'Strategy-based management',
    'Token launch ecosystems',
    'Fundraising platforms'
  ]
};

const ServicesPage: React.FC = () => {
  const content = useContent();
  const navigate = useNavigate();
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  return (
    <Box sx={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated Background Elements */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 20% 20%, rgba(212, 175, 55, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(212, 175, 55, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 40% 60%, rgba(212, 175, 55, 0.08) 0%, transparent 50%)
          `,
          animation: 'float 20s ease-in-out infinite',
          zIndex: 1
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, py: 8 }}>
        {/* Header Section */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography 
            variant="h6" 
            sx={{ 
              color: 'primary.main',
              fontWeight: 600,
              letterSpacing: 2,
              mb: 2,
              textTransform: 'uppercase'
            }}
          >
            {content.services.overline}
          </Typography>
          <Typography 
            variant="h1" 
            sx={{ 
              fontWeight: 900, 
              mb: 4, 
              fontSize: { xs: '2.5rem', md: '4rem' },
              background: 'linear-gradient(135deg, #ffffff 0%, rgba(212, 175, 55, 1) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              lineHeight: 1.2
            }}
          >
            {content.services.title}
          </Typography>
          <Typography 
            variant="h5" 
            sx={{ 
              color: 'text.secondary', 
              maxWidth: 800, 
              mx: 'auto',
              lineHeight: 1.6,
              fontSize: { xs: '1.2rem', md: '1.5rem' }
            }}
          >
            Hover over each service to discover what we build and how we can help your project
          </Typography>
        </Box>

        {/* Services Grid */}
        <Grid container spacing={3}>
          {content.services.services.map((service, index) => {
            const IconComponent = serviceIcons[service.title as keyof typeof serviceIcons];
            const features = serviceFeatures[service.title as keyof typeof serviceFeatures] || [];
            const isHovered = hoveredService === index;
            
            return (
              <Grid item xs={12} md={6} lg={4} key={index}>
                <Card 
                  elevation={0}
                  onMouseEnter={() => setHoveredService(index)}
                  onMouseLeave={() => setHoveredService(null)}
                  sx={{ 
                    height: isHovered ? 'auto' : '280px',
                    minHeight: '280px',
                    background: isHovered 
                      ? 'linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(20,20,20,0.95) 100%)'
                      : 'linear-gradient(135deg, rgba(20,20,20,0.6) 0%, rgba(40,40,40,0.4) 100%)',
                    border: isHovered 
                      ? '2px solid rgba(212, 175, 55, 0.6)'
                      : '1px solid rgba(255,255,255,0.1)',
                    borderRadius: 4,
                    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                    position: 'relative',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transform: isHovered ? 'translateY(-12px) scale(1.02)' : 'translateY(0) scale(1)',
                    boxShadow: isHovered 
                      ? '0 25px 50px rgba(212, 175, 55, 0.3), 0 0 0 1px rgba(212, 175, 55, 0.2)'
                      : '0 8px 32px rgba(0,0,0,0.3)',
                    backdropFilter: 'blur(10px)',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: isHovered 
                        ? 'linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, transparent 100%)'
                        : 'transparent',
                      transition: 'all 0.5s ease',
                      zIndex: 1
                    }
                  }}
                >
                  {/* Animated Background Pattern */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: -100,
                      right: -100,
                      width: 200,
                      height: 200,
                      borderRadius: '50%',
                      background: `radial-gradient(circle, ${isHovered ? 'rgba(212, 175, 55, 0.2)' : 'rgba(212, 175, 55, 0.05)'} 0%, transparent 70%)`,
                      transition: 'all 0.5s ease',
                      transform: isHovered ? 'scale(1.5)' : 'scale(1)',
                      zIndex: 1
                    }}
                  />
                  
                  <Box sx={{ p: 4, position: 'relative', zIndex: 2, height: '100%' }}>
                    {/* Service Icon and Title */}
                    <Box sx={{ 
                      textAlign: 'center', 
                      mb: isHovered ? 3 : 4,
                      transition: 'all 0.3s ease'
                    }}>
                      <Box
                        sx={{
                          width: 80,
                          height: 80,
                          mx: 'auto',
                          mb: 3,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          borderRadius: '50%',
                          background: isHovered 
                            ? 'linear-gradient(135deg, rgba(212, 175, 55, 0.2) 0%, rgba(212, 175, 55, 0.1) 100%)'
                            : 'rgba(212, 175, 55, 0.1)',
                          border: `2px solid ${isHovered ? 'rgba(212, 175, 55, 0.6)' : 'rgba(212, 175, 55, 0.2)'}`,
                          transition: 'all 0.5s ease',
                          transform: isHovered ? 'scale(1.1) rotate(5deg)' : 'scale(1) rotate(0deg)',
                        }}
                      >
                        {IconComponent && (
                          <IconComponent 
                            sx={{ 
                              fontSize: 40, 
                              color: isHovered ? 'primary.main' : 'rgba(212, 175, 55, 0.8)',
                              transition: 'all 0.3s ease'
                            }} 
                          />
                        )}
                      </Box>
                      
                      <Typography 
                        variant="h5" 
                        sx={{ 
                          fontWeight: 700, 
                          color: isHovered ? 'primary.main' : 'white',
                          mb: 2,
                          transition: 'all 0.3s ease',
                          fontSize: { xs: '1.3rem', md: '1.5rem' },
                          lineHeight: 1.3
                        }}
                      >
                        {service.title}
                      </Typography>
                    </Box>

                    {/* Service Description - Always visible but changes on hover */}
                    <Box sx={{ 
                      opacity: isHovered ? 0 : 1,
                      transform: isHovered ? 'translateY(-20px)' : 'translateY(0)',
                      transition: 'all 0.3s ease',
                      position: isHovered ? 'absolute' : 'relative',
                      visibility: isHovered ? 'hidden' : 'visible'
                    }}>
                      <Typography 
                        variant="body1" 
                        sx={{ 
                          color: 'text.secondary',
                          lineHeight: 1.6,
                          textAlign: 'center',
                          fontSize: '0.95rem'
                        }}
                      >
                        {service.description.length > 120 
                          ? `${service.description.substring(0, 120)}...`
                          : service.description}
                      </Typography>
                    </Box>

                    {/* Detailed Content - Appears on hover */}
                    <Box sx={{ 
                      opacity: isHovered ? 1 : 0,
                      transform: isHovered ? 'translateY(0)' : 'translateY(20px)',
                      transition: 'all 0.5s ease 0.1s',
                      position: isHovered ? 'relative' : 'absolute',
                      visibility: isHovered ? 'visible' : 'hidden'
                    }}>
                      {/* Full Description */}
                      <Typography 
                        variant="body1" 
                        sx={{ 
                          color: 'text.secondary',
                          lineHeight: 1.6,
                          mb: 3,
                          fontSize: '0.95rem'
                        }}
                      >
                        {service.description}
                      </Typography>

                      {/* Features Grid */}
                      <Box sx={{ mb: 3 }}>
                        <Typography 
                          variant="h6" 
                          sx={{ 
                            color: 'primary.main',
                            fontWeight: 600,
                            mb: 2,
                            fontSize: '1.1rem'
                          }}
                        >
                          What We Build:
                        </Typography>
                        <Box sx={{ 
                          display: 'flex',
                          flexWrap: 'wrap',
                          gap: 1,
                          mb: 3
                        }}>
                          {features.slice(0, 6).map((feature, featureIndex) => (
                            <Chip
                              key={featureIndex}
                              label={feature}
                              size="small"
                              sx={{
                                backgroundColor: 'rgba(212, 175, 55, 0.1)',
                                color: 'primary.main',
                                border: '1px solid rgba(212, 175, 55, 0.3)',
                                fontSize: '0.75rem',
                                height: 28,
                                '&:hover': {
                                  backgroundColor: 'rgba(212, 175, 55, 0.2)',
                                  transform: 'scale(1.05)'
                                },
                                transition: 'all 0.2s ease'
                              }}
                            />
                          ))}
                          {features.length > 6 && (
                            <Chip
                              label={`+${features.length - 6} more`}
                              size="small"
                              sx={{
                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                color: 'text.secondary',
                                border: '1px solid rgba(255, 255, 255, 0.2)',
                                fontSize: '0.75rem',
                                height: 28
                              }}
                            />
                          )}
                        </Box>
                      </Box>

                      {/* Action Button */}
                      <Button
                        variant="outlined"
                        endIcon={<ArrowForwardIcon />}
                        onClick={() => navigate('/contact')}
                        sx={{
                          borderColor: 'primary.main',
                          color: 'primary.main',
                          '&:hover': {
                            borderColor: 'primary.main',
                            backgroundColor: 'rgba(212, 175, 55, 0.1)',
                            transform: 'translateX(4px)'
                          },
                          transition: 'all 0.3s ease',
                          textTransform: 'none',
                          fontWeight: 600
                        }}
                      >
                        Get Quote
                      </Button>
                    </Box>
                  </Box>
                </Card>
              </Grid>
            );
          })}
        </Grid>

        {/* Call to Action */}
        <Box sx={{ textAlign: 'center', mt: 8 }}>
          <Typography 
            variant="h4" 
            sx={{ 
              fontWeight: 700, 
              mb: 3,
              color: 'white'
            }}
          >
            Ready to Build Something Amazing?
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              color: 'text.secondary', 
              mb: 4,
              maxWidth: 600,
              mx: 'auto'
            }}
          >
            Let's discuss your project and see how we can help bring your blockchain vision to life.
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate('/contact')}
            sx={{
              backgroundColor: 'primary.main',
              color: 'black',
              fontWeight: 700,
              fontSize: '1.1rem',
              px: 6,
              py: 2,
              borderRadius: 3,
              textTransform: 'none',
              '&:hover': {
                backgroundColor: 'primary.dark',
                transform: 'translateY(-2px)',
                boxShadow: '0 10px 25px rgba(212, 175, 55, 0.4)'
              },
              transition: 'all 0.3s ease'
            }}
          >
            Start Your Project
          </Button>
        </Box>
      </Container>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(1deg); }
          66% { transform: translateY(-10px) rotate(-1deg); }
        }
      `}</style>
    </Box>
  );
};

export default ServicesPage; 