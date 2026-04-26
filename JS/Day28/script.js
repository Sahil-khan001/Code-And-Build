
//DAY 5 LEARNING  // IN THIS WE TALK ABOUT MEMORY 

// let a = 10 ;
// let b = a;
// b = 43;

// console.log(b);
// console.log(a);

//primitive datatypes are immutable -- we know these datatypes stored in stack -- we know here it work on mechanism that is call by value
//non primitive datatypes are mutable  -- call by reference

// let obj1 = {
//      id : 1,
//      username : "sahil",
// }

// console.log(obj1);
// obj1.id = 2;
// obj1.roll_no = 234;
// console.log(obj1);

// let obj2 = obj1;

// obj2.id = 3454;

// console.log(obj1);
// console.log(obj2);
//you have seen when we change in object 2 it also reflect in object one that why non primitive are mutuable on the other hand no changes made in primtive types

//NOW TALK ABOUT MEMORY MANAGEMENT 

//all the primitive datatypes stored in stack 
//all the non primitive datatypes stored in heap

//byte addressable means every byte take address
//in primitive datatypes call by value is executing  and in non primitive call by address happening like when you change in obj 2 address it reflect in obj1 too
//in primitive it drop old location and put the value into new location

//PRIMITIVE DATA TYPES ARE IMMUTABLE -- b/c new space is created and lost the previous one  like call by value 
//NON-PRIMITIVE DATA TYPES ARE MUTABLE -- b/c it change in same address so the original value is change because both object have same address like call by reference

//primitive datatypes
// const num = 10;
// num = 20;
// console.log(num);

//non-primitive datatypes
// const obj = {
//      id: 20,
//      balance : 100,
// }

// obj.id = 34;
// console.log(obj);
//it work in non-primitive datatype but not in primitive datatypes 
//b/c we see that in non-primitive its address store in stack but value in heap so in this we change the value not the address that's it address is const but not the value 

// let obj2 = {
//      id:66,
// }

// obj = obj2;
// console.log(obj); 
//it give error now because now u are changing its address okay and it address is const u know