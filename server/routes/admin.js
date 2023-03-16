const express = require("express");

const adminController = require("../controllers/admin");

const router = express.Router();
const { protect } = require("../middleware/auth");

router.get("/test/:testId", protect, adminController.getTest);

module.exports = router;
