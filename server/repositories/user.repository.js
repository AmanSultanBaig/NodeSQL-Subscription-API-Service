const User = require("../models/user.model");

class userRepository {
  async insertOne(payload) {
    try {
      const result = await User.create(payload);
      return result;
    } catch (error) {
      console.error('Error inserting one user:', error);
      throw error;
    }
  }
  
  async insertMany(data) {
    try {
      const results = await User.bulkCreate(data);
      return results;
    } catch (error) {
      console.error('Error inserting many users:', error);
      throw error;
    }
  }
}

module.exports = userRepository;