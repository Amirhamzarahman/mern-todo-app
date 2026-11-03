const mongoose = require('mongoose')

const todoItemsSchema = mongoose.Schema({
  task: {
    type: String,
    required: true
  },
  date: Date,
  completed: {
    type: Boolean,
    default: false
  },
  completed: {
  type: Boolean,
  default: false
}
  
}, {timestamps: true})

module.exports = mongoose.model('ToDoItem',todoItemsSchema)