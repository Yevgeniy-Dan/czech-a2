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
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return {
      ...tokens,
      user: userDto,
    };
  }
};

exports.login = async (email, password) => {
  const user = await User.findOne({ email });

  if (!user) {
    const error = new Error("Пользователь с таким email не был найден");
    error.statusCode = 400;
    throw error;
  }

  if (!(await bcrypt.compare(password, user.password))) {
    throw new Error("Неверный пароль");
  }
  const userDto = new UserDto(user);
  const tokens = tokenService.generateTokens({ ...userDto });
  await tokenService.saveToken(userDto.id, tokens.refreshToken);

  return {
    ...tokens,
    user: userDto,
  };
};

exports.logout = async (refreshToken) => {
  const token = await tokenService.removeToken(refreshToken);
  return token;
};

exports.refresh = async (refreshToken) => {
  if (!refreshToken) {
    const error = new Error("Пользователь неавторизирован");
    error.statusCode = 422;
    throw error;
  }

  const userData = tokenService.validateRefreshToken(refreshToken);
  const tokenFromDb = await tokenService.findToken(refreshToken);

  if (!userData || !tokenFromDb) {
    const error = new Error("Пользователь неавторизирован");
    error.statusCode = 422;
    throw error;
  }

  const user = await User.findById(userData.id);

  const userDto = new UserDto(user);
  const tokens = tokenService.generateTokens({ ...userDto });
  await tokenService.saveToken(userDto.id, tokens.refreshToken);

  return {
    ...tokens,
    user: userDto,
  };
};
