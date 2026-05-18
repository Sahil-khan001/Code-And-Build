//We use Async and Await with the Promise 

// cart = ["pizza" ,"coke" , "sandwich"];

//  function placedOrder(cart){
//     console.log("Talking with Dominos");

//     const pr = new Promise(function(resolve , reject){

//         setTimeout(() => {
            
//             const food_available = true;
//             if(food_available){
//                 console.log("Order Placed Successfully");
//                 const order = {orderId : 221,food : cart ,restaurant : "Dominos" , location:"Dwarka Delhi"}
//                 resolve(order);
//             }
//             else{
//                 reject("Items out of stocks"); //in reject we have to write a message so that catch can show this if any error is occur 
//             }
//         }, 2000);

//     });

//     return pr ;
//     }
  
// function preparingOrder(order){
//     console.log("Pizza Preparation Started");

//     const pr = new Promise(function(resolve , reject){

//         setTimeout(() => {
//             console.log("Pizza Preparation Done");
//         const foodDetails = {
//             token : 12 ,
//             restaurant : order.restaurant,
//             location : order.location,          
//         }
//         resolve(foodDetails);
//     }, 2000);
// });

// return pr;

// }

// function pickupOrder(foodDetails){
//     console.log("Reaching Restaurant for picking Order");

//     const pr = new Promise(function(resolve , reject){
//     setTimeout(() =>{
//         console.log("Order picked up by the Delivery Body");
//        const droplocation = foodDetails.location;
//         resolve(droplocation);
//     }, 2000);

//     });  

//     return pr;
// }

// function DeliverOrder(droplocation){
//     console.log("Delivery boy is on the way");

//         setTimeout(() => {
//             console.log("Order Delivered Succesfully");
//         }, 2000);
// }

// placedOrder(cart)           
// .then(order => preparingOrder(order))  
// .then(foodDetails => pickupOrder(foodDetails))  
// .then(droplocation => DeliverOrder(droplocation))
// .catch(error => console.log(error)); 

//Now we are trying to make it even more easy like --

// const order = placedOrder(cart);
// const foodDetails = preparingOrder(order);
// const droplocation = pickupOrder(foodDetails);
// DeliverOrder(droplocation);

//it create problems like it generate something then put it into order  and u know that these functions are async it takes time to execute so it
//but here problem create it execute one another and it dont store anything 


//we want until this placedOrder function get executed and put it into order until then next function can't execute 
//so for this we use await like -- 


// const order = await placedOrder(cart);
// const foodDetails = await preparingOrder(order);
// const droplocation = pickupOrder(foodDetails);
// DeliverOrder(droplocation);

///this await is wait until the order get the data from the placedOrder(cart); then it moved to next function 

//You can't use await like this but if u want to use await then u can use await only in Asynchronous function like

// async function greet(){
//     const order = await placedOrder(cart);
//     const foodDetails = await preparingOrder(order);
//     const droplocation = await pickupOrder(foodDetails);
//     DeliverOrder(droplocation);
// }

// //now u can use it easily for making a function async then put async in front of normal function it becomes async then call that function to execute 

// greet();

//it execute it is in same way easily 
//the promise format is old style and async await is new one also it makes sense to us to read code easily 

//in promise lets take eg 

// const p1 = new Promise((resolve , reject)=>{
//     setTimeout(() => {
//         resolve("hello everyone");
//     }, 5000);
// })

// p1.then((response)=> console.log(response));


// //if we do this using Async or Await THEN 

// async function greet(params) {
//     const data = await p1;           //we can't move to next line until this line is completely executed so that is what await do 
//     console.log(data);
// }

// greet();

//this is async and await method it said wait p1 until it return data then we print that data 
//now we write code in easy way and good for developers 

// //Async and Await is new it just enter in ecma script recently while promises are old one 

// const p1 = new Promise((resolve , reject)=>{
//     setTimeout(() => {
//         resolve("hello everyone");
//     }, 5000);
// })

// async function greet(params) {
//     const data1 = await p1;
//     console.log(data1);

//     const data2 = await p1;
//     console.log(data2);
// }

// greet();

// //the question is why this data2 is no waiting for p1 why it print data at same time of data1 because p1 wait then give data it means promise is resolved once promise is resolved we get the data why data2 wait again there no need to wait again once we get the value -- 

//some teacher said its because of await is in parallel no its because of we already get value in p1

//eg2 lets talk about eg2

// const p1 = new Promise((resolve , reject)=>{

//     setTimeout(() => {
//     resolve("hello this is p1");
//     }, 5000);
// })

// const p2 = new Promise((resolve , reject)=>{

//     setTimeout(() => {
//     resolve("hello this is p2");
//     }, 5000);
// })


// async function greet(params) {

//     const data1 = await p1;
//     console.log("Coder Army") //it takes 5 seconds to print because p1 is in waiting state 
//     console.log(data1);

//     const data2 = await p2;
//     console.log(data2);
    
// }

// greet();

//both takes same time not because of await parallel its because of different promises u defined outside the async function 

//if we do this in normal promise then 


// const p1 = new Promise((resolve , reject)=>{

//     setTimeout(() => {
//     resolve("hello this is p1");
//     }, 5000);
// })

// const p2 = new Promise((resolve , reject)=>{

//     setTimeout(() => {
//     resolve("hello this is p2");
//     }, 5000);
// })


// p1.then(value => console.log(value));
// p2.then(value => console.log(value));

//in this it print p2 first because of less waiting time then p1 
//but in case of async await 
//it print p1 then p2 because here it await function is there so that like we have to wait before moving to the next funtion -- NOTE : 

//but in case of function in have wait then show output for diff promises function like -- 

// function test1(){
//     const p1 = new Promise((resolve , reject)=>{

//     setTimeout(() => {
//     resolve("hello this is p1");
//     }, 8000);
// })
// return p1;
// }

// function test2(){
//     const p1 = new Promise((resolve , reject)=>{

//     setTimeout(() => {
//     resolve("hello this is p1");
//     }, 8000);
// })
// return p2;
// }



// async function greet(params) {

//     const data1 = await test1();
//     console.log(data1);

//     const data2 = await test2();
//     console.log(data2);
    
// }

// greet();


// now in this function have to wait so it execute one by one 
//one function wait then another function execute
//at same time still execute one by one because of await not of independent nonsense method 

//async function always give promises --like we are in waiting state  same as promises so it give promises 


// async function name(params) {
//     return "hello";
// }

//but in this eg it return hello not promises not it convert this hello into promises 
//whatever u print considered as promise 
//also if u not return anything then it consider promise as undefined 
//eg


// async function meet(){
// //  return "hello army";
// }

async function meet(){
 return "hello army";
}

meet().then((response) => {
    console.log(response);
})
//if it return hello army then it print hello army 
//if it return nothing then it print undefined 

//async function always expect that u return promise in it 

