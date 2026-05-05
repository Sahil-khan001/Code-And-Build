//We use Async and Await with the Promise 





cart = ["pizza" ,"coke" , "sandwich"];

 function placedOrder(cart){
    console.log("Talking with Dominos");

    const pr = new Promise(function(resolve , reject){

        setTimeout(() => {
            
            const food_available = true;
            if(food_available){
                console.log("Order Placed Successfully");
                const order = {orderId : 221,food : cart ,restaurant : "Dominos" , location:"Dwarka Delhi"}
                resolve(order);
            }
            else{
                reject("Items out of stocks"); //in reject we have to write a message so that catch can show this if any error is occur 
            }
        }, 2000);

    });

    return pr ;
    }
  
function preparingOrder(order){
    console.log("Pizza Preparation Started");

    const pr = new Promise(function(resolve , reject){

        setTimeout(() => {
            console.log("Pizza Preparation Done");
        const foodDetails = {
            token : 12 ,
            restaurant : order.restaurant,
            location : order.location,          
        }
        resolve(foodDetails);
    }, 2000);
});

return pr;

}

function pickupOrder(foodDetails){
    console.log("Reaching Restaurant for picking Order");

    const pr = new Promise(function(resolve , reject){
    setTimeout(() =>{
        console.log("Order picked up by the Delivery Body");
       const droplocation = foodDetails.location;
        resolve(droplocation);
    }, 2000);

    });  

    return pr;
}

function DeliverOrder(droplocation){
    console.log("Delivery boy is on the way");

        setTimeout(() => {
            console.log("Order Delivered Succesfully");
        }, 2000);
}

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

async function greet(){
    const order = await placedOrder(cart);
    const foodDetails = await preparingOrder(order);
    const droplocation = pickupOrder(foodDetails);
    DeliverOrder(droplocation);
}

//now u can use it easily for making a function async then put async in front of normal function it becomes async then call that function to execute 

greet();

//it execute it is in same way easily 
//the promise format is old style and async await is new one also it makes sense to us to read code easily 

//in promise lets take eg 

const p1 = new Promise((resolve , reject)=>{
    setTimeout(() => {
        resolve("hello everyone");
    }, 5000);
})