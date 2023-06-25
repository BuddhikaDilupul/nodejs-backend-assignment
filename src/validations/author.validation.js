const Joi = require("joi");

module.exports = {
  create: {
    body: Joi.object({
      _id: Joi.forbidden(),
      email: Joi.string().required(),
      firstName: Joi.string().required().regex(/^[a-zA-Z]+$/),
      lastName: Joi.string().required().regex(/^[a-zA-Z]+$/),
      status: Joi.forbidden(),
    }),
  },
};
