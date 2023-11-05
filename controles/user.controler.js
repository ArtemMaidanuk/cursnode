const users = require ("../DataBase/users")

function getAllUsers (req,res){
    try {
        res.json(users)
    } catch (e){
        res.status(400).json(e.message || 'Unknown Error')
    }

}

function createUser (req,res){
    try {
        console.log(req.body)
        res.status(201).json( 'User was created')
    } catch (e){
        res.status(400).json(e.message || 'Unknown Error')
    }
}

function deleteUser (req,res){
    try {
        users.push({
            name: "Test",
            age: Math.random() * 100
        })
        res.status(201).json('User was created')
    }   catch (e){
        res.status(400).json(e.message || 'Unknown Error')
    }
}

function updateUser (req,res){
    try {
        users.push({
            name: "Test",
            age: Math.random() * 100
        })
        res.status(201).json('User was created')
    } catch (e){
        res.status(400).json(e.message || 'Unknown Error')}
}

function getById (req,res){
    try {
        console.log(req.query)

        const userIndex = +req.params.userId;

        if (isNaN(userIndex) || userIndex < 0) {
            res.status(400).json('Please enter valid id')
            return;
        }


        const user = users[userIndex];
        if (!user) {
            res.status(404).json(`User with Id ${userIndex} is not found`)
            return;
        }

        res.json(users)
    } catch (e){
        res.status(400).json(e.message || 'Unknown Error')}
}

module.exports = {
    createUser,
    getAllUsers,
    deleteUser,
    updateUser,
    getById
}