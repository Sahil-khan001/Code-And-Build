import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Component/header";
import FoodOption from "./Component/FoodOption";
import GroceryOption from "./Component/GroceryOption";
import DineOutOption from "./Component/DineOutOptions";

function Show(){
    return(
     <>
     <Header/>
      <FoodOption/>
      <GroceryOption/>
      <DineOutOption/>
     </>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Show/>);