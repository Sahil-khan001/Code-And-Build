import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; 
import MenuCard from "./menuCard";

export default function SearchFood(){

    const[food , setfood] = useState("");
    const {id} = useParams();

    const [Data , setData] = useState([]);
    const [allData , setAllData] = useState([]);
    
    async function FetchData() {
    try {
      const proxyServer = "https://cors-anywhere.herokuapp.com/";
      const swiggy = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;
      const response = await fetch(proxyServer + swiggy);
      const data = await response.json();

    //   we have to filter the data from big api so we use some api 
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
setAllData(filterData);

      
    } catch (error) {
      console.log(error);
    }
  }
 
  useEffect(() => {

    if(food.length < 2){
        setData(allData);
        return;
    }

    const filteredData = allData.map((section) => {

        const filteredItems =
        section?.card?.card?.itemCards?.filter((item) => {

            return item?.card?.info?.name
            ?.toLowerCase()
            .includes(food.toLowerCase());

        }) || [];

        // remove duplicates
        const uniqueItems = [
            ...new Map(
                filteredItems.map((item) => [
                    item?.card?.info?.id,
                    item
                ])
            ).values()
        ];

        return {
            ...section,
            card: {
                ...section.card,
                card: {
                    ...section.card.card,
                    itemCards: uniqueItems
                }
            }
        };

    }).filter(
        (section) =>
        section?.card?.card?.itemCards?.length > 0
    );

    setData(filteredData);

}, [food, allData]);

useEffect(()=>{
    FetchData();
},[])

        return (
        <>
        <div className="max-w-[55%] mx-auto">
           <input type="text" placeholder="Search food..." className="w-full px-5 py-3 my-5 rounded-xl border border-gray-300 text-lg outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 shadow-sm transition-all duration-200" onChange={(e)=>setfood(e.target.value)} />
        </div>

         <div className="max-w-[55%] container mx-auto">
                {
                  Data?.map((value)=> <MenuCard  value = {value?.card?.card} key={value?.card?.card?.title}/>)
                }
        
        
        </div>


        </>
    )
}

