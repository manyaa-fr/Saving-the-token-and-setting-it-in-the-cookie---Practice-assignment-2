const jwt = require('jsonwebtoken');

const encrypt = (payload, secret, res) => {
  const token = jwt.sign(payload, secret, { expiresIn: '1h' });
  res.cookie('token', token, { httpOnly: true, secure: true });
  console.log(token);
  return token;
};

module.exports = encrypt;