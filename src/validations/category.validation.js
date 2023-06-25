const Joi = require("joi");

module.exports = {
  category: {
    body: Joi.object({
      _id: Joi.forbidden(),
      categoryName: Joi.string().required(),
    }),
  },
};
