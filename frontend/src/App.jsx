import React from 'react';
import { Box, CssBaseline, ThemeProvider, createTheme, Container, useTheme, useMediaQuery } from '@mui/material';
import Navbar from './components/Navbar';
import BookInfo from './components/BookInfo';
import AuthorInfo from './components/AuthorInfo';
import KeyQuotes from './components/KeyQuotes';
import Comments from './components/Comments';
import Contact from './components/Contact';

const theme = createTheme({
  typography: {
    fontFamily: "'Inter', 'Playfair Display', sans-serif",
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      '@media (max-width:600px)': {
        fontSize: '2rem',
      },
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      '@media (max-width:600px)': {
        fontSize: '1.75rem',
      },
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 600,
      '@media (max-width:600px)': {
        fontSize: '1.5rem',
      },
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
      '@media (max-width:600px)': {
        fontSize: '1.25rem',
      },
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 600,
      '@media (max-width:600px)': {
        fontSize: '1.1rem',
      },
    },
    h6: {
      fontSize: '1.1rem',
      fontWeight: 600,
      '@media (max-width:600px)': {
        fontSize: '1rem',
      },
    },
    body1: {
      fontSize: '1rem',
      '@media (max-width:600px)': {
        fontSize: '0.9rem',
      },
    },
  },
  palette: {
    primary: {
      main: '#1E90FF',
    },
    background: {
      default: '#f5f7fa',
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: {
            xs: '16px',
            sm: '24px',
            md: '32px',
          },
          paddingRight: {
            xs: '16px',
            sm: '24px',
            md: '32px',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          '@media (max-width:600px)': {
            borderRadius: '12px',
          },
        },
      },
    },
  },
});

function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box 
        sx={{ 
          minHeight: '100vh',
          bgcolor: 'background.default',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Navbar />
        <Box 
          component="main"
          sx={{ 
            flexGrow: 1,
            py: { xs: 2, sm: 3, md: 4 },
            px: { xs: 1, sm: 2, md: 3 },
          }}
        >
          <Container 
            maxWidth="lg" 
            sx={{ 
              display: 'flex',
              flexDirection: 'column',
              gap: { xs: 2, sm: 3, md: 4 },
            }}
          >
            <BookInfo />
            <AuthorInfo />
            <KeyQuotes />
            <Comments />
            <Contact />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App; 