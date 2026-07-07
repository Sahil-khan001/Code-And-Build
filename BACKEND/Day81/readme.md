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








