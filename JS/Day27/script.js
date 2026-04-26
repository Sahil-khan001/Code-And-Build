
//DAY 4 LEARNING -- 
//now we have arrays , objects in it


// let arr = ["sahil khan" , 1 , "delhi"];
// console.log(arr)
// console.log( typeof arr)

//Object is divided into key:value pair

// let obj = {
//      user_name :"sahilkhan",
//      roll_n0 : 39,
//      Belong : "Narela"
// }
// console.log(obj);
// console.log( typeof obj);

//function 
//we can put the function in an variable 

// let fun = function(){
//      console.log("this is function store in an variable");
//      return 10;
// }

// fun();
//or
// console.log(fun()); //if you use return in function then u have to use console.log then function in answer

//TYPE OF CONVERSION 

// let number = "10";
// // console.log(typeof number);
// let number2 = Number(number);
// console.log(number2);


// let x = true;
// console.log(x);
// let xx = Number(x);
// console.log(xx);


// let str = "43sdf";
// let str2 = Number(str);
// console.log(str2);
// //this give output of nan which is not a number

// //for null and undefined
// let x1 = null;
// console.log(Number(x1)); //it give 0 

// let x2 = undefined;
// console.log(Number(x2)); //it give Nan

// //convert to string use String 
// let ab = 20;
// console.log(String(ab));
// console.log(typeof String(ab));

// let string = true;
// console.log(String(string));
// console.log(typeof String(string));

// //boolean
// let strm = "this is string";
// console.log(Boolean(strm));

// console.log(Boolean(" "));
// console.log(Boolean(""));

// //operator precedence 
// //div , mul , sub , add from left to right 
// console.log((3+4*(3*5)+234));
//imp. operator modulus operator 20%2  it gives remainder 

//increment and decrement 
//pre increment , pre decrement  ++a , --a; 
//post increment , post decrement a++, a--;

//assignment operator 
// = , += , -= , /= 

// let x3 = 5;
// // x3+= 5;
// // x3-= 5;
// x3/= 5;
// console.log(x3);


//COMPARISON operator 
// < , > , <= ,>= , == , ===
// let a = 5;
// let b = "5";
// console.log(a === b);
// console.log(a <b);
// console.log(a == b);

// null and undefined 
// null == undefined -- true 
// null === undefined   -- false
// console.log(null == undefined);
// console.log(null === undefined);
// //they are equivalent to each ohter not to other okk 
// //null means 0
// console.log(null == 0); //it is always false
// console.log(null < 0); //false
// console.log(null > 0); //false
// console.log(null <= 0); //true
// console.log(null >= 0); //true

// console.log(undefined == 0); //false
// console.log(undefined < 0); //false
// console.log(undefined > 0); //false
// console.log(undefined <= 0); //false
// console.log(undefined >= 0); //false

// let str = "rohit";
// console.log(Number(str)); //the output is NaN


// let a1 = 123;
// let b1 = "123";
// let c1 = 123;
// console.log(a1 == b1 == c1); //output is false  because true != 123 ok

//logical operator 
//&& || !

// let a1 = 54;
// let b1 = 2;
// console.log(a1 > b1 && a1 > b1);
// console.log(a1 == b1 || a1 >b1);
// console.log(!(a1>b1));

// //NEXT WE HAVE BITWISE OPERATOR 
// let a1 = 2;
// let b1 = 3;
// console.log(a1&b1);
// console.log(a1|b1);
// console.log(a1^b1);

// //this is left shift operator 
// console.log(2<<3);  //output is 16 
// //it means 2 multiply by 2 ki power 3 

// //this is right shift operator
// console.log(16>>3); //output is 2
// //it means 16 divide by 2 ki power 3 