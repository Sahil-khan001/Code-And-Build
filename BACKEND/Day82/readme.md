what is node js -- 

execute code of js at run time 

v8 engine -- that understand js 

v8 engine -- it just a c++ code that understand the js 
basically in v8  repo it have huge c++ lanugage introuduction

c++ generates machine code then we give it to assembly code it convert it into binary code 

js --- v8 engine/c++ code that convert the js code into  --- machine code 


we have -- 

frontend -- server -- mongo db 


we can't give direct access to frontend of mongo db
otherwise anyone can access data 
because we are showing data on frontend it can access using inspect and this mondb db credential too


so we put this db credential in SERVER 
it also have ALL BUSINESS LOGIC --
in uber -- how much fair from delhi to mumbai 
banking limit max -- 5 lakh
we can't write this in frontend otherwise anyone can modify it 


server is a js file -- 
it main work is to serve the request by you 


global object include -- set time out , set interval , console.log , 
all these are asynchronous in nature
it is not a part of v8 engine and JS

so node js have two part -- v8 engine + some other power like it can access asynchronous 

basically we make server in c++, python 
so what we do is in existing c++ server , we write some more c++ code in that server that undersand JS
so eventually we can write --
SERVER IN JS TOO

SO BASICALLY WHAT WE DO IS -- 
we give v8 engine to the server 
we know v8 have c++ code that understand JS
now server can also understand the JS 
we can write JS in server NOW


we know the v8 engine convert the js code into machine code
so it first convert the js code into c++ then into machine code 
the answer is no , it directly execute it 

lets write some code -- 

suppose we make 2 js file -- 
first.js and second.js

how can we run both the file 

in old ways --

require('./second')

now when u run node first.js then it give u content of both the file 

whatever u write in second.js 
it WRAP UP IN A FUNCTION IN FIRST.JS LOOKLIKE THIS -- 

(function(){
    console.log("hello ji i am second");

    function sum(a,b){
        console.log(a+b);
    }

})();

it is under THE IIFE -- IMMEDIATELY INVOKED FUNCTIONAL EXPRESSION --- 
(
    all things wrap up here and iife call this function 
)()
console.log("hello i am first");


now how can we access this sum function without declare in second.js
by default everyone is private


module.exports = sum;

in second.js -- 

console.log('i am second.js');

function sum(a,b){
    console.log(a+b);
}

module.exports = sum;

now u are saying dont private this sum function in iife 

in first.js -- 

const sum = require('/second.js')

sum(3,5);

now u are saying not to make it private u are exporting it 

we can export more function too as well
like -- 
sub we have to write 
module.exports = {sum , sub}
module.exports = {sum:sum , sub:sub}
this can export as an object when key and value is same then u can write sum , sub single also 
what is this module.exports this is nothing but {} empty object 
we can write in this way too --
module.exports.sum = sum;
module.exports.sub = sub;

THIS WHOLE IS CJM  -- COMMON JS MODULES
THIS IS OLD WAY FOR IMPORT AND EXPORT THE MODULES 
BUT IT STILL USE HEAVILY 

the new way is import and export as we see in react

Usually we see people -- 
in frontend they use -- import and export 
in backened they use -- require , const {sum , sub} = require()


if u use import and export in node.js
by default it support CJS this common js modules 

mjs -- import and export 
node dont understand this it doesn't have this default behaviour
but still if we want to use this then 

if we want to use this import and export in node.js instead of cjs module then 
we have to rename the file with first.mjs and second.mjs

node.js -- follow CJS MODULE , we can use mjs too just rename it with .mjs
frontend -- follow MJS MODULE it new , 

but in react when we use this mjs means import and export then we didn't change their name and it still working how 
its because of BUNDLERS - it can handle everything like the .mjs module system 


if u not want to rename file with .mjs then u have to make package.json 
and write
{
    "type" : "module"
}

u can mention here CJS MODULE too it behave like that then u have to write .mjs file
then u can run it normally without changing file name 

Difference between CJS AND MJS

            CJS(common js module)                                       ES MODULES(MJS)             
    1. OLD WAY -- still used                                             1. NEW WAY
    2. require() , module.exports= sum                                   2. import and export
    3. Synchronous                                                       3. asynchronous 
    4. Non-Strict                                                        4. Strict

    synchronous --
    we have more require
    require()
    require()
    require()

    so it execute one by one when one full solved then move to other 

    asynchronous -- 
   we have more import -- 
  import
  import
  import

  if one import takes time to get data then we move to second import until then 
  so it works in asynchronously 

  after the Es6 the JS follow Strict Mode 
  strict mode means we have to declare variable before giving value to it
  in node js -- c= 10;       without declare c it work in nodejs
  in js -- let c = 10 ;       we have to declare the c first that is strict mode 
s 
  '

 Suppose we have a folder that is calculator it have diff functionality sum.js , sub.js , mul.js
we have a separate file first.js -- it want that  functionality in first.js
either it have to import one by one , second option is make a index.js file which consist all these functinalities so we can direclty import this file 

  In Node js what happened -- when u try to import a folder and its functionalities then it check for index.js file 
  by default it find index.js and import  it that is best approach and optmised way too

  we make a file index.js -- in which we import all functionality 
  then we export this so first.js can import this 

  instead of 3 require we done our work in 1 require by just creating a index.js file 

Lets discuss about -- 
Process : threaded , multithread , asynchronous  , single core , octo core , parallelism , concurrent 


single processor -- at one time u can run only 1 process -- either yt/music/pubg
but u see all tasks works together fine just because of context Swithching 

for sometime it run task1 , then task2 , then task3 and repeat this  
all these tasks runs in fast way we can't even realise

and in this way the single processor can handle these 3 tasks simultaneiously 
also we can say this CONCURRENTLY -- means the tasks not run parallely but concurrently execute stop switch to another 

Dual core -- means we have 2 processor -- p1 - yt ,
                                          p2 - music , 
means 2 processor execute parallely 
THIS IS CALLED PARALLELISM

--suppose we have a game of 20gb and we have 8 gb ram so how this 20gb of game run in 8gb so basically we use virtual memory that is fragementation we just take the important part from it means we get only memory to run the recent tasks and remove the unecessary part only the requirement code 

like we open a website we see some component so we just need limited code to show that on ui not the full code we want remaining code when we click on that component not unnessary the full code

when PROCESS execute -- it need cpu , memory 
in process -- we have threads - that is smallest unit of tasks
one thread only become a part of one process


suppose we have a process it have some tasks --
1. edit a video 
2. transfer a file
3. install app

so we know in a process we have multiple threads -- t1 , t2 , t3 
so process gives these tasks to them one by one to execute 

if u have single processor then -- in threads context switching happening 
octacore processor then -- threads work in parallel means every thread have one p1 all thread work parallely

ALSO WE DONT HAVE ACCESS TO THIS LIKE PROCESS AND ASSIGNED TASKS TO IT ACC TO U --
IT IS BASED ON SYTEM , SYSTEM WILL DO OTHERWISE PROBLEMS HAPPENED

TAKE AN EXAMPLE -- 

suppose u have pizza hut -- it this as a SERVER
in this u have -- pizza(10 min) , coke(2 min) , pasta(5min)

IF WE HAVE A SYNCHRONOUS BEHAVIOUR 

then u have frontend he request  -- 1: pizza  -- it takes 10 min
                                    2: coke  -- it takes 12 min
                                    3: pasta -- it takes 17 min

if someone make request and we respond LIKE THIS THEN NO ONE COME ON OUR SITE

as we know we can write servers in js means it is synchronous then we face this problem 
BUT we know it have aynchronous behaviour too and web api handle it bascially the browser can do the multitasking 

if we do the ASYNCHRONOUS BEHAVIOUR -- 
-- 1: pizza  --                     1: pizza --  it takes 10 min
                                    2: coke  -- it takes 2 min
                                    3: pasta -- it takes 5 min 

pizza-- say okk after 10 min come
coke -- say okk after 2 min come

the highest time we are taking is 10 minutes too
but there must be multiple chef in kitchen means multicore 

remember node js is single threaded 
but from where he get multithread 

--MAKE PROJECTS AS MUCH U CAN 
EXCALLIDRAW.COM

HOW M MAKE DIFF THAT DIFF SHAPES
we know we have properties in event 
first click , final clck 
intial cordinate and last cordinate then u cn amke a shapes 









                                  




