const userRepository = require("../repositories/user.repository");

class userService {
  constructor() {
    this._userRepo = new userRepository();
  }

  async createUser(payload) {
    try {
      const result = await this._userRepo.insertOne(payload);
      return result;
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  }
}

module.exports = userService;