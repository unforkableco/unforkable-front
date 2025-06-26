import React from 'react';
import { Box, Container, Typography, Grid, Divider, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import useContent from '../hooks/useContent';

const Footer: React.FC = () => {
  const content = useContent();
  const { about, copyright } = content.footer;
  const { links } = content.social;

  const getSocialIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'linkedin':
        return <LinkedInIcon />;
      default:
        return null;
    }
  };

  return (
    <Box component="footer" className="footer" sx={{ backgroundColor: 'black', color: 'white', py: 3 }}>
      <Container maxWidth="lg">
        <Grid container spacing={3} className="footer-grid">
          <Grid item xs={12} md={8} className="footer-about-grid">
            <Box className="footer-about">
              <Typography variant="h6" component="h3" className="footer-about-title" sx={{ mb: 1, fontWeight: 600 }}>
                {about.title}
              </Typography>
              <Typography variant="body2" className="footer-about-description" sx={{ color: 'text.secondary', fontSize: '0.85rem' }}>
                {about.description}
              </Typography>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={4} className="footer-social-grid">
            <Box className="footer-social" sx={{ textAlign: { xs: 'left', md: 'right' } }}>
              <Typography variant="h6" component="h3" className="footer-social-title" sx={{ mb: 1, fontWeight: 600 }}>
                Follow Us
              </Typography>
              <Box className="footer-social-links" sx={{ display: 'flex', justifyContent: { xs: 'flex-start', md: 'flex-end' } }}>
                {links.map((link, index) => (
                  <IconButton
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`footer-social-link footer-social-${link.platform}`}
                    sx={{
                      color: 'text.secondary',
                      '&:hover': {
                        color: 'primary.main',
                      },
                      mr: index < links.length - 1 ? 1 : 0,
                    }}
                  >
                    {getSocialIcon(link.platform)}
                  </IconButton>
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>
        
        <Divider sx={{ my: 2, borderColor: 'rgba(212, 175, 55, 0.2)' }} className="footer-divider" />
        
        <Typography 
          variant="body2" 
          align="center" 
          className="footer-copyright"
          sx={{ 
            color: 'text.secondary',
            fontSize: '0.8rem'
          }}
        >
          {copyright}
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer; 