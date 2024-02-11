const {response} = require("express");
const CustomError = require('../errors/customError')
const userValidator = require('../validators/user.validator')
const User = require('../DataBase/users')

module.exports ={
    checkOnUserCreate:(req,res,next) =>{
try{
    const {error,value} = userValidator.NewUserValidator.validate(req.body)

    if(error){
        throw new CustomError(error.details[0].message)
    }

    next()
}catch (e){
    next(e)
}
},

isEmailRegistered : async (req,res,next)=>{
        try {
           const {email} = req.body;

            const userByEmail = await User.findOne({email});

            if (userByEmail) {
                throw new CustomError('User with email was registered',409)
            }
            next();
        } catch (e){
            next(e)
        }


}
}