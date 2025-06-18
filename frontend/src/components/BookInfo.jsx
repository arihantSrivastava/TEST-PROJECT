import React from 'react';
import { 
  Box, 
  Typography, 
  Paper, 
  Grid, 
  Fade, 
  Chip,
  Button,
  Rating,
  Divider,
  useTheme,
  useMediaQuery,
  Container,
  IconButton,
  Tooltip
} from '@mui/material';
import { styled } from '@mui/material/styles';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ShareIcon from '@mui/icons-material/Share';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import TranslateIcon from '@mui/icons-material/Translate';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import StarIcon from '@mui/icons-material/Star';
import PreviewIcon from '@mui/icons-material/Preview';

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

const BookCover = styled(Box)(({ theme }) => ({
  position: 'relative',
  '& img': {
    width: '100%',
    height: 'auto',
    borderRadius: '15px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
      transform: 'scale(1.02)',
      boxShadow: '0 15px 40px rgba(0, 0, 0, 0.3)',
    },
  },
}));

const MetadataChip = styled(Chip)(({ theme }) => ({
  margin: theme.spacing(0.5),
  padding: theme.spacing(1),
  backgroundColor: 'rgba(30, 144, 255, 0.1)',
  color: theme.palette.primary.main,
  fontWeight: 600,
  '& .MuiChip-icon': {
    color: theme.palette.primary.main,
  },
}));

const BookInfo = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container maxWidth="lg">
      <Fade in timeout={1000}>
        <StyledPaper>
          <Grid container spacing={4}>
            {/* Book Cover */}
            <Grid item xs={12} md={4}>
              <BookCover>
                <img
                  src="https://m.media-amazon.com/images/I/81wgcld4wxL._AC_UF1000,1000_QL80_.jpg"
                  alt="Atomic Habits Book Cover"
                />
                <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center', gap: 1 }}>
                  <Tooltip title="Save for Later">
                    <IconButton color="primary" size="large">
                      <BookmarkIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Share">
                    <IconButton color="primary" size="large">
                      <ShareIcon />
                    </IconButton>
                  </Tooltip>
                </Box>
              </BookCover>
            </Grid>

            {/* Book Details */}
            <Grid item xs={12} md={8}>
              <Typography 
                variant="h3" 
                sx={{ 
                  fontWeight: 700,
                  color: '#1a237e',
                  mb: 1,
                  fontFamily: "'Playfair Display', serif",
                  [theme.breakpoints.down('sm')]: {
                    fontSize: '2rem',
                  },
                }}
              >
                Atomic Habits
              </Typography>
              
              <Typography 
                variant="h5" 
                sx={{ 
                  color: '#1E90FF',
                  mb: 2,
                  fontFamily: "'Inter', sans-serif",
                  [theme.breakpoints.down('sm')]: {
                    fontSize: '1.2rem',
                  },
                }}
              >
                An Easy & Proven Way to Build Good Habits & Break Bad Ones
              </Typography>

              {/* Rating and Reviews */}
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Rating 
                  value={4.8} 
                  precision={0.1} 
                  readOnly 
                  icon={<StarIcon fontSize="inherit" />}
                />
                <Typography 
                  variant="body2" 
                  sx={{ ml: 1, color: 'text.secondary' }}
                >
                  4.8 (12,345 ratings)
                </Typography>
              </Box>

              {/* Book Metadata */}
              <Box sx={{ mb: 3 }}>
                <MetadataChip 
                  icon={<MenuBookIcon />} 
                  label="320 Pages" 
                />
                <MetadataChip 
                  icon={<TranslateIcon />} 
                  label="English" 
                />
                <MetadataChip 
                  icon={<CalendarTodayIcon />} 
                  label="Published 2018" 
                />
              </Box>

              <Divider sx={{ my: 3 }} />

              {/* Book Description */}
              <Typography 
                variant="h6" 
                sx={{ 
                  mb: 2,
                  color: '#1a237e',
                  fontWeight: 600,
                  fontFamily: "'Playfair Display', serif"
                }}
              >
                About the Book
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
                No matter your goals, Atomic Habits offers a proven framework for improving every day. James Clear, one of the world's leading experts on habit formation, reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results.
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
                If you're having trouble changing your habits, the problem isn't you. The problem is your system. Bad habits repeat themselves again and again not because you don't want to change, but because you have the wrong system for change. You do not rise to the level of your goals. You fall to the level of your systems.
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
                In this book, you'll get a proven system that can take you to new heights. Clear is known for his ability to distill complex topics into simple behaviors that can be easily applied to daily life and work. Here, he draws on the most proven ideas from biology, psychology, and neuroscience to create an easy-to-understand guide for making good habits inevitable and bad habits impossible.
              </Typography>

              {/* Preview Button */}
              <Box sx={{ mt: 4, display: 'flex', gap: 2 }}>
                <Button 
                  variant="outlined" 
                  size="large"
                  startIcon={<PreviewIcon />}
                  sx={{ 
                    borderRadius: '30px',
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    textTransform: 'none',
                  }}
                >
                  Preview
                </Button>
              </Box>
            </Grid>
          </Grid>
        </StyledPaper>
      </Fade>
    </Container>
  );
};

export default BookInfo; 