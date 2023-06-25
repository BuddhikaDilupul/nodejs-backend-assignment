const express = require("express");
const router = express.Router();
const { validate } = require("express-validation");
const searchController = require("../../controllers/search.controller");
const searchValidation = require("../../validations/search.validation");

router.post(
  "/",  
  validate(searchValidation.SearchByISBN),
   searchController.searchController
);


module.exports = router;
