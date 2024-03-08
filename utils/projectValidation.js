import joi from 'joi';
const isProjectTitle = joi.string().required().min(3).max(100).label('Title').trim()
const isCreateProject = joi.object({
    title: isProjectTitle.label('Title'),
    content: joi.string().min(3).required().trim().label('Content'),
})

const isUpdateProject = joi.object({
    title: isProjectTitle.label('Title'),
    content: joi.string().required().min(3).trim().label('Content'),
    photos: joi.array().items(joi.number())
})

export {
    isCreateProject,
    isUpdateProject,
    isProjectTitle
}