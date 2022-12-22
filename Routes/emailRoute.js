const express = require("express");
// const { protect } = require("../Controller/authController");
const emailController = require("../Controllers/emailController");

const router = express.Router();

router
  // .get("/delete", logsController.deleteAll)
  .post("/sendemail", emailController.sendEmail)

module.exports = router;