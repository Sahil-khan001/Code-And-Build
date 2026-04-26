
//DAY 10
//ARRAYS IN JS 

//  let arr = [1,2,3, "sahil", true];
//  console.log(arr[0]);
//  console.log(arr[3]);
// console.log(arr.length);
// //different way to do this 
// console.log(arr.at(-2));
//using at -- it take the negative index too  value start from ulta //this is latest
//  console.log(arr.at(-1));
//  console.log(arr.at(-2));


// let newArr = arr;
// console.log(newArr);
// console.log(newArr == arr);
// let newArr = structuredClone(arr); //if you use structureClone then it create the different clone of arr and put it into newArr okay now both the address of both array are not same anymore NOW IT RETURN FALSE 
// console.log(newArr);
// console.log(arr == newArr); //if use structuredclone then it return false

//push in array -- add element in the last
// arr.push("hitesh");
// console.log(arr);

// //pop in array -- remove the last element 
// arr.pop();
// console.log(arr);

// //unshift in an array -- add the first element in an array 
// arr.unshift("lateStart");
// console.log(arr);

// //shift in an array -- remove the first element in an array 
// arr.shift("lateStart");
// console.log(arr);

// //delete element using delete but the space is not deleted the   -- SPACE IS RESERVED  THE NEXT ELEMENT BESIDE HIM WE HAVE TO ACCESS HIM WITH arr[1];  
// console.log(delete(arr[0]));
// console.log(arr);

// //indexOf -- to find the index of any element and if two same number appear then give index of 1st 
// console.log(arr.indexOf("sahil"));

// //includes -- that the given number include in the array or not
// console.log(arr.includes(2));
// console.log(arr);

//slice -- take out the given sub array from the array if we use slice then there is no change in the original array 
// console.log(arr.slice(0 , 4)); 

//splice -- whatever the start and end index we put it take out that sub array and it changes also in the array  01/01/1970 
// console.log(arr);
// console.log(arr.splice(1,3));
// console.log(arr);

//splice include -- (start_element ,total_element , add_element)
// console.log(arr);
// console.log(arr.splice(1,3 , "new" , 212 , 45));
// console.log(arr);

//toString() -- convert to string
//join() -- join all the elements into an string
// console.log(arr.toString());
// console.log(arr.join("*"));


 //concat -- 
//  let arr1 = [1,2,3,5,6];
//  let arr2 = [2,3,9,12];
//  let arr3 = arr1.concat(arr2);
//  console.log(arr3);

//add more array in it then 
//  let arr1 = [1,2,3,5,6];
//  let arr2 = [2,3,9,12];
//  let arr3 = [7,8,4,2];
//  let arr4 = arr1.concat(arr2,arr3);
//  console.log(arr);

// arr1.push(arr2); -- if we use it then it work like 2d array 
// arr1.push(arr2);
// console.log(arr1);
// // console.log(arr1[0]);
// console.log(arr1[4]); //if i print this then it print whole array as you see if you want to access it element then use console.log(arr1[5][0]);
// console.log(arr1[5][1]);

//now we see how 2d array look like -- 
// let arr2d = [[1,2,3] , [4,5,6] , [7,8,9]];
// console.log(arr2d[1]);
// console.log(arr2d[0][2]); //this is 2d access
// //so array inside an array is 2d array 
//array inside the another array is called 3d array it access like arr[0][2][3];


//if you want to convert 2d array into 1d array then use flat -- use infinity inside this for all 2d array , 3d array it can convert it into 1d array
// console.log(arr2d.flat(Infinity));

// let arr3d = [[1,2,3 , [8,9]] , [3,4,5]];
// // console.log(arr3d.flat(Infinity)); //but you have to use infinity inside this
// // console.log(arr3d[0][3][0]);
// console.log(arr3d.flat(Infinity));


// //Array.isArray -- to check that given is a array or not
// let abc = [2,1,4,1];
// console.log(Array.isArray(abc)); //it will give the answer in true or false


// let str = "sahil khan is great boy";
// console.log(Array.isArray(str));
//it will give false because it is a string 

// //never declare array like this means in the heap memory it have problems like

// // let newarr = new Array(2);
// let newarr = new Array(2,4);
// // console.log(newarr.length); 
//IF in an array if one element is present if we try to print length then it show not length it show the value but if in an array we have more than 2 values then it show real length 

// let newwarr = new Array(3);
// console.log(newwarr);

//in normal array it stored in contiguous memory in c++ like in int it take 4byte in contiguous memory 
//like arr1 6004 arr2 6008 arrr3 6012 in this way
//imp to note -- when we make array in c++ we know its size it take 4byte or what that's why we store this in contiguous memory but in js we dont know which element take how much size so that's why we dont't store array in contiguous way in js because we dont change size again and again for js element in an contiguous memory
//that's why it stored as an object and its type as an object
