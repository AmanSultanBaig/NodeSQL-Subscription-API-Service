const User = require("../models/user.model");

class userRepository {
  async insertOne(payload) {
    try {
      const result = await User.create(payload);
      return result;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  
  async insertMany(data) {
    try {
      const results = await User.bulkCreate(data);
      return results;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async findOne(filters) {
    try {
      const results = await User.findOne(filters);
      return results;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

module.exports = userRepository;