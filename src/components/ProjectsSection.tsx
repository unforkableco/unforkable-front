import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Chip, Stack } from '@mui/material';

const projects = [
  {
    title: 'Alchemix Leverager',
    description: 'A leveraged yield farming protocol for the Alchemix ecosystem that allows users to multiply their yields through strategic borrowing and reinvestment.',
    image: '/images/projects/alchemix-logo.png',
    technologies: ['Solidity', 'Web3.js', 'React', 'DeFi'],
  },
  {
    title: 'Roko Network',
    description: 'Built on Substrate, Roko Network is a next-generation blockchain focused on interoperability with advanced consensus mechanisms.',
    image: '/images/projects/substrate-logo.png',
    technologies: ['Substrate', 'Rust', 'Polkadot', 'Blockchain'],
  },
  {
    title: 'Bittensor',
    description: 'A decentralized machine learning network that incentivizes the production of AI models through a unique consensus mechanism and token economics.',
    image: '/images/projects/bittensor-logo.png',
    technologies: ['Python', 'Machine Learning', 'Substrate', 'Web3'],
  },
  {
    title: 'GraphLinq',
    description: 'An automation protocol that allows users to create custom workflows and integrations between different blockchain networks without coding experience.',
    image: '/images/projects/graphlinq-logo.png',
    technologies: ['Solidity', 'JavaScript', 'GraphQL', 'Automation'],
  },
  {
    title: 'RenaSwap',
    description: 'A decentralized exchange focused on cross-chain swaps with minimal slippage and lower fees than traditional DEXs.',
    image: '/images/projects/uniswap-logo.png',
    technologies: ['Vyper', 'React', 'DeFi', 'AMM'],
  },
];

const capabilities = [
  'Custom blockchain development from scratch',
  'Layer 1 and layer 2 solutions design and implementation',
  'Deployment of test networks and mainnets',
  'Security auditing and penetration testing',
  'Smart contract optimization for gas efficiency',
  'Blockchain explorer and indexing implementation',
  'Server infrastructure and maintenance',
  'Cross-chain bridge development',
];

const ProjectsSection: React.FC = () => {
  return (
    <Box id="projects" className="projects-section" sx={{ py: 10, backgroundColor: 'background.paper' }}>
      <Container maxWidth="lg" className="projects-container">
        <Box sx={{ mb: 8, textAlign: 'center' }} className="projects-header">
          <Typography 
            variant="overline" 
            className="projects-overline"
            sx={{ 
              color: 'primary.main',
              fontWeight: 600,
              letterSpacing: 1.5,
            }}
          >
            OUR PORTFOLIO
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }} className="projects-title-container">
            <img 
              src="/images/logo - !f (orange - no bg).png" 
              alt="Unforkable Logo Symbol"
              className="projects-title-logo" 
              style={{ height: '30px', marginRight: '10px' }} 
            />
            <Typography 
              variant="h2" 
              component="h2" 
              className="projects-title"
              sx={{ 
                fontWeight: 700,
              }}
            >
              Our Projects
            </Typography>
          </Box>
          <Typography 
            variant="subtitle1"
            className="projects-subtitle" 
            sx={{ 
              maxWidth: 700, 
              mx: 'auto', 
              color: 'text.secondary',
              mb: 4
            }}
          >
            Showcasing our expertise in blockchain development across various platforms and technologies
          </Typography>
        </Box>

        <Grid container spacing={4} className="projects-grid">
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} key={index} className={`project-item project-item-${index}`}>
              <Card 
                className={`project-card project-${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  overflow: 'hidden',
                  borderRadius: 3,
                  boxShadow: '0 8px 40px rgba(0, 0, 0, 0.4)',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 16px 70px rgba(212, 175, 55, 0.2)',
                  },
                }}
              >
                <Box 
                  className="project-image-container"
                  sx={{ 
                    height: 200,
                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 3
                  }}
                >
                  <img
                    src={project.image}
                    alt={`${project.title} Logo`}
                    className={`project-image project-image-${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                    style={{ 
                      maxHeight: '100%', 
                      maxWidth: '100%',
                      objectFit: 'contain'
                    }}
                  />
                </Box>
                <CardContent sx={{ flexGrow: 1, p: 3 }} className="project-content">
                  <Typography variant="h5" component="h3" gutterBottom fontWeight={600} className="project-title">
                    {project.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" paragraph className="project-description">
                    {project.description}
                  </Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap" gap={1} className="project-technologies">
                    {project.technologies.map((tech, techIndex) => (
                      <Chip 
                        key={techIndex} 
                        label={tech}
                        className={`project-tech-chip project-tech-${tech.toLowerCase().replace(/\//g, '-')}`} 
                        color="primary" 
                        size="small" 
                        variant="outlined"
                      />
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        
        <Box sx={{ mt: 8, p: 4, backgroundColor: 'black', borderRadius: 3, color: 'white', border: '1px solid rgba(212, 175, 55, 0.2)' }} className="capabilities-section">
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 3 }} className="capabilities-title-container">
            <img 
              src="/images/logo - !f (white - no bg).png" 
              alt="Unforkable Logo Symbol"
              className="capabilities-logo" 
              style={{ height: '30px', marginRight: '10px' }} 
            />
            <Typography variant="h3" component="h3" className="capabilities-title">
              Building the Future of Web3
            </Typography>
          </Box>
          <Grid container spacing={2} sx={{ mt: 2 }} className="capabilities-grid">
            {capabilities.map((capability, index) => (
              <Grid item xs={12} md={6} key={index} className={`capability-item capability-item-${index}`}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }} className="capability-content">
                  <Box 
                    className="capability-bullet"
                    sx={{ 
                      width: 8, 
                      height: 8, 
                      borderRadius: '50%', 
                      backgroundColor: 'primary.main', 
                      mr: 2 
                    }} 
                  />
                  <Typography variant="body1" className="capability-text">{capability}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default ProjectsSection; 