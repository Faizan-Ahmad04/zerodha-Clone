const { verifyJwtToken } = require('../util/auth');

const verifyLoginUser = (req, res, next) => {
  const token = req.cookies.token;

  if (!token)
    return res.status(401).json({ message: 'You are not authenticated.' });

  try {
    const user = verifyJwtToken(token);
    req.user = user;
    return next();
  } catch (error) {
    console.log('Error while tying to verifyJwtToken', error);
  }
};

module.exports = {verifyLoginUser}