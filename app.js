const express = require('express');
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/node');

const usersRouter = require("./routers/user.router");
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use('/users', usersRouter)

app.use ('*',(req,res)=>{
    res.status(404).json('Rout not found')
})

app.use((err,req,res,next)=>{
    res
        .status(err.status || 500)
        .json({
            error:err.message || 'Unknow error',
            code : err.status || 500
        })
})

app.listen(5000, ()=>{
    console.log('Server listen on port 5000')
})