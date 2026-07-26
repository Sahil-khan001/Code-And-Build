Today talk about Redis --

--Lets make the LogOut request first -- 

like user have to login in again in order to execute next request --

once he logout -- 
he is not able to fulfill other request
all request is invalid 

what happend here is after login server give him token 
so that when next time he come with token server verify it and execute it request

now what Server do is he give invalid token to client 
so when he come next time he not able to execute it request he have to log in again 

so what happed in client and server 
if client have a token that server give them which is working after verification 

when we go to logout route
then server give him again token which is invalid 
so client remove previous token and adapt the new one 

code be like -- 

authRouter.get("/logout" , async (req , res)=>{

    res.cookie("token" , "gkjdffjsdflksjkll");
    res.status(200).send("Logout Successfully");

})

now it worked it replace old token with this one --
this is one of the solution 

2nd is -- we can expire the cookie
whatever cookie the client have we have to expire it 
code be like -- 

authRouter.get("/logout" , async (req , res)=>{

    res.cookie("token" , null , {expires : new Date(Date.now())}); 
                 or instead of this u can use this also --   res.clearCookie("token");
    res.status(200).send("Logout Successfully");

})

what happen when we do logout request
server send the cookie/token this is token/cookie that is null and we set the expiry of cookie using {expires} and 
Frontend expire it means delete it 

Basically what happen behind the scenes is -- 
the client send the token to the server -- to verify then fulfill its request
now when he go for request -- the server send him new token with value null and expire -- right now 

NOW IN THIS SYSTEM ANY LOOP HOle there -- 
yes what happen when this server give us new token with expire operation 
then what happen the old token is removed and this one come with urgent expire
then if we do any request it didn't possible
suppose we stored that prev token and now put into cookies then make request it will work
because it didn't delete it remove from just system 

TOKEN is stateless
the server is not storing the token info 
server dont have access of it 
if a token is removed from the system it doesn't means it cannot fulfill other request if it is valid then it can fulfill other request then server can't do anything because he dont have access of it 

NOW HOW can we solve this Problem -- 
we can solve it using -- a database like

client give token to server -- for request
then server verify and server fulfill its request and in request it send invalid token with instant expiry then it remove old token and replace with new one and it also got delete
now if old token goes in server for request the server fulfill its request that is wrong 
to solve this issue 
we can make a DB where we store the token which is already remove 
so that if it came later it not able to fulfill its request 
now the server can invalidate the token with the help of block list that is present in DB
we know that some token have long expiry day so until then we have to kept them in block list
we have to kept them until its expiry is done , one its done then we remove it from db
now if it that token come again after expiry then server understand this is expire so it ENVALIDATE him 

now the issue is --

1. we want that token is remove from DB when it expire 
2. also there is db call from server to verify the token , we dont want this 
   u can create ur own data structure like set , array
   it also have an issue like there are so many request , we have to traverse over the data and select which one have to remove from the DB
   we know we have replica also there like total 3 server each one have to perform that operation we dont know onto which server request is coming 

  SO TO SOLVE THIS PROBLEM WE HAVE REDIS -- 
  It is a DATABASE and it is very FAST
  if mongodb fulfill a query in milleconds then redis do in microsecond 

  HOW -- 
  we know MONGOdb stored data in secondary memory that is SSD
  also when we have to run queries then first data come into RAM
  then we run queries 


  but in REDIS data stored directly in RAM
  we know the secondary storage operation are slow so that's why we store it in RAM
  so REDIS is in Memory Database 
  but RAM is volatile 
  so we can't put data for PERMANENT we put those data that is valid for some time like TOKEN 
  becaues it expire in 1hr , 1 day 
  so for this CASE Redis is best 

  it doesn't means we dont want mongodb no 
  redis use case is different 
  we use redis for temporary data , that u want to hold 

  Also behind the scene the redis stored the data in Secondary Memory for backup
  whole data is in the Memory but backup in Secondary memory 

   also u can't put redis in node js application
   otherwise fight for RAM issue  node js want ram , redis want ram it create issue
   for this we have to make another Serve for REDIS he uses that server RAM 

   Also Redis is expensive it needs more cost for RAM


   suppose we go on a website we make a request server give u data from mongodb
   we know we have 3 Server so when server give data to client he give to redis too 
   so when client againt request for same page now mongo dont call DB AGAIN now Redis give him data as FAST 
   so for same page everytime we dont call db again REDIS will do our WORK 

   until what maximum time the redis hold the data
   it depends on node js application like we have to tell me keep this data till 3 days , 2 days 
   we have to tell him

   like the way mongoDB do Sharding and Replica of server/Database when data is increases 
   in sharding -- in server 1 data is from 1 to 100 , in server 2 from 100 to 200 ,
   in replica -- same data in all server -- then load balancer will help if so many request are there

   In Same Way Redis make their own sharding and replica when needed 

   we can't use redis as secondary storage it will take more cost
   
   IN real company -- if u implement more and more feature and make user experience good
   then there is high cost too , company is in Loss so we have to make sure
   there should be optimal optimization 

   now we see how to use Redis in LogOut -- 

   so what we do is in redis we gonna store that token/token copy when server replace the old token with new one we put old token in redis so that later it can't access any request --

   in future if client come with any token then first we check that token present in Redis or not 
   if present then we have to delete it also 
   so this work is done Automatically by Redis we just have to add a timestamp with it 
   after this TIMESTAMP the redis will delete that TOKEN

   now we have to make account in Redis 
   also we have 2 option either use redis server/storage or install redis on local machine 
   but for window we have to download docker so instead of this what we do is 
   we use Redis server like same we use mongodb server that is hosted on aws server

   we 

