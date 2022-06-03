const mongoose=require('mongoose')
require('./db/conn')
const Pizza=require('./model/pizzaModel')
const PizzaData=require('./data/pizza-data')
require('colors');


// create import function

const importData=async ()=>{
    try {
        await Pizza.deleteMany();
        const sampleData=PizzaData.map(pizza=>{return {...pizza}});
        await Pizza.insertMany(sampleData);
        console.log(`Data imported`.bgMagenta.white)
    } catch (error) {
        console.log(`${error}`.bgRed.white);
        process.exit(1);
        
    }
}


const dataDestroy = ()=> {}

if(process.argv[2]==='-d'){
    dataDestroy();
}
else{
    importData();
}