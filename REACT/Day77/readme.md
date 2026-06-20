LETS TALK ABOUT API CALLS IN REDUX -- 

in normal react -- we do in under the useEffect() it run only one and fetch the data from the API and show the data to us 
but how in REDUX API

we have 

FETCH -- pending                    Loading(Data)          Github User -- 
         fulfilled : Resolve        Data
         Rejected : Reject          error


         when it it is in Pending state then it show loading data means data is loading 
         when api fulfilled then it give DATA
         when api rejected then it give error 


         we make a request to fetch if data is loading then we make false to loading 


         function fetchUser(){
            useEffect(async ()=>{

                dispatch(LoadingData(true));
                try{
                    const response = await fetch("Github User INfo");
                    cosnt data = await response.json();
                    dispatch(UpdateData(data));
                }catch(error){
                    dispatch(ErrorData("Error Occured"));
                }
            })
         }

         before making request we show that data is LOADING 
         after getting the data we update it on Globally to show  and make Loading false       
         if error then we show the error too




Is this is the best Approach to do this like can we fetch our data locally and then whatever data we get then we have to update it on GLOBALLY LATER

lets take a scenario -- we have two two component and one component fetch the data locally and updated it globally then if 2nd component want same data so i have to fetch locally and update globally just because of different path as per routing we dont route from 1st to get data to 2nd one we direct take 2nd so for it we have to fetch locally that is a wrong approach 

we dont have to fetch data in component otherwise we have to use it multipletimes

1ST RULE OF CODING -- if u write any code -- use it multiple times means functions so why we have to fetch data again that is wrong 
Soln is we have to fetch the data Globally  not locally so that any component can access it for this we have 

how to fetch data globally using -- 

createAsyncThunk  it gives u a function any function like fetchData  we have to call this it will do all work dispatch send the updated data , error everything done by createAsyncThunk we just have to make a function call 

we need this createAsyncThunk because in multiple component we have to write the code now the code is make Globally we just have to call it 

basically when we send function in dispatch() the action determines it type which slice and function and payload 
the createAsyncThunk do all this for ourself like it created actions for us 

lets do the code part -- 

 function fetchUser(){
            useEffect(async ()=>{

                dispatch(LoadingData(true));
                try{
                    const response = await fetch("Github User INfo");
                    cosnt data = await response.json();
                    dispatch(UpdateData(data));
                }catch(error){
                    dispatch(ErrorData("Error Occured"));
                }
            })
         }

         in this code we call this LoadingData(true) as an actions and given to the store

        dispatch(LoadingData(true));
        -- {type : slice1/LoadingData  payload : true}
        dispatch(UpdateData(data));
         -- {type : slice1/UpdateData  payload : data}
        dispatch(ErrorData("Error Occured"));
         -- {type : slice1/ErrorData  payload : "error Occured"}

         all this action info go to the store and store execute it acc to it 


NOW LETS SEE THE createAsyncThunk code -- create this dispatch itself 
it itself create dispatch like this -- 
--{type : 'Coin/fetch/pending' , payload : undefined},
--{type : 'Coin/fetch/fullfiled' , payload : data}
--{type : 'coin/fetch/rejected' , payload : "error_message"}

it create like this dispatch by itself 

code is -- 
const FetchData = createAsyncThunk(
    //Action : type : payload 
    'coin/fetch' ,
    async(args, thunkAPI)=>{
        try{
            const response = fetch('adgkjflkj');
            const data = response.json();
            return data;
        }catch(error){
            return rejectWithValue(error.message);
        }
    }
)

we dont have to write the dispatch in this code it is done by this thunkAPI  AUTOMATICALLY 
if we do fetch(20); 

first he do pending request by itself like for loadingData 
now we dont take any tension to write any dispatch it is automatically done by thunkAPI

it takes just Action : type -- like Coin/fetch then what he do is 
initally it send this just take coin/fetch add pending and payload undefined and send like this 
--{type : 'Coin/fetch/pending' , payload : undefined},

when data is coming  then it take the take code/fetch add fufilled and payload contain ur return data and send it like this
--{type : 'Coin/fetch/fullfiled' , payload : data}

if any error is there then it send  this  add rejected and payload add ur error message
--{type : 'coin/fetch/rejected' , payload : "error_message"}

its just created the action take name from us by asking the action : type then add pending/fulfilled / rejected and payload acc to situation that's it basically this is FORMAT OF IT so remember it 
initally we do it by urself now thunkAPI do it 

Now we have to create Slice too as we are not creating dispatch it didn't means we do not make function of it means the slice and its functions for this  liek data , loading , error-- 
import  {createSlice } from "react-redux"


const slice1 = createSlice({
    name : "slice1",
    initialState : {data : [] , loading : false , error : null },
    reducers : {},
    extraReducers : (builder)=>{
        builder
        .addCase(Fetch.pending);
        .addCase(Fetch.fulfilling);
        .addCase(Fetch.rejected);
    }
})


this await fetch('api') -- it is asynchronous because we have to wait until we get the data 
so here we have to left reducer empty 
here we need extraReducer 
this builder is object

in .addCase()
it is handled  all the cases for all this three cases 
--{type : 'Coin/fetch/pending' , payload : undefined},
--{type : 'Coin/fetch/fullfilled' , payload : data}
--{type : 'coin/fetch/rejected' , payload : "error_message"}

extra reducer is same like normal reducer --
in normal we write this -- 
reducer : {
    Incere : (state) =>state.count++;
}
it takes {type : slice1/increm}


in extrareducer -- we take {coin/fetch/pending} in this way we dont take which slice
now the code  --

const slice1 = createSlice({
    name : "slice1",
    initialState : {data : [] , loading : false , error : null },
    reducers : {},
    extraReducers : (builder)=>{
        builder
        .addCase(Fetch.pending , (state)=>{
            state.loading = true,
            state.error = null,
        });
        .addCase(Fetch.fulfilling , (state)=>{
            state.data = actions.payload,
            state.loading = false,
        });
        .addCase(Fetch.rejected , (state)=>{
            state.error = actions.payload,
            state.loading = false,
        });
    }
})

we just have to handle these actions and these actions dont have slice name 
--{type : 'Coin/fetch/pending' , payload : undefined},
--{type : 'Coin/fetch/fullfilled' , payload : data}
--{type : 'coin/fetch/rejected' , payload : "error_message"}

it check all the actions and fullfilled case acc to it

now export it
export default slice1.reducer;
export {FetchData()}

like there is no functions in reducer so there is no need to export the actions like const {} = slice.actions -- 


at last we make 2 things --

import {createAsyncThunk} from "reacttoolkit";

const FetchData = createAsyncThunk(
    //Action : type : payload 
    'coin/fetch' ,
    async(args, thunkAPI)=>{
        try{
            const response = fetch('adgkjflkj');
            const data = response.json();
            return data;
        }catch(error){
            return rejectWithValue(error.message);
        }
    }
)


import {createSlice} from "@reacttoolkit";

const slice1 = createSlice({
    name : "slice1",
    initialState : {data : [] , loading : false , error : null },
    reducers : {},
    extraReducers : (builder)=>{
        builder
        .addCase(Fetch.pending , (state)=>{
            state.loading = true,
            state.error = null,
        });
        .addCase(Fetch.fulfilling , (state)=>{
            state.data = actions.payload,
            state.loading = false,
        });
        .addCase(Fetch.rejected , (state)=>{
            state.error = actions.payload,
            state.loading = false,
        });
    }
})


now we have to make store 
import store ...
import slicer ...

...in normal way u have to do this

 at last export it 

 Here are the two API links from the image:  APIs TO USE FOR THE PROJECT
https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,litecoin
https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20


now the final code be like -- 
import React from "react";
import ReactDOM from "react-dom/client";
import Store from "./store";
import { Provider } from "react-redux";
import CoinCreate from "./coinCreate";

function Show(){
    return (
      <Provider store ={Store}>
      <CoinCreate/>
      </Provider>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Show/>)

in main file we have to write Provider with store whatever wrapup into this can access store data 

import {useDispatch, useSelector} from "react-redux";
import { FetchData } from "./slicer";
import { useEffect } from "react";
import CoinCard from "./coinCard";



export default function CoinCreate(){
   
    const dispatch = useDispatch();
    const {data , loading , error} = useSelector((state)=> state.slice1)

    useEffect(()=>{
        dispatch(FetchData(20));
    },[])

    //how we Display the information of 20 user

    if(loading){
        return <h1>Data is loading</h1>
    }

    if(error){
        return <h1>Error has Occured</h1>
    }

    return (
        <>

        <div style={{display : "flex" , justifyContent : "center" , alignItems :"center" , margin : "10px" , flexWrap : "wrap"}}>
            {
                data.map((value)=>{
                    return (<CoinCard key = {value.id} coin = {value}></CoinCard>)
                })
            }
        </div>
        </>
    )


}
from this code we just get data from slicer data , loading , error 
then we check some condition and show data in form of cards

here we are using dispatch(FetchData(20)) in useEffect 
this fetchData is not an actions 
we know whatever go with dispatch it go to store then store check it type like slice and execute function 

but in this case it is function not an action so there is an Middleware thing like store dont know how to handle this fetchData function so middleware says call this function not to go to store 