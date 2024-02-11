const joi = require ('joi')
const {PASSWORD_REG,EMAIL_REG} = require('../confix/constants')

module.exports =  {
    NewUserValidator: joi.object({
        name: joi.string()
            .alphanum()
            .min(6)
            .max(100)
            .required(),
        age: joi.number()
            .integer()
            .min(3)
            .max(130),
        email: joi.string()
            .regex(EMAIL_REG)
            .required(),
        password: joi.string()
            .regex(PASSWORD_REG)
            .required()

    })
}