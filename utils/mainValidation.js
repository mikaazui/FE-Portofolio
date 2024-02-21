import Joi from "joi";

const isID = Joi.number().min(1).positive().label("id").required();
const isString25 = Joi.string().max(25).trim();
const isString100 = Joi.string().max(100).trim();
const isString255 = Joi.string().max(255).trim();
const isEmail = Joi.string().email({tlds: {allow:false}}).trim().label("Email");
const isYear = Joi.number().positive();
const isText = Joi.string().trim();
const isURL = Joi.string().uri().trim();

export { isID, isString25, isString100, isString255, isYear, isText, isURL, isEmail };
