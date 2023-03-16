const jwt = require("jsonwebtoken");
const Token = require("../models/token");

class TokenService {
  // Generate access and refresh tokens
  generateTokens = (id) => {
    const accessToken = jwt.sign({ id }, process.env.JWT_ACCESS_SECRET, {
      expiresIn: "30m",
    });
    const refreshToken = jwt.sign({ id }, process.env.JWT_REFRESH_SECRET, {
      expiresIn: "30d",
    });

    return {
      accessToken,
      refreshToken,
    };
  };

  saveToken = async (userId, refreshToken) => {
    const tokenData = await Token.findOne({ user: userId });

    if (tokenData) {
      tokenData.refreshToken = refreshToken;
      return tokenData.save();
    }
    const token = await Token.create({
      user: userId,
      refreshToken,
    });
    return token;
  };
}

module.exports = new TokenService();
