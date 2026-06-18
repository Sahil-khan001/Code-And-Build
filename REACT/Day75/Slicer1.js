import { createSlice } from "@reduxjs/toolkit";


const Slice1 = createSlice({
    name : "Slice01",
    initialState : {count : 0},
    reducers : {
       Increment : ((state)=>{state.count = state.count + 1}),
       Decrement : ((state)=>{state.count = state.count - 1}),
       Reset : ((state)=>{state.count = 0}),
       CustomIncreaser : ((state , actions)=>{state.count+=actions.payload})
    }
})
export const{Increment , Decrement , Reset , CustomIncreaser} = Slice1.actions;
export default Slice1.reducer;

