import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Card, 
  Button, 
  Grid,
  Avatar,
  Chip,
  IconButton,
  Skeleton
} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import BusinessIcon from '@mui/icons-material/Business';
import PeopleIcon from '@mui/icons-material/People';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

interface LinkedInSectionProps {
  variant?: 'full' | 'compact';
}

const LinkedInSection: React.FC<LinkedInSectionProps> = ({ variant = 'full' }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for LinkedIn content
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const linkedInData = {
    companyName: "Unforkable",
    companyUrl: "https://www.linkedin.com/company/unforkable",
    followers: "500+",
    industry: "Blockchain Development",
    location: "Luxembourg + Remote",
    description: "Blockchain development agency specializing in custom Substrate chains, smart contracts, DeFi protocols, and AI automation systems.",
    recentPosts: [
      {
        title: "Building the Future of DeFi",
        excerpt: "Our latest project showcases advanced rebasing mechanics with AMPL integration...",
        engagement: "15 likes • 8 comments",
        timeAgo: "2 days ago"
      },
      {
        title: "Substrate Development Insights",
        excerpt: "Custom pallets and EVM precompiles are revolutionizing blockchain architecture...",
        engagement: "23 likes • 12 comments", 
        timeAgo: "5 days ago"
      },
      {
        title: "AI Automation in Web3",
        excerpt: "Integrating ElizaOS and SmolaAgents for next-generation blockchain automation...",
        engagement: "31 likes • 18 comments",
        timeAgo: "1 week ago"
      }
    ]
  };

  if (variant === 'compact') {
    return (
      <Card
        elevation={6}
        sx={{
          background: 'linear-gradient(135deg, rgba(0, 119, 181, 0.1) 0%, rgba(20,20,20,0.9) 100%)',
          border: '1px solid rgba(0, 119, 181, 0.2)',
          borderRadius: 3,
          p: 3,
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-4px)',
            borderColor: '#0077B5',
            boxShadow: '0 12px 24px rgba(0, 119, 181, 0.2)'
          }
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Avatar
            sx={{
              bgcolor: '#0077B5',
              width: 56,
              height: 56,
              mr: 2
            }}
          >
            <LinkedInIcon sx={{ fontSize: 32 }} />
          </Avatar>
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" sx={{ color: 'white', fontWeight: 600 }}>
              {linkedInData.companyName}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {linkedInData.followers} followers
            </Typography>
          </Box>
          <IconButton
            component="a"
            href={linkedInData.companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: '#0077B5',
              '&:hover': {
                backgroundColor: 'rgba(0, 119, 181, 0.1)'
              }
            }}
          >
            <OpenInNewIcon />
          </IconButton>
        </Box>
        
        <Typography 
          variant="body2" 
          sx={{ 
            color: 'text.secondary',
            mb: 3,
            lineHeight: 1.5
          }}
        >
          {linkedInData.description}
        </Typography>

        <Button
          variant="contained"
          startIcon={<LinkedInIcon />}
          component="a"
          href={linkedInData.companyUrl}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            backgroundColor: '#0077B5',
            color: 'white',
            textTransform: 'none',
            fontWeight: 600,
            '&:hover': {
              backgroundColor: '#005885'
            }
          }}
        >
          Follow on LinkedIn
        </Button>
      </Card>
    );
  }

  return (
    <Box sx={{ py: 6 }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography 
            variant="h4" 
            sx={{ 
              fontWeight: 700, 
              mb: 2,
              color: 'white'
            }}
          >
            Connect with Us Professionally
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              color: 'text.secondary',
              maxWidth: 600,
              mx: 'auto'
            }}
          >
            Follow our LinkedIn for industry insights, project updates, and professional blockchain development content
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {/* Company Profile Card */}
          <Grid item xs={12} md={6}>
            <Card
              elevation={8}
              sx={{
                background: 'linear-gradient(135deg, rgba(0, 119, 181, 0.1) 0%, rgba(20,20,20,0.9) 100%)',
                border: '1px solid rgba(0, 119, 181, 0.2)',
                borderRadius: 3,
                p: 4,
                height: '100%',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  borderColor: '#0077B5',
                  boxShadow: '0 20px 40px rgba(0, 119, 181, 0.2)'
                }
              }}
            >
              <Box sx={{ textAlign: 'center', mb: 4 }}>
                <Avatar
                  sx={{
                    bgcolor: '#0077B5',
                    width: 80,
                    height: 80,
                    mx: 'auto',
                    mb: 2,
                    boxShadow: '0 8px 24px rgba(0, 119, 181, 0.3)'
                  }}
                >
                  <LinkedInIcon sx={{ fontSize: 40 }} />
                </Avatar>
                
                <Typography 
                  variant="h5" 
                  sx={{ 
                    fontWeight: 600, 
                    color: 'white',
                    mb: 1
                  }}
                >
                  {linkedInData.companyName}
                </Typography>
                
                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: '#0077B5',
                    fontWeight: 500
                  }}
                >
                  {linkedInData.industry}
                </Typography>
              </Box>

              <Box sx={{ mb: 4 }}>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: 'text.secondary',
                    lineHeight: 1.6,
                    mb: 3
                  }}
                >
                  {linkedInData.description}
                </Typography>

                <Grid container spacing={2}>
                  <Grid item xs={4}>
                    <Box sx={{ textAlign: 'center' }}>
                      <PeopleIcon sx={{ color: '#0077B5', fontSize: 24, mb: 1 }} />
                      <Typography variant="body2" sx={{ color: 'white', fontWeight: 600 }}>
                        {linkedInData.followers}
                      </Typography>
                      <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                        Followers
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={4}>
                    <Box sx={{ textAlign: 'center' }}>
                      <BusinessIcon sx={{ color: '#0077B5', fontSize: 24, mb: 1 }} />
                      <Typography variant="body2" sx={{ color: 'white', fontWeight: 600 }}>
                        B2B
                      </Typography>
                      <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                        Focus
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={4}>
                    <Box sx={{ textAlign: 'center' }}>
                      <TrendingUpIcon sx={{ color: '#0077B5', fontSize: 24, mb: 1 }} />
                      <Typography variant="body2" sx={{ color: 'white', fontWeight: 600 }}>
                        Growing
                      </Typography>
                      <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                        Network
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Box>

              <Button
                variant="contained"
                size="large"
                startIcon={<LinkedInIcon />}
                component="a"
                href={linkedInData.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                fullWidth
                sx={{
                  backgroundColor: '#0077B5',
                  color: 'white',
                  textTransform: 'none',
                  fontWeight: 600,
                  py: 1.5,
                  '&:hover': {
                    backgroundColor: '#005885',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 8px 16px rgba(0, 119, 181, 0.3)'
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                Follow Our Company Page
              </Button>
            </Card>
          </Grid>

          {/* Recent Posts Preview */}
          <Grid item xs={12} md={6}>
            <Card
              elevation={8}
              sx={{
                background: 'linear-gradient(135deg, rgba(20,20,20,0.9) 0%, rgba(40,40,40,0.8) 100%)',
                border: '1px solid rgba(212, 175, 55, 0.2)',
                borderRadius: 3,
                p: 4,
                height: '100%'
              }}
            >
              <Typography 
                variant="h6" 
                sx={{ 
                  fontWeight: 600, 
                  color: 'primary.main',
                  mb: 3,
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <LinkedInIcon sx={{ mr: 1 }} />
                Recent LinkedIn Posts
              </Typography>

              <Box sx={{ space: 2 }}>
                {isLoading ? (
                  // Loading skeletons
                  Array.from({ length: 3 }).map((_, index) => (
                    <Box key={index} sx={{ mb: 3 }}>
                      <Skeleton variant="text" width="80%" height={24} sx={{ bgcolor: 'rgba(255,255,255,0.1)' }} />
                      <Skeleton variant="text" width="100%" height={20} sx={{ bgcolor: 'rgba(255,255,255,0.1)', mt: 1 }} />
                      <Skeleton variant="text" width="60%" height={16} sx={{ bgcolor: 'rgba(255,255,255,0.1)', mt: 1 }} />
                    </Box>
                  ))
                ) : (
                  linkedInData.recentPosts.map((post, index) => (
                    <Box 
                      key={index}
                      sx={{ 
                        mb: 3,
                        pb: 3,
                        borderBottom: index < linkedInData.recentPosts.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none'
                      }}
                    >
                      <Typography 
                        variant="subtitle1" 
                        sx={{ 
                          color: 'white',
                          fontWeight: 600,
                          mb: 1
                        }}
                      >
                        {post.title}
                      </Typography>
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          color: 'text.secondary',
                          mb: 2,
                          lineHeight: 1.5
                        }}
                      >
                        {post.excerpt}
                      </Typography>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Chip 
                          label={post.engagement}
                          size="small"
                          sx={{
                            backgroundColor: 'rgba(0, 119, 181, 0.1)',
                            color: '#0077B5',
                            fontSize: '0.75rem'
                          }}
                        />
                        <Typography 
                          variant="caption" 
                          sx={{ 
                            color: 'text.secondary'
                          }}
                        >
                          {post.timeAgo}
                        </Typography>
                      </Box>
                    </Box>
                  ))
                )}
              </Box>

              <Button
                variant="outlined"
                endIcon={<OpenInNewIcon />}
                component="a"
                href={linkedInData.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                fullWidth
                sx={{
                  borderColor: '#0077B5',
                  color: '#0077B5',
                  textTransform: 'none',
                  fontWeight: 600,
                  mt: 2,
                  '&:hover': {
                    borderColor: '#0077B5',
                    backgroundColor: 'rgba(0, 119, 181, 0.1)'
                  }
                }}
              >
                View All Posts on LinkedIn
              </Button>
            </Card>
          </Grid>
        </Grid>

        {/* Call to Action */}
        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Typography 
            variant="h6" 
            sx={{ 
              color: 'text.secondary',
              mb: 3
            }}
          >
            Stay updated with our latest blockchain developments and industry insights
          </Typography>
          <Button
            variant="contained"
            size="large"
            startIcon={<LinkedInIcon />}
            component="a"
            href={linkedInData.companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              backgroundColor: '#0077B5',
              color: 'white',
              textTransform: 'none',
              fontWeight: 700,
              fontSize: '1.1rem',
              px: 6,
              py: 2,
              borderRadius: 3,
              '&:hover': {
                backgroundColor: '#005885',
                transform: 'translateY(-2px)',
                boxShadow: '0 10px 25px rgba(0, 119, 181, 0.4)'
              },
              transition: 'all 0.3s ease'
            }}
          >
            Connect with Unforkable
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default LinkedInSection; 