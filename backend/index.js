// backend/index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: 'http://localhost:5173', 
  credentials: true
}));
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb+srv://upadhyayhimanshu034:7iO2Qo5o0uQsaHin@cluster0.nr3ygd0.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Comment Schema
const commentSchema = new mongoose.Schema({
  name: String,
  comment: String,
  rating: Number,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Comment = mongoose.model('Comment', commentSchema);

// Routes
app.post('/api/comments', async (req, res) => {
  try {
    const { author, text, rating } = req.body;
    const newComment = new Comment({ name: author, comment: text, rating });
    await newComment.save();

    res.status(201).json({
      id: newComment._id,
      author: newComment.name,
      text: newComment.comment,
      rating: newComment.rating
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to post comment' });
  }
});

app.get('/api/comments', async (req, res) => {
  try {
    const comments = await Comment.find().sort({ createdAt: -1 });

    const formattedComments = comments.map(c => ({
      id: c._id,
      author: c.name,
      text: c.comment,
      rating: c.rating
    }));

    res.json(formattedComments);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch comments' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
