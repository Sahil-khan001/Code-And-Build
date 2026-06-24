import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Component/Home";
import RestaurantOption from "./Component/ResturantOpt";
import {BrowserRouter , Routes , Route} from "react-router-dom";

function Show(){
    return(
   <BrowserRouter>
   <Routes>

    <Route path="/" element = {<Home/>} ></Route>
    <Route path="/restaurant" element = {<RestaurantOption/>} ></Route>
   </Routes>
   
   </BrowserRouter>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Show/>);