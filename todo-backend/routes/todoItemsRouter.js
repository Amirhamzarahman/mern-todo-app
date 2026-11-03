// external module
const express = require('express')
const toDoItemsRouter = express.Router()

//local module
const toDoItemsController = require('../controllers/toDoItemsController')


toDoItemsRouter.post('/', toDoItemsController.createToDoItems)
toDoItemsRouter.get('/',toDoItemsController.getToDoItems)
toDoItemsRouter.delete('/:id', toDoItemsController.deleteToDoItem)
toDoItemsRouter.put('/:id/completed', toDoItemsController.markCompleted)

module.exports = toDoItemsRouter