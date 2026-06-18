import { useState } from "react"
import { useDispatch } from "react-redux";
import { CustomIncreaser } from "./Slicer1";


export default function CustomerCustom(){
    const [Number , setNumber] = useState("");
    const dispatch = useDispatch();

    function handleClick(){
        dispatch(CustomIncreaser(Number));
    }
    return (
        <>
        <input type="number" placeholder = "Enter the value"  value={Number} onChange={(e)=>{setNumber(e.target.value)}}/>
        <button onClick={()=>{handleClick()}}>Submit</button>
        </>
    )
}