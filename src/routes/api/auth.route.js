const express = require("express");
const router = express.Router();
const { validate } = require("express-validation");
const authValidation = require("../../validations/auth.validation");
const authController = require("../../controllers/auth.controller");
const { authenticate } = require("../../middlewares/authenticate");
const ROLES = require("../../ROLES");
const { authorize } = require("../../middlewares/authorize");

router.post(
  "/login",
  validate(authValidation.login),
  authController.login
);
router.post(
  "/",
  validate(authValidation.create),
  authController.create
);


module.exports = router;
