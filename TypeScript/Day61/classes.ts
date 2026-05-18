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
    public username:string;
//    private age : number;
   protected age : number;


    constructor(n1:string , n2:number){
        this.username = n1;
        this.age = n2;
    }

    greet() : void{
        console.log("hello everyone");
        
    }

    
};

class child extends data{
    show():void{
        console.log(this.age);
    }
};


let obj1 = new data("Sahil" , 22);
let obj2 = new data("hitesh" , 23);

// console.log(obj1);
// console.log(obj2);

// obj1.greet();


let obj3 = new child("ram" , 45);

obj3.show(); //now it is working acc to protected 

console.log(obj1.username);

//u can even write this public , private , protected in function too inside the class 

//u can use extends in the classes too to inherit properties from parent 


//super keyword constructor call to parent 

class customer{
    name : string ;
    age : number ;


    constructor(name:string, age : number){
      this.name = name ;
      this.age = age ;
    }

    meet():void{
        console.log("hey this is meet from parent");
    }
}


class emp1 extends customer {
    phone : number ;


    constructor(name:string , age : number , phone : number ){
        super(name , age);
         //super keword is used to call the parent constructor to call its values 
       this.phone = phone;
    }

     meet():void{
        console.log("hey this is meet from child");
    }

}

let e1 = new emp1("sahil" , 23 , 6436);
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

function value<T>(val : T):T{
    return val;
}

// console.log(value(3));
// console.log(value("sahil"));
// console.log(value(true));
// console.log(value([2,4,6,2]));

//some people write type also like 
//u have choic to write it or not it basically tell T the datatype of value is passng
//whatever the value is passed T becomes of that type 

console.log(value<number>(3));
console.log(value<string>("sahil"));
console.log(value<boolean>(true));
console.log(value<number[]>([2,4,6,2]));

//this <T> represent the type of value u enter means if u put string then it take string as input and give string as output 



interface detail<T>{
    username : string,
    age : number, 
    aadhar : T
}

let per1: detail<number> =  {username : "sahil" , age : 23 , aadhar : 345674854};

let per2: detail<string> =  {username : "sahil" , age : 23 , aadhar : "twenty"};

//here at addhar we applied generic funtion
//now acc to need people can put value into this 
//means now we can take the addhar value in number 
console.log(per1);


//Basically it make ur function generic u can use it with multiple types of values 


//ALSO in html the JS file is connect irrespective of typescript in source 
// <script src  = "app.js">


// Extra notes by hitesh sir 

// emitter is used to remove types from typescript code and convert into js to run file like bun , node js that used emitter to run directly 


 


