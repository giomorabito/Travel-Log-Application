const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../../../config');

module.exports = (context) => {
  const authHeader = context.authorizationHeader;
  if (authHeader) {
    const token = authHeader.split('Bearer ')[1];
    if (token) {
      try {
        const user = jwt.verify(token, SECRET_KEY);
        return user;
      } catch (err) {
        throw new Error('Invalid/Expired Token');
      }
    }
    throw new Error("Authentication token must be 'Bearer [token]");
  }
  throw new Error('Authorization header must be provided');
};