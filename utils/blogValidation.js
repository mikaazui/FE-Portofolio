import joi from 'joi';
const isBlogTitle = joi.string().required().min(3).max(100).label('Title').trim()
const isCreateBlog = joi.object({
    title: isBlogTitle.label('Title'),
    content: joi.string().min(3).required().trim().label('Content'),
    photos: joi.array().items(joi.number())
})

const isUpdateBlog = joi.object({
    title: isBlogTitle.label('Title'),
    content: joi.string().required().min(3).trim().label('Content'),
    photos: joi.array().items(joi.number())
})

export {
    isCreateBlog,
    isUpdateBlog,
    isBlogTitle
}