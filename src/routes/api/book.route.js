const express = require("express");
const router = express.Router();
const { validate } = require("express-validation");
const { authenticate } = require("../../middlewares/authenticate");
const ROLES = require("../../ROLES");
const { authorize } = require("../../middlewares/authorize");
const bookValidation = require("../../validations/book.validation");
const bookController = require("../../controllers/book.controller");

router.post(
  "/",
  authenticate,authorize([ROLES.admin]),
  validate(bookValidation.create),
  bookController.create
);

router.put(
  "/:id",
  authenticate,authorize([ROLES.admin,ROLES.User]),
  bookController.like
);

module.exports = router;
