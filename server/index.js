const express = require("express");
const app = express();
const sequelize = require("./config/database");
const { authenticate } = require("./middlewares/authenticate.middleware");
require("dotenv").config();

const routes = require("./routes/index.routes");

app.use(express.json())
app.use("/",routes);

(async () => {
  await sequelize.sync({ force: false, alter: true });
  console.log("All models were synchronized successfully.");
})();

app.get("/", authenticate, (req, res) => {
  res.send(req.user)
})

let port = process.env.PORT || 5050;
app.listen(port, () => console.log(`App is running on http://localhost:${port}!`));
