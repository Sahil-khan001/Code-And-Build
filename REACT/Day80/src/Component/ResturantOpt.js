import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

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
      <div className="max-w-[80%] container mx-auto flex flex-nowrap overflow-x-auto gap-5 mt-30">
     {
     Data?.map((value) => {
     return (
        <div className="shrink-0" key={value?.info?.id}>
        <img className="w-70 h-46 object-cover rounded-xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/" + value?.info?.cloudinaryImageId}/>
        <h1 className="font-bold ml-2 ">{value.info.name}</h1>
        <span className="mr-2  ml-2" >⭐ {value?.info?.avgRating}</span>
        <span>{value?.info?.sla?.slaString}</span>
        <p className="text-gray-500 w-70 ml-2">  {value?.info?.cuisines?.join(", ")}</p>
        </div>
          )
        })
    }
      </div>
    </>
  );
}