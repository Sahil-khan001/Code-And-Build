import { configureStore } from "@reduxjs/toolkit";
import reduxSlice from "./slice";

const Store = configureStore({
    reducer: {
        slice1: reduxSlice,
    }
})

export default Store;