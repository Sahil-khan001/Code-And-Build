today we gonna discuss about use param 

that helps us to select dynamic root

like yesterday what we are doing we have to write after slash / where we want to go 
but now you can write any name  it automatically take u there

also when u go to swiggy website u see everytime there is new number after slash /654565  , /8768
so how we make this dynamically website

use param is used to extract data from dynamic root 

first we have to import use param
import {useParams} from "react-router";

export default function Github(){

    const data = useParams();
    return (


    )
}

-- this useParam give u data in the form of object 
-- whatever name u write after the / it is going to show in object 
-- u can also destructure it write name in data = {data}

now what u want to do -- 
u have to fetch the data from the api ;

--suppose u fetch the data and u know useeffect work at last 
and in initially u set profile with null and u print it on ui too but it give error of null because useeffect work at last after set profile so for this u can use -- 
? keyword it means when value is there then print it 
<{Profile?.login}> -- it means if there is value then go ahead and print login value otherwise stop here


//NOW WHAT WE HAVE TO DO IS == 
we have to add a button when clikc on button then it take u that on that page that is routing page 
we do it using nav link




