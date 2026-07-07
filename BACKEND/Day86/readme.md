LETS talk about Express -- 

-- we have 
Frontend-------------------------------------------------------Backend

they both talk using API

we have CRUD -- create(a.k.a POST) Read(a.k.a GET) Upadate(Patch and Put) Delete
that we do in backend basically 

we have http method : 
Get :  give me data     -------------------- we used to do this using fetch API's 

Post :  u create some data on Frontend and now u want send this data to the backend that is POST
post like -- when we create account on Insta then we have to fill all the details
all this details we put it on frontend then it save to the backend using POST
-- when we submit the form all the data is send to backend and save their in db
So instead of always taking data sometime we have to give the data too using POST
we put our data into frontend and told backend here it is ur POST 


Update: when we try to update the username , userthing
it consist -- Patch , Put 

Delete : when we want to delete the data 
frontend makes a request to delete the data in backend


so from FRONTEND WE HAVE -- Request -- it consist like  get post patch,put delete
all these request are from frontend

get -- we want this user data we make a request and we got data in reponse
post -- u created a reel then it got store in backend using POST
patch,put -- u want to update anything it got update in backend
delete -- u want to delete something in backend u make a request


we use await fetch() to get details from backend -- this is GET
we use fetch() but method: "POST" to store create data in backend

acutally we never use the second argument we always use await fetch()
like -- 
const resonse = await fetch("... ,{
    method : "POST",
    body : JSON.stringify({username : "example"}),
    headers: myHeaders,
});
means this username u have to store in the backend

put Patch -- 

like we have -- 
username 
name 
age 
DOB
Password

when we want to update all these changes then we need Put 
otherwise if we want to change in only one thing then we use -- Patch 

THESE http method : 
get , Post , put,patch , delete

All these method is a part of REST API's


when we tell backend to delete this user how backend know this -- 
it read the method , what is written there , then it understand what to do -- 

SUPPOSE we fetch() something using this link -- 

now how backend now what we have to do with this link -- should i give data of it , save it , delete anything what to so we need to declare for this --

we have to use get , post ,put,patch , delete
backend check this http method then do acc to it
we need to add someething extra like this --  

const resonse = await fetch("... ,{
    method : "POST",
    body : JSON.stringify({username : "example"}),
    headers: myHeaders,
});

 like this now backend know we have to save this data into the database 

 now make the express server --
 so first do npm init -- to make package.json 

 npm install express

 then write -- 

const express = require("express");
const app = express();

app.use((req , res)=>{
   res.send("hey this is response from the SERVER")
})

app.listen(4000 , ()=>{
    console.log("server is listening ...")
})


//YOU can even send response in the form of OBJECT same like the real API's do -- 
then u need to write like this -- 

const express = require("express");

const app = express();

app.use((req, res)=>{
    res.send({"name" : "sahil" , "age" :23});
})


app.listen(4000 , ()=>{
    console.log("server is listening at port number");
})

REMEMBER ONE THING -- when we update in this object make sure 
U ARE RESTARTING THE SERVER 

basically again and again updating the server is weird
so to solve this problem we have -- NODEMON 

the npm command for this is -- npm i nodemon 

but if u want to install it GLOBALLY -- then u have to write 

npm i --g nodemon 
but if this give error then add sudo in it 
sudo npm i --g nodemon 

now it install globally -- u can use it anywhere now in the codebase 

now instead of node index.js u can use nodemon index.js 



NOW HOW CAN WE HANDLE THE ROUTING IN THIS -- 

const express = require("express");

const app = express();

app.use("/" , (req, res)=>{
    res.send({"name" : "sahil" , "age" :23});
})
app.use("/contact" , (req, res)=>{
    res.send("i am ur Contact Page");
})
app.use("/price" , (req, res)=>{
    res.send("i am ur price page);
})

app.listen(4000 , ()=>{
    console.log("server is listening at port number");
})

but we are facing an issue the issue is when we put /contact we go to contact page 
when we put /price we are on price page
but u dont have to mention the 
"/" this page then it will work 
app.use("/" , (req, res)=>{
    res.send("hey this is default page");
})

so the issue is we can't use this if we use this then other not work
because they think when u write /price 
they first match with default page like / they start with this / and take u onto default page and think that price will inside this somewhere like the NESTED one 

so to solve this what we do is -- 
we need to put this / one into the last like -


because we know that its a JS , so it is conviction language 
it check from top to bottom we know so if we put this default page routing at last then everything works fine

/price -- will match in first 

but if we write /price/person 
then go into /price routing page and think remaining is in the nested one  

when u write this then what happened -- 



app.use("/abou?t" ,(req, res)=.{
    res.send("I am About Page");
})


now its u can write anything instead of u 
u can write -- aboat , abodt

? char become Optional
+ char can be repeated multiple times
* any number of characters can arrive 

now if we do dynamic routing -- 

app.use("/about/:id" , (req, res)=>{
    console.log(req.params);   
     res.send("this is about page");
})
now we can find detail using dynamically id 
we can't write hardcore value one by one
in this way we use dynamic parameter and handle it 

-- REMEMBER -- internally this express module also uses Node.js http modules

it just give us this app it have some function app.use for req,res  

