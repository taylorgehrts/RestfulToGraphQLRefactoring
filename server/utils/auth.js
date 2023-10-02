const jwt = require('jsonwebtoken');

const secret = 'mysecretsshhhhh';
const expiration = '2h';

// Middleware to verify authentication token
const authMiddleware = ({ req }) => {
  let token = req.headers.authorization || req.body.token || req.query.token;

  if (token && req.headers.authorization) {
    token = token.split(' ').pop().trim();
  }

  if (!token) {
    return { user: null }; // Return an object with user set to null if no token is found
  }

  try {
    // Verify the token and extract user data
    const { data } = jwt.verify(token, secret, { maxAge: expiration });
    return { user: data }; // Return an object with user data
  } catch (err) {
    console.log('Invalid token', err);
    return { user: null }; // Return an object with user set to null in case of an invalid token
  }
};

// Function to sign a JWT token
const signToken = ({ username, email, _id }) => {
  const payload = { username, email, _id };
  return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
};

module.exports = { authMiddleware, signToken };
