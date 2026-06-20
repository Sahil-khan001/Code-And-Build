import React ,{useState} from "react";
import ReactDOM from "react-dom/client";
import Child from "./child";



function Parent(){

    const arr = [0,1,2,3];

    return (
       <>
       {arr.map((value)=><Child key={value} />)}
          </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Parent/>)