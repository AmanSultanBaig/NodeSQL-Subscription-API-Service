const userService = require("../services/user.service");

class userController {
  constructor() {
    this._userService = new userService();
  }

  register = async (req, res) => {
    try {
      const payload = req.body;
      const data = await this._userService.createUser(payload);
      res.status(200).json({ data, message: "user created successfully!" });
    } catch (error) {
      res.status(error.status || 500).json({ message: error.message });
    }
  };
  async login(req, res) {}
}

module.exports = userController;
