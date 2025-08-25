import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Avatar, TextField, Button, SvgIcon } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import useContent from '../hooks/useContent';
import { useTheme } from '../contexts/ThemeContext';

const ContactPage: React.FC = () => {
  const content = useContent();
  const { currentThemeConfig } = useTheme();

  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const handleChange = (field: 'name' | 'email' | 'message') => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [field]: e.target.value }));
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = encodeURIComponent('Contact from website');
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:contact@unforkable.co?subject=${subject}&body=${body}`;
  };

  // Fallback contact data since we don't have a contact form
  const contactData = content.contact || {
    title: "Let's Build Something",
    description: "Ready to ship your blockchain project? Need a technical co-founder? Let's talk code."
  };

  const contactMethods = [
    {
      icon: (
        <SvgIcon viewBox="0 0 24 24">
          <path d="M20.317 4.369A19.791 19.791 0 0 0 16.558 3c-.176.31-.378.724-.517 1.06a18.27 18.27 0 0 0-4.082 0A7.68 7.68 0 0 0 11.441 3c-1.38.24-2.73.62-4.038 1.135C4.064 7.234 3.24 10.29 3.5 13.31c1.71 1.28 3.36 2.06 4.984 2.567.402-.55.763-1.135 1.075-1.747a10.87 10.87 0 0 1-1.7-.652c.143-.105.283-.217.418-.332 3.29 1.545 6.85 1.545 10.074 0 .138.116.278.228.418.332-.541.25-1.109.47-1.7.652.312.612.673 1.197 1.075 1.747 1.625-.507 3.274-1.287 4.985-2.567.41-4.53-.692-7.55-2.282-8.94Z" fill="currentColor" />
        </SvgIcon>
      ),
      title: 'Talk to us on Discord',
      info: 'Join our server',
      description: 'Chat with us on our Discord server.',
      action: () => window.open('https://discord.com/invite/gUKKepDxEb', '_blank')
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
    <Box sx={{ py: 4, backgroundColor: currentThemeConfig.background, minHeight: '100vh' }}>
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
              backgroundColor: `${currentThemeConfig.paper}CC`,
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
              background: `linear-gradient(135deg, ${currentThemeConfig.textPrimary} 0%, ${currentThemeConfig.primary} 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              position: 'relative',
              zIndex: 1,
              pt: 4
            }}
          >
            {contactData.title}
          </Typography>
          <Typography 
            variant="h5" 
            sx={{ 
              color: currentThemeConfig.textSecondary, 
              maxWidth: 800, 
              mx: 'auto',
              lineHeight: 1.6
            }}
          >
            {contactData.description}
          </Typography>
        </Box>

        {/* Contact Methods */}
        <Grid container spacing={4} sx={{ mb: 8, justifyContent: 'center' }}>
          {/* Contact Form replacing Email card */}
          <Grid item xs={12} md={6} lg={6}>
            <Card 
              elevation={8}
              sx={{ 
                height: '100%',
                background: `linear-gradient(135deg, ${currentThemeConfig.paper}E6 0%, ${currentThemeConfig.background}CC 100%)`,
                border: `1px solid ${currentThemeConfig.primary}33`,
                borderRadius: 3,
                transition: 'all 0.4s ease'
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Typography 
                  variant="h5" 
                  sx={{ 
                    fontWeight: 600, 
                    color: currentThemeConfig.primary, 
                    mb: 2 
                  }}
                >
                  Contact Us
                </Typography>
                <Typography variant="body1" sx={{ color: currentThemeConfig.textSecondary, mb: 3 }}>
                  Fill out the form and we will get back to you shortly.
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate>
                  <TextField
                    fullWidth
                    label="Name"
                    value={form.name}
                    onChange={handleChange('name')}
                    sx={{ mb: 2 }}
                  />
                  <TextField
                    fullWidth
                    type="email"
                    label="Email"
                    value={form.email}
                    onChange={handleChange('email')}
                    sx={{ mb: 2 }}
                    required
                  />
                  <TextField
                    fullWidth
                    label="Message"
                    value={form.message}
                    onChange={handleChange('message')}
                    multiline
                    minRows={4}
                    sx={{ mb: 3 }}
                    required
                  />
                  <Button type="submit" variant="contained" color="primary">
                    Send
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          {contactMethods.map((method, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <Card 
                elevation={8}
                sx={{ 
                  height: '100%',
                  background: `linear-gradient(135deg, ${currentThemeConfig.paper}E6 0%, ${currentThemeConfig.background}CC 100%)`,
                  border: `1px solid ${currentThemeConfig.primary}33`,
                  borderRadius: 3,
                  transition: 'all 0.4s ease',
                  cursor: 'pointer',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: `0 20px 40px ${currentThemeConfig.primary}40`,
                    borderColor: currentThemeConfig.primary,
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
                      backgroundColor: `${currentThemeConfig.primary}20`,
                      border: `2px solid ${currentThemeConfig.primary}50`,
                      transition: 'all 0.3s ease'
                    }}
                  >
                    {React.cloneElement(method.icon, { sx: { fontSize: 40, color: currentThemeConfig.primary } })}
                  </Avatar>
                  
                  <Typography 
                    variant="h5" 
                    sx={{ 
                      fontWeight: 600, 
                      color: currentThemeConfig.primary, 
                      mb: 1 
                    }}
                  >
                    {method.title}
                  </Typography>
                  
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      color: currentThemeConfig.textPrimary,
                      mb: 2,
                      fontWeight: 500
                    }}
                  >
                    {method.info}
                  </Typography>
                  
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      color: currentThemeConfig.textSecondary,
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
            background: `linear-gradient(135deg, ${currentThemeConfig.primary}20 0%, ${currentThemeConfig.paper}E6 100%)`,
            border: `2px solid ${currentThemeConfig.primary}50`,
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
              background: `radial-gradient(circle, ${currentThemeConfig.primary}20 0%, transparent 70%)`,
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
                backgroundColor: `${currentThemeConfig.primary}30`,
                border: `3px solid ${currentThemeConfig.primary}80`
              }}
            >
              <RocketLaunchIcon sx={{ fontSize: 50, color: currentThemeConfig.primary }} />
            </Avatar>
            
            <Typography 
              variant="h3" 
              sx={{ 
                fontWeight: 700, 
                mb: 3, 
                color: currentThemeConfig.textPrimary
              }}
            >
              Let's Ship Something Cool
            </Typography>
            
            <Typography 
              variant="h6" 
              sx={{ 
                color: currentThemeConfig.textSecondary, 
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
                background: `linear-gradient(135deg, ${currentThemeConfig.paper}E6 0%, ${currentThemeConfig.background}CC 100%)`,
                border: `1px solid ${currentThemeConfig.primary}33`,
                borderRadius: 3
              }}
            >
              <Typography 
                variant="h5" 
                sx={{ 
                  fontWeight: 600, 
                  color: currentThemeConfig.primary, 
                  mb: 3 
                }}
              >
                What to Expect
              </Typography>
              
              <Box sx={{ mb: 2 }}>
                <Typography variant="body1" sx={{ color: currentThemeConfig.textSecondary, lineHeight: 1.6 }}>
                  • <strong style={{ color: currentThemeConfig.textPrimary }}>Quick Response:</strong> We'll get back to you within 24 hours
                </Typography>
              </Box>
              <Box sx={{ mb: 2 }}>
                <Typography variant="body1" sx={{ color: currentThemeConfig.textSecondary, lineHeight: 1.6 }}>
                  • <strong style={{ color: currentThemeConfig.textPrimary }}>Initial Consultation:</strong> Project assessment and technical discussion
                </Typography>
              </Box>
              <Box sx={{ mb: 2 }}>
                <Typography variant="body1" sx={{ color: currentThemeConfig.textSecondary, lineHeight: 1.6 }}>
                  • <strong style={{ color: currentThemeConfig.textPrimary }}>Detailed Proposal:</strong> Comprehensive project plan and timeline
                </Typography>
              </Box>
              <Box>
                <Typography variant="body1" sx={{ color: currentThemeConfig.textSecondary, lineHeight: 1.6 }}>
                  • <strong style={{ color: currentThemeConfig.textPrimary }}>Ongoing Support:</strong> Dedicated technical partnership
                </Typography>
              </Box>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Card 
              elevation={4}
              sx={{ 
                p: 4,
                background: `linear-gradient(135deg, ${currentThemeConfig.paper}E6 0%, ${currentThemeConfig.background}CC 100%)`,
                border: `1px solid ${currentThemeConfig.primary}33`,
                borderRadius: 3
              }}
            >
              <Typography 
                variant="h5" 
                sx={{ 
                  fontWeight: 600, 
                  color: currentThemeConfig.primary, 
                  mb: 3 
                }}
              >
                Perfect For
              </Typography>
              
              <Box sx={{ mb: 2 }}>
                <Typography variant="body1" sx={{ color: currentThemeConfig.textSecondary, lineHeight: 1.6 }}>
                  • <strong style={{ color: currentThemeConfig.textPrimary }}>Startups:</strong> Need technical co-founder expertise
                </Typography>
              </Box>
              <Box sx={{ mb: 2 }}>
                <Typography variant="body1" sx={{ color: currentThemeConfig.textSecondary, lineHeight: 1.6 }}>
                  • <strong style={{ color: currentThemeConfig.textPrimary }}>Enterprises:</strong> Exploring blockchain adoption
                </Typography>
              </Box>
              <Box sx={{ mb: 2 }}>
                <Typography variant="body1" sx={{ color: currentThemeConfig.textSecondary, lineHeight: 1.6 }}>
                  • <strong style={{ color: currentThemeConfig.textPrimary }}>Investors:</strong> Technical due diligence needed
                </Typography>
              </Box>
              <Box>
                <Typography variant="body1" sx={{ color: currentThemeConfig.textSecondary, lineHeight: 1.6 }}>
                  • <strong style={{ color: currentThemeConfig.textPrimary }}>Projects:</strong> Scaling existing blockchain solutions
                </Typography>
              </Box>
            </Card>
          </Grid>
        </Grid>

      </Container>
    </Box>
  );
};

export default ContactPage; 