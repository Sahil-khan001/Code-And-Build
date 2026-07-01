import { Link } from "react-router-dom"

export default function Header(){
    return (
        <header className="bg-[#FF5200] font-sans">
            <div className="flex justify-between max-w-[80%] container mx-auto  py-8">
                <img className="w-40 h-12" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png" />
               <div className="font-bold text-white text-base flex gap-10 items-center">
                <a target="_blank" href="https://www.swiggy.com/corporate/">Swiggy Corporate</a>
                <a target="_blank" href="https://partner.swiggy.com/food/login">Partner With Us</a>
                <a target="_blank" className="border-2 rounded-xl px-3 py-4">Get the App</a>
                <a  target="_blank" className="border-black-2 rounded-xl px-5 py-4 bg-black text-white">Sign in</a>
               </div>
                 </div>

            <div className="relative pt-16 pb-8 ">
          <img className="w-60 h-112 absolute top-0 left-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"/>   
          <img className="w-60 h-112 absolute top-0 right-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"/>
        <div className="text-5xl font-bold text-white max-w-[60%] text-center container mx-auto">Order food & groceries. Discover best resturants. Swiggy it.</div>

    <div className="max-w-[55%] container mx-auto flex gap-10 mt-5 ">
                  <input className="bg-white text-[16px] w-[40%] h-13 rounded-xl pl-4 outline-0" type="text"  placeholder="Enter your Delivery Location" />
                  <input className="bg-white text-[16px]  w-[65%] h-13 rounded-xl pl-4 outline-0" type="text" placeholder="Search for resturants , item or more" />
              </div>
            </div>

            <div className="max-w-[70%] container mx-auto flex ">
       <Link to="/restaurant">
       <img className="w-81 h-75" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png"/>
       </Link>
       
            <a href="https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1"><img className="w-81 h-75" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png"/></a>
          <a href="https://www.swiggy.com/dineout"><img className="w-81 h-75" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png"/></a> 
    
        </div>

        </header>
    )
}


