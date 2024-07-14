const bcrypt = require("bcrypt");

exports.encryptPassword = (password) => {
  const salt = 10;
  return bcrypt.hashSync(password, salt);
};

exports.decryptPassword = (plainPassword, encryptedPassword) => {
  return bcrypt.compareSync(plainPassword, encryptedPassword);
};