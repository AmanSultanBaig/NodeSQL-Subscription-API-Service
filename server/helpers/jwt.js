const jwt = require("jsonwebtoken");
const { SECRET_KEY } = process.env;

exports.createToken = (payload) => {
  return jwt.sign(payload, SECRET_KEY, { expiresIn: "6h" });
};

exports.authenticateToken = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, SECRET_KEY, (err, data) => {
      if (err) return resolve(false);
      resolve(data);
    });
  });
};