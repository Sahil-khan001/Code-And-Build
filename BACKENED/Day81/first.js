const {sum, sub} = require('./second.mjs')


sum(9,5);
sub(8,5);

console.log("hey i am first.js");



// this is iife -- immediately invoked function expression (
//     wrap up this from second.js
// )()
// (function (){
// console.log("hey i am first.js");

// function sum(a,b){
//     console.log(a+b);
// }
// })

