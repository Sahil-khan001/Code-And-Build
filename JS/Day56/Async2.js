// function test1(){
//     const pr1 = new Promise((resolve , reject)=>{
//         setTimeout(() => {
//             resolve("this is promise1");
//         }, 5000);
//     })
//     return pr1;
// }

// function test2(){
//     const pr2 = new Promise((resolve, reject)=>{

//         setTimeout(() => {
//             resolve("this is promise2");
//         }, 5000);
//     })
//     return pr2;
// }


// async function meet() {
//     const data1 = await test1();
//     console.log(data1);

//     const data2 = await test2();
//     console.log(data2);
// }

// meet();

//it give u 
//this is promise1 then after 5 seconds give another 
//this is promise2 

//now tell me output for this -- 


// function test1(){
//     const pr1 = new Promise((resolve , reject)=>{
//         setTimeout(() => {
//             resolve("this is promise1");
//         }, 5000);
//     })
//     return pr1;
// }

// function test2(){
//     const pr2 = new Promise((resolve, reject)=>{

//         setTimeout(() => {
//             resolve("this is promise2");
//         }, 5000);
//     })
//     return pr2;
// }


// async function meet() {
//     console.log("this is greet from our side");
//     const data1 = await test1();
//     console.log(data1);

//     const data2 = await test2();
//     console.log(data2);
// }

//the output for this is -- 
//this is greet from our side
//No option
//Survival Mode
//this is Promise1
//this is Promise2


//it go from top to bottom then 
//it start with call function the print first line "this is greet from our side"
//then it check next is it have to wait for 5 second but he get back into his thread and execute the remaining code 
//we know that if anything is under waiting state then it can't move to next function but within the function but in this case we are not executing anything inside function we execute the code after call part  not within the async function 

//Promises waites in Microtask Queue
//It resolves in Microtask Queue



//when promises resolve it goes into MicroTask Queue

//this is greet from our side
//No option
//Survival Mode
//this is Promise1
//this is Promise2

//how this works in MEMORY EXECUTION -- 

//we have call stack in which we have GEC -- global execution -- which work is to execute code from line to line fully 
//we have web api in which all the asynchronous task come in then move to either circular queue and microtask queue then 

//then we execute code from top to bottom like then in our recent eg it skips all then start with function call then it comes in then greet comes into call stack then move to await part now we have to wait for 5 second instead of waiting u know js is a synchronous language so it is going to work SO GEC send the await  function to Microtask queue as we know promises goes into Microstask queue 

//then GEC do his own work it execute the remaining line of the code after the function call and print it then gec is removed now call stack is empty now event loop put greet function from microtask to call stack and call stack execute it one by one 

//NOW WE SEE HOW TO HANDLE ERROR IN ASYNC AND AWAIT -- 


// cart = ["pizza" ,"coke" , "sandwich"];


//  function placedOrder(cart){
//     console.log("Talking with Dominos");

//     const pr = new Promise(function(resolve , reject){

//         setTimeout(() => {
            
//             const food_available = false;
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
    
// }
  
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


// async function greet(para) {

//     try{
//     const order = await placedOrder(cart);
//     const foodDetails = await preparingOrder(order);
//     const droplocation = await pickupOrder(foodDetails);
//     DeliverOrder(droplocation);
//     }catch(error){
//         // console.log("FUCK UP");
//         console.log(error);
//     }
// }

// greet();


//all the reject promises it goes into the catch -- REMEMBER IT 


//NOW one more thing 

// function test1(){
//     const pr1 = new Promise((resolve , reject)=>{
//         setTimeout(() => {
//             resolve("this is promise1");
//         }, 5000);
//     })
//     return pr1;
// }

// function test2(){
//     const pr2 = new Promise((resolve, reject)=>{

//         setTimeout(() => {
//             resolve("this is promise2");
//         }, 5000);
//     })
//     return pr2;
// }


// async function meet() {
//     const data1 = await test1();
//     console.log(data1);

//     const data2 = await test2();
//     console.log(data2);
// }

// meet();


//we know that test1 and test2 are independent of each another also both takes 5sec to execute 
//we know it can't run parallel

//now how can we run this on parallel 
//like function that are independent to each another how can we run it parallely to make dependent of each another 


function test1(){
    const pr1 = new Promise((resolve , reject)=>{
        setTimeout(() => {
            resolve("this is promise1");
        }, 5000);
    })
    return pr1;
}

function test2(){
    const pr2 = new Promise((resolve, reject)=>{

        setTimeout(() => {
            resolve("this is promise2");
        }, 5000);
    })
    return pr2;
}


async function meet() {
    const [data1 , data2] = await Promise.all([test1(), test2()]);
    console.log(data1);
    console.log(data2);
}

meet();

//now it execute parallely on same time 
//now it print -- this is promise1 , this is promise2  instantly


//if a function take 8 seconds and if a function take 5 seconds then 


//HOW TO REMEMBER PROMISE -- 
//lets take example of data 

//const data = fetch("data coming from backend");
// console.log(data);  -- if we direct print this then there is undefined data we can't get fully data 
//but it takes time to fetch data from backened so we use promises because fetch return promises like 

//data.then((value)=>{
    // console.log(value);
    // }).catch(error){
    //console.log(error);
    // }

    //until data is received then we use this data and if any error is occured then it print that error 
    //promise said i am not giving u data immediately but in future i am giving u data and if not then give u the reason also 
    //

    //also the API receive data in object form 
                 