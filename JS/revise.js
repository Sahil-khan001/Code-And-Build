
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

//primitive datatypes are immutable -- we know these datatypes stored in stack -- we know here it work on mechanism that is call by value
//non primitive datatypes are mutable  -- call by reference

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
// // console.log(zone.substring(5,7)); //can't store negative values
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

// let obj1 = {
//   a:1,
//   b:2
// }

// let obj2 = {
//   c:3,
//   d:4
// }

// let obj3 = {
//   e:5,
//   f:6
// }

// let finalobj = {...obj1 , ...obj2 , ...obj3};
// console.log(finalobj);

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

//THIS IS CALLED PROTOTYPE CHAINING --   

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

//DAY 14 IF,ELSE,LOOP IN JS or ADVANCE LOOP

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
 // const result = arr.reduce(callback function , initialization of accumulator );

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
  
// //eg -  
//  let arrstr = ["orange", "apple" , "orange", "apple" , "grapes" , "orange", "apple" , "grapes"];
// // //find how many times a specific fruit appear
// // //result should be print in a object form

// const result = arrstr.reduce((acc,curr)=>{
//     if(acc.hasOwnProperty(curr)) //it check the str one by one if not exist it make it and give it    value 1 acc to it
//       acc[curr]++;
//    else
//       acc[curr]=1;
//    return acc
// } , {}); //in this the acc is initialize with object that is {}, not 0
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
 
// ================================================================================================================================================================================================================================================================================================================================================================================================================

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
//Destructure means -- breakdown things  

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
// console.log(final);  // it print in the 

//THESE ARE THE 3 ways u can Destruture the object 

//ARRAY DESTRUCTURING -- 
//in array destructuring we can't change variable name 

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

//if we have an array inside an object then ...

// const {arr : [first]} = obj;
// console.log(first);


//FUNCTIONS in OBJECT

// let object = {
//      name : "sahil",
//      id : 12,
//      greet : function(){
//           console.log("namaste Duniya");
//      },
//      money :  function(){
//           return 50
//      }
// }

// object.greet();

// console.log(object.money());
// //when u use return in the functions in the object then 
// //U HAVE TO USE CONSOLE.LOG() to print that value

// // PROTOTYPE CHAINING -- IN JS INTERVIEW -- 


// let user1 = {
//      username : "sahil",
//      id : 83,
// }

// let user2 = {
//      salary : "34k",
//      role : "sde"
// }

// user2.__proto__ = user1; 
//it means make user 1 proto of user 2 now user 2 have inherit property from user 1 + own property
//  //basically user 2 inherit the property of user1
// console.log(user2.username);

// arr.__proto__  > Array.prototype > Object.prototype

// Array.prototype.__proto__  == Object.prototype
// arr.__proto__.__proto__ == Object.prototype
// arr.__proto__.__proto__.__proto__ == null

// let arr = [2,3,5,6,7];
// console.log(arr.__proto__ == Array.prototype);
// console.log(arr.__proto__.__proto__   == Object.prototype);
// console.log(arr.__proto__.__proto__.__proto__  ==  null);

//when u create an array/function its prototype attach to it 
//same as this we have function prototype and its prototype is Object prototype
// obj1 -- this is object 

//this is Object.Prototype  -- it real name is Object.prototype

//this is Object.__proto__ -- through this syntax we find properties of object prototype


//basically if we want to store a number then we do %10 and we store at that location like 1 ,3,4,5,6 suppose all have same location so we make a chaining after chaining then so we do all this using HASHING 
//basically we find the location at this location which key belongs to which value


//NOW TALK ABOUT FUNCTIONS --- 

//  function greet(){
//      console.log("hello duniya");
//  }

//  greet();

//  function add(num1 , num2){  //this is parameter 
//      return num1 + num2;
//  }

//  let result = add(3,6); //this is argument 
//  console.log(result);


//  let build = function(){
//      // console.log("the most imp. factor is TRUST");
// return "time is less";
// }

//  build();

//  console.log(build());

// let multi = (num1 , num2)=>{
//      return num1*num2;
// }

// //more shortcut be like 
// let multi = (num1 , num2)=> num1*num2; 

// //we use bracket when we have more than 1 parameter if not then we use
//when u have single parameter than u have
// console.log(multi(3,5));
// let cube = num => num*num*num;
// console.log(cube(5));

// const sum = (num1 , num2)=> num1 + num2; 

//but if we have more and more parameter and argument then we use REST operator

// let number = function(...num){
//      console.log(num);
// }

// number(3,3,5,6);

//you can send infinite arguments in this rest operator can store all the values

// let arr1 = [34,5,2,6];
// let arr2 = [...arr1];

// console.log(arr2);

// let obj = {
//      name : "sahil",
//      salary : 345
// }


// function info(obj){
//      console.log(obj.name , obj.salary);
// }

// or using destructuring code be like 

// function info({name , salary}){   //using destruturing be like 
//      console.log(name , salary); // when u want just some values  from an object then destructure is used
// }


// info(obj);


// SPREAD OPERATOR -- take out values from an array -- used in obj , function 
// REST OPERATOR -- collect or store values  -- used in function call 


// INHERIT PROPERTY INSIDE OBJECT THEN U CAN USE THIS -- 
// let user1 = {
//      a:1,
//      b:2
// }

// let user2 = {
//      c : 3, 
//      d : 4
// }

// user2.__proto__ = user1;
// actually using this is not a right approach instaead of this use --

// user2 = Object.create(user1);  //use this to inherit property form others

// console.log(user2.b);

// LOOPS IN JS -- 

// let obj = {
//      name : "sahil",
//      id  : 34,
//      role : "solana developer"
// }


// for(let key in obj){
//      console.log(key , obj[key]); //to get the value of key we use obj[key]
// }

// for(let anyname in obj){
//      console.log(anyname , obj[anyname]); //to get the value of key we use obj[key]
// }
//if we use this it represent in an object

// or 2nd way to get keys and values 

// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj)); 
//if we use this it represent in array 
// let obj = {
//      name : "sahil",
//      id  : 34,
//      role : "solana developer"
// }



//  let obj2 = Object.create(obj);
//      obj2.money = 50000;
//      obj2.village = "kureni";
 

//      console.log(obj2);


//      for(let key in obj2){
//           console.log(key, obj2[key]);
//      }

//inherit property then we use 
// let obj1 = {};
// ob2 = Object.create(obj);
// or// bad approach is 
// ob2.__proto__ = obj1;


// let obj  = new Object();
// obj.name = "sahil";
// console.log(obj);
// console.log(typeof obj);


// let obj1 = {
//      name : "sahil",
//      id  : 34,
//      role : "solana developer"
// }

// let obj2 = Object.create(obj1);
// obj2.village = "kureni";

// //if we  want keys then we do is 

// // 1st method -- 
// console.log(Object.keys(obj2));  //it only print village but if u want full then use for in loop

// // 2nd method 
// for(let key in obj2){
//      console.log(key);  //it  print all 
// }

// // console.log(Object.getOwnPropertyDescriptor(obj1 , 'name'));

// // Object.defineProperty(obj1 , 'name' ,{
//      //     writable : false,
//      // })
     
//      // obj1.name  = "khan";
     
//      // console.log(obj1.name);
     
//      console.log(Object.getOwnPropertyDescriptor(Object.prototype , 'toString'));
     
//      Object.defineProperty(Object.prototype , 'toString', {
//           enumerable : true,
//      })
     
     
//      for(let key in obj2){
//           console.log(key);  //now it print all as well as to string also
//      }
     

// const arr = [10,20,30,40,50];
// arr.name = "sahil";
// arr.roll= 43;
// console.log(arr);



// for(let key in arr){
//      console.log(key);  //it print name , roll that is a problem it have to only print indexing that is keys not the string that why we don't use this in for in 
// }

//FOR OF LOOP -- 



//we use for of loop for the array , string not for the object but if u want to use this in the object as well then u can do one thing that is 

// let obj = {
//      name : "sahil",
//      Passion : "coding",
// }

// for(let value of obj){
//      console.log(value); //it give me an error to solve this we use 
// }

// console.log(Object.values(obj));
// or u can do in this way also 

// for(let value of Object.keys(obj)){
//      console.log(value , obj[value]);
// } //using this u can get keys , values in for if loop as well but it is not recommended 


// CALL BACK FUNCTION -- 

// function greet(para){
//      console.log("hello everyone");
//      para();
// }

// greet(message);

// function message(){
//    console.log("trust that i want from u guys");
// }

// this is the second way -- put function inside the call 
// greet(
// function message(){
//    console.log("trust that i want from u guys");
// })

// this is the third way --  put function inside an variable then call 

// let func = function message(){
//    console.log("trust that i want from u guys");
// }

// greet(func);

// this is the 4th way -- use arrow function instead of normal 
// let func = ()=> console.log("arrow function is here .. ");


// greet(func);

// this is 5th way -- put arrow function in an call function 

// greet(()=> console.log("arrow function is here .. "));


// function fetch(){
//      console.log("hey you are now gone");
// }

// setInterval(fetch , 5000);


// for each loop is require an  call back funcion remember it 


// const arr = [1,5,8,2];
// arr.forEach(num => console.log(num));


// const arr = [1,5,8,2];
// arr.forEach((num , index) => console.log(num , index));
// //this gonna use in codebase so remember it okay 


// const arr = [1,3,4,6];

// arr.forEach((num , index , arr) => {
// arr[index] = num*2;
// console.log(arr[index]);
// })


//YOU CAN WRITE SEPARATE FUNCTION AS WELLL -- 

// let print = (num , index) => console.log(num , index);
// const arr = [1,5,8,2];
// arr.forEach(print);

//FILTER -- return only true or false 
//IT CAN STORE IN VARIABLE TOO

// let arr = [2,4,6,8,10,7,3];

// let evennos = arr.filter(num => {
//      if(num%2 == 0){
//           console.log(num);
//      }
// });

// console.log(evennos);

// let evennos = arr.filter(num => num%2 == 0);
// console.log(evennos);


// const nextui = [
//    {name : "sahil", marks:90 , age : 23},
//    {name : "monu", marks:80 , age : 33},
//    {name : "hitesh", marks:30 , age : 21},
// ];

//we are using filter with the call back function 
// let markss  = nextui.filter( obj=> console.log(obj.marks>50));

//u can also use destruturing here it means u can take out only the specific value that is in this case we want the marks 
// let markss  = nextui.filter(({marks})=> console.log(marks > 50));
// console.log(markss);
//in output it return true or false 

// MAP -- It is used to modify the values not to filter it 
// let arr = [1,2,3,4,5];

// arr.map( num => console.log(num*num));
// arr.filter( num => console.log(num*num));
// let result = arr.filter( (num , index) => num*index);
// //it give u some error or wrong answer because we can't modify the values into the filter

// console.log(result);


// fiter  -- it is used to filter the values 
// map -- it is modify the values 


// for each -- it is not stored in any variable 
//filter -- it return true or false if true return value 

// let arr = [1,2,3,4,5,6];
//find even then square of it 

// let result = arr.filter( num => {
     //      if(num%2 == 0){
          //           return num;
          //      }
          // }).map( num => num*num);

// or the shortcut way to do this is -- 

// let result = arr.filter(num => num%2 == 0);
// console.log(result);  
//---------------------------------------------------------------

//MOVE TO THE NEXT DAY that is REDUCE MAPS AND SETS 

// Reduce -- this  function take arrow function in which one value is accumulator that is acc  which we have to define it with some value , second is current value that is curr which take value from array one by one
//IT MAIN TASK IS TO REDUCE THE VALUE INTO A SINGLE OR FINAL VALUE 

//we can do sum function with it easily like 

//LETS DO THE SUM OF ALL ELEMENT PRESENT IN THIS ARRAY
// let arr = [10 ,20 , 30 , 40 , 50];

// // let result = arr.reduce((acc ,curr) => acc + curr , 0);
// // console.log(result);

// //we can also take ( arr , index ) in the parameter ;
// let result = arr.reduce((acc ,curr , arr ) => acc + curr , 0);
// // console.log(result , arr);
// console.log(`the sum of this ${arr} given array is ${result} using the reduce function.`);

//LETS COUNT how many times a fruit appear 
//  let arrstr = ["orange", "apple" , "orange", "apple" , "grapes" , "orange", "apple" , "grapes"];


// const result = arrstr.reduce((acc,curr)=>{
//     if(acc.hasOwnProperty(curr)) //it check the str one by one if not exist it make it and give it    value 1 acc to it
//       acc[curr]++;
//    else
//       acc[curr]=1;
//    return acc
// } , {}); //in this the acc is initialize with object that is {}, not 0

// console.log(result);

// or in short way is 
//   let arrstr = ["orange", "apple" , "orange", "apple" , "grapes" , "orange", "apple" , "grapes"];
// const result = arrstr.reduce((acc,curr)=>{
//     acc.hasOwnProperty(curr)? acc[curr]++:  acc[curr]=1;

//    return acc;
// }, {});
// console.log(result);

// let obj = {
//      name : "sahil",
//      id : 33,
//      orange : 1,
// }

// real world eg of reduce function --

// let arrstr = ["orange", "apple" , "orange", "apple" , "grapes" , "orange", "apple" , "grapes"];

// const result = arrstr.reduce((acc , curr) => {
// if(acc.hasOwnProperty(curr)){
//      acc[curr]++;
// }else{
//      acc[curr] = 1;
// }
// return acc;
// } , {})

// console.log(result);
//here acc is object because we want the final result in object right 


//Object.hasOwnProperty()  -- it means object have this property or not 
// eg --

// let obj = {
//      name :  "sahil",
//      id : 4,
// }

// console.log(obj.hasOwnProperty("name"));
//it means to check whether this obj have name property or not 


// let curr = "id";

// obj.hasOwnProperty(curr)
//      obj[curr] ++; //or u can write obj["orange"]++;


     
//      console.log(obj);

     //this function check whether obj have id or not if yes then increase it by one 


     // obj.apple = 1;
     // obj["apple"] = 1;
     // obj[curr] = 1;
     //all three have same definition


//set -- collection of unique values and without duplicates
//value can be any type stirng , number

// add  , delete , has , size , clear , union , intersection  , convert from arr to set and vice versa , iteration using for of loop , foreach on set

// let set1 = new Set([1,2,4,5,2,4]);
// let set2 = new Set([1,2,4,5,2,4]);
// 
// let result = [...set1].filter((num) => set2.has(num));
// console.log(result);


// for(let values of set2){
//   console.log(values);
// }

// let result = set2.forEach(num => console.log(num));
// console.log(result);
// set1.add(3);
// console.log(set1);

// set1.delete(2);
// console.log(set1);

// console.log(set1.has(4));

// console.log(set1.size);
// console.log(set1.clear);

// let sett = new Set();

// console.log(sett);



//map -- key value pairs -- anytype of keys , 

// set , get , has , clear , size , delete operations 
// for of loop on map
//2nd method to create a map
//for each on map

//this is the 2nd way to create a map 
// let mat = new Map([[0 , "sahil"] , ["age" , 35] , ["salary" , 50000]]);

// console.log(mat);

// console.log(mat.get(0));
// console.log(mat.has("age"));
// console.log(mat.size);
// mat.delete("salary");
// console.log(mat);

// let matt = new Map();
// matt.set("name", "hitesh");

// console.log(matt);

// console.log(mat.forEach((num) => console.log(num)));

// for(let value of mat){
//   console.log(value);
// }


//how js code works OR JS CODE EXECUTION 

// console.log(x);
// console.log(b);

// var x = 10;
// let x = 10;


// if we do this   without declare below then it show b is not defined in case of nothing
// in var -- it show undefined in case of var
// if we take x -- it show we cannot access x before initialization in case of let

//why it show 3 diff things

// basically code executes take memory and line by line it executes

//it create executon context -- divide into 2 parts memory and code

//lets take an eg. -- 

var x = 10;
let y = 20;
const z = 30;
console.log(x);
console.log(y);
console.log(y);

                       //Execution context
 //memory                                                    //code
// x : undefined : after it 10 
// y : 20
// z : 30
//this y and z Temporal dead zone

// on screen it print -- 

// ecma script -- earlier only var is used so we give undefined to it 
//            but these let and const recent added so nothing give to him at first time
//in x we give undefined , y and z we give nothing then normal print statement executes 
// then code executes

//JS is synchronous single level/threaded language it means 

// it means code executes line by line single level by level
//now u understand this code

// console.log(x);
// console.log(y);
// var x = 10;
// let y  = 20;

                        //Execution context
 //memory                                                    //code
// x : undefined  
// y : 20

//the x initialize with undefined then it print undefined while executing 
//y with nothing it give error because y have nothing to show so it give error of initialiazation first
//

//when these y and z defined with nothing they go into temporal dead zone when they initialize with values they get out from this temporal zone
//means phase between declare to the initialization 
//this is temporal deadzone eg let , const
 
// --------------------------------------
//Now move to the HOISTING PART -- 
// JS Code execution

// Js is a synchronous single threaded language.

// Hoisting in JavaScript is the behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase, before the code has been executed.

// This means that JavaScript "hoists" or lifts the declarations (but not the assignments) to the top, so you can refer to them before they are written in the code. However, only the declarations are hoisted, not the assignments or initializations.

// In other words; a variable can be used before it has been declared.

// //
//Hoisting means all ur declarations goes into the top not defined value just declare like
//means declaration of all variable are on the top
//only the declaration part nor value assigned 
//value assigned at its own place
//javascript treat in this way -- 

// var x = undefined;
// let y = ;

// console.log(x);
// console.log(y);
// x = 10;
// y  = 20;

// eg 2 -- let z ;
//         var x = undefined;
//         let y ;


// console.log(x);
// z = 50;
// console.log(y);
// x = 10 ;
// y = 3;
// console.log(z);

//hoisting it is a concept we don't know it acutally doing or not
//it executes line by line it is a single threaded 

// let take an function --

greet();

function greet(){
    console.log("hello world");
}
//it is working because -- 
//memory allocate - 
//greet : function code

//code execution 
// greet(); it already present in memory allocation so it execute without any error

meet();

let meet = function(){
    console.log("hello duniya");
}
//now this meet(); give error lets see why 

//it give error because lets check execution context - -
// memory allocation 
// meet --              //we give nothing because meet with let 

//code execution 
//now execute meet() and it give error because we have nothing in meet because of let
//but if we write meet below then it execute in memory allocation meet function is there then in code execution it said to execute and it run without any error 



let a = 10 ;
let b = 20 ;

function add(num1 , num2){
    let result = num1+num2;
    return result ;
}

var ans = add(a,b);
console.log(ans);

//we see about this code in console after debugging that in the let the value is unavailable and in the var it represent undefined 
//and at the last the call stack is also empty after the result 


                    //Execution context
 //memory                                                    //code
// a :  then 10
// b :  then 20
//add :{full function store here} -- it make their 
//  own execution context in which we have num1, num2 , resutl
// or function full copy here but the Element inside this not get memory so for this we do another execution context
// ans : undefined;


//for this add function there is other execution context is made 
                            //Execution context
 //memory                                                    //code
// num1 :   10
// num2 :   20
//result :  30 

//in stack we have 

//add{a ,b} -- execution context after getting result it remove this add{} from stack 
// gec -- global execution context then at last this gec is also remove


//lets talk about from where these functions are coming 

// console.log("hello world");
// console.log(Math.random());
// setinterval ()
// new Object()

// all these are coming from globalObject
//this global object is also an Object  

//the global object present at everywhere 
//for chrome browser -- windows
//for node.js -- global

// eg -- windows.math.random() its working in chrome console

// eg --

// let obj ={
//     name : "rohit",
//     id  : 3,

// }

// console.log(obj.name);
// //means whenever we get something from an object we used to write its object first like in this obj

// in chrome we have windows object which have everything inside it like all object functions

//YOU CAN ACCESS ALL THOSE WITHOUT MY NAME that is window

//window is a global object also 
//whatever variable u made it become part of window that is global object 

//at every environment the global have diff name  in browser it is window , in node js it is  global  , 
//in vs we have to write console.log(global.Math.random());
//in chrome console we have to write window.math.random();

// so we solve this problem by we used globalThis it works on everyenvironment
//no we write 
//globalThis.Math.random() in vs code
////globalThis.Math.random() in chrome console code

 
// basically the this keyword have diff roles acc to environment

// in global scope -- It point window object and in node js it point to global object 

// the this keyword point the global object

// this keyword -- in global scope point toward -- global object 

// "use strict"
// lets talk about THIS keyword -- 



// The this keyword in JavaScript is a special keyword that refers to 
// the context in which the current code is being executed. 
// Its value depends on how the function where this is used is called.


// 1: Global Context (Outside Any Function)
// In browsers: window object 
// In Node.js: Module's exports object or {} 


// console.log(this);
//in chrome it show window.objects
//in vs code it show{} that is module's exports object

// ****************************************************************

// 2:Inside a Function 
// i: (Non-Strict Mode)
// When this is used inside a regular function, it refers to the global object.
// ii: Strict Mode
// this will be undefined inside a function.

// function greet(){
//     console.log(this);  //this  this point undefined it we use this function in strict mode 
//but if we use this function in  non strict mode than it points window object
// }

// greet();
// window.greet();
 
// in non strict mode the this -  it point global object
// in strict mode the this - it point undefined 

//strict mode -- rules and regulation are high while writing js
//non -strict mode -- vice versa

// in recent code use see "use strict"
//latest use "use strict"
//earlier codebases follow non strict rules 
// eg- of both are -- 

// a = 3;
// console.log(a); //in non strict it print it easily but in strict it asked to define a first using let , var


// let obj = {
//     name:10
// }

// Object.freeze(obj);
// obj.name = 145;
// console.log(obj);

// "use strict" also a best way to debugging to use this write this at first line of file 
//Default mode is Non-Strict mode -- 

// ****************************************************************

// 3: Inside a Method (Object Context)
// When this is used inside an object’s method, it refers to the object that owns the method.

// const obj ={
//     name:"Rohit",
//     age:20,
//     meet: function(){
        // console.log(this); 
//         console.log(this.name);  //if this point to self obj then it print Rohit because it point obj
//     }
// }

// obj.meet();  --   if we call this then the present this it represent the const obj itself not the global object  or it point to the obj not the window object 
//when this is in the obj then it point the obj

//BASICALLY THE LOGIC IS WHOEVER THE OBJECT IS CALLING THE FUNCTION HE BECAME THE GLOBAL OBJECT 
// window.MessageEvent(); -- it global object is window
// obj.greet(); -- it global object is obj
// meet(); -- it global object is undefined  
//i hope u understand 

// ****************************************************************

// Arrow functions don’t have their own this. 
// Instead, they inherit this from the surrounding (lexical) scope.

let obj = {
    name:"rohit",
    age:11,
    greet: ()=>{
        console.log(this); //u can't write here this.name it don't print anything because its global ojbect is window not obj
    }
}

obj.greet();  //it print their global object is window object not its obj because it arrow function doesn't have own this also he inherit from lexical scope that is surrounding global scope that is window global scope   

//the point is arrow function point the global object that's it 

//final is in this the surrounding object is the obj and this of this obj pointing to window that is global object so final ans is window object 


// let obj = {
//     name:"rohit",
//     age:11,
//     greet: function(){
        
//         let ab = ()=>{
//             console.log(this);
//         };

//         ab();

//    }
// }

// obj.greet(); -- in this case the this point the obj because in arrow function the this take obj from surrounding and in the surrounding the object is function and it global object is obj

//note : in this the this keyword search in surrounding it get function and the this of function scope is obj
// means the this of surrounding object point to which object -- that is the this object in the arrow function that is the final definition of arrow function this



// Inside a Constructor or Class
// In constructors and classes, this refers to the instance of the object being created.

// class Person{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
// }

// let a = new Person("Rohit", 20);
// console.log(a);


//the benefit of using this keword in perspective of classes and constructor while creating object for the clasess we dont have to make another constructor everytime for the different object ...


