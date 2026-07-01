import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Component/Home";
import RestaurantOption from "./Component/ResturantOpt";
import MenuOption from "./Component/MenuOption";
import SearchFood from "./Component/SearchFood";
import Header from "./Header";
import {BrowserRouter , Routes , Route} from "react-router-dom";
import {Provider} from "react-redux";
import Store from "./Store/Store";
import Checkout from "./Component/Checkout";



function Show(){
    return(
        <Provider store={Store}>
   <BrowserRouter>
   <Routes>

    <Route path="/" element = {<Home/>} ></Route>
    <Route element = {<Header/>}>
    <Route path="/restaurant" element = {<RestaurantOption/>} ></Route>
    <Route path= "/restaurant/city/delhi/:id" element = {<MenuOption/>} ></Route>
    <Route path= "city/delhi/:id/search" element = {<SearchFood/>} ></Route>
   </Route>
   <Route path="/checkout" element ={<Checkout/>}></Route>
   </Routes>
   
   </BrowserRouter>
   </Provider>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Show/>);