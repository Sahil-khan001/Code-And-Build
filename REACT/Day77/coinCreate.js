import {useDispatch, useSelector} from "react-redux";
import { FetchData } from "./slicer";
import { useEffect } from "react";
import CoinCard from "./coinCard";



export default function CoinCreate(){
   
    const dispatch = useDispatch();
    const {data , loading , error} = useSelector((state)=> state.slice1)

    useEffect(()=>{
        dispatch(FetchData(20));
    },[])

    //how we Display the information of 20 user

    if(loading){
        return <h1>Data is loading</h1>
    }

    if(error){
        return <h1>Error has Occured</h1>
    }

    return (
        <>

        <div style={{display : "flex" , justifyContent : "center" , alignItems :"center" , margin : "10px" , flexWrap : "wrap"}}>
            {
                data.map((value)=>{
                    return (<CoinCard key = {value.id} coin = {value}></CoinCard>)
                })
            }
        </div>
        </>
    )


}