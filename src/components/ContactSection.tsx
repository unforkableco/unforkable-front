import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  TextField, 
  Button, 
  Paper,
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
  const { overline, title, description, formLabels, contactInfo } = content.contact;

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
          
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }} className="contact-title-container">
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
        
        <Grid container spacing={6} className="contact-grid">
          <Grid item xs={12} md={6} className="contact-form-grid">
            <Paper 
              className="contact-form-container"
              elevation={8}
              sx={{ 
                p: 4,
                borderRadius: 2,
                backgroundColor: 'rgba(30, 30, 30, 0.7)',
                border: '1px solid rgba(212, 175, 55, 0.1)',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
              }}
            >
              <Box 
                component="form" 
                className="contact-form"
                sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}
              >
                <TextField 
                  label={formLabels.name}
                  className="contact-form-name"
                  variant="outlined" 
                  fullWidth
                  sx={{ 
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'rgba(212, 175, 55, 0.2)',
                      },
                      '&:hover fieldset': {
                        borderColor: 'rgba(212, 175, 55, 0.5)',
                      },
                    },
                  }}
                />
                
                <TextField 
                  label={formLabels.email}
                  className="contact-form-email"
                  variant="outlined" 
                  type="email" 
                  fullWidth
                  sx={{ 
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'rgba(212, 175, 55, 0.2)',
                      },
                      '&:hover fieldset': {
                        borderColor: 'rgba(212, 175, 55, 0.5)',
                      },
                    },
                  }}
                />
                
                <TextField 
                  label={formLabels.subject}
                  className="contact-form-subject"
                  variant="outlined" 
                  fullWidth
                  sx={{ 
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'rgba(212, 175, 55, 0.2)',
                      },
                      '&:hover fieldset': {
                        borderColor: 'rgba(212, 175, 55, 0.5)',
                      },
                    },
                  }}
                />
                
                <TextField 
                  label={formLabels.message}
                  className="contact-form-message"
                  variant="outlined" 
                  multiline 
                  rows={4} 
                  fullWidth
                  sx={{ 
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'rgba(212, 175, 55, 0.2)',
                      },
                      '&:hover fieldset': {
                        borderColor: 'rgba(212, 175, 55, 0.5)',
                      },
                    },
                  }}
                />
                
                <Button 
                  variant="contained" 
                  color="primary" 
                  size="large"
                  className="contact-form-submit"
                  sx={{ 
                    py: 1.5,
                    alignSelf: 'flex-start',
                    borderRadius: 2,
                  }}
                >
                  {formLabels.submitButton}
                </Button>
              </Box>
            </Paper>
          </Grid>
          
          <Grid item xs={12} md={6} className="contact-info-grid">
            <Box 
              className="contact-info-container"
              sx={{ 
                height: '100%',
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
                  fontWeight: 600
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