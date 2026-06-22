import { GroceryGridCards } from "../Utils/grocery"
import GroceryCard from "./Grocerycard"

export default function GroceryOption(){
    return (
        <>
        <div className="max-w-[80%] container mx-auto mt-23">
         <h1 className="font-bold text-[21px] ">Shop Groceries on instamart</h1>
        </div>

        
            <div className="max-w-[80%]  container mx-auto flex  gap-4 mt-6 flex-nowrap overflow-x-auto  ">
                  {
                    GroceryGridCards.map((value)=><GroceryCard key={value.id} value = {value} />)
                  }
            </div>
        
        </>
    )
}