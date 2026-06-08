import React  from "react";
import ReactDOM from "react-dom/client";

// //USE CAMELCASE IN REACT CODE 
// const ele1= React.createElement('h3' , {id : "first" , className: "1st" , style : {backgroundColor : "blue" , color : "red"}} , "THIS IS BROWN MUNDE");
// const ele2= React.createElement('h2' , {id : "second" , className : "2nd" , style : {backgroundColor : "pink" , color : "red"}} , "THIS IS spotify");
// const div = React.createElement('div' , {} , [ele1 , ele2]);

// const newElement = <h1>THIS IS USING JSX</h1>
// const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(ele1);
// // root.render(ele2);
// root.render(newElement);

//we now in this we dont have node modules so we install it using npm install
//it check all the dependies present in package-lock.json then acc.to it it install node modules 

//NOW WE ARE GONNA USE JSX -- 


// JSX : JS EXPRESSION
// //it means javascript expression using {}  lets put some 
// const  nickName = "sahil";
// const obj = {
//     age : 22 ,
//     dept : "finance",
// }

// let stylish ={
//     backgroundColor : "blue",
//     color : "white",
// }
// const newElement = (
//     <>
//        <h1>This is heading 1 using JSX ...   {nickName}</h1>
//        <h1 style={stylish}>This is heading 2 using JSX {obj.dept}</h1>
//     </>
// )

// // const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(newElement);

// //WE know our element takes only 1 element at at time so we use div as a one element or we can remove div text also to more accurate 

// function greet(){
//     return <h1>this is function using function based Component</h1>
// }


// const meet = ()=>{
//     return <h2>this is arrow function using function based component </h2>
// }

// const Element2 = greet();
// const Element3 = meet();
// const finalElement = <>{Element2} {Element3}</>;


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(Element2);
// root.render(finalElement);

