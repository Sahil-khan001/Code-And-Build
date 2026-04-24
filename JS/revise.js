// chrome have -- v8 engine to understand js and v8 runs js very fast 
// v8 compile js

// c++ compile machine code that is binary 10101

// js code compile(js engine) convert into machine code 1050

// like chrome have v8 engine he understand js but vs code can't 

// like we want to run js outside so for this we use node js in which it uses v8 engine

// node js have v8 engine + some functionality so we install it in our system and use it in vs code

// let a = 34;
// console.log(a);
// a = 65;
// console.log(a);


// const a = 34;
// console.log(a);
// const = 65;
// console.log(a);
//it is not possible in const variable 

//day 2

//primitive data types 
//number , string , boolean , null , undefined , symbol , bigint


//non primtive data types
//object , arrays,  function 

// let str = 'sahil';
// console.log(typeof(str));
// console.log(str);

// at the last its ur choice u can write this termination ; or not

// let statement = false;
// console.log(typeof(statement));


// let account ;
// console.log(account)
// means it still not defined 

// let balance = null
// console.log(balance) 
// //jaan ke value null assign krna eg upi bank example
// console.log(typeof(balance));
// //note : the type of null is OBJECT remember it 
// //THIS IS THE BIGGEST DRAWBACK IN THE JS
// //it itself a datatype still it show itself as a OBJECT
// //IT IS A ERROR we can't update it because it create problem in legacy code of companies

// // let a = 45567895678567856789678;
// let a = 45567895678567856789678n;
// console.log(typeof(a));

//a number is stored in 64 bit but suppose if a this a value represent 68 bit so to store 68 bit into 64 bit is not possible so for this we use bigInt
//so the largest number we stored in a 3 bit is 111
// the smallest is 000

//what about -ve numbers so for this we use
//so for this we use first bit for negative check if bit is 0 then it is +ve 
//if it is 1 then it is -ve
//in real bit we use this technique like for 2 it is 010 means +2
 // so in 3 bit we store value from +3 to -3 we can store value from 2^3 = 8  

 //so in number the largest number we can store in 64 bit is (2^53-1)
 //the smallest we can store is -(2^53-1)

//1st bit is signbit -- 11bit is exponent -- 52bit is mantissa

//NOW move to Non primitive datatypes that is array , object, function

// let arr=[10,20,30 , 'sahil', 'narela'];
// console.log(arr);
// console.log(typeof(arr));

// //OBJECT is defined in the key value pairs;

// let obj = {
//     username : 'sahil',
//     accountno : 45343,
//     balance : 5000
// }

// console.log(obj);
// console.log(typeof(obj));

// //it want whole location togther then we use object also also the data stored in key value pairs
// //we can't use normal array because the value defined in array how it gonna be defined for whom this value is for

//  //functions in JS
// //we can put a function into a variable 

// let fun = function(){
//     console.log("hello coder army");
// }

// // fun();

// console.log(fun());


// //type conversion 

// // let str = "100";
// // let num = Number(str);

// // console.log(typeof(num));
// // console.log(typeof(str));


// // //con boolean to number

// // let x = false;
// // console.log(Number(x));

// // let account = "100xs";
// // console.log(Number(account));
// // //IT GIVE U OUTPUT THAT IS NAN -- not a number 
// // //because u are trying to convert a number + string in to a number it is not possible 

// // let  arrr = null;
// // console.log(Number(arrr));

// // //so null is 0 in the form of number conversion

// // // let x2;
// // // console.log(Number(x2));
// // // //undefined -- null

// // // let numm = 34;
// // // console.log(String(numm));
// // // console.log(typeof(String(numm)));

// //  //OPERATORS -- 

// // console.log(6*3+18/6-9);
// // //divide and multiply left to right
// // //add and sub left to right
//use more and more brackets to simplify the problems 

// // console.log(20%3);
// // //this is modular which find the remainder value in this case the value is 2

// // let sum = 20
// // console.log(sum++);
// // console.log(sum);

// //sum++ , sum -- , ++sum , --sum -- it is pre and post increment and decrement operator
// // sum++ , sum-- -- give old values to the variable then increase it  AND Vice versa in the --sum ++ sum

// // let y = 25;
// // y+= 2;
// // console.log(y);

// //COMPARISION OPERATOR - -
// == , === 
// // let a1 = 34;
// // let a2 = 34;

// // // console.log(a1 === a2);


// // let x = 10;
// // let str = "10";
// // console.log(x ==str);

// // //it means type conversion from string to number  -- it is just a rules
// // //so when a string and a number is compared string convert it into number

// // //then we have === first type check then compare the value 

// // //some rules are defined
// // // null == undefined
// // // null == undefined -- false -- because null type is object and undefined type is undefined but we say that null == undefined because it is a rule 
// // //

// // // null == 0 -- false because null == undefined
// // // null > 0 --false -- 0>0
// // // null < 0  -- fal -- 0<0
// // // null >= 0 -- true -- 0>= 0
// // // null <= 0 --true

// // undefined == 0
// // undefined > 0  -- nan > 0 -- false
// // undefined < 0 
// // undefined >= 0
// // undefined <= 0

// // //for all these it gives false because undefined only equal to null

// // NaN == NaN -- false

// //remember one thing in comparision operator -- we have to do type comparision in every from string to number 

// // let abc1 = 123;
// // let abc2 = "123";
// // let abc3 = 123;

// // console.log(abc1 == abc2 == abc3);
// //true == 123 so it gives false 


// // logical operator 

// // let age = 22;
// // let money = 345;
// // console.log(age >= money && money <= age);
// // console.log(age <= money || money <= age);

// // //bitwise operator --

// // // & , | , ^ , ~ , << , >>

// // console.log(4&5) //this 4 and 5 convert it into binary then this logical operator works and after operation the value is here 
// // console.log(4 << 2); //4 multiply by 2 ki power 2  -- 16
// // console.log(4 >>2);  //4 divide by 2 ki power 2 -- 1

// let a = "234";
// console.log(String(a));


// primtive data types -- immutable -- can't alter the value 
// non primtive datatypes -- mutable -- alter the value

// let a = 23;
// let b = a;
// console.log(b);

// b = 60;
// console.log(a);
// //no change in primtive datatypes -- immutable 


// let obj = {
//     id : 24,
//     username : "sahil"
// }

// let obj2 = obj;

// console.log(obj2);

// obj2.id = 70;

// console.log(obj)
// console.log(obj2)

// //Change in non primitive datatypes -- mutable 

//Primitive datatypes allocate memory in the stack
// non primitive datatypes allocates memory in the heap its address stored in the stack but the value is present in the dynamic/heap memory 


///we know that array , functions , objects takt too much memory  so that's why we put those into heap memory instead of stack because in stack we have limited memory 
// const a = 8;
// a = 23;

// console.log(a);
// //these are primtive that is immutable 

// const  obj = {
//     id : 23,
//     username : "khan"
// }

// console.log(obj);

// obj.id = 1;

// console.log(obj);

// //the non primitve are mutable so we can change in it 
//because the address is same but it is const but the value stored in the heap so it can be change 

//let -- can change  const -- can't change



//Strings in JS == 

// let str = "i am human";
// let str2 = 'i am not a robot';
// let str3 = `i am human but not a robot`;

// console.log(str , str2 , str3);

// let money = 234;

// console.log(`the money right now i have only ${money} available`);

// console.log('i swear my friend i have only' , money , `money available`);


// let s1 = 'sahil';
// let s2 = 'khan';

// console.log(s1+ ` ` +s2);

//for the length is -- 

// console.log(s2.length); //u have to write functions in this way okk  
// console.log(s2.length());  not like this 


// console.log('"hello everyone"');
// console.log("'hello everyone'");

// console.log("hello everyone ! \n My name is Sahil")
// //use of \n for the next line 


// // console.log(`so ladies and gentle man i am \n SAHIL KHAN and i am not a terriorist` )

// // console.log("in this video \\n we just talk about ")
// // // // \ it is used for print \n in the normal comment without any error 
// // // // \ this is called escape character 

// console.log('hey this is \ character'); //this is escape character 

// //for character print in an specific string 
// let special = "sahil khan";
// console.log(special[2]);
// console.log(special.charAt(3));
// console.log(special.charAt(6));

// //to convert uppercase and lowercase
// let name= "Sahil";
// console.log(name.toUpperCase());
// console.log(name.toLowerCase());
// // //REMEMBER AFTER DOING THIS ALL FUNCTIONS THE ORIGINAL like
// console.log(name);

// console.log(name.toUpperCase());

// let special = "Coder";
// console.log(special.indexOf("d"));  //it give index value
// console.log(special.indexOf("Coder")); //it give index value
// console.log(special.indexOf("j")); // if not present then give -1
// console.log(special.lastIndexOf("o")); // it give index value
// console.log(special.includes("Coder"));  // it give true or false 
 
// let zone = "open source";
// console.log(zone.slice(5,9));   //we have to define 1 step ahead to get a cut string 
// console.log(zone.substring(5,9));
// console.log(zone.slice(-3 , -1));  //reverse of string gives the value 
// console.log(zone.substr(5 , 5)); //gives string

// let str = "ahil khan ahil";
// console.log(str.replace("ahil" , "sahil"));
// console.log(str.replaceAll("ahil" , "sahil"));

// let special = "honey , money , sunny , boney";
// console.log(special.split(","));  //based on this comma put it into in the array 

// // //trim the whitespaces 
// let trimm =  "   sahil   khan";
// console.log(trimm.trim()); //it remove the earlier whitespaces 
// //it remove the whitespace that you use earlier and after not the middle one okay

// let str = "     sahil    ";
// console.log(str.trim());

// //NEW WAY TO CREATE A STRING --
// let newstring = new String("HEY THIS IS NEW WAY TO CREATE STRING");
// console.log(newstring);
// console.log(typeof newstring);
//type of heap memory string is OBJECT

//When we usually create the string it is stored in the stack but when we create string using new keyword then it stored in the heap because of Object type 
// i can say whenever we create anything using new it stored allocates the memory in the heap memory but the datatype with the address in the stack but the value is present in the heap memory 

// s2.length
// ` ${} `
// .charAt
// .toUpperCase
// .toLowerCase
// .indexOf
// .includes
// .slice 
// .sub String --similar to slice but didn't accept negative values 
// .replace -- only replace the first value 
// .replaceAll -- replace all the values
// .split  -- convert the string into a array based on a delimeter that is , 

// let str = "honey! money! boney! funny!";
// console.log(str.split('!'));
// console.log(str.split('! '));
// .trim()  it remove the starting and ending space  

//.trimStart() , .trimEnd()

//remember .slice(-2 , 4) ; -- if u want the string from this operation make sure the -value be represent before the +ve number


// let name = "sahil khan";

// console.log(name.substr(0 , 10));

//DAY 9 LEARNING --
//about numbers

//Whenever we use new keyword then it allocates its memory in the heap

// let num = 34;
// let num2 = new Number(365);
// // console.log(typeof num2)
// let num3 = new Number(365);

// let num1 = 365;
// console.log(num1 == num2);
// console.log(num2 == num3);

// let num = 343;
// console.log(num.toFixed(2)); //it means how many number you want after decimal  
// console.log(num.toPrecision(4)); //how many total digits you wnat like if u write 2 then it will be 35 if 4 then it will be 343.0;
// console.log(num.toExponential(3)); //after decimal how many digits you want then the number will be 343.000
// console.log(num.valueOf());
// console.log(num.toString());

// .fixed() -- after deimal how many numbers
// .toPrecision() -- total no of digit 
// .toExponential() -- after decimal how many numbers with expo sign 
// .toString() -- convert it into string 
// .valueOf() -- it just give the value 
 
//NOW MOVE TO THE MATH 
//it is an object also 

//MATH FUNCTIONS -- 
// console.log(Math.E);  -- it represnt eulers value
// console.log(Math.PI);
// console.log(Math.LN10);
// console.log(Math.LN2);

//real use -- 
// console.log(Math.random());
// console.log(Math.random()*10);

// //floor and Ceil 
// let value = 32.1;
// console.log(Math.floor(value));
// console.log(Math.ceil(value));

//random number generates from 0 to 9
// console.log(Math.floor(Math.random()*10));

//random number generate from 1 to 10 then 
// console.log(Math.floor(Math.random()*10)+1);

//random number generater from 1 to 20 then 
// console.log(Math.floor(Math.random()*10) + 11);


// //0-10
// console.log(Math.floor(Math.random()*11));
// //1-11
// console.log(Math.floor(Math.random()*11+1));
// //2-12
// console.log(Math.floor(Math.random()*11+2));

//min= 30 max = 40
// let min = 30 ;
// let max = 40;
// console.log(Math.floor(Math.random()*(max-min + 1)+ min));

// let min = 1;
// let max = 11;
// console.log(Math.floor(Math.random()*(max-min+1) + min));

//for ludo make random no from 1 to 6
// let min = 1 ;
// let max = 6;
// console.log(Math.floor(Math.random()*(max-min+1)+min))

//note : random number is not used for otp and privacy password because it is risky because it work on system clock if an hacker gets system clock access then it may be too risky

// let n = 23.9;
// console.log(Math.floor(n));
// console.log(Math.ceil(n));


// max-min+1 +min
// let min = 1 ;
// let max = 6;

//  console.log(Math.floor(Math.random()*(max-min+1)+min));

//  Arrays in js -- 

// let arr = [1,3,5,"sahil", true];

// console.log(arr.splice(1,3 , "khan" , "honest")); 
// //it means 1st index se total 3 values we want 
// // console.log(arr);

// console.log(arr);

//DATE IN JS -- 

// const date = new Date();
// console.log(date.toDateString());
// console.log(date.toString());
// console.log(date.toISOString());

// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getFullYear());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getMonth());
// console.log(date.getMilliseconds());

// const now = new Date();
// now.setDate(20);
// now.setMinutes(21);
// now.setHours(3);
// now.setFullYear(2023);
// console.log(now);
// console.log(now.toString());


// const d = new Date(2025 , 6 , 15 , 8);
// console.log(d.toString());


// const date1 = new Date();
// const date2 = new Date("2028-07-14");
// const date = date2 - date1;

// const days = Math.floor(date/(1000*60*60*24));
// const hour = Math.floor((date/(1000*60*60))%24);
// const minutes = Math.floor((date/(1000*60))%60);
// const seconds = Math.floor((date/(1000))%60);

// console.log(`OLYMPIC COUNTDOWN TIME IS ${days} Days , ${hour} hours , ${minutes} minutes , ${seconds} seconds remaining`);

// OJBECT IN JS --

// let obj  = {
//     id : 34,
//     name : "sahil",
//     0 : 23,
//     undefined : "trust"
// }


// console.log(obj.id);
// // console.log(obj[name]); 
// //it not working in normal variable 
// console.log(obj["name"]);
// console.log(obj[0]);
// console.log(obj[undefined]);


// const objj = new Object();

// objj.name = "sahil khan";
// objj.id = 1;
// objj.dopamine = "RESET";

// console.log(objj);


// class obbj {

//     constructor(name , salary , role){
//     this.name = name ,
//     this.salary = salary,
//     this.role = role 

//     }
// };

// let op1 = new obbj("sahil" , 50000 , "full stack + gen ai");
// console.log(op1);

// let obj  = {
//     id : 34,
//     name : "sahil",
//     0 : 23,
//     undefined : "trust"
// }

// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));

// let obj1 = {
//     a:1,
//     b:2
// }

// let obj2 = {
//     c:3,
//     d:4
// }


// let merge = Object.assign(obj1 , obj2);
// console.log(merge);
// console.log(obj1);  -- change in obj1 too

// let merge = Object.assign({} , obj1 , obj2);
// console.log(merge);
// console.log(obj1); //no change in obj1 because of {}

// let obj1 = {
//     a:1,
//     b:2
// }

// let obj2 = {
//     c:3,
//     d:4
// }

// let merge = {...obj1 , ...obj2};
// console.log(merge);

//Shallow copy --- 


// let object1 = {

//      a:1,
//      b:2,
// }

// // let object2 = object1;
// // object2.a = 5;
// // console.log(object1); //changes are appeared because both pointing towards same address in the  stack 

// let object2 = structuredClone(object1);
// object2.a = 5;
// console.log(object1); //no changes because both point at diff addrss 

// let arr = [1,3,4];

// let arr2 = arr;
// arr2[1] = 7;
// console.log(arr); -- changes are done both point same address

// let arr2 = structuredClone(arr);
// arr2[1] = 7;
// console.log(arr); //no changes because both point at diff addrss

// let object  = {
//      username : "sahil",
//      role : "Developer"
// }

// // Object.freeze(object);
// Object.seal(object);
// object.username = "khan";
// console.log(object);


//nested object -- 

// const obj1 = {
//      name : "sahil",
//      id : 34,

//      address : {
//           City : "Delhi",
//           Village : "Kureni"
//      }
// }

// let obj2 = Object.assign({} , obj1);

// obj2.address.City = "Banglore";
// obj2.name = "hitesh";
// console.log(obj1.address.City);
// console.log(obj1.name);
//it means nested part can be changed because it have shallow copy 
//but in normal part it can't be changed here it a deep copy 
//IN CASE OF ASSIGN PROPERTY 


//IN CASE OF STRUCTURECLONE -- 
//LIKE if u want not to change in even in nested then use this 
//it make 2 diff address 

//DESTRUCTOR IN JS -- 

//if u want specific key value from an object then u can use destructure 
//3 ways to destructor the object 

// let object  = {
//      username : "sahil",
//      role : "Developer",
//      salary : 50000,
// }

//1st 
// const {username} = object;
// console.log(username);  //like this u can get values

//2nd u can set variable name also 

// const{username : fullName} = object;
// console.log(fullName);

//3rd
//u can put take out some and put some into an object using the rest operator

// const {username , role , ...final} = object;

// console.log(username , role);
// console.log(final);

//THESE ARE THE 3 ways u can Destruture the object 

//ARRAY DESTRUCTURING -- 

//1st method -- 
// let arr = [1,3,5,8];
// const [first , second , third , fourth] = arr;
// console.log(first, second, third , fourth);


//2nd method -- we used the rest operator

// const [first , second , ...third] = arr;

// console.log(first , second);
// console.log(third);
//same like the object destruturing all the remaining values go in the other array 

//Destructure means -- breakdown things 

//how we do the destructuring in the NESTED OBJECTS

// let obj ={
//      name : "sahil",
//      id  : 34,
//      arr : [10,20,30,40],
//      address : {
//           village : "kureni",
//           galino : 3,
//      }
// }

// // if we want to know about village then what we do is we do 2  times destructuring bracket inside bracket
// const {address : {village , galino}} = obj;

// console.log(village , galino);


// -- in object -- we can have even functions , array , string , numbers 
//it include everything 


// const {arr : [first]} = obj;
// console.log(first);


//FUNCTIONS in OBJECT

let object = {
     name : "sahil",
     id : 12,
     greet : function(){
          console.log("namaste Duniya");
     },
     money :  function(){
          return 50
     }
}

object.greet();

console.log(object.money());
//when u use return in the functions in the object then 
//U HAVE TO USE CONSOLE.LOG() to print that value








