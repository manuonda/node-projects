const Joi = require("@hapi/joi")

const schema = {
    validateId : Joi.number().positive().require()
}

module.exports = schema;