import React from 'react';
import { 
  Typography, 
  Paper, 
  Grow, 
  Box, 
  Grid, 
  Chip,
  IconButton,
  useTheme,
  useMediaQuery,
  Container,
  Divider
} from '@mui/material';
import { styled } from '@mui/material/styles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import LanguageIcon from '@mui/icons-material/Language';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PeopleIcon from '@mui/icons-material/People';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
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
    padding: theme.spacing(2),
  },
}));

const AchievementChip = styled(Chip)(({ theme }) => ({
  margin: theme.spacing(0.5),
  padding: theme.spacing(1),
  backgroundColor: 'rgba(30, 144, 255, 0.1)',
  color: theme.palette.primary.main,
  fontWeight: 600,
  '& .MuiChip-icon': {
    color: theme.palette.primary.main,
  },
}));

const AuthorInfo = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container maxWidth="lg" id="about">
      <Grow in timeout={1000}>
        <StyledPaper>
          <Grid container spacing={4}>
            {/* Author Basic Info */}
            <Grid item xs={12} md={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Box sx={{ mt: 2, textAlign: 'center' }}>
                <Typography 
                  variant="h4" 
                  sx={{ 
                    fontWeight: 700,
                    color: '#1a237e',
                    mb: 1,
                    fontFamily: "'Playfair Display', serif",
                    [theme.breakpoints.down('sm')]: {
                      fontSize: '1.75rem',
                    },
                  }}
                >
                  James Clear
                </Typography>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    color: '#1E90FF',
                    mb: 2,
                    fontFamily: "'Inter', sans-serif",
                    [theme.breakpoints.down('sm')]: {
                      fontSize: '1.1rem',
                    },
                  }}
                >
                  Author & Speaker
                </Typography>
                
                {/* Social Links */}
                <Box sx={{ mb: 3 }}>
                  <IconButton 
                    href="https://www.linkedin.com/in/jamesclear/" 
                    target="_blank"
                    sx={{ color: '#0077B5', '&:hover': { transform: 'scale(1.1)' } }}
                  >
                    <LinkedInIcon />
                  </IconButton>
                  <IconButton 
                    href="https://x.com/JamesClear" 
                    target="_blank"
                    sx={{ color: '#000000', '&:hover': { transform: 'scale(1.1)' } }}
                  >
                    <XIcon />
                  </IconButton>
                  <IconButton 
                    href="https://jamesclear.com" 
                    target="_blank"
                    sx={{ color: '#1E90FF', '&:hover': { transform: 'scale(1.1)' } }}
                  >
                    <LanguageIcon />
                  </IconButton>
                </Box>

                {/* Achievements */}
                <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 1 }}>
                  <AchievementChip 
                    icon={<MenuBookIcon />} 
                    label="NYT Bestseller" 
                  />
                  <AchievementChip 
                    icon={<PeopleIcon />} 
                    label="1M+ Newsletter" 
                  />
                  <AchievementChip 
                    icon={<EmojiEventsIcon />} 
                    label="10M+ Books Sold" 
                  />
                </Box>
              </Box>
            </Grid>

            {/* Author Bio */}
            <Grid item xs={12} md={8}>
              <Typography 
                variant="h5" 
                sx={{ 
                  mb: 3,
                  color: '#1a237e',
                  fontWeight: 600,
                  fontFamily: "'Playfair Display', serif"
                }}
              >
                About the Author
              </Typography>
              <Typography 
                variant="body1" 
                paragraph
                sx={{ 
                  color: '#424242',
                  lineHeight: 1.8,
                  fontFamily: "'Inter', sans-serif",
                  fontSize: isMobile ? '1rem' : '1.1rem'
                }}
              >
                James Clear is a writer and speaker focused on habits, decision-making, and continuous improvement. He is the author of the #1 New York Times bestseller, Atomic Habits. The book has sold over 10 million copies worldwide and has been translated into more than 50 languages.
              </Typography>
              <Typography 
                variant="body1" 
                paragraph
                sx={{ 
                  color: '#424242',
                  lineHeight: 1.8,
                  fontFamily: "'Inter', sans-serif",
                  fontSize: isMobile ? '1rem' : '1.1rem'
                }}
              >
                Clear is a regular speaker at Fortune 500 companies and his work has been featured in places like Time magazine, the New York Times, the Wall Street Journal and on CBS This Morning. His popular "3-2-1" email newsletter is sent to over 1 million subscribers and includes the best ideas from books, interviews and life experience.
              </Typography>
              <Typography 
                variant="body1"
                sx={{ 
                  color: '#424242',
                  lineHeight: 1.8,
                  fontFamily: "'Inter', sans-serif",
                  fontSize: isMobile ? '1rem' : '1.1rem'
                }}
              >
                He is known for his ability to distill complex topics into simple behaviors that can be easily applied to daily life and work. His work combines insights from biology, psychology, and neuroscience to create an easy-to-understand guide for making good habits inevitable and bad habits impossible.
              </Typography>
            </Grid>
          </Grid>
        </StyledPaper>
      </Grow>
    </Container>
  );
};

export default AuthorInfo; 