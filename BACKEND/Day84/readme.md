 what is Server -- hardware,software
 it have 2 definition -- 1st in form of hardware -- where we can deploy our whole code in the physical cpu 
 software --  this is the main software that basically provide the services that client want 
we provide specific data acc to user need

client -- who wants services    server -- who provides services to client 


suppose we have 1000 images in the computer 
ram -- primary memory when comp off it vanish 
ssd ,hdd -- second memory -- here data stored permanently

but when we want to send data then we use ram because it is fast 
after operation is complete then we store the data in the secondary memory 

we have 



1000 images 

code written there... that AUTOMATICALLY GIVE DATA to the CLIENT  -- this code that is written it give automatically data  so it itself a services/server
that is MOB

this is Services/Server 


Client -- request for images 

so -- client is requesting for image 
and we have this hardware in which we have 1000 image and we have automatically server that give data to the client 

so Basically -- 

server is like a CPU -- it have all the files like html , css , js
in this we have on more server 
when client want specific data like js then this server automatically give data to him
this is what we are going to make 

the Server must be --
1. 24 hour online / Internet on 
2. Specification should be good there

Suppose we have request in lakhs then we use services like 
AWS
heroku
azure
vercel

there we can host our server it is powerful CPU that handle all the request efficiently its basically a hardware 
THEY PROVIDE U HARDWARE SERVICES -- THEY ARE VERY POWERFUL , best specification , in best optimization way
they have lakhs in server at different location 
but we have to pay them for this services


SO Basically SERVER MEANS 2 things-- HARDWARE , SOFTWARE

HARDWARE -- when we deploy our whole code to the server means the physical/hardware data 
SOFTWARE -- this is the main software that basically provide the services that client want 
we provide specific data acc to user need


like suppose u go in a website and u ask give me this video , give me this code 
so this SOFTWARE PROVIDES U THE DATA ACC TO CLIENT need   


    basically when we make a request to the server for the data

    Client                                               Server

i.p -- 123.11.52.32                              i.p -- 201.11.11.11



so  when we make a request we have to send the ip address , port number of own and receiver
then server gives us data to us on our own ip address , port number included

portnumber -- 16 bit number
we use this so that we can find specific person , devices to whom we have to give the data 

Socket -- IP + Port number is called socket

when we create a request using HTTP -- then 
there is socket created
when request is fulfilled then this socket is removed then again new request is there 
then again socket is created //IT is connection create

when u make a request on website then 
DNS -- it convert https://www.coderarmy.in - into - I.P Address -- 200.20.23.12

after this socket is created then port number is added 

and it is mandatory to add port NUmber because there are many services provided by website as well as the senders too
like we go on a website -- dns convert this website into ip address now u have to add the port number

for sender -- we will give it 
but for the receiver -- it have it default ip address  like for 
HTTP -- 80
HTTPS -- 443
so it add by default
if u use the http service website like -- https://www.coderarmy.in
then for this website the ip address is 200.20.23.12  and port no is -- 443


If u know this terminology -- HTTP server port no 80  is listening / Server is Listening

u wrote sender ip address + Port number             ---          receiver ip address + port number(if https then : 443)
now the https port no 443 is listening does anyone want something 
we are giving them port number because there are so many requests are there 
so that's why from where this specific request is coming 

suppose we have 10 req at same time 
then server make a socket with 1st then remove it then with 2nd then remove it 
then 3rd then remove it then 4th remove it 
suppose all req with same port number that is 80 http is appear now how he determine onto which i have to send the data 
it check sender -- IP ADDRESS  +  PORT NUMBER

in normal socket -- until we request a server for the data
the server dont give us data
means first request then data

but in REAL CHATTIME APPLICATIONS -- 
what happened is WE HAVE 

FRIEND 1                  ----------------                 WHATSAPP SERVER                                     ------------------                   FRIEND2

FRIEND 1 CHAT SOMETHING IT MOVE TO FRIEND 2
FRIEND 2 CHAT SOMETHING  IT MOVE TO FRIEND 1

NO SUPPOSE FRIEND 1 CHAT SOMETHING AND FRIEND 2 IS OFFLINE THEN ALL DATA STORED IN WHATSAPP SEVER
THE WHATSAPP SERVER GIVE U DATA IT MEANS WITHOUT A REQUEST HE IS GIVING US DATA
IN ONLY WORK IN REAL CHAT APPLICATION 
WHEN U GET DATA WITHOUT EVEN ASKING / REQUEST


NOW HOW TO CREATE A SERVER --
the hardware or software what we have to make lets do -- 

first we make server through Node Js then see the problem we fact then from the next class we gonna use Express 

with the help of http module we make the server 

const http = require('http');

const server = http.createServer((req, res)=>{
   res.end("hello coder army");
});


http.createServer((req, res)=>{
   res.end("hello coder army");
});

this return u an object that's why we put this into a Server 
if we create any server it means it is listening too so for this 


const listen = server.listen(4000, ()=>{
  console.log("i am listening at port number 4000");
})

u can give him port number too , irrespective of it own port number that is 80 of http 
now if server want to send a response to the sender we have to write a call back in create server (req, res)=>{
    res.end("this is response");
}


we host this server locally that node js gives us power 

now we go to browser and type -- localhost : 4000 then enter
then it show Hello coder army


 Basically what we done is 

 the client is BROWSER

 the server we created at localhost:4000

 localhost ip address is 127.0.0.0
 port number is 4000

 we want data from this ip/port number  and we get Hello Coder Army


 it is working like we go on a website -- dsssb.com 
 dns convert this into ip address then add portnumber into it then we get the data same as above HAPPENING

 to run this go to browser and run -- localhost:4000 
 ur server messag is displayed here

-- Routing in server -- 

if u want to do routing in server then the syntax be like -- 

const server = http.createServer((req, res)=>{
    if(req.url === "/"){
        res.end("hey this is default page");
    }
    else if(req.url === "/contact"){
        res.end("this is contact page");
    }
    else{
        res.end("this is error page");
    }
})

then u have to req the url then server will respond acc to it 

but if we do all these things in Node.js LATER it will become too complex 
so to solve these problems we have  EXPRESS.JS

because it have more functinality then node js and optimization too

Physical Server is -- it is like CPU , memory , ram , OS where we deploy our whole code.
which we can touch by our hand



















