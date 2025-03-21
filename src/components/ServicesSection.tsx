import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent,
  CardActions,
  Button
} from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import SecurityIcon from '@mui/icons-material/Security';
import LanguageIcon from '@mui/icons-material/Language';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import BuildIcon from '@mui/icons-material/Build';

const services = [
  {
    title: 'Smart Contract Development',
    description: 'Custom smart contract development for decentralized applications, token economies, and DeFi protocols.',
    icon: <CodeIcon fontSize="large" />,
  },
  {
    title: 'Blockchain Architecture',
    description: 'Design and implementation of blockchain networks, including consensus mechanisms and network topology.',
    icon: <StorageIcon fontSize="large" />,
  },
  {
    title: 'Security Audits',
    description: 'Comprehensive security assessment and auditing for blockchain applications and smart contracts.',
    icon: <SecurityIcon fontSize="large" />,
  },
  {
    title: 'Web3 Integration',
    description: 'Seamless integration of Web3 technologies with existing platforms and applications.',
    icon: <LanguageIcon fontSize="large" />,
  },
  {
    title: 'DApp Development',
    description: 'End-to-end decentralized application development with modern frontend technologies.',
    icon: <AccountTreeIcon fontSize="large" />,
  },
  {
    title: 'Blockchain Consulting',
    description: 'Strategic consulting on blockchain implementation, token economics, and regulatory compliance.',
    icon: <BuildIcon fontSize="large" />,
  }
];

const ServicesSection: React.FC = () => {
  return (
    <Box id="services" className="services-section" sx={{ py: 10, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg" className="services-container">
        <Box sx={{ mb: 8, textAlign: 'center' }} className="services-header">
          <Typography 
            variant="overline" 
            className="services-overline"
            sx={{ 
              color: 'primary.main',
              fontWeight: 600,
              letterSpacing: 1.5,
            }}
          >
            OUR EXPERTISE
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }} className="services-title-container">
            <img 
              src="/images/logo - !f (orange - no bg).png" 
              alt="Unforkable Logo Symbol" 
              className="services-title-logo"
              style={{ height: '30px', marginRight: '10px' }} 
            />
            <Typography 
              variant="h2" 
              component="h2" 
              className="services-title"
              sx={{ 
                fontWeight: 700,
              }}
            >
              What We Offer
            </Typography>
          </Box>
          <Typography 
            variant="subtitle1" 
            className="services-subtitle"
            sx={{ 
              maxWidth: 700, 
              mx: 'auto', 
              color: 'text.secondary',
              mb: 4
            }}
          >
            Comprehensive blockchain solutions tailored to your specific needs
          </Typography>
        </Box>

        <Grid container spacing={4} className="services-grid">
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} className={`service-item service-item-${index}`}>
              <Card 
                className={`service-card service-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  overflow: 'hidden',
                  borderRadius: 3,
                  boxShadow: '0 8px 40px rgba(0, 0, 0, 0.4)',
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 16px 70px rgba(212, 175, 55, 0.2)',
                  },
                }}
              >
                <CardContent sx={{ flexGrow: 1, p: 4 }} className="service-content">
                  <Box 
                    className="service-icon-container"
                    sx={{ 
                      mb: 3, 
                      color: 'primary.main',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 60,
                      height: 60,
                      borderRadius: '50%',
                      backgroundColor: 'rgba(212, 175, 55, 0.1)',
                    }}
                  >
                    <Box className="service-icon">{service.icon}</Box>
                  </Box>
                  <Typography variant="h5" component="h3" gutterBottom className="service-title">
                    {service.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" className="service-description">
                    {service.description}
                  </Typography>
                </CardContent>
                <CardActions sx={{ p: 3, pt: 0 }} className="service-actions">
                  <Button 
                    color="primary" 
                    size="small" 
                    href="#contact"
                    className="service-learn-more"
                  >
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ServicesSection; 