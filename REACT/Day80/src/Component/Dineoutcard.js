import { DineoutData } from "../Utils/dineout"

export default function DineOutCard({value}){
 return (
    <div className="shrink-0 w-82 h-85 border shadow rounded-2xl relative">
     <a target="_blank" href= {value.cta.link} >
     <img className="w-full h-47 object-cover rounded-t-2xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/" + value?.info?.mediaFiles[0]?.url} />
     <p className="absolute top-39 left-3  text-white font-bold text-base z-10 " >{value?.info?.name}</p>
     <p className="absolute top-39 right-3 text-white font-bold text-base z-10 " >{value?.info?.rating?.value}</p>
     {/* <div className="absolute bg-gradient-to-t from-black to-transparent h-16 bottom-[148px] left-0 right-0"></div> */}
     <div className="flex justify-between px-2 text-[#02060C99]">
     <p>{value?.info?.cuisines}</p>
     <p>{value?.info?.costForTwo}</p>
     </div>
      <div className="flex justify-between px-2 text-[#02060C99]">
     <p>{value?.info?.locality},{value?.info?.locationInfo?.city?.name}</p>
     <p>{value?.info?.locationInfo?.distanceString}</p>
      </div>
      <div className="font-bold border-2 flex justify-between rounded w-[90%] container mx-2 mt-2  px-2 bg-[#1BA672] text-white">
         <p className="text-[15px]   " >  {value.info?.offerInfoV3?.vendorOffer?.title},{value.info?.offerInfoV3?.vendorOffer?.subtitle}</p>
         <p className="text-[15px]  " > {value.info?.offerInfoV3?.vendorOffer?.subtext}</p>
      </div>
      <div className="font-bold border-2 flex justify-between rounded w-[90%] container mx-2 mt-2 px-2 bg-[C8F9E5] text-green-700">
         <p className="text-[15px] " > {value.info?.customerOffer?.infos?.[0]?.description}</p>
      </div>
      <p className="p-2 text-[#5134B6]">{value.info?.vendorOffer?.infos?.[0]?.header}</p>
     </a>
    </div>
 )
}