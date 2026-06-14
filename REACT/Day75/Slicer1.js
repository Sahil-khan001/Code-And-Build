import { createSlice } from "@reduxjs/toolkit";


const reactslicer = createSlice({

    name : "slice1",
    initialState : {count: 0},                     //we treat this count as object that's why we use callback in reducers function 
    reducers : {

        Increment : (state)=>{state.count = state.count + 1}, 
        Decrement : (state)=>{state.count = state.count - 1},
        Reset : (state)=>{state.count = 0},
    }
})