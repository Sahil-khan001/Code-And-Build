
//DAY 13 LEARNING FUNCTION in js 

//functions 

//1ST METHOD TO CREATE A FUNCTION

// function greet(){
//      console.log("hey this is function nice to meet you");
// }

// greet();


// //addtion 

// function add_and_mul(num1 , num2){
//      console.log(num1 + num2);
//      console.log(num1 * num2);
// }

// add_and_mul(5,7);



// function add_and_mul(num1 , num2){ -- these are parameters okk
//      return (num1 + num2);
// }

// let result = add_and_mul(4,6);  //this is argument that you pass in this bracket 
// console.log(result);

//2ND METHOD TO CREATE A FUNCTION  we stored it in a variable also 

// const fun1 = function(){
//      console.log("this is new way to make function");
// }


// fun1();
// console.log(fun1); //if you write this then it can print that there is a function with the name of fun1 it dont print you function for this you have to call the function 
// console.log(fun1()) // u can also do this is this way okk

//also when u use return then after it no things gona b execute okk

//NEXT IS ARROW FUNTION -- it is similar to normal variable function u just have to remove the funtion part and replace it with a => sign okk eg

// const sum = (number1 , number2)=>{
//      console.log("hey this is arrow function just slightly change in the syntax part");
//      return (number1 + number2);
// }

// console.log(sum(5,6));

//SHORTCUT WAY TO WRITE THIS IS NEW WAY IS -- 
// const sum = (number1 , number2) => number1 + number2;  //MOST OF THE TIME WE USE THIS WAY IN OUR CODE 

// console.log(sum(5,6));

// //eg2 if you have just 1 parameter to pass then the function look like but in more than 1 parameter u have to use bracket 
// const cube = number1 => number1*number1*number1;

// console.log(cube(5));


//IF YOU HAVE INFINTITY ARGUMENT AND PARAMETER THEN YOU HAVE TO USE REST OPERATOR eg..

// const add = function(...number){
//      console.log(number);
//      //u seen like rest will put all number in an array and later we use for loop for the sum we do it later
// }

// add(3,3,5,6); //u can pass infinity arguments the rest will handle it and store one by one into it


//spread be like 
// let arr01 = [1,2,3,4];
// let arr02 = [...arr01];

// console.log(arr02);

//we can pass object in function also right 

// let obj = {
//      name : 'sahil',
//      id : 34,
//      roll: 3423,
// }

// function fun(obj){
//  console.log(obj.name , obj.id, obj.roll);
// }

// fun(obj);

// You can also use destructuring in the parameter for the specific values ok
// let obj = {
//      name : 'sahil',
//      id : 34,
//      roll: 3423,
// }

// or the real syntax be liket this but we use 
// function fun(obj){
//   const {name , id , roll} = obj;
//   console.log(name , id , roll);  
// }

// function fun({name , id , roll }){
//  console.log(name,id,roll); 
// }

// fun(obj);

//PASS BY VALUE  -- if u change anything in an object it change in real object if not change then it is pass by value basically a copy will be pass
//PASS BY REFERENCE -- if change happen then it is pass by reference basically the address pass 

//we can also change the prototype 
// let obj01 = {
//      a:1 ,
//      b:2,
// }

// let obj02 = {
//      c:3,
//      d:4,
// }


// obj02.__proto__ = obj01; //in this way we can change other prototype too but this is not right way its too risky ur code may explode u can use like this 
// obj02 = Object.create(obj01);


// console.log(obj02.__proto__);

// let first = function(){
//     console.log("this is function");
// }

// console.log(first.__proto__ == Function.prototype);   //true
// console.log(first.__proto__.__proto__ == Object.prototype); //true
// console.log(first.__proto__.__proto__.__proto__ == null); //true

// let string = "sahil khan";

// console.log(string.__proto__ == String.prototype);   //true
// console.log(string.__proto__.__proto__ == Object.prototype); //true
// console.log(string.__proto__.__proto__.__proto__ == null); //true

// NOTE : In every datatypes prototype chaining is there 
