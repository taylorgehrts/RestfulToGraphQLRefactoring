const mongoose = require('mongoose');

let mongoURI;

if (process.env.NODE_ENV === 'production') {
  // Heroku-provided MongoDB URI
  mongoURI = process.env.MONGODB_URI;
} else {
  // Local MongoDB URI
  mongoURI = 'mongodb://127.0.0.1:27017/googlebooks';
}

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = mongoose.connection;
