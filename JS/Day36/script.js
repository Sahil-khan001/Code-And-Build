
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
