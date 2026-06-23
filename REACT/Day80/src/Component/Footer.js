export default function Footer(){
    return (
    <div className=" bg-[#F0F0F5]" >
    <div className="flex justify-around gap-15  bg-[#F0F0F5] ">
     <div className="mt-12">
        <img src="https://media-assets.swiggy.com/portal/testing/seo-home/Group.svg" />
        <p className="text-[#02060C99]" >&copy;2025 Swiggy Limited</p>
     </div>

     <div className="grid grid-cols-4 gap-14 mt-15  ">
         <div>
            <h3 className="font-bold mb-5" >Company</h3>
            <ul className="flex flex-col gap-4 text-[#02060C99]" >
                <li>About Us</li>
                <li>Swiggy Corporate</li>
                <li>Careers</li>
                <li>Team</li>
                <li>Swiggy One</li>
                <li>Swiggy Instamart</li>
            </ul>
         </div>
         <div>
            <h3  className="font-bold mb-5">Contact Us</h3>
            <ul className="flex flex-col gap-4 text-[#02060C99]" >
                <li>Help and Support</li>
                <li>Partner With Us</li>
                <li>Ride with Us</li>
            </ul>
            <h3  className="font-bold mb-4 mt-3">Legal</h3>
            <ul className="flex flex-col gap-4 text-[#02060C99]" >
                <li>Terms and Condtions</li>
                <li>Cookie Policy</li>
                <li>Privacy Policy</li>
            </ul>
         </div>
         <div>
            <h3  className="font-bold mb-5">Available in : </h3>
            <ul className="flex flex-col gap-4 text-[#02060C99]" >
                <li>Banglore</li>
                <li>Delhi</li>
                <li>Hyderabad</li>
                <li>Mumbai</li>
                <li>Pune</li>
                <li>Gurgaon</li>
            </ul>
         </div>
         <div>
            <h3  className="font-bold mb-5">Life at Swiggy</h3>
            <ul className="flex flex-col gap-4 text-[#02060C99]" >
                <li>Explore With Swiggy</li>
                <li>Swiggy News</li>
                <li>Snakables</li>
            </ul>
         </div>


     </div>

     

    </div>

    <div className="border border-b-gray-50 mb-5 mt-5"></div>

    <div className="flex justify-center items-center gap-5 pb-5">
        <div>
            <h3 className="font-bold ">For Better Experience , Download the Swiggy App Now</h3>
        </div>
            <img className="w-49 h-16" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv" />
            <img className="w-49 h-16" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl" />
     
    </div>

    
    </div>
    )
}