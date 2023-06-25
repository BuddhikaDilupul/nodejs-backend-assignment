const Joi = require("joi");

module.exports = {
  SearchByISBN: {
    body: Joi.object({
      searchData: Joi.string().required()
    }),
  },
};
