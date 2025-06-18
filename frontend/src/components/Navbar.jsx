import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Box, 
  Button, 
  IconButton, 
  Drawer, 
  List, 
  ListItem, 
  ListItemText,
  useTheme,
  useMediaQuery,
  Container,
  Divider
} from '@mui/material';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import BookIcon from '@mui/icons-material/MenuBook';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import { FaXTwitter } from 'react-icons/fa6'; // ✅ Correct icon import

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: 'linear-gradient(135deg, #1E90FF 0%, #00BFFF 100%)',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  backdropFilter: 'blur(10px)',
  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: '#ffffff',
  fontWeight: 500,
  textTransform: 'none',
  padding: '8px 16px',
  borderRadius: '20px',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    transform: 'translateY(-2px)',
  },
}));

const SocialButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#000000',
  color: '#ffffff',
  fontWeight: 'bold',
  borderRadius: '25px',
  padding: '8px 24px',
  textTransform: 'none',
  fontSize: '0.95rem',
  letterSpacing: '0.5px',
  border: '2px solid transparent',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    backgroundColor: '#1a1a1a',
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 12px rgba(0,0,0,0.2)',
    border: '2px solid #ffffff',
  },
  '&:active': {
    transform: 'translateY(0)',
    boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
  },
}));

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleXClick = () => {
    window.open('https://x.com/JamesClear', '_blank');
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileOpen(false); // Close mobile drawer after clicking
    }
  };

  const navItems = [
    { text: 'About', icon: <InfoIcon />, id: 'about' },
    { text: 'Contact', icon: <ContactSupportIcon />, id: 'contact' },
  ];

  const drawer = (
    <Box sx={{ width: 250, bgcolor: 'background.paper', height: '100%' }}>
      <Box sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
        <BookIcon sx={{ color: '#1E90FF' }} />
        <Typography variant="h6" sx={{ fontWeight: 700, color: '#1E90FF' }}>
          Atomic Habits
        </Typography>
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem 
            button 
            key={item.text}
            onClick={() => scrollToSection(item.id)}
            sx={{
              '&:hover': {
                backgroundColor: 'rgba(30, 144, 255, 0.1)',
              },
            }}
          >
            <Box sx={{ mr: 2, color: '#1E90FF' }}>{item.icon}</Box>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <Box sx={{ p: 2 }}>
        <SocialButton
          fullWidth
          onClick={handleXClick}
          startIcon={<FaXTwitter />}
        >
          @JamesClear
        </SocialButton>
      </Box>
    </Box>
  );

  return (
    <StyledAppBar position="sticky">
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
          {/* Logo and Title */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <BookIcon sx={{ fontSize: 32, color: '#ffffff' }} />
            <Typography 
              variant="h5" 
              sx={{ 
                fontWeight: 700,
                color: '#ffffff',
                textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
                letterSpacing: '1px',
                display: { xs: 'none', sm: 'block' }
              }}
            >
              Atomic Habits
            </Typography>
          </Box>

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 2 }}>
            {navItems.map((item) => (
              <NavButton 
                key={item.text} 
                startIcon={item.icon}
                onClick={() => scrollToSection(item.id)}
              >
                {item.text}
              </NavButton>
            ))}
          </Box>

          {/* Social Button */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Typography 
              variant="body1" 
              sx={{ 
                color: '#ffffff',
                display: { xs: 'none', sm: 'block' },
                fontWeight: 500,
                letterSpacing: '0.5px',
              }}
            >
              Follow James Clear
            </Typography>
            <SocialButton
              onClick={handleXClick}
              startIcon={<FaXTwitter />}
            >
              @JamesClear
            </SocialButton>
          </Box>
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: 250,
            borderRight: '1px solid rgba(0, 0, 0, 0.12)',
          },
        }}
      >
        {drawer}
      </Drawer>
    </StyledAppBar>
  );
};

export default Navbar;
