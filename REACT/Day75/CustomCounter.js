import { useState } from "react"
import { useDispatch } from "react-redux";
import { CustomIncreaser } from "./Slicer1";


export default function CustomerCustom(){
    const [number , setNumber] = useState("");
    const dispatch = useDispatch();

    function handleClick(){
              dispatch(CustomIncreaser(Number(number)));  
    }
    return (
        <>
        <input type="number" placeholder = "Enter the value"  value={number} onChange={(e)=>{setNumber(e.target.value)}}/>
        <button onClick={()=>{handleClick()}}>Submit</button>
        </>
    )
}