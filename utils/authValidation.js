import Joi from 'joi';

const loginValidate = Joi.object({
    email: isString100
      .email({ tlds: { allow: false } })
      .required()
      .label("Email"),
    password: Joi.string().min(4).required().label("Password"),
  });

  const updateUserValidation = Joi.object({
    name: isString100.label("Name"),
    email: isString100.email({ tlds: { allow: false } }).label("Email"),
    current_password: isString100.min(4).label("Current Password"),
    password: isString100.min(4).label("Password"),
    confirm_password: isString100
      .min(4)
      .label("Password")
      .valid(Joi.ref("password"))
      .label("Password Confirm")
      .options({
        messages: {
          "any.only": "{{#label}} does not match",
        },
      }),
  });

  const createFirstUserValidation = Joi.object({
    name: Joi.string().required().label("Name"),
    email: Joi.string().required().email({ tlds: { allow: false } }).label("Email"),
    password: Joi.string().required().min(4).label("Password"),
    confirm_password: Joi.string()
      .min(4)
      .label("Password")
      .valid(Joi.ref("password"))
      .label("Password Confirm")
      .options({
        messages: {
          "any.only": "{{#label}} does not match",
        },
      }),
  });
  

  export {loginValidate, updateUserValidation, createFirstUserValidation}