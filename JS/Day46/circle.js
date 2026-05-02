// document.body.addEventListener('click' , ()=>{

// const circle = document.createElement('div');
// // circle.innerHTML = "hi";
// circle.className = "circle";
// circle.textContent = "hi";

// // for attribute 
// // circle.setAttribute("class" , "circle");

// const par = document.querySelector('body');
// par.append(circle);

// })

//for the attribute -- 
// circle.className = "circle"; -- it represent only class value like class : "circle"
//circle.setAttribute("class" , "circle");

// ********************************************************

// document.body.addEventListener('click' , (event)=>{

// const circle = document.createElement('div');
// circle.className = "circle"; //this is attribute value 
// circle.textContent = "hi"; //this is innerHTML

// //now we use event --event know where i am clicking mouse and everyinfo so we get clientx and client y 
// const x = event.clientX;
// const y = event.clientY;

// circle.style.left = `${x-50}px`;
// circle.style.top = `${y-50}px`;



// //for the different colors -- 
// const Color = ["red" , "blue" , "yellow" , "green" , "white" , "purple" , "orange" , "brown" , "aliceblue"];
// circle.style.backgroundColor = Color[Math.floor(Math.random()*Color.length)];



// const par = document.querySelector('body');
// par.append(circle);

// setTimeout(()=>{
//     circle.remove();
// }, 5000);

// })

// //THIS CODE CREATE new div again and again and add into script to remove this we use setTimeout
