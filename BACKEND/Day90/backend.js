const express = require('express');

const app = express();
app.use(express.json());


const FoodMenu = [
  { id: 1, food: "Chowmein", category: "veg", price: 500 },
  { id: 2, food: "Butter Naan", category: "veg", price: 100 },
  { id: 3, food: "Chicken", category: "non-veg", price: 1000 },
  { id: 4, food: "Mutton", category: "non-veg", price: 1500 },
  { id: 5, food: "Momo", category: "veg", price: 300 },
  { id: 6, food: "Chai", category: "veg", price: 50 },
  { id: 7, food: "Rajma", category: "veg", price: 300 },
  { id: 8, food: "Roti", category: "veg", price: 20 },
  { id: 9, food: "Lollipop", category: "non-veg", price: 700 },
  { id: 10, food: "Kebab", category: "non-veg", price: 400 },
  { id: 11, food: "Paneer", category: "veg", price: 800 },
  { id: 12, food: "Egg Curry", category: "non-veg", price: 300 },
  { id: 13, food: "Salad", category: "veg", price: 100 },
  { id: 14, food: "Shawarma", category: "non-veg", price: 600 },
  { id: 15, food: "Butter Chicken", category: "non-veg", price: 900 }
];
//admin food goes into this


let AddtoCart =[];
//user food goes into this 


app.use("/admin" , (req,res, next)=>{
     //Admin Authentication here
    //we have to authenticate that admin is real or not , right now we just use simple logic later we do 
    // this is Dummy Code 
    const token = "ABCDEF";
    const Access = token === "ABCDEF" ? 1:0;

    if(!Access){
        res.status(403).send("Permission Denied");
    }

    next();
})

app.get('/food' , (req,res)=>{
    res.status(200).send(FoodMenu);
})

app.post('/admin' , (req , res)=>{
    //admin can add item in the foodMenu 
   
        FoodMenu.push(req.body);
        res.status(201).send("Permission Access , Items added Successfully");
})

app.delete('/admin/:id' , (req, res)=>{
    //admin can delete food from the menu

    const index = FoodMenu.findIndex(info => info.id === parseInt(req.params.id));
    FoodMenu.splice(index , 1);
    res.status(200).send("Permission Access , Items Successfully Deleted");

})

app.patch('/admin' , (req , res)=>{
   //admin can make small update in the FoodMenu
   
    const food = FoodMenu.find(info => info.id === req.body.id);

    if(req.body.food)
        food.food = req.body.food;

    if(req.body.price)
        food.price = req.body.price;
    res.status(200).send("small change is updated");

})


app.listen(3000 , (req , res)=>{
    console.log("Server is running at Port 3000");
})