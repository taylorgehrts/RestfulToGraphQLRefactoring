const jwt = require('jsonwebtoken');

const secret = 'mysecretsshhhhh';
const expiration = '2h';

// Middleware to verify authentication token
const authMiddleware = ({ req }) => {
  let token = req.body.token || req.query.token || req.headers.authorization;

  if (req.headers.authorization) {
    token = token.split(' ').pop().trim();
  }

  if (!token) {
    return;
  }

  try {
    // Verify the token and extract user data
    const { data } = jwt.verify(token, secret, { maxAge: expiration });
    req.user = data;
  } catch {
    console.log('Invalid token');
  }
};

// Function to sign a JWT token
const signToken = ({ username, email, _id }) => {
  const payload = { username, email, _id };
  return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
};

module.exports = { authMiddleware, signToken };
