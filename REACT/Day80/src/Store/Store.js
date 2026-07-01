import { configureStore } from "@reduxjs/toolkit";
import cart from "./Slice";

const Store = configureStore({
    reducer: {
        Slice1: cart,
    }
})

export default Store;