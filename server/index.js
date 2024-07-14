const express = require("express");
const app = express();
const sequelize = require("./config/database");
require("dotenv").config();

const routes = require("./routes/index.routes");

app.use(express.json())
app.use("/api",routes.users);

(async () => {
  await sequelize.sync({ force: false });
  console.log("All models were synchronized successfully.");
})();

let port = process.env.PORT || 5050;
app.listen(port, () => console.log(`App is running on http://localhost:${port}!`));
