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
//y  = 20;

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

