import { useSelector } from "react-redux"
import { Link } from "react-router-dom";


export default function RestuHeader(){
  const counter = useSelector((state)=> state.Slice1.count);
    return (


        <header className="bg-white font-sans border-b-gray-400 border py-2">
                    <div className="flex justify-around max-w-[80%] container mx-auto py-2">
                      <div className="flex items-center gap-2">
                       <img className="h-10" src="data:image/svg+xml;utf8,%3Csvg%20width%3D%22120%22%20height%3D%22120%22%20viewBox%3D%220%200%2061%2061%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%0A%20%20%3C!--%20Orange%20Background%20--%3E%0A%20%20%3Cpath%20fill%3D%22%23FF5200%22%20d%3D%22M.32%2030.5c0-12.966%200-19.446%203.498-23.868a16.086%2016.086%200%200%201%202.634-2.634C10.868.5%2017.354.5%2030.32.5s19.446%200%2023.868%203.498c.978.774%201.86%201.656%202.634%202.634C60.32%2011.048%2060.32%2017.534%2060.32%2030.5s0%2019.446-3.498%2023.868a16.086%2016.086%200%200%201-2.634%202.634C49.772%2060.5%2043.286%2060.5%2030.32%2060.5s-19.446%200-23.868-3.498a16.086%2016.086%200%200%201-2.634-2.634C.32%2049.952.32%2043.466.32%2030.5Z%22%3E%3C%2Fpath%3E%0A%0A%20%20%3C!--%20Swiggy%20Symbol%20--%3E%0A%20%20%3Cpath%20fill%3D%22white%22%20d%3D%22%0A%20%20%20%20%20%20M30%2012%0A%20%20%20%20%20%20C22%2012%2016%2018%2016%2026%0A%20%20%20%20%20%20C16%2032%2020%2037%2025%2039%0A%20%20%20%20%20%20L25%2045%0A%20%20%20%20%20%20L35%2045%0A%20%20%20%20%20%20L35%2039%0A%20%20%20%20%20%20L43%2039%0A%20%20%20%20%20%20L30%2055%0A%20%20%20%20%20%20L17%2039%0A%20%20%20%20%20%20L25%2039%0A%20%20%20%20%20%20C21%2036%2019%2031%2019%2027%0A%20%20%20%20%20%20C19%2020%2024%2015%2030%2015%0A%20%20%20%20%20%20C37%2015%2042%2020%2042%2027%0A%20%20%20%20%20%20L36%2027%0A%20%20%20%20%20%20L45%2036%0A%20%20%20%20%20%20L54%2027%0A%20%20%20%20%20%20L48%2027%0A%20%20%20%20%20%20C48%2018%2040%2012%2030%2012%0A%20%20%20%20%20%20Z%0A%20%20%20%20%22%3E%3C%2Fpath%3E%0A%0A%3C%2Fsvg%3E" />
                       <span className="font-bold">Other</span>
                       <span className="text-gray-600">Delhi,India</span>
                       </div>  
                       <div className="font-bold text-base flex gap-10 items-center">
                        <a target="_blank" >Swiggy Corporate</a>
                        <a target="_blank" >Search</a>
                        <a target="_blank" >Offer</a>
                        <a target="_blank" >Help</a>
                        <a target="_blank">Sign in</a>
                        {/* <a target="_blank">Cart {`(${counter.length})`}</a>   */}
                        <Link to="/Checkout">
                        <p>Cart {`(${counter})`}</p>  
                        </Link>
                       </div>
                         </div>
            </header>
    )
}