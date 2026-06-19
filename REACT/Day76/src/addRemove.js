//now for every dummy object there is a new inCart 
//now for every value there is a different inCart 
//now for every dummy object there is a new useState is there 


import { useState } from "react";
import {addItems ,removeItems} from "../slice";
import { useDispatch } from "react-redux";

export default function AddRemove({value}){

     const [inCart , setinCart] = useState(false);
     const dispatch = useDispatch();
     

    function handleClick(){
            if(inCart){
                dispatch(removeItems());
                setinCart(false)
            }
            else{
                dispatch(addItems());
                setinCart(true)
            }
    }

    return (
        <>
                               <h1>{value.Food}</h1> 
                               <h2>{value.Price}</h2>
                               <button onClick={handleClick}>{inCart?"Remove" : "Add"}</button> 
        </>
    )
}

