
import DineOutCard from "./Dineoutcard";
import { DineOutData } from "../Utils/dineout";

export default function DineOutOption(){
    return (
        <>

        <div className="max-w-[80%] container mx-auto mt-23" >
            <h1 className="font-bold text-[21px]">Discover best Resturant on DineOut</h1>
        </div>

        <div className="max-w-[80%] container mx-auto mt-6 flex flex-nowrap overflow-x-auto gap-2 ">
            {
                DineOutData.map((value)=><DineOutCard key={value?.info?.id} value = {value} ></DineOutCard>)
            }
        </div>

            </>
    )
}

