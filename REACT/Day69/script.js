// import React , {useState , useEffect, useCallback} from "react";
// import ReactDOM from "react-dom/client";

// //Password : hfsdjjfd , setPassword
// //length : 10 , setLength
// //numbertick : false , setnumbertick
// //Charactertick : false , setcharactertick 


// function PasswordGenerator(){

//     const [Password , setPassword] = useState('hfsdjjfb');
//     const[length , setlength] = useState(10);
//     const[numbertick , setnumbertick] = useState(false);
//     const[Charactertick , setcharactertick] = useState(false);


//     const generatePassword = useCallback(()=>{
//         let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
//         if(numbertick){
//             str+= '0123456789'
//         }
//         if(Charactertick){
//             str+= '!@#$%^&*()'
//         }

//         let pass = "";

//         for(let i = 0 ; i<length ; i++){
//           pass +=  str[Math.floor(Math.random()*str.length)]
//         }
//         setPassword(pass);
//     },[length , numbertick , Charactertick])


//     useEffect(()=>{
//         generatePassword();
//     // }, [length , numbertick , Charactertick])
//     }, [generatePassword])  //it means  useEffect only work when there is any change in generateposswod means in length , numbertick , charactertick 

//     return (
//         <>
//         <h1 style={{marginBottom : "10px"}}> {Password}</h1> 
//          <div >
//           <input type="range" min={5} max={50}  onChange={(e)=> setlength(e.target.value)}></input>
//           <label>Length is : {length} </label>
    
//           <input type="checkbox" defaultChecked = {numbertick} onChange={()=> setnumbertick(!numbertick)} ></input>
//           <label>Number </label>

//           <input type="checkbox" defaultChecked = {Charactertick} onChange={()=>setcharactertick(!Charactertick)} ></input> 
//           <label>Characters </label>
//           </div>
//         </>
//     )
// }




// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<PasswordGenerator/>);

import React, { useCallback, useEffect, useState } from "react";
import { useFormState } from "react-dom";
import ReactDOM from "react-dom/client";

function Show(){

const [password , setpass] = useState("");
const [len , setlen] = useState(0);
const [addnum , setaddnum] = useState(false);
const [addchar , setaddchar] = useState(false);



const generatePassword = useCallback(()=>{

    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ' ;
    
    if(addnum){
        str+='0123456789';
    }
    if(addchar){
        str+= '!@#$%%^&**';
    }
    let pass = "";
    for(let i = 0 ; i<len ; i++){
      pass += str[Math.floor(Math.random()*str.length)];
    }
    setpass(pass);
}, [len , addchar , addnum])

useEffect(()=>{
    generatePassword();
},[len , addnum ,addchar]);

    return (
<>
<h2 style={{marginLeft : "140px"}}>{password}</h2>
<div className="beechmai">

<input type="range" min={5} max={50} onChange={(e)=>{setlen(e.target.value)}} />
<h3>{len}</h3>

<input type="checkbox" defaultChecked = {addnum} onChange = {()=>{setaddnum(!addnum)}}/>
<h3>AddNum</h3>

<input type="checkbox" defaultChecked = {addchar} onChange={()=>{setaddchar(!addchar)}} />
<h3>AddChar</h3>





</div>
</>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Show/>)