import { configureStore } from "@reduxjs/toolkit";
import Slice1 from "./Slicer1"

const store = configureStore({
 reducer :{
    slice1 : Slice1,
 }
})

export default store ;