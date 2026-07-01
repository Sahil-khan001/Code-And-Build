import {createSlice} from "@reduxjs/toolkit";

const cart = createSlice({
    name : "Slice1",
    initialState : {
        items : [],
        count : 0
    },
    reducers : {
    addItems : (state , action)=>{
    state.items.push({...action.payload , quantity : 1});
    state.count++;

    },
    Increment : (state , action)=>{
    const element = state.items.find((item)=> item.id === action.payload.id)
    element.quantity +=1;
    state.count++;
    },
    Decrement : (state , action)=>{
    const element = state.items.find((item)=> item.id === action.payload.id)
    if(element.quantity > 1){
        element.quantity -= 1;
    }
    else{
        state.items = state.items.filter((item)=> item.id!=action.payload.id);  
    }
     state.count;
    },
    }
})


export const {addItems , Increment , Decrement} = cart.actions;
export default cart.reducer;

