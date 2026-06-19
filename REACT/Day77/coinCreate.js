import {useDispatch} from "react-redux";
import { FetchData } from "./slicer";
import { useEffect } from "react";



export default function CoinCreate(){
   
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(FetchData(20));
    })
}