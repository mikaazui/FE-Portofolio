import Joi from 'joi';

const isEducation = Joi.object({
    insituitionName: isString100.required().trim().label('Institution Name'),
    degree: isString100.trim().label('Degree'),
    major: isString100.trim().allow('').label('Major'),
    city: isString100.trim().label('City'),
    startYear: Joi.date().label('Start Date'),
    endYear: Joi.date().allow(null, "").label('End Date')
})

export { isEducation }