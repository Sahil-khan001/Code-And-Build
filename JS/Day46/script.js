//EVENTS MEANS -- WHEN we click on anything an event occurs means an action appear so for this we use events -- 

//for apply the events on anything u have to know its address using id , class , tag that is object 

// Mouse event --------

//click -- when u click action appear
// dblclick --  when u double click 
// mousemove -- when u just pass the mouse onto the button then action appears
// mouseover  -- 1 pass per button the action appears


//Keyboard Event

//keydown -- when click a keyboard then the the action appears
//keyup -- until u release the kebboard key then the action appears

//Event Object  -- it have more information about everything when we press any key it store the key  or whenever u trigger any event it have all information about that event 

//event  -- its a object that know about action like click dblclick 
//event.target -- onto on u are doing this action
//event.type -- it is click , dblclikc , or keyboard event 
//event.key -- u can set key onto which key the action appear like if(event.key == "Enter"){then action appears}
//event.clientX -- it show the position onto horizontal axis 
//event.clientY -- it show the position onto vertical axis 

//NOW MOVE TO CALCULATIONS PROJECT -- 

// const button = document.querySelector('button');

// button.addEventListener('click' , ()=>{
 

    
//     //Read the data -- to read the data we have to get access from the input 
//     const input1 = document.querySelector('#first');
//     const number1 = Number(input1.value);  //now u got the input access now u can access its data using .value 

//     //the data is coming into input is in the string we have to convert it into the number to convert it into number we so Number(element)
//     const input2 = document.querySelector('#second');
//     const number2 = Number(input2.value);

//     //  if(NaN(number1) || NaN(number2)) 
//     //     return;  //suppose user enter string instead of number than we have to use this 
     

//     //Output the result  -- 
//     //we have to access the result 
//     const Result = document.querySelector('#result');
//     Result.innerHTML = `Result is : ${number1 + number2}`;

//     //or 

//     // const result = number1 + number2;
//     // const re = document.querySelector('#result');
//     // re.innerHTML = `Result is : ${result}`;
//     // re.innerHTML = "Result : "+result;  //if u want to add up previous result then u can use 

// })



//THE BELOW CODE IS SAME BUT LOGIC IS FOR BMI CALUCLATE -- weight/(height in metre)^2 -- okk


// const butt = document.querySelector('button');

// butt.addEventListener('click' , ()=>{

// //read the data from input 1
// const inp1 = document.querySelector('#first');
// const num1 = Number(inp1.value);

// const inp2 = document.querySelector('#second');
// const num2 = Number(inp2.value);

// //result

// const R = document.querySelector('#result');
// R.innerHTML = `Result of both is : ${num1 / (num2*num2)}`;



// })