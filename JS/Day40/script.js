
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
  
//eg -  
 let arrstr = ["orange", "apple" , "orange", "apple" , "grapes" , "orange", "apple" , "grapes"];
// //find how many times a specific fruit appear
// //result should be print in a object form

// const result = arrstr.reduce((acc,curr)=>{
//     if(acc.hasOwnProperty(curr)) //it check the str one by one if not exist it make it and give it    value 1 acc to it
//       acc[curr]++;
//    else
//       acc[curr]=1;
//    return acc;
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

// const set1 = new Set([10,20,10,30,20]);
// console.log(set1);
// console.log(typeof set1);

//2nd way of creating a set 

// const set2 = new Set();
// set2.add(4);
// set2.add(6);
// set2.add("sahil");
// set2.add("rohit");

// console.log(set2.size);
// //how many unique elements are present in set 

// set2.delete(4);

// console.log(set2);

// console.log(set2.has("rohit"));//it tell whether a element is present or not it return answer in true or false 

// const alreadyId = new set1(["sahil_343" , "sahil@121" , "sahillihas@"])

// let newUser = alreadyId.has("sahil_343");
// //if it return true it means u can 't use this id it is already reserved 

// set2.clear();

// console.log(set2);

// OPERATIONS WE CAN DO --
//add 
//delete
//has 
//size 
//clear
 
//set also have its prototype that is set.prototype 

// let setA  = new Set([1,2,3]);
// let setB = new Set([3,4,5]);
// let UnionSet = new Set([...setA , ...setB]);

// convert arr into set -- 

// let arr = [10,30,20,10,40,50,30];
// const set1 = new Set(arr);
// console.log(set1);

//yes it convert it into a set with unique values only

//convert set to arr --

// let set1 = new Set([1,2,3,4,5]);

// const arr = [set1];
// console.log(arr);

//UNION OF TWO SETS
// let setA  = new Set([1,2,3]);
// let setB = new Set([3,4,5]);
// let setC = new Set([...setA , ...setB]);
// console.log(setC);

// INTERSECTION TWO SETS
//we do it using filter and logic like --

//  const result = arr.filter() //but here we dont have array then we do is 

// let setA  = new Set([1,2,3]);
// let setB = new Set([3,4,5]);
// const result = [...setA].filter((num) => setB.has(num));
// //u know filter return true or false  
// //also remember the filter use only on array

// console.log(result);
   

//how to iterate over set  we using for of loop

let set1 = new Set([2,1,3,4,5,6]);

// for(let value of set1){
//   console.log(value);
// }
//for of loop to iterate over set

// u can use forEach also for set it applied on array but u can use it on set also 

// set1.forEach((value) => console.log(value));
// --------------------------------------------------------

// next is Map -- it it a collection of key value pairs of anytype like function , objects , primitive data types 
//the point is key is of any time 
//as we see in object only string is considered

// set(key , value);
// get(key);
// has(key);
// delete(key);
// clear();
// size();

// for(let[key, value] of map){console.log(key , value)};
// map.foreach((value , key) => {
//   console.log(key , value);
// })

//type is object 
//use of set to set the key value pairs
//make sure of letter to write map function Map okk not map


//create key and value in map using set
// const map1 = new Map(); 
// map1.set(3, 90);
// map1.set("rohit" , 45);
// map1.set(20 , "mohan");

// console.log(map1);

//delete key and value using only key
// map1.delete(3);
// console.log(map1);

//get  value using key only get(key)
// console.log(map1.get(20));

// //check if a key or value is present or not
// console.log(map1.has(20)); //it return true or false

// console.log(map1.size);

// console.log(map1.clear);

// map1.__proto__ == map1.prototype;

//2nd method to create a map is 

const map1 = new Map([ [4 , "rohit"], ["mohan" , "sohan"]]);

// let value = map1.get(4);
// console.log(value);

// console.log(map1.has("mohan"));

for(let value of map1){
  console.log(value);
}

//using destruture for key value is 

for(let [key , value] of map1){
  console.log(key , value);
}

console.log(map1[4]);  //this treat as a object
console.log(map1["4"]);  //this treat as a object
console.log(map1.get(4)); //this as a map

//both have diff ways to access and create values that's it 

// Object keys -- string or Symbol
// map keys -- string , Number , any

map1.forEach((key , value) => console.log(key , value));