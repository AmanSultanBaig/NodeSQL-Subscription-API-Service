// sequelize.js
const { Sequelize } = require("sequelize");
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const { DATABASE, USERNAME, PASS } = process.env;
const sequelize = new Sequelize(DATABASE, USERNAME, PASS, {
  host: "localhost",
  dialect: "mysql",
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

module.exports = sequelize;
