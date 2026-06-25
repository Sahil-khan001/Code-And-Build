import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import MenuCard from "./menuCard";
import MenuCard2 from "./menuCard2";
import { Shimmer } from "./Shimmer";

export default function MenuOption(){

    const {id} = useParams();
    console.log(id);

    const [Data, setData] = useState([]);
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
        <div className="max-w-[55%] container mx-auto">
        {
          Data?.map((value)=> <MenuCard  value = {value?.card?.card} key={value?.card?.card?.title}/>)
        }


        </div>
        </>
    )
}