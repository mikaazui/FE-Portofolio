import Joi from 'joi';

export const loginValidate = Joi.object({
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required()
      .label("Email"),
    password: Joi.string().min(4).required().label("Password"),
  });