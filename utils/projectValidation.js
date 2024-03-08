import Joi from 'joi';
const isProjectTitle = Joi.string().required().min(3).max(100).label('Title').trim()
const isCreateProject = Joi.object({
    title: isString255.required(),
    description: isText.required(),
    startDate: Joi.date().less('now').required(),
    endDate: Joi.date().less('now').allow(null, ''),
    status: Joi.string().valid('ON_PROGRESS', 'MAINTENANCE', 'COMPLETE'),
    url: isURL.allow(''),
    github: isURL.allow(''),
    company: Joi.string().max(100).trim().allow('').label("Company"),
    photos: Joi.array().items(Joi.number()), // kumpulan id [1,2,3]
    skills: Joi.array().items(Joi.number())
})

const isUpdateProject = Joi.object({
    title: isString255.required(),
    description: isText.required(),
    startDate: Joi.date().less('now').required(),
    endDate: Joi.date().less('now').allow(null, ''),
    status: Joi.string().valid('ON_PROGRESS', 'MAINTENANCE', 'COMPLETE'),
    url: isURL.allow(''),
    github: isURL.allow(''),
    company: Joi.string().max(100).trim().allow('').label("Company"),
    photos: Joi.array().items(Joi.number()), // kumpulan id [1,2,3]
    skills: Joi.array().items(Joi.number())
})

export {
    isCreateProject,
    isUpdateProject,
    isProjectTitle
}