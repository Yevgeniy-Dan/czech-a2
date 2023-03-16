const asyncHandler = require("express-async-handler");

exports.getTest = asyncHandler(async (req, res) => {
  const { testId } = req.params;

  return res.status(200).json({
    testId: testId,
  });
});
