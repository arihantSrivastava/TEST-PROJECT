import React from 'react';
import { Paper, Typography, Box, Divider, Slide } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const KeyQuotes = () => {
  const quotes = [
    {
      text: "You do not rise to the level of your goals. You fall to the level of your systems.",
      context: "Chapter 1: The Fundamentals"
    },
    {
      text: "Habits are the compound interest of self-improvement.",
      context: "Chapter 2: The 1st Law"
    },
    {
      text: "Every action you take is a vote for the type of person you wish to become.",
      context: "Chapter 3: The 2nd Law"
    },
    {
      text: "The most effective form of learning is practice, not planning.",
      context: "Chapter 4: The 3rd Law"
    },
    {
      text: "The best is the enemy of the good.",
      context: "Chapter 5: The 4th Law"
    }
  ];

  return (
    <Slide direction="up" in timeout={1000}>
      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          Key Quotes
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" paragraph>
          Powerful insights from Atomic Habits
        </Typography>
        
        {quotes.map((quote, index) => (
          <Box 
            key={index} 
            sx={{ 
              mb: 4,
              transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transform: 'translateX(10px)',
              },
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 1 }}>
              <FormatQuoteIcon 
                sx={{ 
                  color: 'primary.main',
                  fontSize: 40,
                  mr: 1,
                  mt: -1,
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'rotate(10deg)',
                  },
                }} 
              />
              <Typography variant="h6" sx={{ fontStyle: 'italic' }}>
                "{quote.text}"
              </Typography>
            </Box>
            <Typography 
              variant="body2" 
              color="text.secondary"
              sx={{ ml: 6 }}
            >
              — {quote.context}
            </Typography>
            {index < quotes.length - 1 && (
              <Divider sx={{ my: 3 }} />
            )}
          </Box>
        ))}
      </Paper>
    </Slide>
  );
};

export default KeyQuotes; 