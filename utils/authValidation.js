import Joi from 'joi';

const loginValidate = Joi.object({
    email: isString100
      .email({ tlds: { allow: false } })
      .required()
      .label("Email"),
    password: Joi.string().min(4).required().label("Password"),
  });

  const updateUserValidation = Joi.object({
    name: isString100.required().label("Name"),
    email: isString100.email({ tlds: { allow: false } }).required().label("Email"),
    current_password: isString100.min(4).required().label("Current Password"),
    password: isString100.min(4).required().label("Password"),
    confirm_password: isString100
      .min(4)
      .required()
      .label("Password")
      .valid(Joi.ref("password"))
      .label("Password Confirm")
      .options({
        messages: {
          "any.only": "{{#label}} does not match",
        },
      }),
  });

  export {loginValidate, updateUserValidation}