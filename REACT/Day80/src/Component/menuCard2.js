

export default function MenuCard2({items}){
    return (
   <div className="flex w-full justify-between mb-4 items-center border-b border-gray-300 p-10">

<div className="w-[70%]">
<p className="font-bold ">{items?.name}</p>
<p className="font-bold text-base">{"₹" + ((items?.defaultPrice || items?.price) / 100)}</p>
<span className="text-sm text-green-700 font-bold">{"★" + items?.ratings?.aggregatedRating?.rating}</span>
<span className="text-sm text-gray-500">{"("+items?.ratings?.aggregatedRating?.ratingCountV2+")"}</span>
<p className="text-gray-500 text-sm overflow-hidden mt-2 h-10">{items?.description}</p>
</div>

<div className="w-[20%] relative">
    <img className="h-36 w-full object-cover rounded-2xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+items.imageId}></img>
    <button className="absolute top-30 left-6 right-0 border border-gray-500 w-[68%] rounded bg-white text-green-600 font-bold h-9   ">ADD</button>
    <p className="w-full text-center text-xs text-gray-400  absolute top-40 left-2 right-0">Customisable</p>
</div>
</div>
);
}