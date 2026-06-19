import { createSlice } from "@reduxjs/toolkit";

const reduxSlice = createSlice({
    name : "slice1",
    initialState : {count : 0},
    reducers : {
        addItems : (state)=>{state.count = state.count + 1},
        removeItems : (state)=>{state.count = state.count -1},
    }
})

export const {addItems ,removeItems} = reduxSlice.actions ;
export default reduxSlice.reducer;