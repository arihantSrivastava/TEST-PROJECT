import React from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  Link,
  IconButton,
  useTheme,
  useMediaQuery,
  Divider,
  Stack,
  Grow
} from '@mui/material';
import { styled } from '@mui/material/styles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import BookIcon from '@mui/icons-material/MenuBook';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(6),
  marginBottom: theme.spacing(4),
  borderRadius: '20px',
  background: 'linear-gradient(145deg, #ffffff 0%, #f5f7fa 100%)',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 15px 35px rgba(0, 0, 0, 0.15)',
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
}));

const ContactCard = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: '15px',
  backgroundColor: 'rgba(30, 144, 255, 0.05)',
  border: '1px solid rgba(30, 144, 255, 0.1)',
  transition: 'all 0.3s ease',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  '&:hover': {
    backgroundColor: 'rgba(30, 144, 255, 0.1)',
    transform: 'translateY(-3px)',
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
  },
}));

const Contact = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Container maxWidth="lg" id="contact">
      <Grow in timeout={1000}>
        <StyledPaper>
          <Grid container spacing={isMobile ? 2 : 4}>
            {/* Header Section */}
            <Grid item xs={12}>
              <Typography 
                variant="h4" 
                sx={{ 
                  mb: 3,
                  color: '#1a237e',
                  fontWeight: 600,
                  fontFamily: "'Playfair Display', serif",
                  textAlign: 'center'
                }}
              >
                Get in Touch
              </Typography>
            </Grid>

            {/* Contact Information */}
            <Grid item xs={12} md={6}>
              <ContactCard>
                <Stack spacing={isMobile ? 2 : 3}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <BookIcon sx={{ 
                      fontSize: isMobile ? 32 : 40, 
                      color: '#1E90FF',
                    }} />
                    <Typography
                      variant={isMobile ? "h6" : "h5"}
                      sx={{
                        fontWeight: 600,
                        color: '#1a237e',
                        fontFamily: "'Playfair Display', serif",
                      }}
                    >
                      About Atomic Habits
                    </Typography>
                  </Box>
                  <Typography
                    variant="body1"
                    sx={{
                      color: '#424242',
                      lineHeight: 1.8,
                      fontFamily: "'Inter', sans-serif",
                      fontSize: isMobile ? '0.9rem' : '1.1rem',
                    }}
                  >
                    Atomic Habits by James Clear is a groundbreaking book that reveals how tiny changes in behavior can result in remarkable outcomes. This #1 New York Times bestseller has helped millions of readers transform their lives through the power of small habits.
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: '#424242',
                      lineHeight: 1.8,
                      fontFamily: "'Inter', sans-serif",
                      fontSize: isMobile ? '0.9rem' : '1.1rem',
                    }}
                  >
                    Whether you're looking to improve your productivity, health, relationships, or personal development, Atomic Habits provides a proven framework for creating lasting change. Join thousands of successful individuals who have transformed their lives through the power of atomic habits.
                  </Typography>
                </Stack>
              </ContactCard>
            </Grid>

            {/* Contact Details */}
            <Grid item xs={12} md={6}>
              <ContactCard>
                <Stack spacing={isMobile ? 2 : 3}>
                  <Typography
                    variant={isMobile ? "h6" : "h5"}
                    sx={{
                      fontWeight: 600,
                      color: '#1a237e',
                      fontFamily: "'Playfair Display', serif",
                    }}
                  >
                    Contact Information
                  </Typography>
                  
                  <Box>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontWeight: 600,
                        color: '#1E90FF',
                        mb: 1,
                      }}
                    >
                      Connect on LinkedIn
                    </Typography>
                    <Box sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: 1,
                      flexWrap: isMobile ? 'wrap' : 'nowrap'
                    }}>
                      <IconButton
                        component={Link}
                        href="https://www.linkedin.com/in/himanshu-upadhyay65/"
                        target="_blank"
                        sx={{ color: '#0077B5' }}
                      >
                        <LinkedInIcon />
                      </IconButton>
                      <Link
                        href="https://www.linkedin.com/in/himanshu-upadhyay65/"
                        target="_blank"
                        sx={{
                          color: '#424242',
                          textDecoration: 'none',
                          '&:hover': {
                            color: '#1E90FF',
                          },
                          fontSize: isMobile ? '0.9rem' : '1rem',
                        }}
                      >
                        Himanshu Upadhyay
                      </Link>
                    </Box>
                  </Box>

                  <Divider sx={{ my: isMobile ? 1 : 2 }} />

                  <Box>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontWeight: 600,
                        color: '#1E90FF',
                        mb: 1,
                      }}
                    >
                      Email Us
                    </Typography>
                    <Box sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: 1,
                      flexWrap: isMobile ? 'wrap' : 'nowrap'
                    }}>
                      <IconButton
                        component={Link}
                        href="mailto:upadhyayhimanshu034@gmail.com"
                        sx={{ color: '#1E90FF' }}
                      >
                        <EmailIcon />
                      </IconButton>
                      <Link
                        href="mailto:upadhyayhimanshu034@gmail.com"
                        sx={{
                          color: '#424242',
                          textDecoration: 'none',
                          '&:hover': {
                            color: '#1E90FF',
                          },
                          fontSize: isMobile ? '0.9rem' : '1rem',
                          wordBreak: 'break-all',
                        }}
                      >
                        upadhyayhimanshu034@gmail.com
                      </Link>
                    </Box>
                  </Box>
                </Stack>
              </ContactCard>
            </Grid>
          </Grid>
        </StyledPaper>
      </Grow>
    </Container>
  );
};

export default Contact; 