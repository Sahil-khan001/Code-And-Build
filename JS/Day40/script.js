
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

const set1 = new Set([10,20,10,30,20]);
console.log(set1);
 

