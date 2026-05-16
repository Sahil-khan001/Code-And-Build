"use strict";
//NOTE : WHATEVER U WRITE IN JS u can write in TS too 
Object.defineProperty(exports, "__esModule", { value: true });
//to run ts file write tsc file name  then equivalent to it it create js file 
// let a:number = 10;
// let b:number = 20;
// a = "sahil"; 
//now it give error that not to assign vlue of diff datatype 
//but it tell u about this error but still it convert it into JS FILE 
//it tell u the error but it tell also that  it is valid in JS so it convert in JS also 
//if u write valid js  code then u can't stop me to convert it into the JS 
// // let name:string = "sahil";
// // let isExist : boolean = true;
// // isExist = false;
// // let money:null = null;
// // // money = "mohan"; //it give error because of diff datatype value 
// //for automating converstion from tsc to JS use 
// //tsc --watch 
// //for exit = Ctrl + c
// // let user:string = "hitesh";
// // let age:number = 34;
// let name = 'sahil';
// // name = 34;  //this line gives error prev we assigned stirng now number 
// let money;  //this also represent any 
// money = "two crore";
// money = 34;
// let student:any;
// student = "sahil";
// student = 35;
// student = true;
// console.log(student.toUpperCase()); //we can do this only with any
// //u can do any opertion on variable with any
// let hub:unknown;
// hub = 420;
// hub = false;
// hub = "the movie hub";
// //any and unknown are same we can give any value also unknown is safer then any 
// // console.log(hub.toUpperCase());  //not with unknown
// //in unknown variable u can't do any operation on it 
// //in unknown we have to check its type first because if later change then it create problems 
// // if(typeof hub === 'string')
// //     console.log(hub.toUpperCase());
// // //now it dont give any error
// // if(typeof hub === 'number')
// //     console.log(hub.toFixed(2));
// //when u use any it behave like js it dont give any error 
// //NON PRIMITIVE DATATYPES -- 
// // let arr:number[] = [10,20,30];
// //we have to defined which type + [] to defined it is array 
// //mix type array be lik e
// // let arr2 = [1 , "sahil" , 2 , "hitesh", 3 , "sharique"];
// //it will automatical identify which type of data it is 
// //if we write its datatype then it looks be like 
// // let arr2:(string | number)[] = [1 , "sahil" , 2 , "hitesh", 3 , "sharique"];
// //we have tuple also it is same as array but have FIXED SIZE 
// // let tuple:[string , number] = ["sahil" , 883];
// //lets make object in TS -- 
// // let object = {
// //     user : "sahil" ,
// //     age : 23 , 
// //     rollno : 34,
// // }
// //in ts how it looks like -- 
// let object:{user: string , age : number , rollno:number} = {
//     user : "sahil" ,
//     age : 23 , 
//     rollno : 34,
// }
//  //so in this way we can define the object in typescript 
//  let person :{name:string , age : number , balance : number };
//  person = {
//     name : "sahil",
//     age : 22,
//     balance : 5000,
//  }
//  //in this way too also we can define 
//  console.log("this is object");
//YOU CAN ALSO FIRST DEFINE TYPE LIKE -- 
//basically we have Type and Interface 
//  type customer = {
//     name : string,
//     dept : string,
//  }
//  let c1 : customer = {
//     name : "ankit" ,
//     dept : "cse",
//  }
//  we have Interface -- use interface because it merge diff interface together 
//the syntax is change also of interface 
// interface admin {
//     username : string ,
//     dept : string,
// }
// interface admin {
//     age : number
// }
// let user1 : admin = {
//    username : "hitesh",
//    dept : "cse",
//    age  : 23,
// }
//NOTE : U CAN MAKE MULTIPLE INTERFACE AT A TIME
//but u can't make multiple TYPE 
//translation and compilation is fast in interface compare to type 
//Interface  -- we talk about Object 
//type -- we also use in primtitive datatypes 
//in transpiler the interface is fast in compilation com to type
//there is a difference of syntax on both  equal sign while initializing 
//optional keyword  -- ? this we can use in object -- now user have choice of write or not the key value pair in which optional keyword is define
// interface Person {
//     username : string,
//     age : number ,
//     gender : string ,
//     aadhar ? : number,
// }
// let user1 : Person = {
//     username : "kartik",
//     age : 23,
//     gender : "male",
// }
//? it optional it means u have optional either put value or not 
//we have -- Utility types of Objects 
// Partial<Person>
// Required<Person>
// Readonly<Person>
//when we use Partial then u can mention anyone or no one it ur choice
// interface Person {
//     username : string,
//     age : number ,
//     gender : string ,
//     aadhar ? : number,
// }
// //normal  and there is optional keyword it ur choice u can use it or not 
// let obj1 : Person = {
//     username : "sahil",
//     age : 22,
//     gender : "male",
// }
// //Patial -- u can mention all property or not 
// // let obj2 : Partial<Person> = {
// //     username : "sahil",
// //     age : 22,
// // }
// //Required -- u must have to  mention all property even if it with optional keyword too   
// // let obj2 : Required<Person> = {
// //     username : "sahil",
// //     age : 22,
// //     gender: "male",
// //     aadhar : 3434,
// // }
// //Readonly -- we can just read the properties no permission to edit it  
// // let obj2 : Readonly<Person> = {
// //     username : "sahil",
// //     age : 22,
// //     gender: "male",
// //     aadhar : 3434,
// // }
// // obj2.username = "hitesh" it will not work because of readonly utitly 
// //array of objects 
// // interface people {
// //     name : string,
// //     age : number,
// // };
// // let arr:people[] = [{name : "rohit" , age : 20} , {name : "hitesh" , age : 33}];
// //in this way u can defined array of objects 
// // or
// //u can write in this way too 
// let arr2 :[{name : string , rollno : number}] = [{name : "sahil", rollno : 23}];
// //lets talk about functions in JS 
// // function print(value : number){
// //     console.log(value);
// // }
// //this value parameter represent any but we make sure we dont use it 
// //we have to assigned a datatype to it 
// //for the return type we use in this way
// // function print(value : number) : number{
// //     console.log(value);
// //     return (value + 5);
// // }
// // //this 2nd number represent return type datatype 
// // console.log(print(5));
// function onlyprint(msg:string , val:number) : void{
//     console.log(msg , val);
// }
// onlyprint("cfbr" , 112);
// //we know when we not return anything we use void 
// //note suppose we have multiple interface then which name we should use -- 
// //we can use both by writing like this -- (first | second)[]
// interface people {
//     name : string,
//     age : number,
// };
// interface manager {
//     salary : number,
// };
// let arr:(people|manager)[] = [{name : "rohit" , age : 20} , {name : "hitesh" , age : 33} , {salary : 50000}];
//in this way we can use both interface we have to mention both the name 
//lets talk about Optional Parameters -- 
//first talk about default parameters -- 
//DEFAULT PARAMETERS -- 
// function option(msg : string = "nope"){
//     console.log(msg);
// }
// option();//if we send nothing in arguments then it print assigned value in the parameter 
// option("hello coder army");
//OPTIONAL PARAMETERS -- 
// function option(msg? : string){
//     console.log(msg  || "open source");
// }
// option(); //if we send empty arguments then it print opensoure it not print undefined because we are using the optinal parameter
// option("back to focus");  //if we pass then it print the pass value it is optional 
//Arrrow function -- 
//  let result =  (a:number,b:number) => {
//     return (a+b);
// }
// console.log(result(3,3));
//           OR we can write in this way also 
//  let result =  (a:number,b:number) => (a+b);
// console.log(result(3,3));
//  function greet():void{
//     console.log("hello namaste");
// }
// function call(val:Function):void{
//     console.log("hey my name is call function");
//     val();
// }
// call(greet);
//call back be like in this way also -- 
// type chill = (amount:number)=>void;
// function placeOrder(order:number , callback:chill): void {
//     const amount = order + 10 ; 
//     callback(amount);
// }
// placeOrder(4 , (amount:number)=> {
//     console.log(amount);
// })
//IN CALL BACK -- we have to write it datatype as well as return type also like void , number 
//REST OPERATOR IN TYPESCRIPT 
// function value(a:number, ...b:number[]){
//    console.log(a,b);
// }
// value(3,5,3,6,6,6);
//SUM 
// function sum(...arr:number[]):void{
//     let result = 0;
//     arr.forEach((value:number) =>{
//         result += value;
//     })
//     console.log(result);
// }
// sum(5,4,5,3,2);
//make sure use of const , let 
//if we use const in result then the result can't be update 
//NOW THIS IS OVER NOW MOVE TO CLASSES IN TS 
//# sourceMappingURL=app.js.map