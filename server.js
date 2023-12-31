const express=require('express')
const cors=require('cors')
const morgan=require('morgan')
const dotenv=require('dotenv')
const colors=require('colors')
const path=require('path')
const connectDb = require('./config/connectDb')
dotenv.config();
//database call
connectDb();

//rest object
const app=express()
//middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())
// app.use(colors())

//routes
app.use('/api/v1/user',require('./routes/userRoute'))
app.use('/api/v1/transaction',require('./routes/transactionRoute'))
//port
//static files
app.use(express.static(path.join(__dirname,'./client/build')))

app.get("*",function(req,res){
    res.sendFile(path.join(__dirname, "./client/build/index.html"))
})
const PORT=8080||process.env.PORT
//listen server
app.listen(PORT,()=>{
    console.log(`server running on port${PORT}`)
})
