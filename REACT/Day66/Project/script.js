import React, { cloneElement } from "react";
import ReactDOM from "react-dom/client"


const Element = <h1>This is heading 1 using JSX</h1>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(Element);

//in JSX -- u can put any JS Expression which is Result Produce 
//Result can be string , number , array and even object too with accessing
//in JSX -- U cannot pass statement into JSX 
//eg  let x = 2 , 

// let obj = {
//     username : "sahil",
//     age : 23 ,
// }

// function meet(username){
//     return <h1>Nice to meet u {obj.username}</h1>;
// }

// root.render(meet());

//everything is acceptable which gives output 
// like this obj.username gives string 
//it gives array too but when ojbect in array -- it can't accept

//we can't use this statement we can't write it fully 
//if(x>5){
    // console.log("it gives nothing");
    // }
    
    // let arr = [2,3,5 , "khan"];
    
    // function meet(username){
    //     return <h1>Nice to meet u {arr}</h1>;
    // }
    
    // root.render(meet(arr));

    //but make sure array only contain number and array 

    //can we call function in diff in JSX

// function greet(){
//     return <h2>Hello EveryOne My Name is Sahil</h2>;
// }


// // const callElement = greet(); 
// const callElement = <greet/>;

// root.render(callElement);

//other way --
//REMEMBER -- this is JSX format 

// function Greet(props){
//     return <h2>Hello EveryOne My Name is Sahil {props.name} {props.age}</h2>;
// }


// // const callElement = greet();
// // we can call function in this way also but make sure that the function first letter should be in Capital 
// const callElement = <Greet name= "khan" age = "23"/>;

// root.render(callElement);
//in function we instead of parametet it takes props that is in parameter what ever u pass in arguments u know it is in key value pairs so the props takes all this info in the object in key value pairs
//like 
// props = {
//     name : "khan",
//     age : 23,
// } 


//so what is props -- we pass arguments the props catch that arguments in an object 
//so basically props are Object 
//u can check it on console -- console.log(props);

//React do this so that we can learn like 

//in normal HTML -- <h1 id = "first"  className = "popt"><h1/>
//in JSX function call arguments be like -- <Greet name = "sahil"  age = "23"/>

// eg2 

// function Detail(props){
//     return <h1>Your details are : {props.name}  {props.age} {props.dept} </h1>

// }


// const callfunc = <Detail name = "sahil"  age = "23" dept = "cse"/>;

// root.render(callfunc);










