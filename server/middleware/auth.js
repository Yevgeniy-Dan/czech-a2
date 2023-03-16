const asyncHandler = require("express-async-handler");
const tokenService = require("../services/token");

const protect = asyncHandler(async (req, res, next) => {
  let accessToken;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      accessToken = req.headers.authorization.split(" ")[1];

      const userData = tokenService.validateAccessToken(accessToken);

      if (!userData) {
        throw new Error();
      }
      req.user = userData;
      next();
    } catch (err) {
      const error = new Error("Пользователь не авторизирован");
      error.statusCode = 401;
      throw error;
    }
  }
  if (!accessToken) {
    throw new Error("Пользователь не авторизирован");
  }
});

module.exports = {
  protect,
};
