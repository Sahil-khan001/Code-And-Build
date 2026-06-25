LETS START THE REACT PROJECT THAT IS SWIGGY 

some tips for Tailwind -- 


w-40  -- it means 40 * 4 = 160px    w-1 means = 1px 
h-12 -- it means 12 multi 4 == 48px

if u want to write color in #FFF like this then use 
bg-[#fff] -- in this way 

container mx-auto  -- both side margin of header 
also because of container we get more responsiveness 

flex gap-15 
items-center 

sometime check ctrl + +/- -- for screen resolution make it 110% or 100%


position - relative , absolute --           relative , absolute 

max-w-[60%] 
container mx-auto
w-[40%]

now WE HAVE CREATED THE HEADER PART -- 

now move to next part 

then next part is section in which some images appear the more we scroll on x and y more images appearing 
so this data is coming from server side rendering and give us html file 

HOW These Images are coming -- actually in swiggy server side rendering is happening means data is fetching in server side and it send u a html file with the data present 

server side -- all files executing , all fetching operation then at last give a final HTLM DOCS File 

it send html file with the Object and there is no need to fetch data from anywhere
it render it server side and sent  u a html file 

now copy that file and in own code make tester.html file and put that code 
then search image with its name and u will get details regarding it

like search pizza u get some info in which action is there in which u have image  and data too
for image u have to copy url and add with the normal url of image after /upload copy this url from normal images url

 "id": "2568016",
                                                "imageId": "PC_Mweb/Pizza.png",
                                                "action": {
                                                    "link": "https://www.swiggy.com/collections/83631?collection_id=83631&search_context=pizza&tags=layout_CCS_Pizza&type=rcv2",
                                                    "text": "Pizzas",
                                                    "type": "DEEPLINK"





something like this just copy img url from here and add after normal img url 
https://media-assets.swiggy.com/swiggy/image/upload/PC_Mweb/Pizza.png  like this 
basically it send data in html file 


SO THIS IS SERVER SIDE RENDERING --

SUPPOSE U MAKE A REQUEST TO THE SERVER FOR  ANY WEBSITE --

Server give u HTML file then css then js 
then js have some fetch api then u request for this data then ur full page load and show 

but in SERVER SIDE RENDERING --
IT do all these tasks at server side html , csss, fetch operation 
and at last gives u final HTML DOCS WITH FULL DATA 
there is no call again and again to the server 
THAT EXACTLY NEXTJS DO 



now we have to take out data acc to ourself form this server side re rendering html file
search imagegrid then take out all data
then make utils fooddata.js then remove unnessary part and make same like data in an array in the form of OBJECTS so that we can access it easily
when u have lot code -- u can disable stick scroll 

now lets make the middle part 
foodOptions.js in this we gonna show Dynamic DATA on ui

now u have data in json form means in the form of Objects in an Array now can make any card by taking data dyanmically 
some tips for some code

 <!-- {/* <img className="w-46 h-45" src={`https://media-assets.swiggy.com/swiggy/image/upload/${value.imageId}`}/> */}
                <img className="w-46 h-45" src={"https://media-assets.swiggy.com/swiggy/image/upload/" + value?.imageId}/> -->


                u can use any of them 

also make sure u are using ? if image and data is there then show me otherwise it give u ERROR 

 <a href={value?.action?.link}>
                <img className="w-46 h-45" src={"https://media-assets.swiggy.com/swiggy/image/upload/" + value?.imageId}/>
                </a>


                make sure u can use ? so that if data is dont exist then dont go ahead

                Why?

flex-nowrap → keeps items in one row
overflow-x-auto → horizontal scroll
shrink-0 → prevents cards from compressing/squeezing inside flex container

Without shrink-0, cards try to fit inside container width.

<!-- ========================================================================== -->
1. grid-flow-col

Normally grid works like this:

grid

default direction is:

row

Meaning:

1 2 3
4 5 6

Items go left → right.

But you used:

grid-flow-col

Now direction changes.

Now grid fills TOP → BOTTOM first.

Like:

1 3 5
2 4 6

Meaning:

first fill row 1
then row 2
then create NEW COLUMN

THIS is the key for horizontal layout.

WITHOUT grid-flow-col

With:

grid grid-rows-2

you get weird behavior because grid still thinks in rows.

WITH grid-flow-col

Grid now says:

"Okay, create columns continuously."

That creates horizontal expansion.

2. w-max

This is EVEN MORE important.

Normally div width is:

100%

Example:

<div className="grid">

means:

width = parent width

But horizontal scroll only appears when content becomes wider than parent.

So we use:

w-max

Meaning:

"take as much width as content needs"
EXAMPLE

Suppose:

each image = 150px
total columns = 10

Then inner div width becomes:

1500px

instead of:

100%

NOW parent detects:

"OH content bigger than me"

then:

overflow-x-auto

shows scrollbar.

WITHOUT w-max

Inner grid width stays:

100%

So:

content tries fitting inside
no proper horizontal expansion
scroll may fail
VERY SIMPLE MENTAL MODEL
grid-flow-col
"make new columns horizontally"
w-max
"become as wide as all content together"
BOTH TOGETHER
grid-flow-col + w-max

means:

Create infinite horizontal columns
AND
allow container width to grow

THAT creates horizontal scroll.
<!-- =========================================================================================== -->


now move to the next section --

option -- ? it used for -- if that link is not exist then dont give me ERROR

{value.info.id} -- if  there is no link exist of info then dont go ahead and dont give me error THAT IS WHAT OPTION KEYWORD DO -- 

NOTE : u can use shrink : 0  or flex-none ------ u can use any of them 


suppose u have -- mediaFiles : [
{
    name : "sahil",
    age : 34 
},
    {
        name : "khan",
        age : 22,
    }
]

mediaFiles[0].name;  ------ remember this analogy 

sometime in some images u set context with the help of absolute and left : 0 , bottom : 4
ALSO sometime u have to add 
gradient color to it - so syntax be like u can check on tailwind site 

bg-gradient-to-t from-black h-16 bottom-3 left-0 right-0
U CAN set acc to u 

NOW MOVE TO THE ROUTING CONCEPTS --

what happenend when we click on a resturant more details about it open with menu
when click on 2nd restu it also open in same format with diff

so we can say we just have to make a single component in a format just the data is changing nothing else 

THE RESTURANT PAGE WE WILL BE BUILD BY MANUALLY -- there is no problem
but for the next page to fetch the data what to do

and when we click on diff resturant then it will show -- restu details acc to  it
so there is an api call with diff restu id full api same just change in resturant id 

so we need just restu id 
and when u were on resturant page then the restu id come with it with every restu data we can show this restu id by seeing data in JSON object

   "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                    "info": {
                      "id": "622616",
                      "name": "Domino's Pizza",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/6/5/855cd7a0-9c4e-473a-b8fc-904b36e24aea_622616.JPG",
                      "locality": "3rd Sector",
                      "areaName": "Rohini",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Pizzas",
                        "Italian",
                        "Pastas",
                        "Desserts"


                        suppose this api data u getall these info now u make a card 
                        also now u have resturant id 

now when we click button of that resturant we know where we have to route from where we have to fetch the data which api call we have to call we just want the resturant id 
Now the Api with the resturant id we will direct to that specific resturant page 


first we show the card using this data
"info": {
                      "id": "622616",
                      "name": "Domino's Pizza",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/6/5/855cd7a0-9c4e-473a-b8fc-904b36e24aea_622616.JPG",
                      "locality": "3rd Sector",
                      "areaName": "Rohini",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Pizzas",
                        "Italian",
                        "Pastas",
                        "Desserts"


then we call this API with specific resturant id --

https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=28.7040592&lng=77.10249019999999&carousel=true&third_party_vendor=1


now this resurant id is for Dominos pizza -- 622616
then it redirected to specific dominos page or menu 

what we are doing intially we have the data present in a file we just importing it use it directly
data.map((value)) -- like this and show on ui

but now we dont have have data what we do it we fetch our data with the swiggy live api after fetching the data save into useState variable then show it on UI

here usestate is used to store the dynamic js 

this is our first API -- https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=28.7040592&lng=77.10249019999999&carousel=true&third_party_vendor=1

we fetch the data using async function within the useeffect 

now it showing failed to fetch the data due to CORS policy 
What is this CORS policy -- 

what happen when we directly type api in browser he gets us data it means 
swiggy is requesting to its server to get data

but now u make clone frontend and make request  then server gets the data but what happen
brower see that origin of ur swiggy clone and server is different  
then by default it cannot full the information 

all the permission is in swiggy header is in the server it allows permission to access the data so in this server it disallowed that's why we cannot access it 

other api like github , weather api they work because in their server header section they allowed to access it 

so we study it about in backend about CORS 
in simple if both origin is same then it allowed 
                     or 
in server answer in header it should be written cross origin allowed then it allowed 

Origin means -- both deployed in same domain or both frontend or backend by same company
in our case frontent is mine , other is their

TO SOLVE THIS PROBLEM we use -- third party server basically the problem is browser we know server giving us data but because of browser we cannot access it so this server gets the data show some modification in own header section means it allowed Cross origin then browser give access to it also 

SO THE API IS -- cors-anywhere.herokuapp.com
it allowed u to do cross origin 

code be like -- 
const proxyServer = "https://cors-anywhere.herouaapp"
const swiggy = "put swiggy api here "
const response = await fetchData(proxyServer + swiggy);
const data = response.json();
setData(data);


in this way we gonna access the data 
now u can easily show it on ui

Why this happens

Browser blocks direct request to Swiggy because of:

CORS Policy

So you used a proxy server:

https://cors-anywhere.herokuapp.com/

But that proxy requires manual activation.

Solution

Open this URL in browser:

https://cors-anywhere.herokuapp.com/corsdemo

Then click:

Request temporary access to the demo server

After that:

Refresh your React app

Then data should come.

Another important thing

Swiggy APIs sometimes block browser requests completely.

So even after proxy access, it may still fail.

In real-world projects developers usually:

create their own backend (Node.js/Express)
fetch API from backend
frontend calls backend

Because many public APIs block direct frontend requests.



total we have -- proxy url -- target url 
first write proxy url and we have to say proxy url get me data from this target URL by bypass CORS POLICY


<!-- ======================================================================================================================= -->
first api  == 

https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=28.7040592&lng=77.10249019999999&carousel=true&third_party_vendor=1


//Use external API is not good after sometime it change structure again and again sometime data in cards[2] sometime [3] or [4]
Better to create own backend using express 

HOW TO WORK WITH LIVE API PERFECTLY --

1. Safe Initial State

YOUR OLD:

const [Data , setData] = useState();

NEW:

const [Data, setData] = useState([]);

Why?
Because .map() only works on arrays.

If Data is:

undefined

then:

Data.map()

crashes.

2. Dynamic Restaurant Search

YOUR OLD:

data?.data?.cards[2]

Problem:
Swiggy changes indexes dynamically.

Sometimes:

cards[2]

contains restaurants.

Sometimes:

cards[4]

contains restaurants.

So I added this condition:

const restaurantData = data?.data?.cards?.find(
  (item) =>
    item?.card?.card?.gridElements?.infoWithStyle?.restaurants
);

What this does:

Loop through all cards
Find the one containing restaurants

This is the MOST IMPORTANT fix.

3. Fallback Empty Array

I added:

|| []

here:

setData(
  restaurantData?.card?.card?.gridElements?.infoWithStyle
    ?.restaurants || []
);

Why?

If API fails or data missing:

undefined

becomes:

[]

So .map() still works safely.

4. Optional Chaining in map

OLD:

Data.map()

NEW:

Data?.map()

Why?

If Data somehow becomes undefined again,
React won't crash.

5. Added console.log(data)
console.log(data);

Why?

To inspect Swiggy API structure.

Very important during API debugging.

6. Added UI Improvements

I added:

object-cover
rounded-xl

for better image styling.

Also:

restaurant name
rating
MAIN THING YOU LEARNED

Most important concept from this bug:

Never trust API structure blindly

Instead of:

"data is always at index 2"

do:

"find the correct data dynamically"

This is real-world React/API debugging.

<!-- 

Yes, every time after some time you may need to click that again because:

cors-anywhere.herokuapp.com

is only a FREE public demo proxy server.

It is not meant for permanent production use.

================================================================================================================== -->
now move to Routing -- 
now we want we we click on specific resturant it gets us there
when we write /restaurant we get into restaurants for this React routeris used 

we want this resturant page show when we write /resturant on url means when we do routing 

so we have to use routing
first npm install react-router-dom@6
clear all parcel and cache 
import {BrowserRouter , Routes , Routes} from react-router-dom

then put all component in Home js means default /
and set /rest  diff acc to u 

u can use Link first import 
so that when u click on image u can route to diff page without reloading the page 


Some tips -- 

u can use svg for diff icons 
just write code of it by GPT

when text is in same line u can use 
<span> tag too

suppose a element return an array with diff name then u can use join(", ")
u can use join(" ") -- if u want space in all the words 
{data.value.join(" ")}
whatever the array it is returning now there is a space between them 

u can set transtition and hover properties too
in main div --
className "transform  transition  duration-200  hover:scale-95"

now talk about issue -- 
when u click on image the data is fetching and showing u 
but when u click first u see a blank white page then instantly data appears this

it make user experience bad -- we want something to print like data is loading or some data may be that appear first 
or u can show 
Shimmer Effects -- it feels something is gonna show here
previously user show some spinner effect like loading type that but that is not much effective 


export default function RestaurantOption(){
    const [Data , setData] = useState([]);

        async function FetchData(){
            try{
           const proxyServer = "https://cors-anywhere.herokuapp.com/";
           const swiggy =  "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=28.7040592&lng=77.10249019999999&carousel=true&third_party_vendor=1";
            const response = await fetch(proxyServer + swiggy);
            const data = await response.json();
            setData(data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        }catch(error){
            console.log(error);
        }
    }
            
            
    useEffect(()=>{          
    FetchData();
     },[]);

// console.log(Data);
    return (
<
IN this code Initially the Data is empty then after some time the data is on the UI
but to show some written or shimmer effect we can write 

if(Data.length === 0){
    return <h1>Data is Loading</h1>
}

when user click on image 
for somemilleconds it show this data is loading then data

we do it for fake so user have hope ya data is comming 


NOw how we do shimmer effect -- 
if(Data.length === 0){
    return <Shimmer/>
}

export default function Shimmer(){
    return (

        basically we have to make same div with proper height and width with gray color at max so it look real 
    )
}


Yes. Keep these simple shimmer rules in mind:

Basic Shimmer Rules
1. Match Real UI Structure

If real card has:

image
title
rating
button

then shimmer should also have same blocks.

Example:

<div className="image"></div>
<div className="title"></div>
<div className="rating"></div>
2. Use Gray Background

Most common:

bg-gray-300

or

bg-gray-200
3. Add Animation

Most used:

animate-pulse

This creates loading effect.

4. Use Rounded Corners

Looks modern:

rounded-xl
rounded-2xl
5. Keep Proper Spacing

Use:

gap
mt
p

Bad spacing = ugly shimmer.

6. Responsive Layout

If real UI uses:

grid
flex
cards

then shimmer should use same layout.

7. Never Put Real Content

No text/images.

Only empty blocks:

<div className="h-5 w-40 bg-gray-300"></div>
8. Reuse with map()

Never repeat manually 10 times.

Use:

Array(10).fill("").map()
9. Full Page vs Component
Component shimmer

Only one card loading.

Full page shimmer

Whole screen layout loading.

10. Main Logic
loading ? <Shimmer /> : <RealData />

This is the core concept.

Golden Rule

Shimmer should look like:

“fake version of real UI before data arrives”

<!-- =====================================================================================================================
 -->

now we see routing when we click on restaurants all restu appear now we want 
like we are using routing + fetching data from live api

WE know everyrestu that we are fetching have their own id 
and that id we want to go into specific resturants

we have to used in this api -- 

https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=622616&submitAction=ENTER

https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=862163&submitAction=ENTER

know we have to read the data and fetch it properly to show on UI

Note : we have also one problem 
when fetching data from these nested APIs what happened

eg menuItems?.ItemsCard?.info --

in some case what happend after menuItems  this ItemsCard is not present direcly it first go into other object then ItemsCard
means it be liek -- menuItems > categories > ItemsCard 
so how can we handle this situation 
the code be like -- 


    if("categories" in value){
        return(
            <div className="w-full"  >
            <p className="font-bold text-lg" >{value?.title}</p>
            <div>
            {
                value?.categories.map((ittems)=><MenuCard key={ittems.title} value = {ittems}  />)
            }

            </div>
            </div>
        )
    }

u have to make like this make sure u are passing this within the same component

Now all restaurant menu appear now we have to add ARROW UP AND DOWN key align with the title means in front of it 
when u click on arrow it open when u reclick it close so for this FUNCTIONALITY we have to use hooks --

the code like -- 

    if(!isOpen){
        return (
        <div className="w-full">
        <div className="flex justify-between mr-12 ml-10">
        <p className="font-bold text-base ">{value?.title}</p>
        <button className="text-xl" onClick={()=>setisOpen(!isOpen)} >{isOpen? "˄" : "˅"}</button>
        </div>
        <div className="h-3.5 rounded w-[95%] text-center bg-gray-100 border-gray-300 ml-3 animate-pulse"></div>
            </div>
        )
    }



return (
<!-- <div className="w-full">
 <div className="flex justify-between  mr-12 ml-10">
 <p className="font-bold text-base ">{value?.title}</p>
 <button className="text-xl" onClick={()=>setisOpen(!isOpen)} >{isOpen? "˄" : "˅"}</button>
 </div> 
<div>

    {
        value?.itemCards?.map((items)=><MenuCard2 key = {items?.card?.info?.id}  items = {items?.card?.info} />)
    }
</div>


</div>

)
} -->

basically we have to use the logic to solve a problem 

eg 2 sometime we have 2 variable for one value how to handle this case

<!-- <p className="font-bold text-base">{"₹" + ((items?.defaultPrice || items?.price) / 100)}</p> --> like this 
<!-- ============================================================================================================= -->
React / Frontend Debugging Template

Save this in your mind.

1. First Check Data
console.log(data)

Always check:

array or object?
undefined?
empty?
API response shape?

Most bugs start here.

2. Handle Undefined
Use Optional Chaining
data?.price

Prevents crash before API loads.

3. Handle Missing Values
Use Fallback
a || b

Example:

items.defaultPrice || items.price
4. Before Using map()
data?.map()

Because API data comes later.

5. Loading State
if(!data) return <Shimmer/>

OR

if(data.length === 0) return <Shimmer/>
6. Conditional Rendering
condition ? true : false

Example:

isVeg ? "Veg" : "Non Veg"
7. Golden Questions While Debugging

Whenever stuck ask:

1. What data do I have?
2. What data do I expect?
3. Which line crashes?
4. Which value is undefined?
5. Is API loaded yet?
6. Array or object?
8. Most Common React Errors
Undefined Error
Cannot read property of undefined

Meaning:

Data not loaded yet

Fix:

?.
NaN Error

Meaning:

undefined + math operation

Fix:

a || b
map is not a function

Meaning:

Not an array

Fix:
Check API response properly.

9. Professional Thinking Pattern

Instead of:

Why error coming?

Think:

Which value is breaking?
Why is it undefined?
What cases are possible?
10. Real Developer Rule
Build → Break → Debug → Repeat

This is how frontend developers improve.

Not by memorizing syntax.

<!-- ==================================================================================================== -->

Now lets add the IMP. functionality in Code that is -- 
-- FILTER BUTTON FOR VEG AND NON VEG 
-- SEARCH FUNCTIONALITY 

u search any dish , restu it gives u Result 









NEW PROBLEM STATEMENT -- 

Note -- By default whenever we do routing the previous state and data is vanished that's why it reload again 
when we go into 3rd page of routing and go back then it reloads again because of point -- 
Basically it removes all the previously state because they are not stored anywhere 

so we need to solve this -- 
SO here REDUX STORE HELPS us store all the information so that when we go back it dont reloads the page agains 
it fetch the data ASAP from store 

U can use Local storage too
like once u fetch the data it stored into ur system 
u can use useQuery too

problem statement -- when back then it reloads the page again 
in 1st time it gonna reloads but not in back


 