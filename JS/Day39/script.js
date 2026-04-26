
//DAY 15 LEARNING IN JS

//NOTE : when u make writable false so that if we can change anything it cannot change so many people say it is use to escape from hacking but its not actually it is use to escape from accidental changes okk

//NOW MOVE TO THE FOR OF LOOP 
//we use for of loop to access on the values 

// const arr = [10,39,53,63];
// for(let value of arr){
//      console.log(value);
// }

// // //u can use on string as well

// const str = "sahil is goat";
// for(let value of str){
//      console.log(value); //it print value one by one 
// }

// //Dont use for of loop in Object

 let object = {
     name: "sahil",
     village : "kureni",
 }

// for(let value of object){
//      console.log(value); //it give error that we cannot iterate on object that 's why we dont use for of loop in object
// }


// //but if u want to iterate it then use object.values(obj) eg

// for(let value of Object.values(object)){
//      console.log(value);
// }

// for(let value of Object.keys(object)){
//      console.log(value , object[value]);//  u can print like this for both the values 
// }

// //but use for in loop for object not for the array because of wrong keys print 
// //for of loop for the array , string

// =============================================================
//NOW MOVE TO ForEach loop or callback function before doing this lets talk about call_back function so --
//call_back function  //when we pass another function as an arguments 

// function greet(fun){
//      console.log("hey this is india");
//      fun();
// }

// function hello(){
//      console.log("this is hello world");

// }

// greet(hello);

//or 2nd way to pass the function 

// function greet(fun){
//      console.log("hey this is india");
//      fun();
// }


// greet(function hello(){
//      console.log("this is hello world");

// }); 

//3rd way to pass an function using variable


// function greet(fun){
//      console.log("hey this is india");
//      fun();
// }

// const hello_world = function (){
//      console.log("this is hello world");
// }

// greet(hello_world);

//4th way to pass an function using arrow function 

// function greet(fun){
//      console.log("hey this is india");
//      fun();
// }

// greet(()=>{
//      console.log("this is hello world");
// });

//TAKE AN REAL WORLD EXAMPLE where an function take data from backend and show on screen after every 5 seconds

// function fetch_Data(){
//      console.log("i am fetching the data after every 5 seconds")
// }

// setInterval(fetch_Data,2000); //so it print this data after every 5 seconds okk
//this is use case of call back function 

//so at last what is call_back function is --- u make a function and pass the another function into it as an argument okk

//now move to foreach loop function okk -- 

// const arr =[19,35,22,66];
// // arr.forEach(require an call_back)
//   arr.forEach(function(num){
//      console.log(num);  // basically it take a call_back function as an arguments into it 
//   }) 

  //u can also use arrow function inside this 

// const arr =[19,35,22,66];
//   arr.forEach(num => console.log(num));  //most of the time u see this syntax in codebase okk

  //u can print index too 
// const arr =[19,35,22,66];
//   arr.forEach((num , index) => console.log(num, index));  //most of the time u see this syntax in codebase okk

//u can also add array in it and use it 
// const arr =[19,35,22,66];
//   arr.forEach((num , index, arr) => {
//     arr[index] = num *2;
// console.log(arr[index]);

//   })  

  
//   console.log(arr); //u can print values like this also okk

  //u can write function separte also okk
//   const greet = function(num){
//    console.log(num);
//   }

//   arr.forEach(greet);

 //NEXT IS FILTER -- To filter out my data -- it basically return true and false if true it get the value otherwise not 
 //ALSO ONE IMP THING TO REMEMBER IS THAT filter is also stored in variable also okk

//  let arr = [10,20,30,3,7];
//  arr.filter((num)=>{
//    if(num%2 == 0){
//       console.log(num);
//    }
//  })

 //or u can print and stored it in a variable 


//  let arr = [10,20,30,3,7];
//  const pop = arr.filter((num)=>num%2 == 0 );
// console.log(pop);

//eg. 

// const nextui = [
//    {name : "sahil", marks:90 , age : 23},
//    {name : "monu", marks:80 , age : 33},
//    {name : "hitesh", marks:30 , age : 21},
// ]

// const result = nextui.filter((obj)=>{
//  return obj.marks>50;
// })

//or in short way 
// const result = nextui.filter((obj)=> obj.marks>50);

//or in short way using Destructure way only required variable
// const result = nextui.filter(({marks})=> marks>50);  
// console.log(result);

//NOW MOVE TO THE MAP PART -- 
//now the difference beween filter and map is in filter you can only filter the value not modify it but in map you can modify the value -- 

// const arr1 = [1,2,3,4,5];
// const result = arr1.map((num)=>{
//    return num*num;
// });

// const result = arr1.map((num , index)=> num*index);
// console.log(result); //u can see in this we just modify the value 

//IMP. TO REMEMBER -- 
//for each not stored in any variable but u can stored map in variable
//filter return true and false if true it stored the value 
//map stored the value in variable

//eg -- find even number from this and square that number and stored it 
// const arr = [1,2,3,4,5,6];

// const even = arr.filter((num)=>{
//    return num%2 == 0;
// })

// const final = even.map((num) =>{
   
   //  return num*num;
   // })

//shortcut way to do this --    
// const even = arr.filter((num)=>num%2 == 0);
// const final = even.map((num) =>num*num);
// console.log(final);

//or short way using the chaining prototype 
// const arr = [1,2,3,4,5,6];
// const final = arr.filter((num)=> num%2==0).map((num)=> num*num);
// console.log(final);