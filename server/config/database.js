// sequelize.js
const { Sequelize } = require("sequelize");

const { DATABASE, USER, PASS } = process.env;
const sequelize = new Sequelize(DATABASE, USER, PASS, {
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
