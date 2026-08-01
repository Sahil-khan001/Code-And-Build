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
now other request he can't do + now he have to login again 

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
   because most of thing in redis is automated

   now we have to make account in Redis 
   also we have 2 option either use redis server/storage or install redis on local machine 
   but for window we have to download docker so instead of this what we do is 
   we use Redis server like same we use mongodb server that is hosted on aws server

    so we use Redis server -- 
    so that when we put our code into Production level 
    than we dont have to worry about the because we already connected with the Redis 

    now we created account on redis and choose the free plan and get 30mb ram 
    now to connect with redis db
    we first install redis locally using npm then what we do is --

    first make a config folder then redis.js
    file then copy code from redis docs 
    code be like 

    const redis = require('redis');
const redisClient = redis.createClient({
    username: 'default',
    password: '1avduhfvws4xI9jVIqx64Oy2ZJ2z3ihK',
    socket: {
        host: 'mom-reassuring-appealing-80205.db.redis.io',
        port: 12443
    }
});

const connectReddis = async () =>{
await redisClient.connect();
console.log("Connected to Reddisdb");
}
connectReddis();

this username , password , at which host we give to the db in order to connect with them 
through this code we connected to reddis Database


now we know before server is listening we make sure
that server is connected to mongodb and Reddisdb

so for that we have to write code 
like we have code for this like --

main()
.then(()=>{console.log("Db is connected)
app.listen(1000 , async (req, res)=>{
    console.log("server is listening");
})
})
.catch((err)=>{
    console.log("error" + err.message);
})

we can put our redis connnection into it but can we write this whole code in optimise way --
yes the code be like --

const InitializeConnection = async ()=>{
  await redisClient.connect();
  console.log("Connected to Reddisdb");

  await main();
  console.log("Connected to DB");

  app.listen(1000 , async (req, res)=>{
    console.log("server is listening");
}) 
}

InitializeConnection();

Instead of this can we write optimize code throught which these promise run parallely--
await redisClient.connect();
console.log("Connected to Reddisdb");

await main();
console.log("Connected to DB");

-------------------------to----------------
await Promise.all([redisClient.connect() , main()])
it took this in an array and says -- they both connected to db parallely
previously we have to wait for them for one then it run and connected then the second one
if one of them is not connected it will give ERROR

final code be like --
for connection --

const InitializeConnection = async ()=>{
    try{
        await Promise.all([redisClient.connect() , main()]);
        app.listen(2000 , (req, res)=>{
            console.log("Server is listening");
        })
    }catch(err){
            console.log("Error " + err.message);
        }
}
IniitalizeConnection();

for redis.js file --

const redis = require('redis');
const redisClient = redis.createClient({
    username: 'default',
    password: '1avduhfvws4xI9jVIqx64Oy2ZJ2z3ihK',
    socket: {
        host: 'mom-reassuring-appealing-80205.db.redis.io',
        port: 12443
    }
});


module.exports = redisClient;

now from this redisClient we can do anything --
Now move to the Logout --
we make sure that before logout --
user is authenticate or not using middleware 
why we need it



now whatever token we block we have to put it in Reddis to make sure they dont make any request in Future
we can store in key value pair too using set in Reddis
mongodb want to store data in document in json format but reddis want to store in key value pair

MongoDb want -- data in Document
SQL want -- data in Table format

Reddis want -- data in key value format
so that we can easily find item
because we know data present in RAM in key value
he uses hashmap so that we can fetch data efficiently fast because it store light weight data

the value be anything -- string , object
the key must be unique 
so how we write key value in reddis db like
key: token:gjlkgjlfjsdkfsdjl;
value : "blocked";
corresponding to it we can write value as well 
AT THE END we have to block the value 
that's how people stored key value pair


now the final code be like --

AuthRouter.post("/logout" , async (req , res)=>{
    try{
    const token = req.cookies.token;
    await redisClient.set(`token:${token}`, "blocked");
    await redisClient.expire(`token:${token}` , 1800);

    res.cookie("token" , null , {expires : new Date(Date.now())});
    res.send("Logged Out Successfully");
    }catch(err){
        console.log("Error " + err.message);
    }
})


here what happend -- the old token that will be blocked we put in redis db and set expiry of it
suppose if a token expiry is after 3 days
but here u expire it in 30 minutes HardCore then 
then this token later access other request as well 
so we put the exact expiry time in redis db so that no issue create later 

now we have to take out expiry time from it 
for this first we have to decode the jwt 

like first

const token = req.cookies.token;
console.log(token);

const payload = jwt.decode(token);
console.log(payload);

so this token give us token as 'ghsfjskldfjsdlfjsdlfjsmfljcsddflkjsfljsd'
payload give us -- '_id' : 'djsfkdjldkjfsdfksjdlfkjsdlfk'
                  email_id : 'sahil@gmail.com"
                  iat : 39548584498,
                  exp : 83535443,

this iat : gives us creation time from 1st jan 1970
this exp : gives us expire time at this second it will expire 
both value in seconds 

so this payload.exp gives us expiry time --
but we have to use expireAt because the given exp calculate from 1jan 1970 
code be liek --

await redisClient.expire(`token : ${token}` , payload.exp);

now it will remove from redis at its expiry time 
diff b.w -- expire -- it calculate it from current time then expire it 
            expireAt -- it calculate it from 1st jan1970


Now Suppose if a user send fraud token that have expiry after 1 year then 
because we are not checking it 
for this -- we have to authenticate the user first --
using middleware like auth 

now we put token in the block list 
now suppose u go for any get request first u authenticate urself then server fulfill ur request 
but in authentication we not mention that the token is in the blocklist or not

for this in auth we have to mention that this token is mention in our redis or not so Authentication code be like -- 
first import redisClient in auth then code be like --

const IsBlocked = await redisClient.exists(`token : ${token}`);

if(IsBlocked){
    throw new Error("Token is invalid it is Blocked Already");
}

it is most imp. code too it check whether the this token present in Blocked State ornot

so we see a after applying Redis now the old token is not able to access other request 
so redis is simple --
also to get info from redis DB by putting the key we can get info from redis DB --
we can use -- 
await redisClient.get(`token : ${token}`);

<!-- ------------------------------------------------------------------------------------------- -->

Now move to the RATE LIMITER --
it is a part of HLD and why it is necessary --
suppose a insta user want some info 
and he do get request -- 10000 req in 1 min 
he write code in frontend and make a loop and make requests 
and suppose most user do it they want to crash our System 

like in github they set only 100 req in one hour 
they are tracking us how many request 
we have to find how many time a user make a request
we put a count around a user how many time he is making a request 
-- this code we put in RATE LIMITER

--
when a user come on our website we set how much requests he can make in 1 hour/how many times he hit our api

-- if there is more request then it can crash our server 
   because it take more RAM to execute more function 


   ---Now the solution is 
   1. Token Bucket Algo -- it failed too 

-- so there is 
    Client                   Token Bucket                 then Server

when client make request then it goes into bucket then it goes into Server 
means when token put into server then it fulfill request otherwise not
 
if anyone come with token bucket and move direcly to the Server then server can't fulfill its request 

This is TOKEN Bucket Algorithm --
suppose a hacker is come with 5 lakh requests then all 5 lakh token put into server 
now because of this if real USers fulfill request then he is not able to do it because there is no token in bucket because of it users have bad experience

this algo/approach  is failed 

2. Fixed Window Algo --
now move to other algo that is --

now what we do is the server set no of request per hour
suppose if it is a authenticate user then he is doing lot of request then we can found him and we can set no of request per hour 

but suppose he is not an authenticate user he make request on login page again and again then how can server find him
we know who ever make request we can find out his IP address using req.ip
because we know its a cs rule that whenever we make request we have to send own ip address and his ip address 

so we find it IP address and we can store it in Redis DB
so in Redis DB -- 
we store the I.P address , no of count , Total time to live 
no of count -- how many time a request is come from a particular address
total time to live -- we know we have 1 hour - 60 requests 
means he can only make request under this 60 min

            Redis DB 
I.p           value               TTL/expire time
12.1.1.12       1                       60 min


so Rate limiter  is a piece of code that check when a request is coming from client
so RL check in Redis Database that this particular Ip address it have time ornot how many request he have then after checking if valid then he increase it count under the time value 
if new Ip address come then ratelimiter registered it fully allot 60 minutes
when this time over then it automatically remove from redisDB

now we want that in 60 min user can do 60 request 
ALSO between two request there is time gap of 10 seconds

so what we do is 
WE CAN SOLVE ALSO COOLING PERIOD TOO LIKE LEETOCODE ANS SUBMISSION -- 
we store request creation time suppose a request is coming at 12:01:04
then it make another request at 12:01:08 so Rata limiter reject it it check in db then it know it only 4 second reject it 
then again another request at 12:01:14 now it will accept increase the count + replace old time with this 
now where we store this time 
also we have to convert this time into seconds -- this 12:01:03
so what we do is we find this time  by Date.now() then divide by 1000 to convert into seconds then we store in value means parallel to NO OF COUNT  like --
value = count : 23586989;

it stored as a string in value , Now we have to convert it also in number for that we use --
str = 2:23566757565
str.split(":").map(Number);
it gives value into an array = [2 ,23566757565]

Now this Algo is FIXED WINDOW 
means no of request are between 12:00 to 12:59 only after it automatically remove 
<!-- --------------------------------------------------------------------------------- -->

Now move to the 
Sliding Window --
what happened in FIXED WINDOW -- 
we know we can make 60 req in 1 hour , Suppose a user do one request at 12:00 and another 59 request at 12:59
then in next hour at 1:00 he do 60 request 
so total in 2 minutes he make 119 request 
which is not good for our server , not a right thing

so we need that if a user make 59 req at 12:59 then it can make another 60 req at 1:59 it should be like this so 

for this we have Sliding window Algorithm 
in which the time frame window increase 
suppose a user make a request at 12:05 then another request he can make 60 req till 1:05 and it calculate the previous request as well
then if he request at 12:10 then till 1:10 he can make 60 req
like if user make 59 req at 12:59 then it do 60 req till 1:59
he can't make 60 req at 1:01 because here at every request the sliding window increases

Now move to the Fixed Window Implementation --
we use 
app.use(rateLimiter);
means whenever any request is coming first we check using Ratelimited user limitation on Request 

we put it before the heavy request like
app.use("/auth" , AuthRouter);
app.use("/user" , UserRouter);

now we write Rate Limiter Code it acts as a middleware so in middleware the code be like 
const rateLimiter = async (req , res , next)=>{
      
      //store the ip address in redis db
    const ip = req.ip;

    const count = await redisClient.incr(ip);
    //this incrment function gives us how many times this ip address making request
    it set the value of ip address as count if it it is new then it registered this ip address and set value as Count 

    if(count > 60){
        throw new Error("User Limit Exceeded");
    }

    if(count == 1){
        await redisClient.expire(3600);
    }

    next();
}

const count = await redisClient.incr(ip);
here instead of this we can do this with diff methods too 
like set , get but this process takes too much time 
so we use .incr 
it tells us count acc to its ip address , it increases every time when request it from same ip and if it is new then it registered it 


Suppose we have so many request from diff ip address then in this case we scale our server
like AWS have autoscalling features when we enable it it make too many server 
loadbalancer is diff it tell request onto which server u have to go 

now this const ip = req.ip;
if we do req from postman then it give ip like this ::1
because it is local req so it give in ipv6 format 
if u give him normal request then it give in proper format

now u can implement the cooling time period as well --
const count = await redisClient.incr(10);

if ip address not exist --
we have to set ip address then invalue set no.of count and current time in second , ttl/expire
so we use -- await redisClient.set(ip , `1: ${Date.now()/1000}`);
await redisClient.expire(3600);

if exist --
we use get to find the count of it if it is > 60 then we do exceed limit
if it is less than 60 then we do update time then check 
its a logic game
<!-- ============================================================================= -->

Now move to the SLIDING WINDOW -- 

in sliding window we check total no of request in the last one hour include the recent request 

whenever we make a request we check in the last one hour in the Sliding window 

if we make a request at 12:10 then we have to check all req between 11:10 to 12:10 
we can solve it using queue

suppose we make a req --
11:05 , 11:10 , 11:15 , 11:20 , 11:40 , 11: 50 , 12:10 , 12:15

now we have to remove 11:05 , 11:10 
because we only only check all the req between 11:15 to 12:15

if queue do this operation then it will take time 
so is there any way to do this using AUTOMATION

we know we have to store the req time 
so that we can remove the one who dont lie in that one hour category

11:05 , 11:10 , 11:15 , 11:20 , 11:40 , 11: 50 , 12:10 , 12:15 
if we store like this and remove it using queue it takes time
like for every remove we have to make a await call 
so much data call so it takes time --

so we store these time in 
set 
Normal set contain unique values like -- 1:04 , 1:14 , 2:00 , 1:08
but we store in Sorted Set --
then it contain sorted unique values --

11:05 , 11:10 , 11:15 , 11:20 , 11:40 , 11: 50 , 12:10 , 12:15 
like this -- 

but we know a set can contain other datatypes values as well so how we sorted then --
sorted_set = 1 "rohit" 43 "khan"

so for this case we sort this onthe basis of Score we make a score with a number and basis of it we sort 
score : 1  value : "rohit"
score : 2  value : 4
score : 3  value : 110

now it sort on basis of score 
also ur score can be duplicate but ur value can't be duplicate 

now u can use Range Query do delete from a specific score to other score at ONCE
it need only 1 request call
there is no need to call again and again 

so we stored like --

key : Ip address
score : current_time(in seconds from 1st jan1970)

so this score is the current time -- 

-- bascially we stored this current time in second then with the help of range query we remove unnessecary score that we dont need like

1:05         1:15              1:29                1:59            2:05                2:08               2:10
12325      12327            12329                  12340            12350                12370            12390

now if we want all req in 1 hour then we do   0   to       12327
remove req which lies in this parameter 

suppose we store -
    key         score             value 
192.31.21.6     123456             rohitnegi_08


Now in value what we put --
value : currentTime(second)

some say we can put username 
another req come at 123460 with rohitnegi_08 then what happened 
we know value can't be same 
so it updated the time not the count 
so we have to use currentTime(second);
we have to put this in value because everytime it changes 

the issue with the currentTime(second) is suppose user make 100 req at same time and if we are putting current time in value then we know values are same so it update the current time not the count so the count value only increase by 1 
in actually
so it failed now 
second option is Math.random

we know math.random() also depend upon system clock means the current time 
it is not random their logic works on current time 
suppose if we store math.random with the score then what happened 
we know it depends if at a particular second suppose hacker make so many requests then what happened 

it is possible that at this time the math.random() value may collide because it also extract random based on that second 

so we can't put math.randow 
so u can take a big random number 
that can decrease the problem 

u have to understand that there is no perfect System 
there must be any loop there 


so we can use crypto library-- it generate the random number 

now u can also make ur OWN library of random number generator like --
take a water tank and put some fish into this -- 
then every time u click picture of that tank the unique image is there 

Now on that particular image u can put algorithm -- it can generate random number 

Now move to the code part that is of sliding window of RL --

now make a file in middleware that is rateLimiter.js now the code be like --

//windowSize = expiry time of all req in seconds

const windowSize = 3600;
const maxReq = 60;

const rateLimiter = async (req , res , next)=>{
    try{
    
     const key = req.ip;
     const current_time = Date.now()/1000;
     const window_time = current_time - windowSize;

     await redisClient.zRemRangeByScore(key , 0 , window_time);

     const numberOfRequests = await redisClient.zCard(key);
     //it tell us total no of value 

     if(numberofRequests > maxReq){
        throw new Error("User limit Exceeded");
     }


     



    }catch(err){
        console.log("error " + err.message);
    }
}

window_time 
suppose current_time is 1:20 
then the window time is 1:20 - 60 min means 12:20 
it means remove all the time before 12:20
the current we get it in seconds and window time also in second 

now how we write code for remove code based on score as we discuss
it remove from one particular score to given score 
code be like--
await redisClient.zRemRangeByScore(key , 0 , window_time);

so it remove all the score between 0 to window_time 
that we will be give in time 
1:20 - 60min = 12:20 the time we get in second 
so we say remvove all score between 0 to 324353
then it remove 


const total_no_of_req = redisClient.zCard(key);
//total no of value present so value is no of requests 

if req is under total no of req then we do -- 
await redisClient.zadd(key , [{score : current_time , value : `${current_time}: ${Math.random()}`}]);
this z tell us this is sorted set 
and add  this req into this -- 

now the imp. is the TTL u have to increase it by 60 min by every request
now 
await redisClient.expire(key , windowSize);


u can write code like this here --
if(NumberOfReq == 1){
await redisClient.expire(key , windowSize);
}

then this will not work it same like old problem 
it means for every req the expire time is 60 min 

suppose at 12:59 -- it do 58  req
at 1pm the key expire 
then new key will make req 50 at 1:01 -- this will do if we write this code 

we want if we make a request at 12:59 then key will make req till 1:59
means every key in ttl by 60 min 

whenver any req is coming from that particular key then we have to increase ttl by 60 min 
when new req is coming -- total time of particular key increase by 60 min 
so we have to write 
await redisClient.expire(key , windowSize);

<!-- ---------------------------------------------------------------------- -->
so final code is -- 

//expire time that is windowSize
const windowSize = 3600;  //that is 60min
const maxReq = 60;

const rateLimiter = async (req , res , next)=>{
    try{
    
     const key = `IP${req.ip}`;
     const current_time = Date.now()/1000;
     const window_time = current_time - windowSize;

     await redisClient.zRemRangeByScore(key , 0 , window_time);

     const numberOfRequests = await redisClient.zCard(key);
     //it tell us total no of value 

     if(numberofRequests > maxReq){
        throw new Error("User limit Exceeded");
     }

     await redisClient.zAdd(key , [{score: current_time , value : `${current_time} : Math.random()`}]);

     await redisClient.expire(key , windowSize);
     next();
    }catch(err){
        console.log("error " + err.message);
    }
}

this code give error u have to write -- 
const key = `IP:${req.ip}`;

normal req.ip give me -- ::1
but this one give in full format 

the BEST WAY TO DEBUG IS -- 
comment all line of code and check code line by line -- 
and check at what line we got error 














