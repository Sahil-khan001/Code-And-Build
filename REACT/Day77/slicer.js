import {createSlice} from "@reduxjs/toolkit";
import {createAsyncThunk} from "@reduxjs/toolkit";


const FetchData = createAsyncThunk(
    //Action : type : payload 
    'coin/fetch' ,
    async(args, thunkAPI)=>{
        try{
            const response = fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${args}`);
            const data = response.json();
            return data;
        }catch(error){
            return rejectWithValue(error.message);
        }
    }
)


const Slice = createSlice({
    name : "slice1",
    initialState : {data : [] , loading : false , error : null },
    reducers : {},
    extraReducers : (builder)=>{
        builder
        .addCase(Fetch.pending , (state)=>{
            state.loading = true;
            state.error = null;
        })
        .addCase(Fetch.fulfilled , (state)=>{
            state.data = actions.payload;
            state.loading = false;
        })
        .addCase(Fetch.rejected , (state)=>{
            state.error = actions.payload;
            state.loading = false;
        });
    }
})

export default Slice.reducer;
export {FetchData} ;