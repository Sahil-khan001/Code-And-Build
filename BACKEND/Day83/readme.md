we know that js have not access to 

set timeout
fetch data  etc.. because they all are part of web api 

node js -

it have v8 engine + LIBUV


the js do have access to they all are part of web api 
Os will handle these -- 
Timer  -- system clock
file  -- read , write , delete 
Network call  -- fetch data , port including add or receive we are including the hardware 

but we know js have access to GLOBAL OBJECT
global object have access to all these timer , settimeout , network call but implementation in LIbuv 

 Now we want a language that interact and talk with SYSTEM

LIBUV IS USED TO INTERACT AND USE THESE OS PART THINGS TIMER ETC.

the code of LIBUV is written in c language it helps u to use these timer , file , network call
there is 97% contribution by c language in libuv repo

 what is libuv -- it is c LIBRARY that provides support for Asynchronous I/O.
it can access to these timer , file , network call

in js 
whenever we make request for fetching the data
it request goes to v8 engine and v8 engine give to libuv and libuv know how to interact with OS : for timer , settimeout , networkcall  then os give data to libuv and libuv to v8 engine
v8 engine give us final data

at the end the OS give u data after fetching 

note : basically these low level language know how to interact with the system like c , c++

like in js u write -- setTimeout(()=>{
    console.log("hi")
} , 2000)

basically js will not understand this it goes to v8 engine then v8 give to libuv and libuv can access this give it to os and libuv dont have their own timer it have to taken from os and said os tell me after 3 second then os tell it then libuv then v8 and it print "Hi"

google browser have diff -- v8 engine + other file -- than can access to os  for diff os they have diff implementation 
but libuv is cross platform it can run on any os 

Remember one thing -- whenever u are using any system resource then u have to access the OS it is mandatory
make sure u should give access of System to OS it is better and effiecient too
otherwise it is too risky if u do it by urself as we know 

--  WE KNOW C, C++ INTERACT WITH HARDWARE THAT IS OS 
IN LIBUV ALSO C SAYS OS GIVE ACCESS TO TIMER , SETTIMEOUT 
C, C++ DONT HAVE ACCESS TO TIMER , SETTIMEOUT 
THEY SAY GIVE US ACCESS TO THESE TIMER , SETTIMEOUT THINGS , REQUEST

    when we write console.log(sum(3,5));
    we know for this sum we have a function/implementation  there

    same as when we write setTimeOut() so for this the implementation written in libuv and it can access this from os 

    BASICALLY ALL THE IMPLEMENTATION IS WRITTEN IN LIBUV 
    when we write fetch , settimeout it interact with libuv but libuv have to interact with os na
 so all implementation is in the libuv but the data is present in os 
 how libuv interact with os -- through code 
the implementation code written in libuv now it interact with os with this implementation code 

basically this libuv implement on any os mac, linux 

as we done using these in frontend but we are not using the libuv there we are not using node js 
there we use google chrome and it have  - v8 engine , some code in c , c++ that interact with os 
basically we have diff ways to interact with diff os all have different files structure 
but libuv is cross platform it run on any os 

basically in frontened we use -- v8engine + browser own c,c++ code that interact with OS
in backened -- v8 Engine + libuv 

at the end browser in frontend it have to access the OS as well no matter what the different c,c++ code it have 
because when we do console.log(in browser) how it show it on browswer 
because he also access he os as well

why we need libuv 
we have global object too -- global object is just have functions but real implemenatation is in libuv that interact with os to get data 
//all the implementation of global object functions is in the libuv that's it 

suppose u write settimeout(()=>{}) how it will work in backened it will work because of implemen in libuv and data is in os then it give to v8 engine

--suppose we have setTimout(()=>{}) and other code 
so in same way it execute 

we have call stack then it have gec global context execution -- all the codes goes into call stack and gec executes it one by one 
when we have settimout then js dont understnad then it move to libuv then after3 seconds it give this to callbackqueue and if fetch async await then give to microtask queue and then there is event loop whenever call stack is empty then it put this settimeout into this 
and then it executes 

in frontened we use web api instead of libuv that's the difference just

<!-- ===================================================================================================================== -->

Now talk about how we read the file -- 

const fs = require("fs")
fs.readfile("./data.json" , (err , res)=>{
    console.log(res);
})

this is also an asynchronous task -- we dont know how much time will it take 
that's why we use callback function to get data

this task is handled by libuv
this utf -8 is encoding into utf-8

basically in this too the OS is read the data 

what is this fs -- it is file system 
it is a part of node js like in node js we have v8 engine , libuv , it also consist other modules too like fs --file system , crypto , zlib(the libuv info there) all these are existing 

we just have to require() this and use it ..
u can read this file into synchrous way like one by one execution js waits until it get data
code be like -- 

const data = fs.readfileSync("./data.json" , "utf-8");
console.log(data);


ALL THE AYSNCHRONOUS TASK HANDLED BY LIBUV , OS WILL HELP IN THESE CASES 



