//LETS MAKE A PROJECT using the redux --

basically we make some cards each cards contain add or remove button when we click on button in cart it gonna be added or remove we want that functionality 

now we want when we click on add button it turn into remove button 
so how we do this in Cart 

const[inCart , setinCart] = useState(false);

function handleinClick(){
    return (
        if(inCart){
            setinCart(false);
        }
        else{
            setinCart(true);
        }
    )
}

<button onclick : {()=>{handleClick()}}>{inCart ? "Remove" : "Add"}<button>

//but this code create a problem like when we click on any card add button all card gonna change because inCart apply on every card 

so we have to make sure everyCard have diff inCart 
for this we have to make a addRemove.js file and return props into it 
and call this file into the main file with props passing 

then for individual cards there is different inCart -- 
now this addRemove.js file will call and if it is call then for individual there is a different inCart 
now problem is solve 

NOW MOVE TO THE MAIN TASK -- 
when we click on add button it gonna update in cart and when we click on remove it gonna delete from cart how can we do it 


UNDERSTAND THIS LOGIC FULLY  -- 
const [inCart , setinCart] = useState(false);

if(inCart){
    dispatch(RemoveItems());
    setinCart(false);
}
else{
     dispatch(AddItems);
     setinCart(true);
}

doubts learning -- 

const Store = configureStore({
    reducer: {
        slice1: reduxSlice,
    }
})

export default Store;

Notice:

reducer singular
not reducers






