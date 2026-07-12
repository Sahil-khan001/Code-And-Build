Lets make a Project -- 
Resturant Backend (CRUD OPERATIONS) --
we have 

PostMan -- which do some http frontend request to backend to test api and backend 

Server--
we have 2 users
ADMIN  -- Add FoodItem in foodMenu (means in the original Database)
          Delete FoodItem from foodMenu (from the original Database)
          update the price in the foodMenu 


USER -- Add item in cart 
        Delete item from cart
        look at in cart 
        can see all food items

for the USER we have to make a AddtoCart[] array as well 

for this first we have to make a Database first for the foodMenu -- 
then we make app.get request so that anyone can access the foodMenu

then if admin want to add food item in database that is foodMenu how he do it
if he use post then /admin  anybody can write this add anything
but how we can find the real admin 

because anyone can make a request on this link 
so how can we differentiate whether this request is by admin or user
when u login into insta and doing some chat 
at that time if i copy that specific link and give it u 
then can u access that insta account 
-- no

so how is this possible -- what backend behind it -- 
through which he can create a differentiate 

-- here we need to do the Authentication and Authorization 
diff b/w this --

Authentication -- it means verification - with right password - right user - whatever i am claiming - i am right user 

Authorization -- after login -- what power u have -- u can create a video , like , follow/unfollow , u can make a post 
but u can't delete other's post , u can't read other's chat 

we will study about it later fully like what is tokens , everything later 
right now we just use some code for use this concept --
means when admin came it have some token if its token match with our token then we give access that what we are doing -- 
const token = "ABCDEF"
const Access = token === "ABCDEF" ? 1 : 0;

if user have this token then we give access otherwise not -- we discuss about it later 
right now we are using this code to use this Concept 

Lets talk about http Staus code -- 
when we do response of a request then we have to send these code 

Code   Meaning                 When to Use
---------------------------------------------------------
200    OK                      Successful GET/PUT/PATCH
201    Created                 Resource created (POST)
400    Bad Request             Invalid client input
401    Unauthorized            Authentication needed
403    Forbidden               No permission
404    Not Found               Resource doesn't exist
500    Internal Server Error   Server-side failure


we have to send this status code
if u not send this UR SYSTEM WILL CORRUPT


suppose 

u have 
client        ---------status code              Backend

suppose we make a request and somehow the backened not full that then what happen
suppose frontend set in their own algo that whatever receives from backend display it then if authentication required comming
then it show on frontend
but we dont want this we want if this message is comming then frontend have to re direct to login page 
so what we do it we have these status code 
when any request fulfill then it send this status code like for get it show -- 200 

suppose ur request by backend is successfully completed like get --
after ur get request is fulfill then he send 200 and data as well
after seeing this 200 now ur frontend display the data on the frontend

this 200 is universal it is written in every website

suppose if we get 401 and response then we dont need to see the response 
we just have to redirect to login page ....

so that's why these status codes are imp. and they are universal too 
so now u have to send the status code too 
sometime some request is handle by express server like get -- but it is imp. to add this by urself
just small changes -- 

app.get('/food' , (req , res)=>{
        res.status(200).send(FoodMenu);
})

in this way we have to send tha status simple code -- .status(200).

<!-- ====================================================================================================== -->

now lets continue the code -- for CRud operation --

code be like --
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

app.get('/food' , (req,res)=>{
    res.status(200).send(FoodMenu);
})

app.post('/admin' , (req , res)=>{
    //add item in the foodMenu 
    //we have to authenticate that admin is real or not , right now we just use simple logic later we do 
    // this is Dummy Code 
    const token = "ABCDEF";
    const Access = token === "ABCDEF" ? 1:0;

    if(Access){
        FoodMenu.push(req.body);
        res.status(201).send("Permission Access , Items added Successfully");
    }
    else{
        res.status(403).send("Permission denied , Unauthorized admin");
    }
})

app.delete('/admin/:id' , (req, res)=>{
    //admin can delete food from the menu
    //first authentication using dummy code 
     const token = "ABCDEF";
    const Access = token === "ABCDEF" ? 1:0;

    if(Access){
    const index = FoodMenu.findIndex(info => info.id === parseInt(req.params.id));
    FoodMenu.splice(index , 1);
    res.status(200).send("Permission Access , Items Successfully Deleted");
    }
    else{
        res.status(403).send("Permission Denied , Items Not Deleted");
    }
})

app.patch('/admin' , (req , res)=>{
   //admin can make small update in the FoodMenu
   //authentication required 

   const token= "ABCD" ;
   const Access = token === "ABCD"? 1: 0;

   if(Access){
    const food = FoodMenu.find(info => info.id === req.body.id);

    if(req.body.food)
        food.food = req.body.food;

    if(req.body.price)
        food.price = req.body.price;
    res.status(200).send("small change is updated");
   }
   else{
    res.status(403).send("Permisssion Denied , no change");
   }

})


app.listen(3000 , (req , res)=>{
    console.log("Server is running at Port 3000");
})

can u tell me --
how this line - food.food = req.body.food;
is changing in foodMenu of this line --  { id: 3, food: "Chicken", category: "non-veg", price: 1000 },

this is possible because of object reference 
like we know --
let obj1 = {
        name : "sahil",
        age : 23
}
let obj2 = obj1;

obj2.name = "hitesh"
then it reflect in obj1 too because of object reference 

<!-- =---------------------------------------------- -->
Now u see  that in every request we have to first Authenticate the Admin first 
so the code become messy and what we do we put this into middleware that is app.use 

whenever any ADMIN request is coming first he go into this middleware where admin is authenticate then fulfill its other request 
that what our next() do -- 

so code be like -- 

app.use("/admin" , (req,res,next)=>{
   //Admin Authenticate here
   const token = "ABCD"
   const Access = token === "ABCD" ? 1 :0 ;

   if(!Access){
        res.status(403).send("Permission Denied");
   }
   next();
})

whenever any request is coming at /admin it first come here at this MiddleWare 
then if not get Access then we send response and if he get access then 
we do next() -- it means go to next route handler/request handle it will handle ur requests 
that what middleware do pass the request to request handler....

now because of middleware our code looks clean --
otherwise we have to write same code at every request 
<!-- ============================================================================================= -->
Before Middlware used code be like -- 

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
   
app.get('/food' , (req,res)=>{
    res.status(200).send(FoodMenu);
})

app.post('/admin' , (req , res)=>{
    //add item in the foodMenu 
    //we have to authenticate that admin is real or not , right now we just use simple logic later we do 
    // this is Dummy Code 
    const token = "ABCDEF";
    const Access = token === "ABCDEF" ? 1:0;

    if(Access){
        FoodMenu.push(req.body);
        res.status(201).send("Permission Access , Items added Successfully");
    }
    else{
        res.status(403).send("Permission denied , Unauthorized admin");
    }
})

app.delete('/admin/:id' , (req, res)=>{
    //admin can delete food from the menu
    //first authentication using dummy code 
     const token = "ABCDEF";
    const Access = token === "ABCDEF" ? 1:0;

    if(Access){
    const index = FoodMenu.findIndex(info => info.id === parseInt(req.params.id));
    FoodMenu.splice(index , 1);
    res.status(200).send("Permission Access , Items Successfully Deleted");
    }
    else{
        res.status(403).send("Permission Denied , Items Not Deleted");
    }
})

app.patch('/admin' , (req , res)=>{
   //admin can make small update in the FoodMenu
   //authentication required 

   const token= "ABCD" ;
   const Access = token === "ABCD"? 1: 0;

   if(Access){
    const food = FoodMenu.find(info => info.id === req.body.id);

    if(req.body.food)
        food.food = req.body.food;

    if(req.body.price)
        food.price = req.body.price;
    res.status(200).send("small change is updated");
   }
   else{
    res.status(403).send("Permisssion Denied , no change");
   }

})


app.listen(3000 , (req , res)=>{
    console.log("Server is running at Port 3000");
})

AFTER USING MIDDLEWARE code be like -- 
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

Now look at code -- it look clean then prev
can we optimise it more -- 
yes 

Now what we do is we take out the authentication function 
Make a Middleware folder and make a auth.js file 
then put this function into this file 
then export it using 
export.modules = {auth};
then import in main file using -- const {auth} = require("/middleware/auth.js");

then instead of this function we write only -- auth 
so code be like --
instead of this -- 
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

code be like --
app.use("/admin" , auth)

-- we can even do one more thing 
-- we can write auth in every request this is also be possible 
and remove the middleware completely

code be like -- 

app.post('/admin' , auth ,  (req , res)=>{
    //admin can add item in the foodMenu 
   
        FoodMenu.push(req.body);
        res.status(201).send("Permission Access , Items added Successfully");
})

app.delete('/admin/:id' , auth ,  (req, res)=>{
    //admin can delete food from the menu

    const index = FoodMenu.findIndex(info => info.id === parseInt(req.params.id));
    FoodMenu.splice(index , 1);
    res.status(200).send("Permission Access , Items Successfully Deleted");

})

app.patch('/admin' ,auth , (req , res)=>{
   //admin can make small update in the FoodMenu
   
    const food = FoodMenu.find(info => info.id === req.body.id);

    if(req.body.food)
        food.food = req.body.food;

    if(req.body.price)
        food.price = req.body.price;
    res.status(200).send("small change is updated");

})

how is this possible -- 
we studied previously like --

we can put as my function/request handler/route handler one after one or in an array too
like 
app.get("/user" , Rh , Rh , [Rh , Rh , Rh] , Rh)
in this way 
app.get("/user" , (req , res)=>{} , (req , res)=>{},(req , res)=>{})
we discuss it previously too 

In production level code u see something like this ...

<!-- ============================================================================= -->
now try to implement other features of crud backend -- 

user feature be like -- 
it can add item to cart
delete item from cart
see all item in cart

code be like --

//User operation 

app.get("/cart" , (req , res)=>{
    if(AddtoCart.length === 0){
        res.status(404).send("Item not exist in the Cart");
    }else{
    res.status(200).send(AddtoCart);
    }
})

app.post("/user/:id" , (req , res)=>{
      const foodItem = FoodMenu.find(info => info.id === parseInt(req.params.id));
      if(foodItem){
       AddtoCart.push(foodItem);
       res.status(201).send("Items Added in the Cart");
      }
      else{
        res.status().send("Items are out of Stock");
      }
})

app.delete("/user/:id" , (req , res)=>{
     const id = parseInt(req.params.id);
     const index = AddtoCart.findIndex(info => info.id === id);

     if(index !== -1){
        AddtoCart.splice(index  , 1);
        res.status(200).send("Item Deleted Successfully");
     }
     else{
        res.status(404).send("Item Not exist");
     }
})
<!-- +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++= -->

Now move to Error Handling -- 

some time 
when u connect with the database using these request it give u error like -- 
when u parse the data in js object it give u error --
app.get("/dummy" , (req , res)=>{
try{
    JSON.parse("invalid Json");
    res.send("data convert successfully");
}
catch(err){
    res.send("Some Error Occured");
}
})

it parse only the Valid Json if it is not valid then it throw the error
we want it give response but it didn't so we have to use try and catch 


now we see how to write in correct way
JSON.parse('{"name" : "rohit"}');
we know json is in string format so at last '' this is we want 
now it convert it fully because this is right json format

what happen generally --
 FoodMenu.find(info => info.id === parseInt(req.params.id));
 when we try to connect with the databases like in this foodMenu 
 generally it throw error to so to not to do this we use --
 try and catch 


when we connect with the database in order to get the data like this line

then what happen sometime it give error too and because of this error we can't respond to and request so that's why we use try and catch 

why we use express.json() instead of JSON.parse(JSON) --
because data coming from frontend in the form of stream in 0,1
but our JSON.parse(JSON) want all data at once not in the form of stream
also they have some other issue as well 

but express.json() parse in stream data as well 

it send error like -- throw new Error (Db can't connected);
res.send("connected");

this response will not work -- we have to solve the error first
and 
catch will solve the error

this throw line will send anyone to u so u have to handle this 
for this u have to use try and catch for this 
now 

summary -- whenever u have any error -- like while connecting with db
while parsing the json into js 
other ...

so these will throw problems in this line --
throw new Error (any error came from anwhere like this );

so to handle this u have to use -- try and catch in every request in code
catch will handle this otherwise u will get error like -- 500 server error , or other too 
while connnecting with db and anything in code use this try and catch code be like --

app.post("/user/:id" , (req , res)=>{
    try{
        const foodItem = FoodMenu.find(info => info.id === parseInt(req.params.id));
        if(foodItem){
         AddtoCart.push(foodItem);
         res.status(201).send("Items Added in the Cart");
        }
        else{
          res.status(404).send("Items are out of Stock");
        }
    }catch(err){
        res.send("Some error : " , err);
    }
})


so now if any error come then catch will handle it 
so in every REQUESt use try and catch 

<!-- ----------------------------------------------------------------------------------------------------------- -->
NOW MOVE to the DATABASE --

right now we add in array data basically in ram whenever we try to add something it add when try to add another data it add but prev one got remove because it is ram every time it refresh it remove prev data so we need database --
EVERY time server restart the data is gone -- 

database is store data in an organise way
 so that we can manage data effieciently , we can run queries on it , we can take out data acc to ur need from an large database 

 suppose u are on window screen where lots of files and folders are there they are look like databases but can we run queries on it no we can't take folders and data acc to ur need ---

MONGO DB -- 











