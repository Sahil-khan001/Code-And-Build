  // console.log("hello in js");

//DAY 1 LEARNING 
//this is variable and constant 
//dont use var use latest let 

// let a = 5;
// console.log(a);

// let name = "sahil khan";
// console.log(name);

// const age = 18;
// console.log(age);
// // age = 34;
// // console.log(age);

// var b = 55;
// console.log(b);

//DAY 2 LEARNING 
//primitive data store == 
     // let num = number store also float number 
            //   string word character , sentences
            //  boolean , big int , null , undefine , symbol


// let num = 5;
// console.log(num);

// let num1 = 64.3;
// console.log(num1);

// let str = "sahil";
// console.log(str);

// let acc_balance = true;
// console.log(acc_balance);

// let number;
// console.log(number); 

// let arr = null;
// console.log(arr);
// console.log(typeof arr);
// //the type of null is object always remember 

// //you know that number have 64 bit limit but if you have to store bigger then it then you have you add n to the last of given number
// let a = 654356545434545n;
// console.log(a);

// in number how you can say this is largest and the smallest number
//if first number is 1 then it is negative  like 111  1 for -   1 1 for 3 so it is -3
//if first number is 0 then it is positive  like 111  0 for -   1 1 for 3 so it is 3
//for the positive 2^3-1 -1
//for the negative -(2^3-1-1)

//DAY 3 LEARNING IS -- 
//64 bit be present like for negative number== 
//1st is sign bit, next 11 is exponent bit , next 52 is montissa bit 
//in expotent how 1023 come it come by bit like u know we have 11 bit 1st is 0 ohter is 1 then it is +1023
//if we have 1st bit is 0 then -1023

// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MIN_SAFE_INTEGER);
//REMEMBER THESE THINGS -- 
//the biggest integer you can store is 2^53-1
//the smallest integer you can store is -(2^53-1)
// we study about symbol later okk

//DAY 4 LEARNING -- 
//now we have arrays , objects in it


// let arr = ["sahil khan" , 1 , "delhi"];
// console.log(arr)
// console.log( typeof arr)

//Object is divided into key:value pair

// let obj = {
//      user_name :"sahilkhan",
//      roll_n0 : 39,
//      Belong : "Narela"
// }
// console.log(obj);
// console.log( typeof obj);

//function 
//we can put the function in an variable 

// let fun = function(){
//      console.log("this is function store in an variable");
//      return 10;
// }

// fun();
//or
// console.log(fun()); //if you use return in function then u have to use console.log then function in answer

//TYPE OF CONVERSION 

// let number = "10";
// // console.log(typeof number);
// let number2 = Number(number);
// console.log(number2);


// let x = true;
// console.log(x);
// let xx = Number(x);
// console.log(xx);


// let str = "43sdf";
// let str2 = Number(str);
// console.log(str2);
// //this give output of nan which is not a number

// //for null and undefined
// let x1 = null;
// console.log(Number(x1)); //it give 0 

// let x2 = undefined;
// console.log(Number(x2)); //it give Nan

// //convert to string use String 
// let ab = 20;
// console.log(String(ab));
// console.log(typeof String(ab));

// let string = true;
// console.log(String(string));
// console.log(typeof String(string));

// //boolean
// let strm = "this is string";
// console.log(Boolean(strm));

// console.log(Boolean(" "));
// console.log(Boolean(""));

// //operator precedence 
// //div , mul , sub , add from left to right 
// console.log((3+4*(3*5)+234));
//imp. operator modulus operator 20%2  it gives remainder 

//increment and decrement 
//pre increment , pre decrement  ++a , --a; 
//post increment , post decrement a++, a--;

//assignment operator 
// = , += , -= , /= 

// let x3 = 5;
// // x3+= 5;
// // x3-= 5;
// x3/= 5;
// console.log(x3);


//COMPARISON operator 
// < , > , <= ,>= , == , ===
// let a = 5;
// let b = "5";
// console.log(a === b);
// console.log(a <b);
// console.log(a == b);

// null and undefined 
// null == undefined -- true 
// null === undefined   -- false
// console.log(null == undefined);
// console.log(null === undefined);
// //they are equivalent to each ohter not to other okk 
// //null means 0
// console.log(null == 0); //it is always false
// console.log(null < 0); //false
// console.log(null > 0); //false
// console.log(null <= 0); //true
// console.log(null >= 0); //true

// console.log(undefined == 0); //false
// console.log(undefined < 0); //false
// console.log(undefined > 0); //false
// console.log(undefined <= 0); //false
// console.log(undefined >= 0); //false

// let str = "rohit";
// console.log(Number(str)); //the output is NaN


// let a1 = 123;
// let b1 = "123";
// let c1 = 123;
// console.log(a1 == b1 == c1); //output is false  because true != 123 ok

//logical operator 
//&& || !

// let a1 = 54;
// let b1 = 2;
// console.log(a1 > b1 && a1 > b1);
// console.log(a1 == b1 || a1 >b1);
// console.log(!(a1>b1));

// //NEXT WE HAVE BITWISE OPERATOR 
// let a1 = 2;
// let b1 = 3;
// console.log(a1&b1);
// console.log(a1|b1);
// console.log(a1^b1);

// //this is left shift operator 
// console.log(2<<3);  //output is 16 
// //it means 2 multiply by 2 ki power 3 

// //this is right shift operator
// console.log(16>>3); //output is 2
// //it means 16 divide by 2 ki power 3 

//DAY 5 LEARNING  // IN THIS WE TALK ABOUT MEMORY 

// let a = 10 ;
// let b = a;
// b = 43;

// console.log(b);
// console.log(a);

//primitive datatypes are immutable 
//non primitive datatypes are mutable

// let obj1 = {
//      id : 1,
//      username : "sahil",
// }

// console.log(obj1);
// obj1.id = 2;
// obj1.roll_no = 234;
// console.log(obj1);

// let obj2 = obj1;

// obj2.id = 3454;

// console.log(obj1);
// console.log(obj2);
//you have seen when we change in object 2 it also reflect in object one that why non primitive are mutuable on the other hand no changes made in primtive types

//NOW TALK ABOUT MEMORY MANAGEMENT 

//all the primitive datatypes stored in stack 
//all the non primitive datatypes stored in heap

//byte addressable means every byte take address
//in primitive datatypes call by value is executing  and in non primitive call by address happening like when you change in obj 2 address it reflect in obj1 too
//in primitive it drop old location and put the value into new location

//PRIMITIVE DATA TYPES ARE IMMUTABLE -- b/c new space is created and lost the previous one  like call by value 
//NON-PRIMITIVE DATA TYPES ARE MUTABLE -- b/c it change in same address so the original value is change because both object have same address like call by reference

//primitive datatypes
// const num = 10;
// num = 20;
// console.log(num);

//non-primitive datatypes
// const obj = {
//      id: 20,
//      balance : 100,
// }

// obj.id = 34;
// console.log(obj);
//it work in non-primitive datatype but not in primitive datatypes 
//b/c we see that in non-primitive its address store in stack but value in heap so in this we change the value not the address that's it address is const but not the value 

// let obj2 = {
//      id:66,
// }

// obj = obj2;
// console.log(obj); 
//it give error now because now u are changing its address okay and it address is const u know

//DAY 6 LEARNING -- 
//STRINGS IN JS -- 

// let str = "sahil khan";
// console.log(str);

// let str2 = 'the most imp. thing in this world is TRUST';
// console.log(str2);

// let update_price = 63;
// console.log(`the new price for this is : ${update_price}`); //this is better 

// console.log("the new price for this is :", update_price); //this is not an better approach 

// let s1 = "sahil";
// let s2 = "khan";
// console.log(s1+s2);
// console.log(s2.length);

// console.log('"hello everyone"');
// // console.log("'hello everyone'");

// console.log("hello everyone ! \n My name is Sahil")
// //use of \n for the next line 

// console.log("in this video \\nwe just talk about ")
// // \ it is used for print \n in the normal comment without any error 
// // \ this is called escape character 

// //for character print in an specific string 
// let special = "sahil khan";
// console.log(special[2]);
// console.log(special.charAt(3));

// //to convert uppercase and lowercase
// let name= "Sahil";
// console.log(name.toUpperCase());
// console.log(name.toLowerCase());
// //REMEMBER AFTER DOING THIS ALL FUNCTIONS THE ORIGINAL like
// console.log(name);


// let special = "Coder";
// console.log(special.indexOf("d"));
// console.log(special.indexOf("Coder"));
// console.log(special.indexOf("j")); // if not present then give -1
// console.log(special.lastIndexOf("o"));
// console.log(special.includes("coder"));

// let zone = "open source";
// // console.log(zone.slice(0 ,4));
// // console.log(zone.substring(5,7));
// // console.log(zone.slice(-3 , -1));
// console.log(zone.substr(5 , 5));

// let str = "ahil khan ahil";
// // console.log(str.replace("ahil" , "sahil"));
// console.log(str.replaceAll("ahil" , "sahil"));

// let special = "honey , money , sunny , boney";
// console.log(special.split(","));  //based on this comma put it into in the array 

// //trim the whitespaces 
// let trimm =  "   sahil   khan";
// console.log(trimm.trim());
// //it remove the whitespace that you use earlier and after not the middle one okay 

// //NEW WAY TO CREATE A STRING --
// let newstring = new String("HEY THIS IS NEW WAY TO CREATE STRING");
// console.log(newstring);
// console.log(typeof newstring);

//When we usually create the string it is stored in the stack but when we create string using new keyword then it stored in the heap because of Object type 

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

//NOW MOVE TO THE MATH 
//it is an object also 

//MATH FUNCTIONS -- 
// console.log(Math.E);
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

//DAY 10
//ARRAYS IN JS 

//  let arr = [1,2,3, "sahil", true];
//  console.log(arr[0]);
//  console.log(arr[3]);
// console.log(arr.length);
// //different way to do this 
// console.log(arr.at(-2));
//using at -- it take the negative index too  value start from ulta //this is latest
//  console.log(arr.at(-1));
//  console.log(arr.at(-2));


// let newArr = arr;
// console.log(newArr);
// console.log(newArr == arr);
// let newArr = structuredClone(arr); //if you use structureClone then it create the different clone of arr and put it into newArr okay now both the address of both array are not same anymore NOW IT RETURN FALSE 
// console.log(newArr);
// console.log(arr == newArr); //if use structuredclone then it return false

//push in array -- add element in the last
// arr.push("hitesh");
// console.log(arr);

// //pop in array -- remove the last element 
// arr.pop();
// console.log(arr);

// //unshift in an array -- add the first element in an array 
// arr.unshift("lateStart");
// console.log(arr);

// //shift in an array -- remove the first element in an array 
// arr.shift("lateStart");
// console.log(arr);

// //delete element using delete but the space is not deleted the   -- SPACE IS RESERVED  THE NEXT ELEMENT BESIDE HIM WE HAVE TO ACCESS HIM WITH arr[1];  
// console.log(delete(arr[0]));
// console.log(arr);

// //indexOf -- to find the index of any element and if two same number appear then give index of 1st 
// console.log(arr.indexOf("sahil"));

// //includes -- that the given number include in the array or not
// console.log(arr.includes(2));
// console.log(arr);

//slice -- take out the given sub array from the array if we use slice then there is no change in the original array 
// console.log(arr.slice(0 , 4)); 

//splice -- whatever the start and end index we put it take out that sub array and it changes also in the array  01/01/1970 
// console.log(arr);
// console.log(arr.splice(1,3));
// console.log(arr);

//splice include -- (start_element ,total_element , add_element)
// console.log(arr);
// console.log(arr.splice(1,3 , "new" , 212 , 45));
// console.log(arr);

//toString() -- convert to string
//join() -- join all the elements into an string
// console.log(arr.toString());
// console.log(arr.join("*"));


 //concat -- 
//  let arr1 = [1,2,3,5,6];
//  let arr2 = [2,3,9,12];
//  let arr3 = arr1.concat(arr2);
//  console.log(arr3);

//add more array in it then 
//  let arr1 = [1,2,3,5,6];
//  let arr2 = [2,3,9,12];
//  let arr3 = [7,8,4,2];
//  let arr4 = arr1.concat(arr2,arr3);
//  console.log(arr);

// arr1.push(arr2); -- if we use it then it work like 2d array 
// arr1.push(arr2);
// console.log(arr1);
// // console.log(arr1[0]);
// console.log(arr1[4]); //if i print this then it print whole array as you see if you want to access it element then use console.log(arr1[5][0]);
// console.log(arr1[5][1]);

//now we see how 2d array look like -- 
// let arr2d = [[1,2,3] , [4,5,6] , [7,8,9]];
// console.log(arr2d[1]);
// console.log(arr2d[0][2]); //this is 2d access
// //so array inside an array is 2d array 
//array inside the another array is called 3d array it access like arr[0][2][3];


//if you want to convert 2d array into 1d array then use flat -- use infinity inside this for all 2d array , 3d array it can convert it into 1d array
// console.log(arr2d.flat(Infinity));

// let arr3d = [[1,2,3 , [8,9]] , [3,4,5]];
// // console.log(arr3d.flat(Infinity)); //but you have to use infinity inside this
// // console.log(arr3d[0][3][0]);
// console.log(arr3d.flat(Infinity));


// //Array.isArray -- to check that given is a array or not
// let abc = [2,1,4,1];
// console.log(Array.isArray(abc)); //it will give the answer in true or false


// let str = "sahil khan is great boy";
// console.log(Array.isArray(str));
//it will give false because it is a string 

// //never declare array like this means in the heap memory it have problems like

// // let newarr = new Array(2);
// let newarr = new Array(2,4);
// // console.log(newarr.length); 
//IF in an array if one element is present if we try to print length then it show not length it show the value but if in an array we have more than 2 values then it show real length 

// let newwarr = new Array(3);
// console.log(newwarr);

//in normal array it stored in contiguous memory in c++ like in int it take 4byte in contiguous memory 
//like arr1 6004 arr2 6008 arrr3 6012 in this way
//imp to note -- when we make array in c++ we know its size it take 4byte or what that's why we store this in contiguous memory but in js we dont know which element take how much size so that's why we dont't store array in contiguous way in js because we dont change size again and again for js element in an contiguous memory
//that's why it stored as an object and its type as an object

//DAY 11 LEARNING
//DATE IN JS

// const d = new Date();
// console.log(d.toDateString());
// console.log(d.toString());
// console.log(d.toISOString());

// console.log(typeof d);
//type of this is object as you know 

//as you know it give us correct time and date using our system clock which means our own time -- 
//it give answer using the millisecond from the date
//the more the millisecond increase the date time will increase eventually like 
// let take = new Date(1000); 
//this 1000 represent millisecond we calculate the date from fixed 1970-01-01 and add 1000 millisecond then it give the date calculate from this date
// console.log(take); // the ouput is 1970-01-01T00:00:01.000Z



//for current date and time we use
// let curr = new Date();
// console.log(curr);

// //for specific date use 
// console.log(curr.getDate());
// console.log(curr.getDay());
// // sun , mon , tues , wed , thur , fri ,sat 
// // 0  ,  1 ,  2  ,  3   , 4 , 5 , 6

// console.log(curr.getMonth());
// // jan/feb/mar/apr
// // 0/1/2/3

// console.log(curr.getFullYear());
// console.log(curr.getMilliseconds());
// console.log(curr.getMinutes());
// console.log(curr.getTime()); //give full time in milleseconds 
// console.log(curr.getHours());


// const noww = Date.now();
// console.log(noww);

//other format to write a date
// const d = new Date("2022-10-20");
// console.log(d.toDateString());


// year / month / days / hours / seconds / millisecond
//if you give single value then it act as millisecond 

//Number : 0 based start honge
//String : 1 based start honge
// const dd = new Date(2024 , 4 , 28);
// console.log(dd.toString());

//DATE AND TIME COMPONENTS -- 
// const now = new Date();
// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDay());
// console.log(now.getDate());
// console.log(now.getHours());
// console.log(now.getMinutes());
// console.log(now.getSeconds());
// console.log(now.getMilliseconds());

//SETTING DATE COMPONENTS
// const now = new Date();
// now.setDate(20);
// now.setMinutes(21);
// now.setHours(3);
// now.setFullYear(2023);
// console.log(now);
// console.log(now.toString());

// //ANOTHER FORMAT
// //new Date(year , month , day  , hours , minutes , seconds , milleseconds);
// const neww = new Date(2024 , 4);
// console.log(neww.toString());

//DATE CALCULATIONS 
// const date1 = new Date();
// const date2 = new Date("2024-4-2");
// console.log(date2 - date1); //their difference show in millieseconds
// //means the difference between these dates is in millieseconds


//COUNTDOWN TIMER
//FOR UPCOMING OLYMPIC 
// const date1 = new Date();
// const date2 = new Date("2028-07-14");
// const date = date2-date1;
// const days = Math.floor((date/(1000*60*60*24)));
// const hours = Math.floor((date/(1000*60*60))%24);
// // how this 24 will come lets take an example like 80%24 then it answer is 3 days 8 hour left the days its already calculated the real 8 hour is this hope you understand 
// const minute = Math.floor((date/(1000*60))%60);
// const seconds = Math.floor((date/(1000))%60);

// console.log(`THE OLYMPIC COUNTDOWNTIMER IS ${days} days ${hours} hours ${minute} minutes ${seconds} seconds remaining`);

//DAY 12 LEARNING OBJECT PART 1 

//how to create the object 

// let obj = {
//      name: "sahil",
//      Id : 39,
//      account_balance : 100
//      account number : 37583
// }

// console.log(obj["account number"]);
//this is the only way u can access values like this 

//in bakend these key values pairs represent as a string  

// const arr = ["sahil", 24 , "btech"];
// console.log(arr);
//we dont know which value belongs to which parameter like 24 it belong to money , age or what 
//that's why we dont use array instead of object

// console.log(obj);
// console.log(obj.name);

//this name , id , account_balance is strings not variable

// console.log(obj["name"]);  //you have to write in the string in order to get value if u not use string then it act as a variable and give error
// console.log(obj[name]);  //it give error so use string //when you use this u have to use as a string 


// let obj2  = {
//      0:30,
//      name: "sahill",
// }

// console.log(obj2['0']);  //this 0 acts as a string not a number we dont use it directly
// console.log(obj2[0]); //if you dont write semicolon still it get by their own


// const arr = [23,44,6,2]; 
// console.log(arr[3]); //  the array also act like an object like at 0:23 , 1:44 in this way same like object 

// const arr = [23,44,6,2]; 
// for this the internal implementation is look like this --
// const arr = {
//      0 : 23,
//      1 : 44,
//      2 : 6,
//      4 : 2
// }

//implementation of array and object is same 

// let obj = {
//   id : 34,
//   name : "sahil"
// }

// console.log(obj[name]); //it give error

// let other = {
//   undefined: "mohan",
//   null : 334,
// }

// console.log(other.undefined);
// console.log(other[undefined]);
// console.log(other["undefined"]);

// console.log(other.null);
// console.log(other[null]);
// console.log(other["null"]);

//note : i think undefined , null , number work in this format 
// obj[undefined , null , 0] -- and dont give any error if we not using semicolons around it 

// const person  = new Object();
// //OBJECT CREATION 

// //ADD PROPERTY IN THE OBJECT
// person.name = "sahil";
// person.id = 23;
// person.gender = "male";
// console.log(person);

// // //DELETE IN THE OBJECT
// delete person.id;
// console.log(person);

// // //MODIFY OR UPDATE IN THE OBJECT
// person.name = "mohit";
// console.log(person);

//HOW TO CREATE OBJECT 
// 1st method
// let objj ={
//      name:"verma",
// }

//2nd method is this 
// let objj = new Object();
// objj.name = "sahil";
// console.log(objj);

// //3rd method is this 
// class People {
//      constructor(name , age , gender){
//            this.name = name;
//            this.age = age;
//            this.gender = gender;
//      }
// or to get better understanding   constructor is used to initialise value 
//      constructor(na , ag , gen){  -- this na ag gen represent parameter 
//            this.name = na;  -- this . name represent per1 object with its properties 
//            this.age = ag;
//            this.gender = gen;
//      }
// }
// let per1 = new People("sahil", 23 , "male"); //because of this new keyword we get memory in heap
// let per2 = new People("hitesh", 22 , "male"); //you dont need to write code for per 2 again so thats why class method is used
// console.log(per1 , per2);


//till now we have seen object methods 1st , 2nd , 3rd

//object Access method 

// const bob = new Object();
// bob.name = "sahil";
// bob.age = 24;
// console.log(bob);

// class bobo {
//    constructor(breed , age){
//      this.breed = breed;
//      this.age = age;
//    }
// }

// let dog1 = new bobo("devil" , 6);
// console.log(dog1);

//NOW COMMON METHODS FOR OBJECTS
// Object.keys();  -- print only  keys
//Object.values();  -- print only value 
//Object.entries();  -- print both key value pair
//Object.assign({},); -- combine both object and put it into the other object we use this {} because the first value represent the target if we dont put {} at first place then in obj1 the changes appeared
//Object.freeze(); --  no modification
//Object.seal(); --prevent add and removing but modification in existing data


//let use this methods
// let obbj1 = {
//      name: "sahil",
//      age : 23,
// }

// let obbj2 = {
//      name : "khan",
//      age : 24,
// }

// const finekeys = Object.keys(obbj1);   //it print the left key present in object
// const finevalues = Object.values(obbj1); //it print the right value present in the object
// console.log(finekeys);
// console.log(finevalues);

// const arr = Object.entries(obbj1); //it print the both key value present in object
// console.log(arr);

// let objj1 = {
//      a:1,
//      b:2,
// }

// let objj2 = {
//      c:1,
//      d:2
// }

// const merge = Object.assign({},objj1 , objj2); //you have to use this empty bracket so that in the main object there is not changes can be made so it is compulsory to use this 
//it show like {target , source1 , source2}
// console.log(merge); //it show both key value pairs of both object
// console.log(objj1); //if u not use {} empty bracket then in objj1 the changes appeared of merge variable 


//shallow copy or SPREAD OPERATOR to the values inside in the object

//shallow copy is same like create two object with same address so if we do one change in an object then it reflect in another
// let objt1 = {
//      name: "badboy",
//      roll: 23,
// }

//  let objt2 = {
//  a:1,
//  b:2
// }


// let nnnew = {...objt1 , ...objt2};
// console.log(nnnew);

// let numm = new Number(30);
// console.log(typeof numm); //the number also act like an Object  

// let str = new String("sahilkhan");
// console.log(typeof str); //the string also act like an Object

//shallow copy -- both pointing at same address -- changing in one reflect changes in other object too
//deep copy -- both pointing at diff address -- we use structuredClone() to make diff object with diff address

//LETS TALK ABOUT SPREAD OPERATOR -- 

//it means to open the object so that we can put it into an single object  like we used to to in assign(); properties;
//like it convert { {a: 1, b: 2} , { c: 3, d: 4} , {e: 5, f: 6} } -- into this { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 } basically it spread the all objects into the single one

let obj1 = {
  a:1,
  b:2
}

let obj2 = {
  c:3,
  d:4
}

let obj3 = {
  e:5,
  f:6
}

let finalobj = {...obj1 , ...obj2 , ...obj3};
console.log(finalobj);

//DAY  12 LEARNING 
//OBJECT PART 2 

//Shallow copy and deep copy ===

// //shallow copy is -- it create same copy and point at same 
// let object1 = {
//      a:1,
//      b:2,
// }

// let object2 = object1;

// object2.a = 5;
// console.log(object1);

// //deep copy 

// //Deep copy is -- it create different copy 
// let object3 = structuredClone(object1);
// console.log(object3);
// console.log(object1 == object3); //this is false because both have different address okk


// object3.a = 8;
// console.log(object3 , object1); //check in this way also 
 
//NESTED OBJECTS -- 

// const user = {
//      name:"sahil",
//      id :39,
     
//      address:{
//       pincode : 110040,
//       city:"Delhi",
//      }
// } 
// //  console.log(user.address.pincode);

// let user2 = Object.assign({} , user);
// // // console.log(user2);

// user2.address.pincode = 342411;
// user2.name = "maut";
// console.log(user); // it means that the change is happening but only in the nested part not in the main part in user only the nested thing is changed not in the main variable like name 
//means for the nested part the copy will be shallow okk but for the other part the copy will be deep copy so no changes were made because it have diff addresses.


//Objects.freeze();   Prevent any modification to an object
//Objects.seal(); prevent adding or removing elements but allow modification in existing part

//DESTRUCTING OF AN OBJECT  //OBJECT DESTRUCTING 

// let obj = {
//      name : "sahil",
//      money : 430,
//      balance : 20,
//      age : 23,
//      village : "kureni",
// }
 
// const {name , money , balance} = obj; //1st way of Destructuring 
// // const{name : full_name , money : amount , balance : bank} = obj; //2nd way of Destructuring  
// // console.log(full_name , amount , bank);
// // console.log(name , money , balance);

// const {name , money , ...object} = obj; //3rd way of Destruturing  //if u want to store remaining variable //apart from given then u can use rest operator it is similar like spread operator but spread operator is to //spread the normal object when printing it but the rest operator store the remaining values in the given //object ...
// console.log(name , money , object);
// console.log(object);

//REST OPERATOR -- store the remaining value 
//SPREAD OPERATOR -- it is used to spread the normal object

//LETS TALK ABOUT ARRAY DESTRUCTURING 

// const arr = [1,3,5,6,9];
// const[first , second , ,third] = arr;  //1st way of destruturing in an array 
// console.log(first , second);
// console.log(first , second , third)
// const[first , second , ...third] = arr; //3rdnd way of destruturing in an array 
// console.log(first , second , third);

// let obj = {
//      name : "sahil",
//      id : 23,
//      arr:[1,2,3,4],
//      address:{
//           pincode:12334,
//           city : "delhi",
//      }
// };

// // const {name} = obj;
// // console.log(name); //u can easily print

// // // const {address : adds} = obj; //u know this from obj we get address then put it into adds
// // // const {address:{pincode}} = obj;
// // // console.log(pincode); //if u want to print this value then use in this way
// // const {address:{pincode , city}} = obj;
// // console.log(pincode , city); 
 
// const {arr:[first]} = obj;
// console.log(first);


//FUNCTION IN OBJECT 
// let obj = {
//      name : "sahil",
//      id : 23,
//      arr:[1,2,3,4],
//      greet :function(){
//          console.log("hello world");
//      }
// };

// obj.greet();


// const arr = [2,3,5,6,8];
// arr.push_back(54); //how this push_back function come yeah it is built in function but it is where is come from 
// console.log(arr.__proto__); //if you write this then you know which property is into this like all you can check but you have to write all this in inpect mode in browser to see it


//arr.__proto__ //it means it can inherit the property of ohters into it 

//eg is -- 

// let user1 = {
// name: 'sahil',
// id : 3,
// }

// let user2 ={
//      amount:420,
//      balance : 2,
// }


// console.log(user2.name);
// user2.__proto__ = user1; //now i just copy it prototype in user 2 from user1 okk now it work now i can use its function properties
// console.log(user2.name);


//Prototype -- like we have an object which name is Array.prototype  and when we make an array and ask for array.__proto__ then it give all functions that are in array.prototype  like it show it  prototype from where it inherit it property right 

//same like array.prototype we have object prototype which have diff function to use so this is level to okk so like if we have an array like arr = [23,2,5,6,7]; then to reach for object prototype we have to write arr.__proto__.__proto__; to access object functions okk 

//so like if we want to use toString() then we have to first arr find in array prototype then go in object prototype okk 
//so arr inherit property from array prototype and array prototype inherit property from object prototype and object prototype is last beyond that null will be print 

//when u make an array it automatically attach it array prototype and same as with Object okk

// //THIS IS CALLED PROTOTYPE CHAINING AND THAT'S WHY ARRAY IS CALLED OBJECT B/C IT INHERIT PROPERTY FROM OBJECT RIGHT 

// let user = [10,20,30,40];
// console.log(user.__proto__ == Array.prototype);   //true
// console.log(user.__proto__.__proto__ == Object.prototype); //true
// console.log(user.__proto__.__proto__.__proto__ == null); //true

// //one thing to remember is u can access properties from down to above like array can take push ,pop or even to string which is in object but the object cannot access properties of array prototype like in object we not use any push pop as you know okk

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
// let arr02 = [...arr1];

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

// function fun({name , id , roll }){
//  console.log(name,id,roll); 
// }

// fun(obj);

//PASS BY VALUE  -- if u change anthing in an object it change in real object if not change then it is pass by value basically a copy will be pass
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


// obj02.__proto__ = obj01; //in this way we can change other prototype too but this is not right way its too riskty ur code may explode u can use like this 
// obj02 = Object.create(obj01);


// console.log(obj02.__proto__);

//DAY 14 IF,ELSE,LOOP IN JS or ADVANCE LOOP

// let obj = {
//      name : "sahil",
//      age : 24,
//      gender : "male",
// };

// // for(let key in obj){
// //      console.log(key, obj[key]);
// // }

// //but for access it keys , values we do another way also 
// // console.log(Object.keys(obj));

// //now we see what the difference between the both 

// const obj2 = Object.create(obj);
// obj2.money = 555;
// obj2.village = 'kureni';

// // console.log(obj2); //it can print only obj2 property okk but if u want to access obj2 value then u can do that also like 
// // console.log(obj2.name); 
// console.log(Object.keys(obj2));  //it can print keys of obj 2 only not the obj ones so it can inherit property from obj but not print it so to solve this we use for in loop 
// //or 
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

// // console.log(obj); //if we print this that it can be name : sahil

// //but if we write false in writable it we not modify it like 
// // obj.name = "mohit";

// // console.log(obj);

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
// Customer2.sir_name = "khan",


// Object.defineProperty(Customer , "acc_no",{
//      enumerable : false,
// })

// // for(let key in Customer){
// //      console.log(key);  
// // }

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

// // console.log(Object.getOwnPropertyDescriptor(Customer, 'name'));
// console.log(Object.getOwnPropertyDescriptor(Object.prototype, 'toString')); //when we print its property status now it show that enumberable is false so that's why these keys are not printing OKAY YA THAT IS PROOF 



//WE CANNOT USE for in loop with the Array


// const arr = [10,20,30,40,50];
// arr.name = "sahil";
// arr.roll= 43;

// for(let key in arr){
//        console.log(key); //u know it will store key value pair so that's why only index be store from 0,1
//      console.log(key , arr[key]); //like it will print the array easily but now what is the problem because of which we say not use for in loop with array 
     
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
// let customer = {
//      name:'sahil',
//      id : 34,
// }

// // console.log(Object.getOwnPropertyDescriptor(customer , 'name'));
// // Object.defineProperty(customer , 'name' , {
// //      enumerable: false,
// // })

// // console.log(customer);

// Object.defineProperty(Object.prototype , 'toString', {
//      enumerable:true,
// })
// console.log(Object.getOwnPropertyDescriptor(Object.prototype , 'toString'));

// // console.log(customer); //for all keys u have to use for in loop

// for(let key in customer){
//      console.log(key); //now u see that it print toString because of enumerable : true ;
// }

// //YOU DONT HAVE TO LEARN ALL THOSE PROPERTIES , YOU HAVE TO UNDERSTAND HOW THINGS WILL WORK AND CONCEPTS HOPE U UNDERSTAND 
// //REMEMBER THE WORKING NOT RATTA

//DAY 15 LEARNING IN JS

//NOTE : when u make writable false so that if we can change anything it cannot change so many people say it is use to escape from hacking but its not actually it is use to escape from accidental changes okk

//NOW MOVE TO THE FOR OF LOOP 
//we use for of loop to access on the values 

// const arr = [10,39,53,63];
// for(let value of arr){
//      console.log(value);
// }

// //u can use on string as well

// const str = "sahil is goat";
// for(let value of str){
//      console.log(value); //it print value one by one 
// }

// //Dont use for of loop in Object

//  let object = {
//      name: "sahil",
//      village : "kureni",
//  }

// // for(let value of object){
// //      console.log(value); //it give error that we cannot iterate on object that 's why we dont use for of loop in object
// // }

// //but if u want to iterate it then use object.values(obj) eg

// for(let value of Object.values(object)){
//      console.log(value);
// }

// for(let value of Object.keys(object)){
//      console.log(value , object[value]);//  u can print like this 
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
// //arr.forEach(require an call_back)
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
// // console.log(arr[index]);
// arr[index] = num *2;

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

// // const result = arr1.map((num)=>{
// //    return num*num;
// // });

// const result = arr1.map((num , index)=> num*index);
// console.log(result); //u can see in this we just modify the value 

//IMP. TO REMEMBER -- 
//for each not stored in any variable 
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

//DAY 16 LEARNING IN JS 

//lets talk about Reduce 
//format be like --
 // const result = arr.reduce(callback function , initialization);

//  const arr = [10,20,30,40];
//  const result = arr.reduce((acc,curr)=>{  //reduce function take arrow function in which one value is accumulator , second is current value  , curr take value one by one and we have to define accumulator also with any value as in this we initialize it with 0 as u see 
//    console.log(acc, curr);
//    acc = acc + curr;
//    return acc;
//  } ,0); 

//   console.log(result);

  //in short way we write this as 
//   const result = arr.reduce((acc , curr)=> acc+curr ,0); //u can also take index , arr in it (acc , curr , index , arr)
//   console.log(result);

  //real world eg is u can sum it easily and other is 

  //eg - 
//   let arrstr = ["orange", "apple" , "orange", "apple" , "grapes" , "orange", "apple" , "grapes"];
// //find how many times a specific fruit appear
// //result should be print in a object form

// const result = arrstr.reduce((acc,curr)=>{
//     if(acc.hasOwnProperty(curr))              //it check the str one by one if not exist it make it and give it value 1 acc to it
//       acc[curr]++;
//    else
//       acc[curr]=1;

//    return acc;
// }, {});  //in this the acc is initialize with object that is {}, not 0

// console.log(result);

//so the reduce it make the value reduce and make it into a single or final value

//or in short way is 
//   let arrstr = ["orange", "apple" , "orange", "apple" , "grapes" , "orange", "apple" , "grapes"];
// const result = arrstr.reduce((acc,curr)=>{
//     acc.hasOwnProperty(curr)? acc[curr]++:  acc[curr]=1;

//    return acc;
// }, {});
// console.log(result);

//what is hasOwnProperty -- means that property is present or not 

// let obj ={
//    name : "sahil",
//    id : 34,
// };

// console.log(obj.hasOwnProperty("name")); //it give true or false value 

//eg2 

// let obj ={
//    name : "sahil",
//    id : 34,
//    orange : 1,
// };

// let curr = "orange";

// if(obj.hasOwnProperty(curr))
//    obj[curr]++;
//or all three syntax work same
// obj.orange = 1;
// obj["orange"] = 1;
// obj[curr]++;
//all three works same 

// console.log(obj);  //it print the orange value 2 //so in this way the hasOwnProperty work
// ============================================================================

//Next is Set -- it is a collection of unique values it allows u to store values without duplicates which makes it different from arrays , the values in a set can be of any type such as primitive (number , string etc);

//think same like array but have unique elements 
//////

// //1st way to make set
// let set1 = new Set([1,2,3,4,4,5]);
// console.log(set1);

// //2nd way to make set2
// let set2 = new Set([]);
// set2.add(23);
// set2.add(7);
// set2.add(9);
// set2.add(5);

// console.log(set2);

// set2.delete(23);
// console.log(set2);
// console.log(set2.size);

//  //has property means things u have or not 
// const userid = new Set(["sahil_94" , "sahil_dev", "sahil_op"]);
// let newuser = "sahil_dev";
// console.log(userid.has(newuser)); //if true it means you cannot use this id this is const so this is real world life example

// //userid.clear(); -- to clear full set 
 

