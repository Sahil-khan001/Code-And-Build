//API -- Application Programming Interface -- 

//It is a way to communicate between Client and Server act like an interface 
//It is a format so that both user side can understand 
//we have to make a universal set so that both client and server can understand

//call stack is used to execute instrurction line by line using GEC -- global execution context
//in call stack we have gec --global excution context  -- it is used to execute from first line of code to last line of code


// setTimeout(() => {
    // console.log("hello");
// }, 5000);  -- it is a part of web API  that's why it execute after the time mentioned into this -- 

//web API -- settime out
//           setInterval 
    //       fetch 
    //       DOM 
    //       console    

    //now it is web api duty to execute this hello after 5 seconds after 5 seconds it give the callback function to the callback queue 

    // BROWSER HAVE -- So many things Js engine v8 , DOM , window Object , own timer , own search and WEB API 
    //OUR BROWSER IS MULTI THREADED it can work on simultaneously on different things at a time 

    //so we give this settimtout task to our browser because browser have all this facility 

    //basically callstack give this settimeout task to webapi and webapi put this call back function into callback queue
//so in callback queue we have cb that is execute after 5 second then there is a Event loop what he does 
//if call stack is empty like all instruction is executed means also gec is removed then 
//put cb from callbackqueue into call stack if it is empty then callstack start execution of this then it execute the settimeout and put it into the print process

//ALSO WHY event loop is used as a middleman with webapi and callstack like put cb from callback queue and put it into the call stack 

//EVENT LOOP is used to put element/function from callback Queue / Micro Task Queue to Call Stack it is empty 
//example like -- 

console.log("This is the line 1");

setTimeout(()=>{
console.log("This is line 2");
}, 0)

console.log("This is line 3");

//
// In this example what happened the output is  // This is the line 1
                                             // This is line 3
                                          //   This is line 2

// why still line 2 execute at last even it time is 0 seconds because the call stack put 
//this settimeout  to Web api and u know what then webapi after 0 second give it to callback queue
//then there is a event loop it only put cb from callback queue into call stack until it is full till GEC is removed 
//so that's why its output is like this 


// so Js is a single threaded Language while
//browser is a multiple threaded language it can do multiple works at same time 

// *****************************************************************

// NEXT WE HAVE FETCH FUNCTION -- 

console.log("I am first");

fetch("https://youtube.com")
.then(()=> console.log("hello"));

console.log("I am last");

//so what we are doing is we took the data from the youtube and make some changes into using function 

//this have a Asynchronous nature means it not execute immediately it takes time to execute completely 
//it is promise 

//like for this code -- 

// we have call stack  web api in which fetch is there 

// we have callback queue 
// //first in call stack we have gec then first statement execute and print then last and print now in call stack the gec also remove then we have WEB API in this 

// In Web Api we have fetch it takes data from youtube.com so it takes time then it execute and give it to the MICROTASK QUEUE --  so in microtask we have cb 

// then we have EVENT LOOP -- It work is to first check the call stack if it is empty or not if it is empty then put cb from microtask to the call stack 

//it gives priority to the microtask first then it is empty then it give priority to the call back queue 

// In Microtask we have Promises and    only 

//but in callback we have settimeout , setinterval  and lot more ...


