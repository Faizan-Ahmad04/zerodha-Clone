const jwt = require('jsonwebtoken');

const genrateJwtToken = id => {
  try {
    return jwt.sign({ id }, process.env.JWT_SECRECT_KEY);
  } catch (error) {
    return false;
  }
};

const verifyJwtToken = token => {
  try {
    return jwt.verify(token, process.env.JWT_SECRECT_KEY);
  } catch (error) {
    return false;
  }
};

module.exports = { genrateJwtToken, verifyJwtToken };
