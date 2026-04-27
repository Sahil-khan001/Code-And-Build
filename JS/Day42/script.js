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

//note : in this the this keyword search in surrounding it get function scope and the this of function scope is obj
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



// let greet = ()=>{
//     console.log(this);
// }

// greet();

// "use strict"

// let meet = function(){
//     console.log(this);
// }

// meet();

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

// eg -- windows.math.random() its working in console

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



