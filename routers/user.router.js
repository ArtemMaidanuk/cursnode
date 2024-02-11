const usersRouter = require('express').Router()

const usersControl = require("../controles/user.controler");
const usersMiddlewar = require("../middlewares/user.middlewar");




usersRouter.post('/',usersMiddlewar.checkOnUserCreate,usersMiddlewar.isEmailRegistered,usersControl.createUser)
usersRouter.delete('/:usersId',usersControl.deleteUser)
usersRouter.put('/:usersId',usersControl.updateUser)
usersRouter.get ('/',usersControl.getAllUsers)
usersRouter.get ('/:userId',usersControl.getById)

module.exports = usersRouter