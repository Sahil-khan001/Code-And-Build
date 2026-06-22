import { GroceryGridCards } from "../Utils/grocery"

export default function GroceryCard({value}){
    return (
     <div className="shrink-0">
     <a href={value.action.link}>
     <img className="w-36 h-45 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/" + value?.imageId}/>
     </a>
     <h2>{value.action.text}</h2>
     </div>
    )

}