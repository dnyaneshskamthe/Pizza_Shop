const mongoose=require("mongoose");
require('colors')
mongoose.connect("mongodb://localhost:27017/pizza_shop")
.then(()=>{
    console.log(`Connection Successfull`.bgGreen.white);
}).catch((err)=>{
    console.log(err);
})



