const jwt = require("jsonwebtoken");
const { SECRET_KEY } = process.env;

exports.createToken = (payload) => {
  return jwt.sign(payload, SECRET_KEY, { expiresIn: "6h" });
};

exports.authenticateToken = (token) => {
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    return true;
  } catch (error) {
    return false;
  }
};
