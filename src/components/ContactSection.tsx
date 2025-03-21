import React from 'react';
import { Box, Container, Typography, Grid, TextField, Button, Paper } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

interface ContactInfoItemProps {
  icon: React.ReactNode;
  title: string;
  content: string;
}

const ContactInfoItem: React.FC<ContactInfoItemProps> = ({ icon, title, content }) => (
  <Box 
    className="contact-info-item"
    sx={{ 
      display: 'flex', 
      alignItems: 'flex-start', 
      mb: 3 
    }}
  >
    <Box 
      className="contact-info-icon-container"
      sx={{ 
        mr: 2, 
        color: 'primary.main',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 1.5,
        borderRadius: '50%',
        backgroundColor: 'rgba(212, 175, 55, 0.1)',
      }}
    >
      {icon}
    </Box>
    <Box className="contact-info-content">
      <Typography variant="h6" gutterBottom fontWeight={600} className="contact-info-title">
        {title}
      </Typography>
      <Typography variant="body1" color="text.secondary" className="contact-info-text">
        {content}
      </Typography>
    </Box>
  </Box>
);

const ContactSection: React.FC = () => {
  return (
    <Box id="contact" className="contact-section" sx={{ py: 10, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg" className="contact-container">
        <Box sx={{ mb: 8, textAlign: 'center' }} className="contact-header">
          <Typography 
            variant="overline" 
            className="contact-overline"
            sx={{ 
              color: 'primary.main',
              fontWeight: 600,
              letterSpacing: 1.5,
            }}
          >
            GET IN TOUCH
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
              Contact Us
            </Typography>
          </Box>
          <Typography 
            variant="subtitle1" 
            className="contact-subtitle"
            sx={{ 
              maxWidth: 700, 
              mx: 'auto', 
              color: 'text.secondary',
              mb: 4
            }}
          >
            Let's discuss how we can help bring your blockchain project to life
          </Typography>
        </Box>
        
        <Grid container spacing={6} className="contact-grid">
          {/* Contact Form */}
          <Grid item xs={12} md={7} className="contact-form-grid">
            <Paper 
              className="contact-form-paper"
              sx={{ 
                p: 4, 
                borderRadius: 3,
                boxShadow: '0 8px 40px rgba(0, 0, 0, 0.4)',
              }}
            >
              <Typography 
                variant="h5" 
                component="h3" 
                gutterBottom 
                className="contact-form-title"
                fontWeight={600}
              >
                Send a Message
              </Typography>
              
              <Box component="form" className="contact-form" sx={{ mt: 3 }}>
                <Grid container spacing={3} className="contact-form-fields">
                  <Grid item xs={12} sm={6} className="form-field-name">
                    <TextField
                      fullWidth
                      label="Name"
                      variant="outlined"
                      className="contact-form-field contact-name-field"
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} className="form-field-email">
                    <TextField
                      fullWidth
                      label="Email"
                      variant="outlined"
                      className="contact-form-field contact-email-field"
                      type="email"
                      required
                    />
                  </Grid>
                  <Grid item xs={12} className="form-field-subject">
                    <TextField
                      fullWidth
                      label="Subject"
                      variant="outlined"
                      className="contact-form-field contact-subject-field"
                    />
                  </Grid>
                  <Grid item xs={12} className="form-field-message">
                    <TextField
                      fullWidth
                      label="Message"
                      variant="outlined"
                      multiline
                      rows={5}
                      className="contact-form-field contact-message-field"
                      required
                    />
                  </Grid>
                  <Grid item xs={12} className="form-field-submit">
                    <Button 
                      type="submit" 
                      variant="contained" 
                      color="primary"
                      size="large"
                      className="contact-form-submit"
                      sx={{ 
                        py: 1.5, 
                        px: 4,
                        borderRadius: 2,
                        fontWeight: 600,
                      }}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Grid>
          
          {/* Contact Information */}
          <Grid item xs={12} md={5} className="contact-info-grid">
            <Box 
              className="contact-info-container"
              sx={{ 
                height: '100%',
                p: { xs: 4, md: 6 },
                borderRadius: 3,
                backgroundColor: 'black',
                color: 'white',
                boxShadow: '0 8px 40px rgba(0, 0, 0, 0.4)',
                border: '1px solid rgba(212, 175, 55, 0.2)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Typography 
                variant="h5" 
                component="h3" 
                gutterBottom 
                className="contact-info-header"
                fontWeight={600}
              >
                Contact Information
              </Typography>
              
              <Box sx={{ mt: 4 }} className="contact-info-items">
                <ContactInfoItem
                  icon={<EmailIcon />}
                  title="Email Us"
                  content="contact@unforkable.com"
                />
                <ContactInfoItem
                  icon={<PhoneIcon />}
                  title="Call Us"
                  content="+1 (123) 456-7890"
                />
                <ContactInfoItem
                  icon={<LocationOnIcon />}
                  title="Location"
                  content="123 Blockchain Street, San Francisco, CA 94107"
                />
              </Box>
              
              <Box sx={{ mt: 'auto', pt: 4 }} className="contact-social-container">
                <Typography 
                  variant="subtitle2" 
                  gutterBottom 
                  className="contact-social-title"
                  sx={{ opacity: 0.9 }}
                >
                  Follow Us On
                </Typography>
                <Box sx={{ display: 'flex', gap: 2 }} className="contact-social-icons">
                  {['Twitter', 'GitHub', 'LinkedIn'].map((platform) => (
                    <Button 
                      key={platform} 
                      variant="outlined"
                      className={`contact-social-button contact-${platform.toLowerCase()}-button`}
                      sx={{ 
                        color: 'white', 
                        borderColor: 'rgba(212, 175, 55, 0.3)',
                        '&:hover': {
                          borderColor: 'primary.main',
                          backgroundColor: 'rgba(212, 175, 55, 0.1)'
                        }
                      }}
                    >
                      {platform}
                    </Button>
                  ))}
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactSection; 