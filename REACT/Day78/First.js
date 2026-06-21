import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Child from "./child";


function Parent2(){

    const [languages , setlanguages] = useState(["JS" , "TS" , "JAVA"]);

    return (
  <>
  {
    // languages.map((value, index)=><Child key={index} value = {value} />) -- wrong approach
    languages.map((value, index)=><Child key={value} value = {value} />)
  }
  <br></br>
  <br></br>
  <button onClick={()=>{setlanguages(["C++" , ...languages])}}>Add languages</button>
  </>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Parent2/>)