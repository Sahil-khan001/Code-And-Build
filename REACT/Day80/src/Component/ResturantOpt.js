import { useEffect, useState } from "react";
import {Shimmer} from "./Shimmer";
import { Link } from "react-router-dom";

export default function RestaurantOption() {
  const [Data, setData] = useState([]);


  async function FetchData() {
    try {
      const proxyServer = "https://cors-anywhere.herokuapp.com/";
      const swiggy = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
      const response = await fetch(proxyServer + swiggy);
      const data = await response.json();

      console.log(data);

      const restaurantData = data?.data?.cards?.find(
        (item) =>
          item?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );

      setData(restaurantData?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || []
      );
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    FetchData();
  }, []);

  if(Data.length === 0){
    return <Shimmer/>
  }

  return (
    <>
    
       <div className="max-w-[80%] container mx-auto grid grid-cols-4 gap-5 mt-10 ">
     {
     Data?.map((value) => {
     return (
         <Link to = {"/restaurant/city/delhi/" + value?.info?.id}  key={value?.info?.id}>
       <div className="h-70 overflow-hidden shrink-0 transition transform duration-200 hover:scale-95 " >
        <img className="w-70 h-46 object-cover rounded-xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/" + value?.info?.cloudinaryImageId}/>
        <h1 className="font-bold ml-2 ">{value.info.name}</h1>
        <span className="mr-2  ml-2" >⭐ {value?.info?.avgRating}</span>
        <span>{value?.info?.sla?.slaString}</span>
        <p className="text-gray-500 w-68 ml-2">  {value?.info?.cuisines?.join(", ")}</p>
        </div>
        </Link>
          )
        })
    }
      </div>
    </>
  );
}