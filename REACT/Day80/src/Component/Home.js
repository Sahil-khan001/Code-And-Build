import Header from "./header"
import FoodOption from "./FoodOption"
import GroceryOption from "./GroceryOption"
import DineOutOption from "./DineOutOptions"
import Banner from "./banner"
import Cities from "./Cities"
import Footer from "./Footer"

export default function Home(){
    return (
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