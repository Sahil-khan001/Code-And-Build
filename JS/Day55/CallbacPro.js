//cart
//Order
//food Details
//Drop Location

// cart = ["pizza" ,"coke" , "sandwich"];

// function placedOrder( cart , callback){
//     console.log("Talking with Dominos");
//     setTimeout(() => {
//         console.log("Order Placed Successfully");
//         const order = {            //we write this so that we can pass this to next team 
//             orderId : 221,
//             food : cart , 
//             restaurant : "Dominos" , 
//             location : "Dwarka Delhi"
//         }
//       callback(order);
//     }, 2000);
// }

// function preparingOrder(order , callback){
//     console.log("Pizza Preparation Started");
//     setTimeout(() => {
//         console.log("Pizza Preparation Done");
//         const foodDetails = {
//          token : 12 ,
//          restaurant : order.restaurant,
//          location : order.location,          
//         }
//         callback(foodDetails);
//     }, 2000);
// }

// function pickupOrder(foodDetails , callback){
//     console.log("Reaching Restaurant for picking Order");
//     setTimeout(() => {
//         console.log("Order picked up by the Delivery Body");
//        const droplocation = foodDetails.location;
//         callback(droplocation);
//     }, 2000);
// }

// function DeliverOrder(droplocation){
//     console.log("Delivery boy is on the way");
//     setTimeout(() => {
//         console.log("Order Delivered Succesfully");
//     }, 2000);
// }

// // placedOrder(preparingOrder);
// //now we can do it ahead for the pickupOrder 
// //so for this we use arrow function 

// placedOrder(cart , (order)=>{
//     preparingOrder(order , (foodDetails)=>{
//         pickupOrder(foodDetails , (droplocation)=>{
//             DeliverOrder(droplocation);
//         });
//     });
// });

// //the issue is Inversion control in which the function dont have control on their own 

// //THIS WHOLE THING DONE IS USING CALLBACK HELL and its too complicated now do use using Promise...

// // placedOrder(cart);
// // preparingOrder(order);
// // pickupOrder(foodDetails);
// // DeliverOrder(droplocation);

// //suppose we have something like this we dont use call back what function want we gave him like placed order want cart , preparing order want order details , pickupOrder want foodDetails , DeliverOrder want droplocation no callback 


// const prom = placedOrder(cart); //this statement tells that placedOrder generate some order details so when he generated you know it takes times that's why we use promise and u know it is a async task it takes time to execute task so he use promise 
// prom.then((order)=>{
//    preparingOrder(order);
// })

//so the final function look like --

// placedOrder(cart)
// .then(order => preparingOrder(order))
// .then(foodDetails => pickupOrder(foodDetails))
// .then(droplocation => DeliverOrder(droplocation));


//so the Promise function look like -- 

// const pr = new Promise(function(resolve , reject){

// })

// return pr ;

//now apply this into our code -- 

 
// cart = ["pizza" ,"coke" , "sandwich"];

//  function placedOrder(cart){   //we not pass any callback function here 
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

//     const pr = new Promise(function(){
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

//     const pr = new Promise(function(resolve, reject){
//         setTimeout(() => {
//             console.log("Order Delivered Succesfully");
//             resolve(droplocation);
//         }, 2000);
//     })
//     return pr;
// }


// placedOrder(cart)
// .then(order => preparingOrder(order))
// .then(foodDetails => pickupOrder(foodDetails))
// .then(droplocation => DeliverOrder(droplocation))
// .catch(error => console.log(error));  //if u got any error like reject() then in this error is print 

//it print Items out of stock because if food is not available then write in reject then catch print this 

//if not then it execute full promise 


// cart = ["pizza" ,"coke" , "sandwich"];

//  function placedOrder(cart){   //we not pass any callback function here 
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
// .catch(error => console.log(error));  //if u got any error like reject() then in this error is print 


//also this catch works for all rejects 

//now we understand how Promise and Promise consume works here 
placedOrder(cart)           //this generate some data that is order 
.then(order => preparingOrder(order))  //then this order is consumed by preparingOrder then it generate foodDetais 
.then(foodDetails => pickupOrder(foodDetails))  // then this foodDetails consumed by Delivercode and this cycle repeats 
.then(droplocation => DeliverOrder(droplocation))
.catch(error => console.log(error));  


//if any reject condition true then error then catch show that statement 


//THIS MADE OUR WORK EASY ALSO NOW WE HAVE NO DEPENDENCY OR NO MESSY CODE 

//PROMISE said i am not giving u data instantly but i promise in future i gave all data 
//same as fetch i am not giving u data instantly but i promise in future i gave u all data if not then give reason through catch 
//means it takes time to generate all data its a part of web api or browser or here multi threaded language
