//issue in js \

//age example -- 
// let age = 29;

// age = "twentynine";  //suppose a developer write this later then it create problem
// age = "twentynine";  //acutally at this point it has to give error but it didn't

// console.log(age);
// //it print the twentynine but i want in number 
//console.log(age + 10);
//but it print twentynine10 instead of 39 

//object accessing -- 

// let obj = {
//     user : "name",
//     age : 23,
// }

// console.log(obj.height);  //it give undefined 
// //acutally it has to give error but it give undefine that is wrong 

// const a = obj.dept ; //even it is not created it still acessing it 


//SO TO SOLVE THIS PROBLEM WE HAVE TYPESCRIPT (IT IS SUPERSET OF JS)-- 
//we have to declare a variable type also liek 

//the rule is whatever u defined u have to write it Datatype 
//because later if u assined diff datatype value to it it give error to u 

//As we know that our browser dont understand anything apart from html css js so we have to convert typescript equivalent to the JS USING COMPILER 

//WE Write code in Typescript so that as a developer we can easily catch the error 

//now we install typescipt compiler first open the cmd 
// npm install -g typescript
// tsc --version 

//to run tsc file -- 
// tsc file.name
// tsc  file.ts  --target es2016

//normally it convert into old js like using var because we dont tell me in which verson u have to convert so to convert into latest verion we use this 

// tsc  file.ts  --target es2016
//so not to write everytime thisline we init config using 
// tsc init 

//now tsc configuration file is created now in which target is there means in which version like it have latest version ,  strict mode and lot of things we have to convert our tsc

//also we dont have to use tsc file name now we can use tsc only 

//now tsc convert all tcs file into js acc to target version present in the tsconfig.json file 

//JUST CHECKING INPUT IN NORMAL JS 
// const name = prompt("enter ur name");
// const age = prompt("enter ur age ");

// console.log(name , age);

// --------------------------------------


// a = "sahil"; 
//now it give error that not to assign vlue of diff datatype 
//but it tell u about this error but still it convert it into JS FILE 

//it tell u the error but it tell also that  it is valid in JS so it convert in JS also 
//if u write valid js  code then u can't stop me to convert it into the JS 

//there is a command it automatically convert typescript code into JS code 
//tsc --watch 
//for exit = Ctrl + c


//IN TYPESCRIPT WE HAVE A CONCEPT OF SELF UNDERSTANDING OF DATATYPE ACC TO THE VALUE we give to them 

//like the value we assigned to the variable typescipt automatically understand it 



//we have c++ code -- so it is compiled run time

//first the code compile into machine code then cpu execute it during runtime

//in java the code compile into bytecode then cpu execute it during runtime 


//the syntax error , missing error are caught during the compile time it give error 

//also in C++ it give runtime error like we have machine code now we are executing/running now it give error 

//BUT in JS it  is interpreted language means it executed line by line also it direcly executed by cpu no compile no intermediate bytecode or machine code direct code execution but in c++ it takes time to to compile code once after it it executed fully during runtime without any error

//that is the reason why c++ language is fast than JS and java because in java too JVM takes time to understand the bytecode 


//from 2008 js become more fast because of v8 engine and it uses JIT -- Just in time 

//IT Mix of compile runtime time + interpreted lanugage

//JIT -- BEHIND THE SCENES 
//usually it executed line by line like interpreted but back of the line it also convert this code into machine/bytecode whenever same code or function call repeat then it give machine/bytecode of that code or function to cpu for fast execution 

//typescript is what compiled , interpreted  or JIT 

// compile -- convert into machine code using compiler then exeute by cpu during runtime 

// interpreted -- directly executed by cpu
// it is slow give error line after line if appear

// JIT -- first line by line + compiled into machine code when repeat cpu execute it fast 

 //platform independent -- java , javascript  -- it have bytecode it can execute anywhere only thing is os need is JVM -- JAVA VIRTUAL MACHINE 

 //platform dependent -- c++  like we have machine code of c++ it can't execute anywhere on any operating system the original file is indeed 
 //the machine cade cannot execute anywhere it execute where original c++ file is there

 //javascript -- is also independent it needs only browser to execute 
 //SO DEPENDING UPON THE MACHINE CODE IT SAYS platform dependent or platform independent 

 //bytecode can run on any machine it needs only JVM 

//TypeScript is JIT 
 //Typescript -- basically we are not running it file we just convert it into the js FILE  
 //the myth is some people say it is compiler it execute the file but not 
 //it compile code into JS  the real file that is runnning is JS file that is running using node file.js
//it convert into js then js run 
//as we are not converting this into machine/bytecode we just convert it into other lanugage 
//so we say it  Transpiler 
//TRANSPILER 

//how to make objects in typscript -- 
//we have to define its datatype and value -- 


//also we have type and interface like

//interface -- 
//we can make multiple interface 
//it work fast in compilation 


//type 
//we can make only one type
//it is slow campare to interface 

//Interface  -- whenever we see  Objects it is interface
//type -- we also use in primtitive datatypes 
//in transpiler the interface is fast in compilation com to type

//there is a difference of syntax on both  equal sign while initializing 


//optional keyword  -- ? this we can use in object -- now user have choice of write or not the key value pair in which optional keyword is define


//Commands are -- 


// tsc File.name 
// tsc File.name --targetversion name --------------------------instead of this make ts config file using tsc init
//tsc --watch  , ctrl + c
//tsc init , tsc 

//we have some utility of objects  -- 

//partial -- u can mention property acc to u 
//required -- u have too mention all the property 
//Readonly  -- u can read only not edit











