//In callback we pass function into another function as an argument is call back function 

//Call back HEll -- 

// function placedOrder(){
//     console.log("Talking with Dominos");
//     setTimeout(() => {
//         console.log("Order Placed Successfully");
//     }, 2000);
// }

// function preparingOrder(){
//     console.log("Pizza Preparation Started");
//     setTimeout(() => {
//         console.log("Pizza Preparation Done");
//     }, 2000);
// }

// function pickupOrder(){
//     console.log("Reaching Restaurant for picking Order");
//     setTimeout(() => {
//         console.log("Order picked up by the Delivery Body");
//     }, 2000);
// }

// function DeliverOrder(){
//     console.log("Delivery boy is on the way");
//     setTimeout(() => {
//         console.log("Order Delivered Succesfully");
//     }, 2000);
// }

// placedOrder();
// preparingOrder();

// Talking with Dominos
// Pizza Preparation Started
// Order Placed Successfully
// Pizza Preparation Done

//it give this answer but it is wrong to solve this we use call back funtion like 


function placedOrder(callback){
    console.log("Talking with Dominos");
    setTimeout(() => {
        console.log("Order Placed Successfully");
      callback();
    }, 2000);
}

function preparingOrder(callback){
    console.log("Pizza Preparation Started");
    setTimeout(() => {
        console.log("Pizza Preparation Done");
        callback();
    }, 2000);
}

function pickupOrder(callback){
    console.log("Reaching Restaurant for picking Order");
    setTimeout(() => {
        console.log("Order picked up by the Delivery Body");
        callback();
    }, 2000);
}

function DeliverOrder(){
    console.log("Delivery boy is on the way");
    setTimeout(() => {
        console.log("Order Delivered Succesfully");
    }, 2000);
}

// placedOrder(preparingOrder);
//now we can do it ahead for the pickupOrder 

//sor for this we use arrow function 

placedOrder(()=>{
    preparingOrder(()=>{
        pickupOrder(()=>{
            DeliverOrder();
        });
    });
    
}) 

//this is basically the callback HELL -- 
// u  pass a funtion inside a funcition as an argument then in this function u pass another function as an argument then this process repeats and this is called CALLBACK HELL -- 
//Disadvantage of this is -- 
//code becomes too messy
//also all function dependent on another function until he call the function then it gonna execute 
//means dependencies is too much there 
//also it hard to debug if there is any error appear 
//suppose placed order callback not call below functions that things got crash and other operations will not work properly because of this user experience become bad

//TO SOLVE THIS PROMISES come into the picture -- 
//we made a promises that we call the another function or team there is a bond promises 


















//it also give same output in callback function what happened basically 
// callback -- ()=>{
//     preparingOrder();
// }
// callback(); -- it executes this arrow function 
//arrowfuntion is pass in callback function then it check and execute whatever present in the arrowfunction 

//now for the other function we use another arrow function inside arrow function with call  to next function with same callback method present in last function

// function preparingOrder(callback){
//     console.log("Pizza Preparation Started");
//     setTimeout(() => {
//         console.log("Pizza Preparation Done");
//         callback();
//     }, 2000);
// }

// placedOrder(()=>{
//     preparingOrder(()=>{
//         pickupOrder();
//     });

// like this 