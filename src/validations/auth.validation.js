const Joi = require("joi");

module.exports = {
  create: {
    body: Joi.object({
      _id: Joi.forbidden(),
      email: Joi.string().required(),
      firstName: Joi.string().required().regex(/^[a-zA-Z]+$/),
      lastName: Joi.string().required().regex(/^[a-zA-Z]+$/),
      status: Joi.forbidden(),
      password: Joi.string().required()
    }),
  },
  login: {
    body: Joi.object({
      _id: Joi.forbidden(),
      email: Joi.string().required(),
      password: Joi.string().required()
    }),
  },
};
