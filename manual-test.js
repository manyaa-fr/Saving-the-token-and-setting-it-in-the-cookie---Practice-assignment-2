const jwt = require('jsonwebtoken');
const encrypt = require('./script');

const res = {
  cookie: (name, value, options) => {
    console.log(`Cookie Set: ${name}=${value}, Options:`, options);
  }
};

const payload = { userId: 123 };
const secret = 'testsecret';

const token = encrypt(payload, secret, res);

try {
  const decoded = jwt.verify(token, secret);
  console.log('Decoded Payload:', decoded);

  if (decoded.userId === payload.userId && decoded.exp) {
    console.log('Test Passed: Token is valid and payload matches.');
  } else {
    console.log('Test Failed: Payload does not match.');
  }
} catch (err) {
  console.error('Test Failed: Token verification failed.', err.message);
}