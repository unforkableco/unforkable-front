import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Avatar } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import useContent from '../hooks/useContent';
import LinkedInSection from '../components/LinkedInSection';
import { useTheme } from '../contexts/ThemeContext';

const ContactPage: React.FC = () => {
  const content = useContent();
  const { currentThemeConfig } = useTheme();

  const contactMethods = [
    {
      icon: <EmailIcon />,
      title: 'Email Us',
      info: content.contact.contactInfo.find(info => info.title === 'Email')?.value || 'contact@unforkable.co',
      description: 'The old-school way. We actually read our emails.',
      action: () => window.open(`mailto:${content.contact.contactInfo.find(info => info.title === 'Email')?.value || 'contact@unforkable.co'}`, '_blank')
    },
    {
      icon: <GitHubIcon />,
      title: 'GitHub',
      info: 'View Our Code',
      description: 'See what we\'ve been shipping. Code speaks louder than words.',
      action: () => window.open(content.social.links.find(link => link.platform === 'github')?.url || '#', '_blank')
    },
    {
      icon: <LinkedInIcon />,
      title: 'LinkedIn',
      info: 'Connect With Us',
      description: 'For when you want to network like it\'s 2008.',
      action: () => window.open(content.social.links.find(link => link.platform === 'linkedin')?.url || '#', '_blank')
    }
  ];

  return (
    <Box sx={{ py: 4 }}>
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box sx={{ textAlign: 'center', mb: 8, position: 'relative' }}>
          {/* Terminal-like background */}
          <Box
            sx={{
              position: 'absolute',
              top: -20,
              left: '50%',
              transform: 'translateX(-50%)',
              width: '300px',
              height: '60px',
              backgroundColor: `${currentThemeConfig.background}CC`,
              border: `1px solid ${currentThemeConfig.primary}60`,
              borderRadius: 1,
              display: 'flex',
              alignItems: 'center',
              px: 2,
              fontFamily: 'monospace',
              fontSize: '0.8rem',
              color: `${currentThemeConfig.primary}B3`,
              zIndex: 0,
              '&::before': {
                content: '"$ ./contact_us.sh"',
                animation: 'typing 3s steps(15) infinite'
              },
              '@keyframes typing': {
                '0%': { content: '"$ "' },
                '20%': { content: '"$ ."' },
                '40%': { content: '"$ ./c"' },
                '60%': { content: '"$ ./contact"' },
                '80%': { content: '"$ ./contact_us"' },
                '100%': { content: '"$ ./contact_us.sh"' }
              }
            }}
          />
          
          <Typography 
            variant="h2" 
            sx={{ 
              fontWeight: 800, 
              mb: 3, 
              color: 'white',
              background: `linear-gradient(135deg, ${currentThemeConfig.textPrimary} 0%, ${currentThemeConfig.primary} 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              position: 'relative',
              zIndex: 1,
              pt: 4
            }}
          >
            {content.contact.title}
          </Typography>
          <Typography 
            variant="h5" 
            sx={{ 
              color: 'text.secondary', 
              maxWidth: 800, 
              mx: 'auto',
              lineHeight: 1.6
            }}
          >
            {content.contact.description}
          </Typography>
        </Box>

        {/* Contact Methods */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {contactMethods.map((method, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card 
                elevation={8}
                sx={{ 
                  height: '100%',
                  background: 'linear-gradient(135deg, rgba(20,20,20,0.9) 0%, rgba(40,40,40,0.8) 100%)',
                  border: '1px solid rgba(212, 175, 55, 0.2)',
                  borderRadius: 3,
                  transition: 'all 0.4s ease',
                  cursor: 'pointer',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 20px 40px rgba(212, 175, 55, 0.2)',
                    borderColor: 'primary.main',
                    '& .contact-icon': {
                      transform: 'scale(1.1) rotate(5deg)',
                    }
                  }
                }}
                onClick={method.action}
              >
                <CardContent sx={{ p: 4, textAlign: 'center' }}>
                  <Avatar
                    className="contact-icon"
                    sx={{
                      width: 80,
                      height: 80,
                      mx: 'auto',
                      mb: 3,
                      backgroundColor: 'rgba(212, 175, 55, 0.1)',
                      border: '2px solid rgba(212, 175, 55, 0.3)',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    {React.cloneElement(method.icon, { sx: { fontSize: 40, color: 'primary.main' } })}
                  </Avatar>
                  
                  <Typography 
                    variant="h5" 
                    sx={{ 
                      fontWeight: 600, 
                      color: 'primary.main', 
                      mb: 1 
                    }}
                  >
                    {method.title}
                  </Typography>
                  
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      color: 'white',
                      mb: 2,
                      fontWeight: 500
                    }}
                  >
                    {method.info}
                  </Typography>
                  
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      color: 'text.secondary',
                      lineHeight: 1.6
                    }}
                  >
                    {method.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Project Inquiry Section */}
        <Card 
          elevation={12}
          sx={{ 
            background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.15) 0%, rgba(20,20,20,0.9) 100%)',
            border: '2px solid rgba(212, 175, 55, 0.3)',
            borderRadius: 4,
            p: 6,
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Background Pattern */}
          <Box
            sx={{
              position: 'absolute',
              top: -100,
              right: -100,
              width: 200,
              height: 200,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(212, 175, 55, 0.1) 0%, transparent 70%)',
              zIndex: 1
            }}
          />
          
          <Box sx={{ position: 'relative', zIndex: 2 }}>
            <Avatar
              sx={{
                width: 100,
                height: 100,
                mx: 'auto',
                mb: 4,
                backgroundColor: 'rgba(212, 175, 55, 0.2)',
                border: '3px solid rgba(212, 175, 55, 0.5)'
              }}
            >
              <RocketLaunchIcon sx={{ fontSize: 50, color: 'primary.main' }} />
            </Avatar>
            
            <Typography 
              variant="h3" 
              sx={{ 
                fontWeight: 700, 
                mb: 3, 
                color: 'white'
              }}
            >
              Let's Ship Something Cool
            </Typography>
            
            <Typography 
              variant="h6" 
              sx={{ 
                color: 'text.secondary', 
                mb: 4,
                maxWidth: 600,
                mx: 'auto',
                lineHeight: 1.6
              }}
            >
              Need a custom blockchain? Smart contracts that don't get hacked? DeFi protocols that handle real volume? 
              We've been there, built that. Drop us a line and let's talk code.
            </Typography>
          </Box>
        </Card>

        {/* Additional Info */}
        <Grid container spacing={4} sx={{ mt: 8 }}>
          <Grid item xs={12} md={6}>
            <Card 
              elevation={4}
              sx={{ 
                p: 4,
                background: 'linear-gradient(135deg, rgba(20,20,20,0.9) 0%, rgba(40,40,40,0.8) 100%)',
                border: '1px solid rgba(212, 175, 55, 0.2)',
                borderRadius: 3
              }}
            >
              <Typography 
                variant="h5" 
                sx={{ 
                  fontWeight: 600, 
                  color: 'primary.main', 
                  mb: 3 
                }}
              >
                What to Expect
              </Typography>
              
              <Box sx={{ mb: 2 }}>
                <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                  • <strong>Quick Response:</strong> We'll get back to you within 24 hours
                </Typography>
              </Box>
              <Box sx={{ mb: 2 }}>
                <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                  • <strong>Initial Consultation:</strong> Project assessment and technical discussion
                </Typography>
              </Box>
              <Box sx={{ mb: 2 }}>
                <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                  • <strong>Detailed Proposal:</strong> Comprehensive project plan and timeline
                </Typography>
              </Box>
              <Box>
                <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                  • <strong>Ongoing Support:</strong> Dedicated technical partnership
                </Typography>
              </Box>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Card 
              elevation={4}
              sx={{ 
                p: 4,
                background: 'linear-gradient(135deg, rgba(20,20,20,0.9) 0%, rgba(40,40,40,0.8) 100%)',
                border: '1px solid rgba(212, 175, 55, 0.2)',
                borderRadius: 3
              }}
            >
              <Typography 
                variant="h5" 
                sx={{ 
                  fontWeight: 600, 
                  color: 'primary.main', 
                  mb: 3 
                }}
              >
                Perfect For
              </Typography>
              
              <Box sx={{ mb: 2 }}>
                <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                  • <strong>Startups:</strong> Need technical co-founder expertise
                </Typography>
              </Box>
              <Box sx={{ mb: 2 }}>
                <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                  • <strong>Enterprises:</strong> Exploring blockchain adoption
                </Typography>
              </Box>
              <Box sx={{ mb: 2 }}>
                <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                  • <strong>Investors:</strong> Technical due diligence needed
                </Typography>
              </Box>
              <Box>
                <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                  • <strong>Projects:</strong> Scaling existing blockchain solutions
                </Typography>
              </Box>
            </Card>
          </Grid>
        </Grid>

        {/* LinkedIn Connect Section */}
        <Box sx={{ mt: 8 }}>
          <LinkedInSection variant="compact" />
        </Box>
      </Container>
    </Box>
  );
};

export default ContactPage; 