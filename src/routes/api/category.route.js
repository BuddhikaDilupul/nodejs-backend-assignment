const express = require("express");
const router = express.Router();
const { validate } = require("express-validation");
const { authenticate } = require("../../middlewares/authenticate");
const ROLES = require("../../ROLES");
const { authorize } = require("../../middlewares/authorize");
const categoryController = require("../../controllers/category.controller");
const categoryValidation = require("../../validations/category.validation");


router.post(
  "/",
  authenticate,authorize([ROLES.admin]),
  validate(categoryValidation.category),
  categoryController.category
);


module.exports = router;
