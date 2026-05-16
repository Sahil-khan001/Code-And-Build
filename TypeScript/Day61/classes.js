"use strict";
// class data {
//     username:string ;
//     age : number;
Object.defineProperty(exports, "__esModule", { value: true });
//     constructor(n1:string , n2:number){
//         this.username = n1;
//         this.age = n2;
//     }
// };
// let obj1 = new data("Sahil" , 22);
// let obj2 = new data("hitesh" , 23);
// console.log(obj1);
// console.log(obj2);
//with the help of only one class and constructor we are making diff objects 
//LETS TALK ABOUT EXTENDS KEYWORD -- 
//extends keyword is used to inherit property from one interface to another 
// interface human{
//     name : string , 
//     age : number ,
// }
// // interface teacher{
// //     //we know teacher also have name and age so instead of writing name , age again what we do is we use extends keword like
// //      name : string , 
// //     age : number ,
// // }
//   // or with extends keyword like 
// interface teacher extends human{
//     dept : string ,
//     salary : number,
// }
// let teacher1: teacher = {name : "shally" , age : 34  , dept : "psychology" , salary : 50000};
// console.log(teacher1);
//now we can access all properties using extend keword 
// =====================================
//can we get prop from 2 interface into 1 interface using extends 
//can we use comma ,  logic like 
// interface human{
//     name : string , 
//     age : number ,
// }
// interface id{
//     id : number,
// }
// interface teacher extends human , id {
//     dept : string ,
//     salary : number,
// }
// let teacher1: teacher = {name : "shally" , age : 34  , dept : "psychology" , salary : 50000 , id : 1};
// console.log(teacher1);
//now move to classes and objects 
// class data {
//     username:string ;
//     age : number;
//     constructor(n1:string , n2:number){
//         this.username = n1;
//         this.age = n2;
//     }
// };
// let obj1 = new data("Sahil" , 22);
// let obj2 = new data("hitesh" , 23);
// console.log(obj1);
// console.log(obj2);
//in this constructor is used to to initialize the value he takes value from object and put it into the class properties 
//when u type tsc he runs all typescript files 
//how to write functions in classes
// class data {
//     username:string ;
//     age : number;
//     constructor(n1:string , n2:number){
//         this.username = n1;
//         this.age = n2;
//     }
//     greet() : void{
//         console.log("hello everyone");
//     }
// };
// let obj1 = new data("Sahil" , 22);
// let obj2 = new data("hitesh" , 23);
// console.log(obj1);
// console.log(obj2);
// obj1.greet();
//NOTE : -- When u write tsc in terminal it it runs all typescript file but if u want to run only specific file then u can use 
// tsc filename.ts --target versionname  
//tsc classes.ts -- target es2025 //eg 
//lets  talk about Public , Private , Protected in typescript
//in JS we have only public  
// if u write public in front of any variable then u can access that variable outside the class 
//if it is private then only access within the class 
//if it is protected then only access within the class and sub class like child 
// In TypeScript classes:
// public → accessible everywhere
// class A {
//   public name = "GPT"
// }
// private → accessible only inside the same class
// class A {
//   private age = 20
// }
// protected → accessible inside the class + subclasses (child classes)
// class A {
//   protected salary = 5000
// }
// Example:
// class Parent {
//   protected msg = "hello"
// }
// class Child extends Parent {
//   show() {
//     console.log(this.msg) // works
//   }
// }
// Quick memory trick:
// public → everyone
// private → only me
// protected → me + my children
//we do this so that no accidental changes were happen also like no one can change anything from outside 
//if some one want to change anthing then it can change it within the class 
class data {
    username;
    //    private age : number;
    age;
    constructor(n1, n2) {
        this.username = n1;
        this.age = n2;
    }
    greet() {
        console.log("hello everyone");
    }
}
;
class child extends data {
    show() {
        console.log(this.age);
    }
}
;
let obj1 = new data("Sahil", 22);
let obj2 = new data("hitesh", 23);
// console.log(obj1);
// console.log(obj2);
// obj1.greet();
let obj3 = new child("ram", 45);
obj3.show(); //now it is working acc to protected 
console.log(obj1.username);
//u can even write this public , private , protected in function too inside the class 
//u can use extends in the classes too to inherit properties from parent 
//super keyword constructor call to parent 
class customer {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    meet() {
        console.log("hey this is meet from parent");
    }
}
class emp1 extends customer {
    phone;
    constructor(name, age, phone) {
        super(name, age);
        //super keword is used to call the parent constructor to call its values 
        this.phone = phone;
    }
    meet() {
        console.log("hey this is meet from child");
    }
}
let e1 = new emp1("sahil", 23, 6436);
console.log(e1);
e1.meet();
//when we have same function in both classes like parent and child and we call the function from child then child first call its own then the parent one 
//THIS IS SUPER KEYWORD which is used to call the parent constructor 
//by default everything is public 
//NOW THE LAST TOPIC IS GENERICS IN JS 
//generic is like a template 
// function value(val : (number | string  | boolean | number[])) :  (number | string  | boolean | number[]){
//     return val;
// }
// console.log(value(3));
// console.log(value("sahil"));
// console.log(value(true));
// console.log(value([2,4,6,2]));
//to solve this problem we make generic functions 
function value(val) {
    return val;
}
// console.log(value(3));
// console.log(value("sahil"));
// console.log(value(true));
// console.log(value([2,4,6,2]));
//some people write type also like 
//u have choic to write it or not it basically tell T the datatype of value is passng
//whatever the value is passed T becomes of that type 
console.log(value(3));
console.log(value("sahil"));
console.log(value(true));
console.log(value([2, 4, 6, 2]));
let per1 = { username: "sahil", age: 23, aadhar: 345674854 };
console.log(per1);
//# sourceMappingURL=classes.js.map