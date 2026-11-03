const ToDoItem = require('../models/todoItem')

exports.createToDoItems = async (req,res,next) => {
   const {task,date} = req.body
   const toDoItem = new ToDoItem({task,date})
   await toDoItem.save()
   res.status(201).json(toDoItem)
}

exports.getToDoItems = async (req,res,next) => {
  const toDoItems = await ToDoItem.find()
  res.json(toDoItems)
}

exports.deleteToDoItem = async (req,res,next) => {
  const {id} = req.params
  await ToDoItem.findByIdAndDelete(id)
  res.status(204).json({_id: id})
} 


exports.markCompleted = async (req,res,next) => {
 
  const {id} = req.params
  const toDoItems = await ToDoItem.findById(id)
  toDoItems.completed = !toDoItems.completed;
  await toDoItems.save()
  res.json(toDoItems)
}