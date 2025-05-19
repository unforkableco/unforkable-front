import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton, Divider } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import useContent from '../hooks/useContent';

const Footer: React.FC = () => {
  const content = useContent();
  const { about, services, legal, copyright } = content.footer;
  const { links: socialLinks } = content.social;

  // Function to get the appropriate icon based on platform name
  const getSocialIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'github':
        return <GitHubIcon />;
      case 'linkedin':
        return <LinkedInIcon />;
      default:
        return <GitHubIcon />;
    }
  };

  return (
    <Box 
      component="footer" 
      className="footer"
      sx={{ 
        py: 8, 
        bgcolor: 'black', 
        color: 'white',
        borderTop: '1px solid rgba(212, 175, 55, 0.2)'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} className="footer-grid">
          {/* Logo & About */}
          <Grid item xs={12} md={4} className="footer-about-grid">
            <Box sx={{ mb: 3 }} className="footer-logo-container">
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <img 
                  src="/images/logo - !f (white - no bg).png" 
                  alt="Unforkable Logo Symbol" 
                  style={{ height: '30px', marginRight: '10px' }} 
                />
                <img 
                  src="/images/logo - unforkable - white.png" 
                  alt="Unforkable Logo Text" 
                  style={{ height: '25px' }} 
                />
              </Box>
            </Box>
            
            <Typography 
              variant="h6" 
              component="h2" 
              className="footer-about-heading"
              sx={{ 
                mb: 2,
                color: 'primary.main',
                fontWeight: 600,
              }}
            >
              {about.title}
            </Typography>
            
            <Typography 
              variant="body2" 
              className="footer-description"
              sx={{ 
                mb: 3,
                color: 'text.secondary',
                maxWidth: 350
              }}
            >
              {about.description}
            </Typography>
            
            <Box className="footer-social-icons">
              {socialLinks.map((social, index) => (
                <IconButton 
                  key={index}
                  color="primary"
                  className={`footer-social-icon footer-${social.platform.toLowerCase()}`}
                  aria-label={social.label}
                  href={social.url}
                  target="_blank"
                  sx={{ 
                    mr: index < socialLinks.length - 1 ? 1 : 0,
                    '&:hover': { 
                      backgroundColor: 'rgba(212, 175, 55, 0.1)' 
                    }
                  }}
                >
                  {getSocialIcon(social.platform)}
                </IconButton>
              ))}
            </Box>
          </Grid>
          
          {/* Services Links */}
          <Grid item xs={12} sm={6} md={4} className="footer-services-grid">
            <Typography 
              variant="h6" 
              component="h2" 
              className="footer-heading footer-services-heading"
              sx={{ 
                mb: 3,
                color: 'primary.main',
                fontWeight: 600
              }}
            >
              {services.title}
            </Typography>
            
            <Box 
              className="footer-links footer-services-links"
              sx={{ 
                display: 'flex',
                flexDirection: 'column',
                gap: 1.5
              }}
            >
              {services.links.map((link, index) => (
                <Link 
                  key={index}
                  href="#services" 
                  className={`footer-link footer-service-link-${index}`}
                  sx={{ 
                    color: 'text.secondary',
                    textDecoration: 'none',
                    '&:hover': { 
                      color: 'primary.main' 
                    }
                  }}
                >
                  {link}
                </Link>
              ))}
            </Box>
          </Grid>
          
          {/* Legal Links */}
          <Grid item xs={12} sm={6} md={4} className="footer-legal-grid">
            <Typography 
              variant="h6" 
              component="h2" 
              className="footer-heading footer-legal-heading"
              sx={{ 
                mb: 3,
                color: 'primary.main',
                fontWeight: 600
              }}
            >
              {legal.title}
            </Typography>
            
            <Box 
              className="footer-links footer-legal-links"
              sx={{ 
                display: 'flex',
                flexDirection: 'column',
                gap: 1.5
              }}
            >
              {legal.links.map((link, index) => (
                <Link 
                  key={index}
                  href="#" 
                  className={`footer-link footer-legal-link-${index}`}
                  sx={{ 
                    color: 'text.secondary',
                    textDecoration: 'none',
                    '&:hover': { 
                      color: 'primary.main' 
                    }
                  }}
                >
                  {link}
                </Link>
              ))}
            </Box>
          </Grid>
        </Grid>
        
        <Divider 
          className="footer-divider"
          sx={{ 
            my: 4,
            borderColor: 'rgba(212, 175, 55, 0.1)',
          }} 
        />
        
        <Typography 
          variant="body2" 
          align="center" 
          className="footer-copyright"
          sx={{ 
            color: 'text.secondary'
          }}
        >
          {copyright}
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer; 