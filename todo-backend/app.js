
//core module
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')

//external module
const express = require('express')
const mongoose = require('mongoose')
const DB_PATH = 'mongodb+srv://amirhamzarahman24_db_user:Amir2424@completecoding.q5xkxcs.mongodb.net/todo?appName=CompleteCoding'

//local module
const toDoItemsRouter = require('./routes/todoItemsRouter')
const errorController = require('./controllers/errors')

const app = express()


app.use(express.urlencoded({extended: true }))
app.use(express.json())
app.use(cors())


app.use('/api/todo', toDoItemsRouter)
app.use(errorController.get404)
const PORT = 3002


mongoose.connect(DB_PATH).then(() => {
  console.log('connected to mongoDB')
app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}/user/`)
})})
.catch(err => {
  console.log('error while connecting to mongo: ',err)
})