const Joi = require('@hapi/joi')

const Schema = {
    create: Joi.object().keys({
        title: Joi.string().required().messages({
            'any.required': 'El title es required'
        }),
        price: Joi.number().required().messages({
            'any.required': 'The prices is required'
        })
    }),
}

module.exports = Schema;