const Joi = require("@hapi/joi")
const schemas = {
    crear : Joi.object().keys({
       title : Joi.string().required().messages({
        'any.required': `El title is required`
      }),
       price : Joi.number().integer().required().messages({
        'any.required': `The price is required`
      }), 
    }),
    update: Joi.object().keys({
        id : Joi.number().integer().required(),
        title : Joi.string().required(),
        price : Joi.number().required(), 
    })
};

module.exports =  schemas;