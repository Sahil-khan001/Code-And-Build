import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Component/Home";
import RestaurantOption from "./Component/ResturantOpt";
import MenuOption from "./Component/MenuOption";
import {BrowserRouter , Routes , Route} from "react-router-dom";

function Show(){
    return(
   <BrowserRouter>
   <Routes>

    <Route path="/" element = {<Home/>} ></Route>
    <Route path="/restaurant" element = {<RestaurantOption/>} ></Route>
    <Route path= "/restaurant/city/delhi/:id" element = {<MenuOption/>} ></Route>
   </Routes>
   
   </BrowserRouter>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Show/>);