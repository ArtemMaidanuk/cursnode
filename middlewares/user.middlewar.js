const {response} = require("express");
const CustomError = require('../errors/customError')
module.exports ={
    checkOnUserCreate:(req,res,next) =>{
try{
     const{email='',name='',age=0,password=''} =req.body

    if (!email || !name || !password) {
        throw new CustomError('Some is filed is missing',400)
    }

    if (password.length<8) {
        throw new CustomError('Shot password',400)
    }
    next()
}catch (e){
    next(e)
}
}
}