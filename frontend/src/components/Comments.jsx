import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  Divider,
  Snackbar,
  Alert,
  Rating,
  useTheme,
  useMediaQuery,
  Container,
  Grid
} from '@mui/material';
import { styled } from '@mui/material/styles';
import StarIcon from '@mui/icons-material/Star';

const StyledBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: '#ffffff',
  borderRadius: '15px',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  marginTop: theme.spacing(4),
  animation: 'fadeIn 0.8s ease-in-out',
  '@keyframes fadeIn': {
    '0%': { opacity: 0, transform: 'translateY(20px)' },
    '100%': { opacity: 1, transform: 'translateY(0)' },
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
}));

const StyledRating = styled(Rating)(({ theme }) => ({
  '& .MuiRating-iconFilled': { color: '#1E90FF' },
  '& .MuiRating-iconHover': { color: '#1976D2' },
  [theme.breakpoints.down('sm')]: {
    '& .MuiRating-icon': { fontSize: '1.5rem' },
  },
}));

const Comments = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [rating, setRating] = useState(0);
  const [name, setName] = useState('');
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

  useEffect(() => {
    fetch('http://localhost:5000/api/comments')
      .then(res => res.json())
      .then(data => setComments(data))
      .catch(err => {
        console.error('Error fetching comments:', err);
        setSnackbar({
          open: true,
          message: 'Failed to fetch comments.',
          severity: 'error'
        });
      });
  }, []);

  const handleCommentSubmit = async () => {
    if (!name.trim() || !newComment.trim() || rating === 0) {
      setSnackbar({
        open: true,
        message: !name.trim()
          ? 'Please enter your name'
          : !newComment.trim()
          ? 'Please enter a comment before posting'
          : 'Please provide a rating',
        severity: 'error'
      });
      return;
    }

    const comment = { author: name, text: newComment, rating };

    try {
      const res = await fetch('http://localhost:5000/api/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(comment)
      });

      if (!res.ok) throw new Error('Failed to post comment');

      const savedComment = await res.json();
      setComments([savedComment, ...comments]);

      setNewComment('');
      setRating(0);
      setName('');
      setSnackbar({ open: true, message: 'Comment posted successfully!', severity: 'success' });

    } catch (err) {
      console.error('Post error:', err);
      setSnackbar({ open: true, message: 'Failed to post comment.', severity: 'error' });
    }
  };

  const handleCloseSnackbar = () => setSnackbar({ ...snackbar, open: false });

  return (
    <Container maxWidth="lg">
      <StyledBox>
        <Typography
          variant={isMobile ? "h5" : "h4"}
          component="h2"
          gutterBottom
          sx={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 600,
            color: '#1a237e',
            textAlign: 'center',
            marginBottom: isMobile ? 2 : 4,
            '&::after': {
              content: '""',
              display: 'block',
              width: isMobile ? '40px' : '60px',
              height: '3px',
              backgroundColor: '#1E90FF',
              margin: '16px auto 0',
              borderRadius: '2px',
            }
          }}
        >
          What are your views?
        </Typography>

        <Box sx={{ mb: isMobile ? 2 : 4, px: isMobile ? 1 : 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Your Name"
                value={name}
                onChange={e => setName(e.target.value)}
                variant="outlined"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant={isMobile ? "body1" : "subtitle1"} sx={{ mb: 2, fontWeight: 500 }}>
                Rate this book:
              </Typography>
              <StyledRating
                value={rating}
                onChange={(e, val) => setRating(val)}
                icon={<StarIcon fontSize={isMobile ? "medium" : "large"} />}
                emptyIcon={<StarIcon fontSize={isMobile ? "medium" : "large"} />}
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={isMobile ? 3 : 4}
                value={newComment}
                onChange={e => setNewComment(e.target.value)}
                placeholder="Share your thoughts about the book..."
                variant="outlined"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                onClick={handleCommentSubmit}
                fullWidth={isMobile}
                sx={{
                  mt: 2,
                  backgroundColor: '#1E90FF',
                  fontWeight: 600,
                  borderRadius: '8px',
                }}
              >
                Post Comment
              </Button>
            </Grid>
          </Grid>
        </Box>

        <List sx={{ px: isMobile ? 1 : 2 }}>
          {comments.map((comment, index) => (
            <React.Fragment key={comment.id}>
              <ListItem alignItems="flex-start" sx={{ mb: 2, flexDirection: isMobile ? 'column' : 'row' }}>
                <ListItemText
                  primary={
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1, flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? 1 : 0 }}>
                      <Typography variant={isMobile ? "body1" : "subtitle1"} sx={{ fontWeight: 600, color: '#1a237e' }}>
                        {comment.author}
                      </Typography>
                      <StyledRating value={comment.rating} readOnly size={isMobile ? "small" : "medium"} />
                    </Box>
                  }
                  secondary={
                    <Typography variant={isMobile ? "body2" : "body1"} sx={{ color: '#424242', mt: 1 }}>
                      {comment.text}
                    </Typography>
                  }
                />
              </ListItem>
              {index < comments.length - 1 && (
                <Divider variant="middle" sx={{ my: isMobile ? 1 : 2, mx: isMobile ? 0 : 2 }} />
              )}
            </React.Fragment>
          ))}
        </List>

        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: '100%' }}>
            {snackbar.message}
          </Alert>
        </Snackbar>
      </StyledBox>
    </Container>
  );
};

export default Comments;
