
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
