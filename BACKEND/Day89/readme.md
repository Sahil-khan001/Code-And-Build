lets talk about MIDDLEWARE -- 

app.use('/user' , (req , res)=>{

    console.log("first");
    res.send('hey thanks for the request ur data is here');
    console.log("last");
}, 
(req , res)=>{
    
    res.send('hey thanks for the request');
}
)

-- the output for this is first  , then hey thanks for the request ur data is here , then  last
it means 
this line res.send() is not a return statement otherwise this last wont print 

we know this is a function -- 
(req , res)=>{

    console.log("first");
    res.send('hey thanks for the request ur data is here');
    console.log("last");
}

in callstack it exectute line by line 
so first line then response then last line 

also we can't send two response at one request 
it give error 
because we know first we make a request then server gives us data
then second time server not give any response until we make a request so that's why it give error
except in web socket in real chat application 

if someone ask u what is API -- 
then tell him 
it is a function call -- 

like we have some code 
{
1
2
3
4
5
factorial(5);
6
7
8
}
now we need factorial of 5 we dont know where is this function written and how it looks like
we just want answer
in this same way our API's work 
u just have to write api in right format and it will give u the answer/data
so its same like a function CALL

now move to these functions

app.use('/user' , (req , res, next)=>{

    console.log("first");
    <!-- res.send('hey thanks for the request ur data is here'); -->
    next();
}, 
(req , res , next)=>{
    console.log("second");
    <!-- res.send('hey thanks for the request'); -->
    next();
} , 
(req , res)=>{
    console.log("third");
    <!-- res.send('hey thanks for the request'); -->
},
)

so to execute both functions we need to add the next parameter
and next();
to execute the next functions --
make sure in all these functions u only pass one response only ...
otherwise it give error ...

also -- 
(req , res, next)=>{

    console.log("first");
    <!-- res.send('hey thanks for the request ur data is here'); -->
    next();
}

this function we call the Route Handler also 

app.use('/user' , (req , res , next)=>{
    console.log("first");
    // res.send('hey thanks for the request ur data is here');
    next();
    console.log("sixth");
}, 
(req , res , next)=>{
    console.log("second");
    // res.send('hey thanks for the request');
    next();
    console.log("fifth");
},
(req , res , next)=>{
    console.log("third");
    res.send('hey thanks for the request i am third');
    next();
    console.log("fourth");
}
)

the output for this is --
first
second
third
fourth
fifth
sixth

and in response it is --hey thanks for the request i am third
because we have to send only one response 

it work same like js execution in callstack -- first all next() execution then 
the remaining one

now all functions are executing means the route handler
YOU can wrap all this function into an array too like this []
like -- 

app.use('/user' , [(req , res , next)=>{
    console.log("first");
    // res.send('hey thanks for the request ur data is here');
    next();
    console.log("sixth");
}, 
(req , res , next)=>{
    console.log("second");
    // res.send('hey thanks for the request');
    next();
    console.log("fifth");
},
(req , res , next)=>{
    console.log("third");
    res.send('hey thanks for the request i am third');
    next();
    console.log("fourth");
}]
)

so the final structure of app.use is -- 
app.use(route , [RH , RH , RH , RH] , RH)  u can put route handler this way too
app.use(route , RH , RH , [RH , RH] , RH)  this way too

u can also write these route handlers separately too -- 
like -- 

app.use('/user' , (req , res , next)=>{
    console.log("first");
    // res.send('hey thanks for the request ur data is here');
    next();
    console.log("sixth");
})
app.use('/user' , (req , res , next)=>{
    console.log("second");
    // res.send('hey thanks for the request');
    next();
    console.log("fifth");
})
app.use("/user" , (req , res , next)=>{
    console.log("third");
    res.send('hey thanks for the request i am third');
    next();
    console.log("fourth");
})

in this way too can write there is no ERROR

Now what is MiddleWare Handler -- 
which lies in between 
like this 

app.use('/user' , (req , res , next)=>{
    console.log("first");
    next();
})
app.use('/user' , (req , res , next)=>{
    console.log("second");
    next();
})

all these functions are MiddleWare 

the last one is Request handler/Route Handler because it is sending the reponse of request so it is not a Middle Ware
this one is not MiddleWare
app.use("/user" , (req , res)=>{
    console.log("third");
    res.send('hey thanks for the request i am third');
})
now this function is Request Handler because this one respond to the request because all prev are only calling the next function 

Basically the MIddleware is not officially in expressJs
we developer give this term and it is 
just the function that not fulfill the request basically functions from where it passes 
the middle one who is not responding to the request is middlware

the function who is responding to the request is -- Request Handlers
who  is not -- from which the function passes -- it is Middle ware

mw -> mw -> mw -> Route Handler 
request is passing from middleware from one to two to three until found the request Handler

Middlware -- who do some operation on the request/data but not respond and pass to the next function 
Basically middleware do some Process on Data
now we see what proessing he does on data

whenever we process any request 
we have to maintain the log for it 

Request : Maintain the log 
Timing : type of request , URL and timing

we need this because -- whenever we have server crash 
at that time we know because of which API we got the Server Crash
as a developer we have to know because of which request we are not able to fulfill it SO Maintain Logs are important 

even in banks they are their top priority which user takeout money at which time everything 

because of logs after analyzing of it we know how to scale the system
which request user are using most , everything 

how we print the logs for normal like --
app.get("/user" , (req ,res)=>{

    console.log(`Date is ${Date.now()} {req.method} {req.url}`);
    res.send("Info about User");
})
app.post("/user" , (req ,res)=>{
    console.log(`Date is ${Date.now()} {req.method} {req.url}`);
    res.send("Info Saved");
})
app.patch("/user" , (req ,res)=>{
    console.log(`Date is ${Date.now()} {req.method} {req.url}`);
    res.send("Info UPDATE");
})
app.delete("/user" , (req ,res)=>{
    console.log(`Date is ${Date.now()} {req.method} {req.url}`);
    res.send("Info delete");
})

here we are just printing the logs the actual code is 8 to 10 lines code also we have to store this in either file or database but we are just testing also we have to put this in every request 

like what happened we have to write 10 to 30 lines of code for this log maintain in every request
what we do is we make the middleware remove code from all request
and put it into the middleware code be like -- 

app.use("/user" , (req , res , next)=>{
    console.log(`Date is ${Date.now()} {req.method} {req.url}`);
    next();
})

we have to put this before real request 
whenever data is coming it goes into Middleware First 
then middleware do some processing and maintain the logs then pass next()
whatever the request is here the we have to respond it acc to it 
because we know whenever any request is coming it first come into app.use so middleware first maintain log then next()

now the final code be like -- 

app.use("/user" , (req , res, next)=>{
    console.log(`Date is ${Date.now()} {req.method} {req.url}`);
    next();
})

app.get("/user" , (req ,res)=>{
    res.send("Info about User");
})
app.post("/user" , (req ,res)=>{
    res.send("Info Saved");
})
app.patch("/user" , (req ,res)=>{
    res.send("Info UPDATE");
})
app.delete("/user" , (req ,res)=>{
    res.send("Info delete");
})

Now whenever any request is coming it first come into app.use so middleware first maintain log then next() and execute request acc to it 
so in this it helps in code

we also say this code -- Middleware as well -
app.use(express.json());
we use this to convert json into  Js objects now Any request can use this like patch , put , get , post anyone can use the jS object


either we have two options go to every request and write code according to it -- or the second option is 
JUST PUT IT TOP 
so whenever any request is coming first go into this middleware then it convert data into js objects
then any request can use it easily 

same like Middleware concept 

app.use -- it accept any request
if we do express.json() -- it means it convert for every request because it is in app.use 
now it pass next()
now when we go in any request we can fulfill it 
now these request have to tension free in order to fulfill request 
*>|




