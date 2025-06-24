import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Card, Slide, IconButton, Divider } from '@mui/material';
import StorageIcon from '@mui/icons-material/Storage';
import CodeIcon from '@mui/icons-material/Code';
import ComputerIcon from '@mui/icons-material/Computer';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import LaunchIcon from '@mui/icons-material/Launch';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import useContent from '../hooks/useContent';
import { useTheme } from '../contexts/ThemeContext';

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
  const { currentThemeConfig } = useTheme();
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const handleServiceClick = (index: number) => {
    setSelectedService(selectedService === index ? null : index);
  };

  const selectedServiceData = selectedService !== null ? content.services.services[selectedService] : null;
  const selectedFeatures = selectedServiceData ? serviceFeatures[selectedServiceData.title as keyof typeof serviceFeatures] || [] : [];
  const SelectedIcon = selectedServiceData ? serviceIcons[selectedServiceData.title as keyof typeof serviceIcons] : null;

  return (
    <Box sx={{ 
      minHeight: '100vh',
      backgroundColor: currentThemeConfig.background,
      position: 'relative',
      overflow: 'hidden'
    }}>
      <Container maxWidth="xl" sx={{ py: 8, position: 'relative' }}>
        <Grid container spacing={0} sx={{ minHeight: '80vh' }}>
          {/* Services Grid - Left Side */}
          <Grid item xs={12} lg={selectedService !== null ? 8 : 12}>
            <Box sx={{ pr: { lg: selectedService !== null ? 3 : 0 } }}>
              {/* Header Section */}
              <Box sx={{ textAlign: 'center', mb: 6 }}>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    color: currentThemeConfig.primary,
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
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    background: `linear-gradient(135deg, ${currentThemeConfig.textPrimary} 0%, ${currentThemeConfig.primary} 100%)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    lineHeight: 1.2
                  }}
                >
                  {content.services.title}
                </Typography>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    color: currentThemeConfig.textSecondary, 
                    maxWidth: 600, 
                    mx: 'auto',
                    lineHeight: 1.6,
                    fontSize: { xs: '1rem', md: '1.2rem' }
                  }}
                >
                  Click on any service to explore what we build
                </Typography>
              </Box>

              {/* Services Grid */}
              <Grid container spacing={3}>
                {content.services.services.map((service, index) => {
                  const IconComponent = serviceIcons[service.title as keyof typeof serviceIcons];
                  const isSelected = selectedService === index;
                  
                  return (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                      <Card 
                        elevation={0}
                        onClick={() => handleServiceClick(index)}
                        sx={{ 
                          height: '280px',
                          background: isSelected 
                            ? `linear-gradient(135deg, ${currentThemeConfig.primary}30 0%, ${currentThemeConfig.primary}10 100%)`
                            : `linear-gradient(135deg, ${currentThemeConfig.paper}99 0%, ${currentThemeConfig.background}80 100%)`,
                          border: isSelected 
                            ? `2px solid ${currentThemeConfig.primary}`
                            : `1px solid ${currentThemeConfig.primary}20`,
                          borderRadius: 3,
                          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                          position: 'relative',
                          overflow: 'hidden',
                          cursor: 'pointer',
                          transform: isSelected ? 'scale(1.02)' : 'scale(1)',
                          boxShadow: isSelected 
                            ? `0 20px 40px ${currentThemeConfig.primary}40`
                            : `0 8px 24px ${currentThemeConfig.background}60`,
                          '&:hover': {
                            transform: isSelected ? 'scale(1.02)' : 'scale(1.05)',
                            boxShadow: `0 16px 40px ${currentThemeConfig.primary}40`,
                            borderColor: currentThemeConfig.primary,
                            '& .service-icon': {
                              transform: 'scale(1.1)',
                              background: `linear-gradient(135deg, ${currentThemeConfig.primary} 0%, ${currentThemeConfig.secondary} 100%)`,
                              '& svg': {
                                color: 'white'
                              }
                            },

                            '& .hover-glow': {
                              opacity: 0.8
                            }
                          }
                        }}
                      >
                        {/* Hover Glow Effect */}
                        <Box
                          className="hover-glow"
                          sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: `radial-gradient(circle at center, ${currentThemeConfig.primary}20 0%, transparent 70%)`,
                            opacity: 0,
                            transition: 'opacity 0.3s ease',
                            pointerEvents: 'none'
                          }}
                        />

                        {/* Selection Indicator */}
                        {isSelected && (
                          <Box
                            sx={{
                              position: 'absolute',
                              top: 16,
                              right: 16,
                              width: 32,
                              height: 32,
                              borderRadius: '50%',
                              backgroundColor: currentThemeConfig.primary,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              zIndex: 3,
                              boxShadow: `0 4px 12px ${currentThemeConfig.primary}60`,
                              animation: 'pulse 2s infinite'
                            }}
                          >
                            <ArrowForwardIosIcon sx={{ fontSize: 14, color: 'white' }} />
                          </Box>
                        )}


                        
                        <Box sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                          {/* Service Icon */}
                          <Box
                            className="service-icon"
                            sx={{
                              width: 80,
                              height: 80,
                              mb: 3,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              borderRadius: '50%',
                              background: isSelected 
                                ? `linear-gradient(135deg, ${currentThemeConfig.primary} 0%, ${currentThemeConfig.secondary} 100%)`
                                : `${currentThemeConfig.primary}20`,
                              border: `2px solid ${isSelected ? 'transparent' : `${currentThemeConfig.primary}40`}`,
                              transition: 'all 0.3s ease',
                              position: 'relative',
                              '&::after': {
                                content: '""',
                                position: 'absolute',
                                inset: -2,
                                borderRadius: '50%',
                                background: `conic-gradient(from 0deg, ${currentThemeConfig.primary}, ${currentThemeConfig.secondary}, ${currentThemeConfig.primary})`,
                                opacity: isSelected ? 0.3 : 0,
                                transition: 'opacity 0.3s ease',
                                zIndex: -1
                              }
                            }}
                          >
                            {IconComponent && (
                              <IconComponent 
                                sx={{ 
                                  fontSize: 40, 
                                  color: isSelected ? 'white' : currentThemeConfig.primary,
                                  transition: 'all 0.3s ease',
                                  filter: isSelected ? 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' : 'none'
                                }} 
                              />
                            )}
                          </Box>
                          
                          {/* Service Title */}
                          <Typography 
                            variant="h6" 
                            sx={{ 
                              fontWeight: 700, 
                              color: isSelected ? currentThemeConfig.primary : currentThemeConfig.textPrimary,
                              mb: 2,
                              transition: 'all 0.3s ease',
                              fontSize: '1.1rem',
                              lineHeight: 1.3
                            }}
                          >
                            {service.title}
                          </Typography>

                          {/* Brief Description */}
                          <Typography 
                            variant="body2" 
                            sx={{ 
                              color: currentThemeConfig.textSecondary,
                              lineHeight: 1.5,
                              fontSize: '0.9rem',
                              opacity: 0.8
                            }}
                          >
                            {service.description.length > 80 
                              ? `${service.description.substring(0, 80)}...`
                              : service.description}
                          </Typography>
                        </Box>

                        {/* Interactive Border Animation */}
                        <Box
                          sx={{
                            position: 'absolute',
                            inset: 0,
                            borderRadius: 3,
                            background: `linear-gradient(45deg, ${currentThemeConfig.primary}40, transparent, ${currentThemeConfig.secondary}40, transparent)`,
                            opacity: 0,
                            transition: 'opacity 0.3s ease',
                            pointerEvents: 'none',
                            '.MuiCard-root:hover &': {
                              opacity: 0.3
                            }
                          }}
                        />
                      </Card>
                    </Grid>
                  );
                })}
              </Grid>
            </Box>
          </Grid>

          {/* Detail Panel - Right Side */}
          <Grid item xs={12} lg={4}>
            <Slide direction="left" in={selectedService !== null} mountOnEnter unmountOnExit>
              <Box
                sx={{
                  height: '100%',
                  minHeight: '600px',
                  background: `linear-gradient(135deg, ${currentThemeConfig.primary}10 0%, ${currentThemeConfig.paper} 100%)`,
                  border: `1px solid ${currentThemeConfig.primary}30`,
                  borderRadius: 3,
                  position: 'sticky',
                  top: 100,
                  overflow: 'hidden'
                }}
              >
                {selectedServiceData && (
                  <>
                    {/* Header */}
                    <Box sx={{ 
                      p: 3, 
                      borderBottom: `1px solid ${currentThemeConfig.primary}20`,
                      background: `linear-gradient(135deg, ${currentThemeConfig.primary}20 0%, transparent 100%)`
                    }}>
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', mb: 2 }}>
                        <Box sx={{ flex: 1 }}>
                          {SelectedIcon && (
                            <Box
                              sx={{
                                width: 60,
                                height: 60,
                                mb: 2,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: '50%',
                                background: `linear-gradient(135deg, ${currentThemeConfig.primary} 0%, ${currentThemeConfig.secondary} 100%)`,
                              }}
                            >
                              <SelectedIcon sx={{ fontSize: 30, color: 'white' }} />
                            </Box>
                          )}
                          <Typography 
                            variant="h5" 
                            sx={{ 
                              fontWeight: 700, 
                              color: currentThemeConfig.primary,
                              lineHeight: 1.3,
                              mb: 1
                            }}
                          >
                            {selectedServiceData.title}
                          </Typography>
                        </Box>
                        <IconButton 
                          onClick={() => setSelectedService(null)}
                          sx={{ 
                            color: currentThemeConfig.textSecondary,
                            '&:hover': { 
                              backgroundColor: `${currentThemeConfig.primary}20`,
                              color: currentThemeConfig.primary
                            }
                          }}
                        >
                          <CloseIcon />
                        </IconButton>
                      </Box>
                    </Box>

                    {/* Content */}
                    <Box sx={{ p: 3, height: 'calc(100% - 140px)', overflowY: 'auto' }}>
                      {/* Full Description */}
                      <Typography 
                        variant="body1" 
                        sx={{ 
                          color: currentThemeConfig.textSecondary,
                          lineHeight: 1.7,
                          mb: 4,
                          fontSize: '1rem'
                        }}
                      >
                        {selectedServiceData.description}
                      </Typography>

                      <Divider sx={{ mb: 3, borderColor: `${currentThemeConfig.primary}20` }} />

                      {/* Features */}
                      <Typography 
                        variant="h6" 
                        sx={{ 
                          color: currentThemeConfig.primary,
                          fontWeight: 600,
                          mb: 3,
                          fontSize: '1.2rem'
                        }}
                      >
                        What We Build:
                      </Typography>
                      
                      <Box sx={{ 
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1
                      }}>
                        {selectedFeatures.map((feature, featureIndex) => (
                          <Box
                            key={featureIndex}
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              p: 2,
                              borderRadius: 2,
                              backgroundColor: `${currentThemeConfig.primary}10`,
                              border: `1px solid ${currentThemeConfig.primary}20`,
                              transition: 'all 0.2s ease',
                              '&:hover': {
                                backgroundColor: `${currentThemeConfig.primary}20`,
                                transform: 'translateX(4px)',
                              }
                            }}
                          >
                            <Box
                              sx={{
                                width: 6,
                                height: 6,
                                borderRadius: '50%',
                                backgroundColor: currentThemeConfig.primary,
                                mr: 2,
                                flexShrink: 0
                              }}
                            />
                            <Typography 
                              variant="body2" 
                              sx={{ 
                                color: currentThemeConfig.textPrimary,
                                fontWeight: 500,
                                fontSize: '0.9rem'
                              }}
                            >
                              {feature}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                    </Box>
                  </>
                )}
              </Box>
            </Slide>
          </Grid>
        </Grid>
      </Container>

      {/* Global Styles for Animations */}
      <style>{`
        @keyframes pulse {
          0%, 100% { 
            transform: scale(1); 
            opacity: 1; 
          }
          50% { 
            transform: scale(1.05); 
            opacity: 0.8; 
          }
        }
      `}</style>
    </Box>
  );
};

export default ServicesPage; 