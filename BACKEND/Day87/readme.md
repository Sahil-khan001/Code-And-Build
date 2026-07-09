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

Now the next thing if we use the POST method in the POSTMAN site means data is coming in backend from frontend request along with it 
we can do this in POSTMAN we have to select POST then the body and write data in JSON format like {name : "Sahil"}
and click on send 

then data is coming if we print it using 
console.log(req.body); -- it show undefined 

for this we have to do PARSING first -- when data is coming from frontend then we have to use it -- 
app.use(express.json());

Now we understand the read difference between JAVASCRIPT OBJECT and JSON(JavaScript Object Notation) -- 

we have also seen that when we fetch the data we have to write this line too --

const data = fetch(https://www.api.in);
const finalData = data.json();  -- we have to write this line to take the final data 

lets talk about this line --
app.use(express.json()); -- other say this is MIDDLEWARE and Parse is happening
-- we have json format data we have to convert this into JS object 

lets tak about js Objects--
js object have lot of properties .proto , constructor 

JSON -- it is written in string format , it is text based format 
Js -- Object 

now the ques is can JS object is understand by other servers that is written in node js , python , java

suppose in frontend we make a form and submit it  and send to it backend server as a Js Object 
can backend written in python understand this 

now the python can never understand this JS object its different properties
so it is make sure that we can't send our data as in Js object 
we have to make a universal lanugage in which we send data so any backend can understand this -- 

we have to send in JSON -- 

in JSON we have to write key value pair also the key we have to write in "" like -- 
{
  "name" : "sahil",
  "age" : 23, -----------u can't put here comma as well but in js u can 
}

but in JS we can write -- 
{
  name : "sahil",
  age : 34,
}

even in JSON we can write -- 
[10,20,30]  -- array as well and we can send this as well 

NOW u know both JSON and JS Object is 


also in JSON we can't send the function , undefined 
JSON valid in two format only -- Object form {} , Array form []


body : JSON.stringify({name : "sahil" , age : 34});
now this line represent what -- 
it convert this JS object into JSON  as a String -- 
then after convert it look like -- 

'{"name" : "sahil" , "age" :34}'  -- now any backend lanugage can understand the string so now it make sense

so everytime when we send data from frotend to backend we have to convert it into JSON 
because JSON represent as a string 
any lanugage understand string easily

at the end data flow in bits means binary 0 and 1 
so it is easy to convert this string into binary 

its hard to convert the JS object into binary 
because there so many properties along in JSON like proto , constructor 

now the data at backend is in JSON(string format) now we want final data in JS object acc to diff lanugage python , java 
because at end we want data show in JS object 
to convert again We use PARSER

perviously who convert our js object into JSON it is this line
JSON.stringify({name : "sahil" , age : 32})
it convert this JS object into JSON 

then later parser using this line -- app.use(express.json());
 to convert it back 

also sometime this when u convert this JSON to JS using express.json() then what happened 
everything convert into object string to normal but this number    "age" : 32  -- it covert as age : '32'  means this 32 act as string 
so check it -- 

this Header part tell us what type of data u are sending   JSON , HTML , 
headers:{
'Content-Type' : 'application/json' or 'application/HTML'
}

body : JSON.stringify({name : "object" , age : 34})

NOW make the BOOKSTORE -- 









