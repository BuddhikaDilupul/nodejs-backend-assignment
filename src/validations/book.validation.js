const Joi = require("joi");

module.exports = {
  create: {
    body: Joi.object({
      _id: Joi.forbidden(),
      ISBN: Joi.string().required().regex(/^[a-zA-Z0-9]+$/),
      category: Joi.string().required(),
      title: Joi.string().required().regex(/^[a-zA-Z0-9]+$/),
      author: Joi.string().required(),
    }),
  },
}