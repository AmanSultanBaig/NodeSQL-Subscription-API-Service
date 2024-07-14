const jwt = require("jsonwebtoken");
const { SECRET_KEY } = process.env;

exports.createToken = (payload) => {
  return jwt.sign(payload, SECRET_KEY, { expiresIn: "6h" });
};

exports.authenticateToken = (token) => {
  return jwt.verify(token, SECRET_KEY);
};
