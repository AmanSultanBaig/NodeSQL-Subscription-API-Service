const { encryptPassword, decryptPassword } = require("../helpers/bcrypt");
const userRepository = require("../repositories/user.repository");
const baseHandler = require("../helpers/baseClass");
const { createToken } = require("../helpers/jwt");

class userService extends baseHandler {
  constructor() {
    super();
    this._userRepo = new userRepository();
  }

  async createUser(payload) {
    try {
      const { email, username } = payload;
      const transformedEmail = email.toLowerCase().trim();
      const isRecordExists = await this._userRepo.findOne({ where: { email: transformedEmail, username }});
      if(isRecordExists) {
        return this.response({data: null, message: "email or username already exists!"}, 409)
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

  async findUser(payload) {
    try {
      const { email, password } = payload;
      let userFound = await this._userRepo.findOne({ where: { email } });
      if(!userFound) {
        return this.response({data: null, message: "user not found"}, 404)
      }
      userFound = userFound.toJSON();
      const isPassMatched = decryptPassword(password, userFound.password);
      if(!isPassMatched) {
        return this.response({data: null, message: "incorrect password"}, 401)
      }
      delete userFound.password;
      delete userFound.createdAt;
      delete userFound.updatedAt;

      const accessToken = createToken(userFound);

      return this.response({data: userFound, accessToken, message: "user login successfully!"}, 200)
    } catch (error) {
      throw error;
    }
  }

}

module.exports = userService;