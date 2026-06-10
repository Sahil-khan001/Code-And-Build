import React,{useState , useEffect , useCallback} from "react";
import ReactDOM from "react-dom/client";
import Child from "./child1";
import Decrement from "./Decrement";



function Show(){
  

   const[count, setcount] = useState(0); 

    return (
<>
<h1>count is : {count}</h1>
<Child counts = {count} setcounts = {setcount}/>
<Decrement  counts = {count} setcounts = {setcount}/>
</>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Show/>)