// BEFORE USING HOOKS

// import React  from "react";
// import ReactDOM from "react-dom/client";


// //now we gonna make one increment and one decrement button 

//  function Counter(){
//      let Count = 0 ;

//     function Incre(){
//         return(
//             Count = Count + 1 ,
//             console.log(Count),
//             document.querySelector('h1').innerHTML = `${Count}` //this is not a optimize way 
//         )
//     }
    
//     function Decre(){
//         return(
//             Count = Count - 1 ,
//             console.log(Count),
//             document.querySelector('h1').innerHTML =  `${Count}` //this is not a optimize way 
//         )
//     }
    
//     return(
//         <div style={{backgroundColor : "orange" , height: "150px" , width : "400px" , borderRadius :"10px"}}>
// <h1 style={{color : "black" , textAlign : "center"}}>Count is : {Count} </h1>
// <button className="butt" onClick={Incre} >Increment</button>
// <button className="butt" onClick={Decre} >Decrement</button>
//         </div>
//     )
//  }


//  const root = ReactDOM.createRoot(document.getElementById('root'));
//  root.render(<Counter/>)

// AFTER USING HOOKS


// import React , {useState} from "react";
// import ReactDOM from "react-dom/client";


// //now we gonna make one increment and one decrement button 

//  function Counter(){
//      let [Count , setData] = useState(0) ;

//     function Incre(){
//         return(
//             Count = Count + 1 ,
//             setData(Count),
//             console.log(Count),
//             document.querySelector('h1').innerHTML = `${Count}` //this is not a optimize way 
//         )
// }

// function Decre(){
//         return(
//                 Count = Count - 1 ,
//                 setData(Count),
//             console.log(Count),
//             document.querySelector('h1').innerHTML =  `${Count}` //this is not a optimize way 
//         )
//     }
    
//     return(
//         <div style={{backgroundColor : "orange" , height: "150px" , width : "400px" , borderRadius :"10px"}}>
// <h1 style={{color : "black" , textAlign : "center"}}>Count is : {Count} </h1>
// <button className="butt" onClick={Incre} >Increment {Count}</button>
// <button className="butt" onClick={Decre} >Decrement {Count}</button>
//         </div>
//     )
//  }


//  const root = ReactDOM.createRoot(document.getElementById('root'));
//  root.render(<Counter/>)



// import React, { useState } from "react";
// import ReactDOM from "react-dom/client";


// function Show(){

// const [count , setcount] = useState(0);
//     return (
// <>
// <div style={{border : "2px solid black" , height : "200px" , width : "500px"}}>
// <h2 style = {{marginLeft : "60px"}}>{count}</h2>
// <button className="butt" style={{height: "20px" , margin : "5px"}} onClick={()=>setcount(count+1)}>Increment</button>
// <button className="butt" style={{height: "20px"}} onClick={()=>{setcount(count -1)}}>Decrement</button>
// </div>
// </>

        
//     )
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Show/>);