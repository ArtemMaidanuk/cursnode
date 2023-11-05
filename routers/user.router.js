const usersRouter = require('express').Router()

const usersControl = require("../controles/user.controler");



usersRouter.post('/',usersControl.createUser)
usersRouter.delete('/:usersId',usersControl.deleteUser)
usersRouter.put('/:usersId',usersControl.updateUser)
usersRouter.get ('/',usersControl.getAllUsers)
usersRouter.get ('/:userId',usersControl.getById)

module.exports = usersRouter