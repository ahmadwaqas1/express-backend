import express from 'express';
import bodyParser from 'body-parser';
import userRouter from './routes/user.js'

const app = express()
const PORT = 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use('/users', userRouter)

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})
