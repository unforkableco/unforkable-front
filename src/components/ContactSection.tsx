import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import useContent from '../hooks/useContent';
import { useTheme } from '../contexts/ThemeContext';

const ContactSection: React.FC = () => {
  const content = useContent();
  const { title, contactInfo } = content.contact;
  const { currentThemeConfig } = useTheme();

  const getIcon = (title: string) => {
    switch (title.toLowerCase()) {
      case 'email':
        return <EmailIcon sx={{ color: 'primary.main', fontSize: 24 }} />;
      case 'location':
        return <LocationOnIcon sx={{ color: 'primary.main', fontSize: 24 }} />;
      case 'working hours':
        return <AccessTimeIcon sx={{ color: 'primary.main', fontSize: 24 }} />;
      default:
        return <EmailIcon sx={{ color: 'primary.main', fontSize: 24 }} />;
    }
  };

  return (
    <Box 
      id="contact" 
      className="contact-section"
      sx={{ 
        py: 4, 
        backgroundColor: 'background.default',
        color: 'white'
      }}
    >
      <Container maxWidth="md">
        <Typography 
          variant="h4" 
          component="h2" 
          align="center" 
          className="contact-title"
          sx={{ 
            mb: 3,
            fontWeight: 700,
          }}
        >
          {title}
        </Typography>
        
        <Box 
          sx={{ 
            display: 'flex', 
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: 4
          }}
        >
          {contactInfo.map((info, index) => (
            <Box 
              key={index}
              className={`contact-info-item contact-info-${index + 1}`}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                minWidth: '200px',
                p: 2,
                borderRadius: 2,
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                border: `1px solid ${currentThemeConfig.primary}33`,
                transition: 'all 0.3s ease',
                '&:hover': {
                  borderColor: 'primary.main',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  transform: 'translateY(-2px)',
                }
              }}
            >
              <Box className="contact-icon" sx={{ mb: 1 }}>
                {getIcon(info.title)}
              </Box>
              
              <Typography 
                variant="h6" 
                component="dt" 
                className="contact-info-title"
                sx={{ 
                  mb: 0.5,
                  fontWeight: 600,
                  fontSize: '1rem'
                }}
              >
                {info.title}
              </Typography>
              
              <Typography 
                variant="body2" 
                component="dd" 
                className="contact-info-value"
                sx={{ 
                  color: 'text.secondary',
                  fontSize: '0.9rem'
                }}
              >
                {info.value}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ContactSection; 