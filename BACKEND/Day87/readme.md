Lets talk about JS Objects and JSON(JavaScript Object Notation) -- 

const express = require("express");

const app = express();

app.use("/user" , (req, res)=>{
    res.send("Hey this is Data from Server");
})


app.listen(4000 , ()=>{
    console.log("Server is listening at 4000...")
})

we just created a server -- 
now what is this app-- this is server ka object
it store the serve inside it as a variable 

app.use -- is a middleware/function that use for every new request (req,res)
now we can use 
app.get , 
app.post,
etc ///


<!-- --------------------------------------------------
 -->


 now we use app.get("/user" , (req, res)=>{
    res.send("fetching the data using get")
 })

 now when we check onto inspect it show url and method that is Get
 now what's the difference b/w app.use and app.get 


 this req -- if we print this it consist lot of objects 
 and information 

 const response = await fetch("https://www.dtaa.com" , {
  method : "POST",
  headers:{
    "Content-Type" : "application/json"
  },
  body : JSON.stringify({name : "sahil" , age : 34})
 });



 {
  method : "POST",
  headers:{
    "Content-Type" : "application/json"
  },
  body : JSON.stringify({name : "sahil" , age : 34})
 }
 this whole part go into the backend to store 
the data in the {} is the main data 


all these property also present in GET request too 
some people say no but it is wrong in default it takes GET Request 


 {
  method : "GET",
  headers:{
    "Content-Type" : "application/json"
  },
  body : JSON.stringify({name : "sahil" , age : 34})//we dont write this 
 }

we can even send the data to the backend using get too but it is wrong 
get is use for fetchng the data

when we write -- const response = await fetch();
it automatically get GET request 
note : also there is no need to add body section in the GET request


for the OTHERs request -- u need to mention the method

so now we have an issue -- like we can't do directly use POST method 
we can't send data directly it is not possible in browser 
other method 
we have to make a frontend first then make a button and send data in backend 
right now it is a typical task
so we use POSTMAN

he says u can use my api for testing

in generally we are testing the api
fetch("https://adjr34gam.in ...")

fetch("https://adjr34gam.in ...", {
  method : POST ,
})

we are getting data  from ser
we are storing data in server


app.get("/user" , (req, res)=>{
    res.send("hey i am from server thanks for using the GET request")
})


these are api end points


why we need postman is -- 

first what is postman -- 
it behaves like frontend and send http requests to the backend 

why --
either make the frontend by urself then do some http request make some form , login ,submti , fetch() and request
like get ,post and making frontend it takes time so why we need to build it again and again just for testing 
we have postman for testing and development purpost 
it sends fake requests and now we can easily check our backend working 
routing , data fetching all woking 


frontend -send data -- backend(console.log(req.body)) -- it respond(first check and then respond) -- login success(show on ui)


whenever any request is coming from frontend like using POST request like login sooo     make sure ur backend respond something -- login access it is mandatory 
so user have hope okk EVERYTHING IS GOING FINE ....


now u can send request using postman and save that request too --

now -- suppose both request have /user in routing so how postman know which request to full fill 

app.get("/user" , (req, res)=>{
    res.send("hey i am from server thanks for using the GET request");
})

app.post("/user", (req, res)=>{
    console.log(req.body);
    res.send("ur request is here and data is submitted");
})

so it depends upon this req because this contain lot of info like which method , content because of it postman understand this 





