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

    res.cookie("token" , null , {expires : new Data(Date.now())});
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
we have to  

