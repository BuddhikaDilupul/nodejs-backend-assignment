const jwt = require('jsonwebtoken');

exports.authenticate = (req, res, next) => {
  const secret = process.env.secret
  const token = req.headers.authorization.split(' ')[1];
  const decoded = jwt.decode(token);
  const decodedToken = jwt.verify(token, secret);

  if (decodedToken) {
    req.role = decoded.role;
    console.log(decoded.role);
    next();
  } else {
    res.status(400).json({ message: 'invalid token' });
  }


}
