const express = require("express");
const router = express.Router();
const { validate } = require("express-validation");
const authorValidation = require("../../validations/author.validation");
const authorController = require("../../controllers/author.controller");
const { authenticate } = require("../../middlewares/authenticate");
const ROLES = require("../../ROLES");
const { authorize } = require("../../middlewares/authorize");

router.post(
  "/",
  authenticate,authorize([ROLES.admin]),
  validate(authorValidation.create),
   authorController.create
);
router.get(
  "/",
   authorController.likeCount
);


module.exports = router;
