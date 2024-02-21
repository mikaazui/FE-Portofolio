import joi from "joi";
import {
  isString100,
  isText,
  isURL,
  isString25,
  isString255,
  isEmail,
} from "./mainValidation.js";

const isUpdateProfile = joi.object({
  email:isEmail,
  firstName: isString100.label("Firstname"),
  lastName: isString100.label("Lastname"),
  dob: joi.date().less("now").label("DOB"),
  avatar: isString255.optional().label("Avatar"),
  city: isString100.label("City"),
  country: isString100.label("Country"),
  job: isString100.label("Job"),
  phone: isString25.label("Phone"),
  address: isText.trim().label("Address"),
  bio: isText.label("Bio"),
  website: isURL.label("Website"),
  instagram: isURL.label("Instagram"),
  github: isURL.label("Github"),
  linkedin: isURL.label("Linkedin"),
  discord: isURL.label("Discord"),
  twitter: isURL.label("Twitter"),
});

export { isUpdateProfile };
    