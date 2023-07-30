import express from 'express';
import bodyParser from 'body-parser';
import connectDB from './config/db.js';
import userRouter from './routes/user.js';
import postRouter from './routes/posts.js'

const app = express()
const PORT = 3000
connectDB()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use('/users', userRouter)
app.use('/posts', postRouter)

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})
