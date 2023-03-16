const express = require("express");
const router = express.Router();
const { body } = require("express-validator");

const {
  registerUser,
  loginUser,
  logoutUser,
  refresh,
} = require("../controllers/user");

router.post(
  "/",
  [
    body("email")
      .isEmail()
      .withMessage("Please enter a valid email")
      .normalizeEmail(),
    body("password")
      .isLength({ min: 3, max: 32 })
      .withMessage(
        "Password must be greater than 3 and less than 32 characters"
      ),
  ],
  registerUser
);

router.post("/login", loginUser);
router.post("/logout", logoutUser);

router.get("/refresh", refresh);

module.exports = router;
