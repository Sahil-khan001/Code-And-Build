import { DineoutData } from "../Utils/dineout"

export default function DineOutCard({value}){
 return (
    <div className="shrink-0 w-82 h-85 border-2 rounded-2xl relative">
     <a target="_blank" href= {value.cta.link} >
     <img className="w-full h-47 object-cover rounded-t-2xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/" + value?.info?.mediaFiles[0]?.url} />
     <p className="absolute top-39 left-3  text-white font-bold text-base z-10 " >{value?.info?.name}</p>
     <p className="absolute top-39 right-3 text-white font-bold text-base z-10 " >{value?.info?.rating?.value}</p>
     <div className="absolute bg-gradient-to-t from-black to-transparent h-16 bottom-37 left-0 right-0"></div>
     </a>
    </div>
 )
}