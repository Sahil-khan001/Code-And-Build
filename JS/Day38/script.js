
//DAY 14 IF,ELSE,LOOP IN JS or ADVANCE LOOP


//scopes -- global , local(functional) , block scope
//global -- anyone can access these scope
//local -- it can access within the function , only the function
//block -- it check the upper and lower curly brace and except any object it exist in if else , for loop block

// note : we can't use var variable because suppost we declare a var variable inside a function that is local scope but we can easily access it outside that is a problem 
//also in var variable we initialize value again and again in same block and it can't give any error so that is a problem
 //eg. 
// for(var i = 0 ; i<10 ; i++){
//      console.log(i);
// }
// console.log(i); //that is a problem with var

//two diff scope one is global the outside one and the if condition one is functional scope
// let amount = 0 ;

// if(true){
//      let amount = 30;
//      console.log(amount);
// }
//these both amount represent diff scope amount so don't confuse how we declare two times a same variable 

//note : anything in code first u have to declare then use it like function or even in if else or any condition 
//

// let obj = {
//      name : "sahil",
//      age : 24,
//      gender : "male",
// };

// for(let key in obj){
//      console.log(key, obj[key]);
// }

// //but for access it keys , values we do another way also 
// console.log(Object.keys(obj));

// //now we see what the difference between the both 

// const obj2 = Object.create(obj);
// obj2.money = 555;
// obj2.village = 'kureni';

// console.log(obj2); //it can print only obj2 property okk but if u want to access obj value then u can do that also like 
// console.log(obj2.name); 
// console.log(Object.keys(obj2));  //it can print keys of obj 2 only not the obj ones so it can inherit property from obj but not print it so to solve this we use for in loop 
// // //or 
// for(let key in obj2){
//      console.log(key); //so yeah it can print the inherit keys also apart from its own keys
// }
//now the question is when we make a object prototype and obj2 u know that obj2 inherit property from object prototype but it not print tostring()   
//now take another example when we create another obj and put it into obj2 then obj2 inherit property from obj and when we use for in loop it print its inherit keys also 
//the ques is but how ...

// eg like --

// let obbj = {
//      name : "sahil",
//      roll: 43,
// }

// for(let key in obbj){
//      console.log(key);
// }

//the output is  name  , roll why it is not print toString() and many more property that it inherit from object.prototype. so 

//when ever u make key value : u have to use writable , enumerable , configurable
// let obj = {};
// obj.name = "sahil";

// console.log(Object.getOwnPropertyDescriptor(obj , 'name'));

// //whenever we make key value pair then by default the writable , enumerable , configurable add it automatically 

// //if writable = True  ,, it means can we change the value or not 
// obj.name = "khan";

//if configuarable = True ,, it means you can change writable , enumerable and change it value to be true or false  if it false then u not able to change it 

// let obj01 = {};

// Object.defineProperty(obj , 'name' , {
//      value : "sahil",
//      writable : true,
//      enumerable: true,
//      configurable : true,
// })

// console.log(obj); //if we print this that it can be name : sahil

// //but if we write false in writable it we not modify it like 
// obj.name = "mohit";

// console.log(obj);

// Object.defineProperty(obj , 'name' , {

//      writable : false,
// })

// obj.name = "mohit";
// console.log(obj);


//eg. 
// const obj1 = {
//      name: "sahil",
//      id : 34,
//      account_number : 110040,
// }

// Object.defineProperty(obj1 , 'account_number' , {
//      writable: false, //because of this now we cannot modify our account number okk 
// })

// obj1.account_number = 11006;
// console.log(obj1.account_number);

// eg 2 LETS TAKE AN EXAMPLE -- this is a customer at a bank so acc to security it name and acc_no must not change right so we do this 

// const Customer = {
//      name: "sahil",
//      acc_no : 234,
//      city : "delhi"
// }


// Object.defineProperty(Customer , "acc_no",{
//      writable : false,
// })

// Customer.acc_no = 32; 


// console.log(Customer); // now i am not able to change in this because of writable false


//LETS TALK ABOUT ENUMERABLE by default it is true 
//it means whichever key have enumerable true it print that's key  and if false then it not print that key 

// const Customer = {
//      name: "sahil",
//      acc_no : 234,
//      city : "delhi"
// }

// Object.defineProperty(Customer , "acc_no",{
//      enumerable : false,
// })

// for(let key in Customer){
//      console.log(key);  // now you see it that only name and city is print b/c it have enumerable true and acc_no have false that's why it not print 
// }
//now what u have to say for this for in loop whichever enumerable is true u have to print its key even if any property came from inherit then if it have enumberable true in its keys then it also be print okk
//this you have to say for in loop i hope you will understand 

//now this inherit means what lets take example 

// const Customer = {
//      name: "sahil",
//      acc_no : 234,
//      city : "delhi"
// }

// let Customer2 = Object.create(Customer);
// Customer2.sir_name = "khan";


// Object.defineProperty(Customer , "acc_no",{
//      enumerable : false,
// })

// for(let key in Customer1){
//      console.log(key);  //print all the keys except acc_nno.
// }

// for(let key in Customer2){
//      console.log(key);  //it print all the keys except acc_no.
// }

// // for(let key in Customer2){
// //      console.log(key);  // it will print all the keys even if it inherit but only keys which enumerable is true in this case every key have enumerable true except the acc_no so that's why the acc_no key not print okk
// // }

// //NOW IF WE PRINT this
// for(let key in Customer){
//      console.log(key);
// }
// //it print name and city only which is right the ques is why it not print its object.prototype keys 
// //SO THE ANSWER IS keys in Object.prototype have enumberable : false ;
// //that's why it not print okay NOW U GOT UR ANSWER OKK
// //CHECK IT 

// console.log(Object.getOwnPropertyDescriptor(Customer, 'name'));
// console.log(Object.getOwnPropertyDescriptor(Object.prototype, 'toString')); //when we print its property status now it show that enumberable is false so that's why these keys are not printing OKAY YA THAT IS PROOF 



//WE CANNOT USE for in loop with the Array


// const arr = [10,20,30,40,50];
// arr.name = "sahil";
// arr.roll= 43;
// console.log(arr);

// for(let key in arr){
//       //  console.log(key); //u know it will store key value pair so that's why only index be store from 0,1
//     //  console.log(key , arr[key]); //like it will print the array easily but now what is the problem because of which we say not use for in loop with array 
     
// }
// //we cannot prefer for in loop with the array
// //use basic loop with the array like

// for(let index = 0 ; index < arr.length ; index++){
//      console.log(arr[index]);
// }

// //now what is the problem with for in loop with array is 
// //u know that array is an object right so we do something like this 
// //like arr.name = "sahil", arr.roll_no = 34, if we print it keys then it print values of its index from 0 to something but in this case it print this string that is name , roll no instead of index numeric values that's why we dont use for in loop with the array we use normal array 

//one more thing -- 
let customer = {
     name:'sahil',
     id : 34,
}

// console.log(Object.getOwnPropertyDescriptor(customer , 'name'));
// Object.defineProperty(customer , 'name' , {
//      enumerable: false,
// })

// console.log(customer);

// Object.defineProperty(Object.prototype , 'toString', {
//      enumerable:true,
// })
// console.log(Object.getOwnPropertyDescriptor(Object.prototype , 'toString'));

// console.log(customer); //for all keys u have to use for in loop

// for(let key in customer){
//      console.log(key); //now u see that it print toString because of enumerable : true ;
// }

// //YOU DONT HAVE TO LEARN ALL THOSE PROPERTIES , YOU HAVE TO UNDERSTAND HOW THINGS WILL WORK AND CONCEPTS HOPE U UNDERSTAND 
// //REMEMBER THE WORKING NOT RATTA
