import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import useContent from '../hooks/useContent';

interface ContactInfoItemProps {
  icon: React.ReactNode;
  title: string;
  value: string;
}

const ContactInfoItem: React.FC<ContactInfoItemProps> = ({ icon, title, value }) => (
  <Box 
    className="contact-info-item"
    sx={{ 
      display: 'flex', 
      mb: 4,
      alignItems: 'flex-start' 
    }}
  >
    <Box 
      className="contact-info-icon-container"
      sx={{ 
        width: 50,
        height: 50,
        borderRadius: '50%',
        backgroundColor: 'rgba(212, 175, 55, 0.1)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        mr: 2,
        color: 'primary.main'
      }}
    >
      {icon}
    </Box>
    <Box className="contact-info-content">
      <Typography 
        variant="subtitle1" 
        component="h3" 
        className="contact-info-title"
        sx={{ 
          fontWeight: 600,
          mb: 0.5
        }}
      >
        {title}
      </Typography>
      <Typography 
        variant="body2" 
        className="contact-info-value"
        sx={{ 
          color: 'text.secondary' 
        }}
      >
        {value}
      </Typography>
    </Box>
  </Box>
);

const ContactSection: React.FC = () => {
  const content = useContent();
  const { overline, title, description, contactInfo } = content.contact;

  const getIconForContact = (title: string) => {
    switch(title.toLowerCase()) {
      case 'email':
        return <EmailIcon />;
      case 'location':
        return <LocationOnIcon />;
      case 'working hours':
        return <AccessTimeIcon />;
      default:
        return <EmailIcon />;
    }
  };

  return (
    <Box 
      id="contact" 
      className="contact-section"
      sx={{ 
        py: 10, 
        backgroundColor: 'black',
        color: 'white'
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }} className="contact-header">
          <Typography 
            variant="overline" 
            component="div" 
            className="contact-overline"
            sx={{ 
              color: 'primary.main', 
              fontWeight: 600,
              letterSpacing: 1.5,
              mb: 1
            }}
          >
            {overline}
          </Typography>
          
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, justifyContent: 'center' }} className="contact-title-container">
            <img 
              src="/images/logo - !f (white - no bg).png" 
              alt="Unforkable Logo Symbol" 
              className="contact-title-logo"
              style={{ height: '30px', marginRight: '10px' }} 
            />
            <Typography 
              variant="h2" 
              component="h2" 
              className="contact-title"
              sx={{ 
                fontWeight: 700,
              }}
            >
              {title}
            </Typography>
          </Box>
          
          <Typography 
            variant="subtitle1" 
            className="contact-description"
            sx={{ 
              maxWidth: 700, 
              mx: 'auto', 
              mb: 6,
              color: 'text.secondary'
            }}
          >
            {description}
          </Typography>
        </Box>
        
        <Grid container justifyContent="center" className="contact-grid">
          <Grid item xs={12} md={8} lg={6} className="contact-info-grid">
            <Box 
              className="contact-info-container"
              sx={{ 
                p: 4,
                borderRadius: 2,
                backgroundColor: 'rgba(30, 30, 30, 0.7)',
                border: '1px solid rgba(212, 175, 55, 0.1)',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
              }}
            >
              <Typography 
                variant="h4" 
                component="h3" 
                className="contact-info-heading"
                sx={{ 
                  mb: 4,
                  fontWeight: 600,
                  textAlign: 'center'
                }}
              >
                Get In Touch
              </Typography>
              
              <Box className="contact-info-list">
                {contactInfo.map((info, index) => (
                  <ContactInfoItem 
                    key={index}
                    icon={getIconForContact(info.title)}
                    title={info.title}
                    value={info.value}
                  />
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactSection; 