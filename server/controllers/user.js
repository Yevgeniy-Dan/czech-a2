const userService = require("../services/user");
const asyncHandler = require("express-async-handler");
const { validationResult } = require("express-validator");

exports.registerUser = asyncHandler(async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const error = new Error(errors.array()[0].msg);
    error.statusCode = 422;
    throw error;
  }

  const { email, password } = req.body;
  if (!email || !password) {
    const error = new Error("Please add all fields");
    error.statusCode = 400;
    throw error;
  }

  const userData = await userService.registrarion(email, password);
  res.cookie("refreshToken", userData.refreshToken, {
    maxAge: 30 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  });
  res.status(200).json(userData);
});
