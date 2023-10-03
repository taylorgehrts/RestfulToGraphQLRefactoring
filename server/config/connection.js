const mongoose = require('mongoose');

// Use dotenv to load environment variables from .env file during development
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const uri = process.env.MONGODB_URI;

// Connect to MongoDB
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
