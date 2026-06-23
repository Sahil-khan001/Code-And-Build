import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Component/header";
import FoodOption from "./Component/FoodOption";
import GroceryOption from "./Component/GroceryOption";
import DineOutOption from "./Component/DineOutOptions";
import Banner from "./Component/banner";
import Cities from "./Component/Cities";
import Footer from "./Component/Footer";

function Show(){
    return(
     <>
     <Header/>
      <FoodOption/>
      <GroceryOption/>
      <DineOutOption/>
      <Banner/>
      <Cities/>
      <Footer/>
     </>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Show/>);