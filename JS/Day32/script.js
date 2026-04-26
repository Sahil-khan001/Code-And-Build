//DAY 9 LEARNING --
//about numbers

//Whenever we use new keyword then it allocates its memory in the heap

// let num = 34;
// let num2 = new Number(365);
// // console.log(typeof num2)
// let num3 = new Number(365);

// let num1 = 365;
// console.log(num1 == num2);
// console.log(num2 == num3);

// let num = 343;
// console.log(num.toFixed(2)); //it means how many number you want after decimal  
// console.log(num.toPrecision(4)); //how many total digits you wnat like if u write 2 then it will be 35 if 4 then it will be 343.0;
// console.log(num.toExponential(3)); //after decimal how many digits you want then the number will be 343.000
// console.log(num.valueOf());
// console.log(num.toString());

//NOW MOVE TO THE MATH 
//it is an object also 

//MATH FUNCTIONS -- 
// console.log(Math.E);
// console.log(Math.PI);
// console.log(Math.LN10);
// console.log(Math.LN2);

//real use -- 
// console.log(Math.random());
// console.log(Math.random()*10);

// //floor and Ceil 
// let value = 32.1;
// console.log(Math.floor(value));
// console.log(Math.ceil(value));

//random number generates from 0 to 9
// console.log(Math.floor(Math.random()*10));

//random number generate from 1 to 10 then 
// console.log(Math.floor(Math.random()*10)+1);

//random number generater from 1 to 20 then 
// console.log(Math.floor(Math.random()*10) + 11);


// //0-10
// console.log(Math.floor(Math.random()*11));
// //1-11
// console.log(Math.floor(Math.random()*11+1));
// //2-12
// console.log(Math.floor(Math.random()*11+2));

//min= 30 max = 40
// let min = 30 ;
// let max = 40;
// console.log(Math.floor(Math.random()*(max-min + 1)+ min));

// let min = 1;
// let max = 11;
// console.log(Math.floor(Math.random()*(max-min+1) + min));

//for ludo make random no from 1 to 6
// let min = 1 ;
// let max = 6;
// console.log(Math.floor(Math.random()*(max-min+1)+min))

//note : random number is not used for otp and privacy password because it is risky because it work on system clock if an hacker gets system clock access then it may be too risky
