const { encryptPassword } = require("../helpers/bcrypt");
const userRepository = require("../repositories/user.repository");
const baseHandler = require("../helpers/baseClass")

class userService extends baseHandler {
  constructor() {
    super();
    this._userRepo = new userRepository();
  }

  async createUser(payload) {
    try {
      const isRecordExists = await this._userRepo.findOne({ where: { email: payload.email }});
      if(isRecordExists) {
        return this.response({data: null, message: "email already exists!"}, 409)
      }
      const hashPassword = encryptPassword(payload.password);
      payload.password = hashPassword;
      const result = await this._userRepo.insertOne(payload);
      return this.response({data: result, message: "user created successfully!"}, 200)
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  }
}

module.exports = userService;