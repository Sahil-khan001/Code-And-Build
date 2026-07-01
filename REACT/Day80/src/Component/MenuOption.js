import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import MenuCard from "./menuCard";
import MenuCard2 from "./menuCard2";
import { Shimmer } from "./Shimmer";
import SearchFood from "./SearchFood";

export default function MenuOption(){

    const {id} = useParams();
    console.log(id);

    const [Data, setData] = useState([]);
    const[selected , setselected] = useState(null);

    async function FetchData() {
    try {
      const proxyServer = "https://cors-anywhere.herokuapp.com/";
      const swiggy = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;
      const response = await fetch(proxyServer + swiggy);
      const data = await response.json();

      //we have to filter the data from big api so we use some api 
    const regularCards = data?.data?.cards.find(
  (item) => item?.groupedCard?.cardGroupMap?.REGULAR?.cards
);

const tempData =
  regularCards?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

const filterData = tempData.filter(
  (item) => item?.card?.card?.title
);

console.log(filterData);

setData(filterData);
      
    } catch (error) {
      console.log(error);
    }
  }
  
  useEffect(()=>{
    FetchData();
  },[])

  if(Data.length === 0){
    return <Shimmer/>
  }

      return (
        <>
      <div className="max-w-[55%] mx-auto my-10">
        <Link to={`/city/delhi/${id}/search`}>
        <p className="w-full py-5 text-xl font-semibold rounded-2xl text-center bg-gray-200 text-gray-600 hover:bg-gray-300 transition-all duration-200 shadow-sm cursor-pointer">Search for dishes 🔍</p>
        </Link>
        </div>
        
    <div className="max-w-[50%] mx-auto flex gap-4 my-8">
      <button className={`px-6 py-2 rounded-full border shadow-sm transition-all duration-200 ${selected === "veg" ? "bg-green-100 border-green-500 text-green-700" : "bg-white border-gray-300"}`} onClick={()=>setselected(selected === "veg" ? null : "veg")}>🟢 Veg</button>
      <button className={`px-6 py-2 rounded-full border shadow-sm transition-all duration-200 ${selected === "nonveg" ? "bg-red-100 border-red-500 text-red-700" : "bg-white border-gray-300"}`} onClick={()=>setselected(selected === "nonveg" ? null : "nonveg")}>🔺 Non-Veg</button>
      </div>



        <div className="max-w-[55%] container mx-auto">
        {
          Data?.map((value)=> <MenuCard  value = {value?.card?.card} key={value?.card?.card?.title} foodSelected ={selected}/>)
        }


        </div>
        </>
    )
}