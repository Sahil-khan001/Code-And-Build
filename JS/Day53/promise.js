// JS is a Single Threaded Synchronous Language -- 

//means it execute line by line -- 
// console.log(10);
// console.log(20);
// console.log(30);

//JS behave also like Asynchronous language -- 

//THIS IS ASYNCHRONOUS TASK -- it execute depends on function logic 
console.log("10");

setTimeout(() => {
    console.log(20);
}, 2000);

console.log("30");  //it give 10 30 20

//this settimeout is not a part of js it is a part of web api also if it is a part of js then it have to print 10 20 30
//u know js execute line by line so this 2000 also have to be calculate by js but it don't it is done by some web api also if js do this task then first it do this then print 20 then 30
//it is a  part of js then it must be in ecma script 

// if u notice u see that these Asynchronous task always want call back like event listener how a parent listen to every child simultaneously 


// single thread means one task will be executed at a time : 
//THIS IS SYNCHRONOUS TASK  -- It executing line by line
console.log("10");

//in Timer -- we have old value 
const timer = Date.now();
while(Date.now() - timer < 2000){
    //wait for 2 second
}

console.log("30");

//in this it print 10 then wait then print 20 then 30   10 , 20 , 30

// same work but diff output 1st output is 10 30 20
//2nd output is 10 20 30