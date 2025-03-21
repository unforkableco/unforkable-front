import React from 'react';
import { Box, Container, Typography, Grid, Link, IconButton } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';

const Footer: React.FC = () => {
  return (
    <Box component="footer" className="footer" sx={{ bgcolor: 'black', color: 'white', py: 6, borderTop: '1px solid rgba(212, 175, 55, 0.2)' }}>
      <Container maxWidth="lg" className="footer-container">
        <Grid container spacing={4} className="footer-grid">
          <Grid item xs={12} md={4} className="footer-brand-grid">
            <Box sx={{ mb: 2 }} className="footer-logo-container">
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
            <Typography variant="body2" sx={{ mb: 2, maxWidth: '300px' }} className="footer-description">
              Building the future of Web3 with innovative blockchain solutions and smart contracts.
            </Typography>
            <Box sx={{ mt: 2 }} className="footer-social-container">
              <IconButton color="primary" aria-label="Twitter" className="footer-social-button footer-twitter-button">
                <TwitterIcon className="footer-social-icon" />
              </IconButton>
              <IconButton color="primary" aria-label="LinkedIn" className="footer-social-button footer-linkedin-button">
                <LinkedInIcon className="footer-social-icon" />
              </IconButton>
              <IconButton color="primary" aria-label="GitHub" className="footer-social-button footer-github-button">
                <GitHubIcon className="footer-social-icon" />
              </IconButton>
              <IconButton color="primary" aria-label="Telegram" className="footer-social-button footer-telegram-button">
                <TelegramIcon className="footer-social-icon" />
              </IconButton>
            </Box>
          </Grid>
          
          <Grid item xs={12} sm={6} md={2} className="footer-company-grid">
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'primary.main' }} className="footer-heading footer-company-heading">
              Company
            </Typography>
            <Box component="ul" sx={{ p: 0, m: 0, listStyle: 'none' }} className="footer-link-list footer-company-links">
              {['About', 'Team', 'Careers', 'Contact'].map((item) => (
                <Box component="li" sx={{ mb: 1 }} key={item} className={`footer-link-item footer-company-item-${item.toLowerCase()}`}>
                  <Link href={`#${item.toLowerCase()}`} color="inherit" underline="hover" className={`footer-link footer-company-${item.toLowerCase()}-link`}
                    sx={{ 
                      '&:hover': { 
                        color: 'primary.main' 
                      }
                    }}
                  >
                    {item}
                  </Link>
                </Box>
              ))}
            </Box>
          </Grid>
          
          <Grid item xs={12} sm={6} md={2} className="footer-services-grid">
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'primary.main' }} className="footer-heading footer-services-heading">
              Services
            </Typography>
            <Box component="ul" sx={{ p: 0, m: 0, listStyle: 'none' }} className="footer-link-list footer-services-links">
              {['Blockchain', 'Smart Contracts', 'Web3 Apps', 'Consulting'].map((item) => (
                <Box component="li" sx={{ mb: 1 }} key={item} className={`footer-link-item footer-services-item-${item.toLowerCase().replace(' ', '-')}`}>
                  <Link href={`#${item.toLowerCase().replace(' ', '-')}`} color="inherit" underline="hover" 
                    className={`footer-link footer-services-${item.toLowerCase().replace(' ', '-')}-link`}
                    sx={{ 
                      '&:hover': { 
                        color: 'primary.main' 
                      }
                    }}
                  >
                    {item}
                  </Link>
                </Box>
              ))}
            </Box>
          </Grid>
          
          <Grid item xs={12} sm={6} md={4} className="footer-contact-grid">
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'primary.main' }} className="footer-heading footer-contact-heading">
              Contact
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }} className="footer-contact-email">
              info@unforkable.com
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }} className="footer-contact-address">
              123 Blockchain Avenue, Web3 City
            </Typography>
          </Grid>
        </Grid>
        
        <Box sx={{ mt: 5, pt: 2, borderTop: '1px solid rgba(212, 175, 55, 0.2)', textAlign: 'center' }} className="footer-copyright-container">
          <Typography variant="body2" color="text.secondary" className="footer-copyright">
            © {new Date().getFullYear()} Unforkable. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 