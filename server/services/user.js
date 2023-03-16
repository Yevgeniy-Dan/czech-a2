const bcrypt = require("bcryptjs");
const User = require("../models/user");
const tokenService = require("./token");
const UserDto = require("../dtos/user-dto");

exports.registrarion = async (email, password) => {
  //Check if user exists
  const userExists = await User.findOne({ email });

  if (userExists) {
    const error = new Error("User already exists");
    error.statusCode = 400;
    throw error;
  }

  const salt = await bcrypt.genSalt(12);
  const hashedPassword = await bcrypt.hash(password, salt);

  //Create user
  const user = await User.create({
    email,
    password: hashedPassword,
  });

  if (user) {
    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens(userDto.id);
    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return {
      ...tokens,
      user: userDto,
    };
  }
};
