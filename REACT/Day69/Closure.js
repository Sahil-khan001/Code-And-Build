
// let b = 10;
// function greet(){
//     let a = 4;
//     console.log(a);
//     console.log(b);
// }


// console.log(a);
// console.log(b);
// greet();

//this b print in function because first it check value in own scope then in outside scope  
//but we can't do vice versa like we can't access value of a from outside 


//at the end function is also a object we allocate memory to it and code stored in heap

function greet(){
    let a = 20;

    function meet(){
        console.log(a);
    }
    return meet;
}
 

// greet();
const num = greet();
// console.log(num); -- it give access to meet function 
num();  //it call the meet function 

//it print its value 20 but how we know this function is over still it get access to function and value of a but how 
//this is because of Closure but how

//we know function goes into stack then we execute all the instruction after executing all the code it gets removed from stack too 
//then how this num() function call 
//because function allocates memory in heap 
//if it is removed from stack then nothing happened same like object , array  non primitive datatypes
//we have reference of it 

//in this this we call this meet function closure
//means whatever data/value it can access it notedown its reference too 
//in this case it notedown reference of a so that in future we can access it 
 

//DEFINTION -- a closure gives a function access to its outerscope , in JS a closure is created everytime when a function is created at function creates time 
//it gives u access of outer variable value 
//it reference stored in heap


//it stores the reference of himself as well as of outside scope variable values




 