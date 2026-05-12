// we talk about 
//1. logical &&   == if first is true it can 't check second even if it is a function 
//   logical ||  == if first is false it check second the function will print 

//2. template literals == ` ${}`;

//3. ternary operator = 
// let age = 10;
// age > 18 ? console.log("u can vote") : console.log("u can't vote");

//4. Object and ArrayDestructuring 


//short hand property Names

// const id = 1 ;
// const rating = 5;

// let obj = {
//     id , 
//     rating
// }

// console.log(obj); //it give object with same value  == THIS IS SHORT HAND PROPERTY

// let object = {
//     user : "sahil",
//     age : 21 ,
// }

// // const {user , age} = object;
// // console.log(user , age);

//basically u destructuring the values the values from the properties and now u will be getting the value


// let arr = [10,20,30];

// let first = array[0];
// let second = array[1];

// const [first , second] = array;

// let [arrFirstElement , arrsecond] = arr;
// let [arrent , arrd] = arr;

// console.log(arrent , arrd);

//for destructuring in array the array name in first place should be there 

//5. Default Parameters 

// function sum(num1 = 1 , num2 = 2){
//     return num1 + num2;
// }
 

// let result  = sum(5,2);

// console.log(result);


//if u dont paas any value in sum like in parameter it show NaN  
//but if u give value in delcare parameter then it take those values as a parameter it give u answer but if
//same time if u give value to the sum parameter then it over write the declara parameter values

// =============================================
// diff b/w arguments and parameter
// function greet(name) {   // name = parameter
//   console.log(name);
// }

// greet("Akshay"); // "Akshay" = argument

// =============================================

//6. Spread and Rest operator 

// let arr1 = [2,5,6,2];
// let arr2 = [6,2,6,1];

// let result = [...arr1 , ...arr2];
// let result = [...arr1 ,100 , ...arr2];  // it show 100 in middle of both these array 
// let result = [[...arr1 , ...arr2]]; //show values in array container 
// console.log(result);

// //THIS IS spread operator first it spread the values then it merge the array 

// const arrone = [1,2,3];
// console.log(...arrone);

//basically we are spreading the value from this array  
//output is 1,2,3


// function something(a,b,...c){
    
//     console.log(a,b,c);
// }


// something(1,2,3,4,5,6); 

//this is REST operator the c stores the remaining values that is 3,4,5,6
//a is 1 , b is 2 , c is 3,4,5,6  

//spread is imp for react


//Map -- it is imp.

const personArray = [

    {
        name : "sahil",
        age : 23,
    },
    {
        name : "hitesh",
        age : 23,
    },
    {
        name : "sharique",
        age : 23,
    },
    {
        name : "kartik",
        age : 23,
    }
]


// let result = personArray.map((person , index)=>{

//     console.log(person.name , index);
//     // console.log(person.age);
// })

// //it takes index as wellin parameters
// //it show everyobject have own index 

// //filter --

// let onlybangcityper = personArray.filter((obj) => obj.age == "23");
// console.log(onlybangcityper);


// personArray.filter((obj) => console.log(obj.age == "23"));
//filter gives value in true or false 

//this is filter and map
//also in map we can modify value but in filter can't may be 

//some and every --- 

// let checkSomeMethod = personArray.some((obj, index) => obj.age == '23');
// console.log(checkSomeMethod);

//if any person have age = 23 it print true 
//it dont want every person age to be 23 just some 

//while check is opposite of it every age must be 23 otherwise it return false 

// let checkSomeMethod = personArray.every((obj, index) => obj.age == '23');
// console.log(checkSomeMethod);


//Array Methods -- 

//find() , reduce() , include() , indexOf , findIndex 

let arr = [1,2,3,5,2];


//find() -- 
// let checkarray = arr.find((item , index ) => item === 5);
// console.log(checkarray);
//find not return true or false or 1 or 0 like it 
//it return value if have duplicate value it only return first of duplicate value 
//if we use filter here for 1 it return both values in an array like [1,1]
//if we use  find then for 1 it return only 1 for the first value 


//reduce() -- use for sum 

// let total = arr.reduce((acc , curr) => acc + curr , 0);
// console.log(total);
//with the help of reduce u can use in sub total in expense tracker 

//behind of reduce
// let total  = arr.reduce((acc,current , index , arr) =>{
// console.log(acc, current, index , arr);
// return acc + current;
// }, 0)

// console.log(total);

// INCLUDES() -- it return value is present or not in form of true or false 
// console.log(arr.includes("2")); //it false because it is string 
// console.log(arr.includes(2));  //it return true


//indexOf == it print index value like 0,1,2 if there are duplicate values it only print index of first value 

// console.log(arr.indexOf(2));
// console.log(arr.indexOf(5));


// findIndex -- it do the same work as indexof but it will work in call back function 
//but indexOf can't take any callback function 

// let findindex = arr.indexOf(item => item == 3);
// console.log(findindex);  //it give 2 it will work 

// let findindex = arr.indexOf(item => item == 3);
// console.log(findindex);  //it wont work becaust indexOf can't take callback function 


//import and export values 
//like u have 3 components like a , b , c and  you want to use b function into c then u can use this 

export function sum(a,b){
    return a+b;
}
//for this normal export function  use import {function name } from path in diff js file 


export default function mul(a,b){
    return a*b;
}

//for this export default use import directfunctionname from path in diff js file 

