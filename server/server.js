const express=require('express');
const app=express();
const morgan=require('morgan');
require('./db/conn');

require('colors');
const port=process.env.PORT || 5000;
// middleware
app.use(express.json());
app.use(morgan('dev'));


//routes
app.get('/',(req,res)=>{
    res.send('<h1>Hello from Node server</h1>');
})

app.listen(port,()=>{
    console.log(`server started at ${port}`);
})

