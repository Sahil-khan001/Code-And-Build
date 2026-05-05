// Promise -- 

//callback hell

//fetch() -- it is an asynchronous task  -- it takes sometime to execute like it is fetching some data from somewhere eg. WeatherAPI it is use to fetch weather details and show in the form of the object 
//if we get data in the form of object then we can easily get display the details using object 

//if we get the details in info in object then we can easily display it on he ui 

// const obj = fetch('http://api.weatherapi.com/v1/current.json?key=4193c7abac7f42f7958192534260405&q=London&aqi=yes');
// console.log(obj);

//it give output that is Promise {<Pending>}
//it means that is not comming fully 
//we have to make sure we can't show data fully until it grab full data

// setTimeout(()=>{
//     console.log(obj);
// },2000)

// now it printing the data 
//so how we know how much time it will take to show full data everytime we have to use different time so to solve this we use 

// const obj = fetch('http://api.weatherapi.com/v1/current.json?key=4193c7abac7f42f7958192534260405&q=London&aqi=yes');
// obj.then((data)=>{
//     console.log(data);
// })
//This obj is Promise 
//basically u are waiting for ur data 

// const Promises = fetch('http://api.weatherapi.com/v1/current.json?key=4193c7abac7f42f7958192534260405&q=London&aqi=yes');
// Promises.then((response)=>{
//     console.log(response);
// })

//.then((response)=>{
//     console.log(response);
// })
//this part only run when promises will get full data /reponse 

//until the full data come into the Promises then we get print the data 

//We have 3 stage of Promises -- 
//Pending , resolve , reject 

//  const Promises = fetch('http://api.weatherapi.com/v1/current.json?key=4193c7abac7f42f7958192534260405&q=London&aqi=yes');
// Promises.then((response)=>{
//     console.log(response);
// }).catch((error)=>{
//     console.log(error);
// })


//suppose u make a request and if request work successfully then u print the data and if it reject ur request due to any issue then catch print that issue 

 
//  const Promises = fetch('http://api.weatherapi.com/v1/current.json?key=4193c7abac7f42f7958192534260405&q=London&aqi=yes');
// Promises.then((response)=>{
//     console.log(response);
// })
//if u print the response then it give only response part but if u want body part then use .json like 

//there are 3 stages of promises --Pending -- if data is still not coming then it is in pending state
// Resolving -- data is fetched fully and now u can print the data
//Rejecting -- data is reject due to any issue u can use catch for issue 

// const Promises = fetch('http://api.weatherapi.com/v1/current.json?key=4193c7abac7f42f7958192534260405&q=London&aqi=yes');
// Promises.then((response)=>{
//    console.log( response.json());
// })

//for both the resolve and reject data come into promises

//FINAL DEFINITION FOR PROMISE -- 
//The Promise Object represent the eventual completion or failure of an asynchronous operation and its resulting value 

//Promises -- Pending , Resolve , Reject

//at the end this Promise is an Ojbect okk

//when u make a request it goes into promise and he has to give eihter resolve , reject data 

// const Promises = fetch('http://api.weatherapi.com/v1/current.json?key=4193c7abac7f42f7958192534260405&q=London&aqi=yes');
// Promises.then((response)=>{
//    console.log( response.json());
// })

//json -- javascript object notation 
//now u are converting the response into the json file like javascript notation means u want response body part but still this code gives  Promise <pending>  -- means this is also an async task it takes time to convert into json type 
//because it is a async type so we have to make a .then() for this  also means until we get the data print the data 

// const Promises = fetch('http://api.weatherapi.com/v1/current.json?key=4193c7abac7f42f7958192534260405&q=London&aqi=yes');

// Promises.then((response)=>{
//    const promise2 = response.json();
//    promise2.then((data)=>{
// console.log(data);
//    })
// })

//now it can print the response body part or also some people write in this way also like 


// const Promises = fetch('http://api.weatherapi.com/v1/current.json?key=4193c7abac7f42f7958192534260405&q=London&aqi=yes');

// const Pro2 = Promises.then((response)=>{ 
//    return response.json();
//    }).then((data )=>{
//    console.log(data);
// })

//this is promise chaining means reponse at return response.json() is move to .then then print or we have even more shortcut of this that is -- 

// const Promises = fetch('http://api.weatherapi.com/v1/current.json?key=4193c7abac7f42f7958192534260405&q=London&aqi=yes');

// Promises
// .then( response =>response.json())
// .then(data =>console.log(data));

//we knaw in arrow if we have only  1 parameter then we can use shorcut like this we can't write return if we have only 1 parameter 
//some people use even more shortcut liek 

// fetch('http://api.weatherapi.com/v1/current.json?key=4193c7abac7f42f7958192534260405&q=London&aqi=yes')
// .then( response =>response.json())
// .then(data =>console.log(data))
// .catch(error =>console.log(error));

//data from fetch come into response then it convert into json then print the data if there is any error then it print that error 

//now u can print any data from the object like 


fetch('http://api.weatherapi.com/v1/current.json?key=4193c7abac7f42f7958192534260405&q=London&aqi=yes')
.then( response =>response.json())
.then(data =>console.log(data.current.temp_f))
.catch(error =>console.log(error));

//it print the value 3 from weather api data if not like there is any error then it can print any data 




