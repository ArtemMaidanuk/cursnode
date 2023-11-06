const CustomError = require('../errors/customError')
const User = require ("../DataBase/users")

async function getAllUsers (req,res,next){
    try {
        const users = await User.find();
        res.json(users)
    } catch (e){
        next(e)
    }

}

async function createUser (req,res,next){
    try {
        console.log(req.body)
        const users = await User.create(req.body)
        res.status(201).json(users)
    } catch (e){
        next(e)
    }
}

async function deleteUser (req,res,next){
    try {
        const {userId = ''} = req.params

        const users = await User.deleteOne({_id :userId});
        res.status(201).json('User was created')
    }   catch (e){
        next(e)
    }
}

async function updateUser (req,res,next){
    try {
        users.push({
            name: "Test",
            age: Math.random() * 100
        })
        res.status(201).json('User was created')
    } catch (e){
        next(e)}
}

async function getById (req,res,next){
    try {
        console.log(req.query)
        const {userId = ''} = req.params

        const users = await User.findById(userId);

        if (!users) {
            throw new CustomError(`User with Id ${userId} is not found`,404)
        }

        res.json(users)
    } catch (e){
        next(e)}
}

module.exports = {
    createUser,
    getAllUsers,
    deleteUser,
    updateUser,
    getById
}