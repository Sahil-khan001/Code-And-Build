import { useState } from "react"
import MenuCard2 from "./menuCard2"

export default function MenuCard({value}){

    const[isOpen , setisOpen] = useState(false);


    if("categories" in value){
        return(
            <div className="w-full"  >
            <p className="font-bold text-lg" >{value?.title}</p>
            <div>
            {
                value?.categories.map((ittems)=><MenuCard key={ittems.title} value = {ittems}  />)
            }

            </div>
            </div>
        )
    }

    if(!isOpen){
        return (
        <div className="w-full">
        <div className="flex justify-between mr-12 ml-10">
        <p className="font-bold text-base ">{value?.title}</p>
        <button className="text-xl" onClick={()=>setisOpen(!isOpen)} >{isOpen? "˄" : "˅"}</button>
        </div>
        <div className="h-3.5 rounded w-[95%] text-center bg-gray-100 border-gray-300 ml-3"></div>
            </div>
        )
    }



return (
<div className="w-full">
 <div className="flex justify-between  mr-12 ml-10">
 <p className="font-bold text-base ">{value?.title}</p>
 <button className="text-xl" onClick={()=>setisOpen(!isOpen)} >{isOpen? "˄" : "˅"}</button>
 </div> 
<div>

    {
        value?.itemCards?.map((items)=><MenuCard2 key = {items?.card?.info?.id}  items = {items?.card?.info} />)
    }
</div>


</div>

)
}