const express=require('express')
const router=express.Router()
const PizzaModel=require('../model/pizzaModel')


//Get ALl Pizza || GET request
router.get('/getAllPizzas',async (req,res)=>{
    try {
        const pizzas= await PizzaModel.find({});
        res.send(pizzas)
    } catch (error) {
        res.json({message:error})
    }
})



module.exports= router;

