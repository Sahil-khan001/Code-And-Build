NOTES FOR TAILWIND -- 

 COLOR -- 

bg-red-500

Color intensity : 50 to 950
50 is light more is getting dark
--green orange sky blue--
--white and black dont have any intensity-- 

--text color intensity 
text-red-400

for background color --  bg-colorname-(0 to 950)
for text color --  text-colorname-(0 to 950)

<!-- ===================================================================================================== -->

Border -- 

border -- default contain size of 1 px 

for bordersize -- border-1
                  border-2

border color intensity --

border-t , border-r , border-b , border-l
top , right , bottom , left

border-t-2 -- it means border top 2px


<!-- ================================================================================================================ -->

Margin -- 
m-1 -- here 1 points to 4px , 0.25 rem , 4px to all side            -- 16px == 1rem
mx-1 -- horizontal margin
mx-1 -- horizontal margin
my-1 -- vertical margin
mt , mb , ml , mr 

overall--    m-1
horizontal , vertical --    mx-1  , my-1
top , right , bottom , left -- mt-1 , mr-1 , mb-1 , ml-1

particular in px then use --  m-[10px]

<!-- ========================================================================================================================= -->

Padding -- 
p-1 -- here 1 points to 4px , 0.25 rem , 4px to all side                   -- 16px == 1rem
px-1 -- horizontal margin
py-1 -- vertical margin
pt , pb , pl , pr 


overall--    p-1
horizontal , vertical --    px-1  , py-1
top , right , bottom , left -- pt-1 , pr-1 , pb-1 , pl-1

if u want to give 1px padding instead of 4px then write hardcorde changes -- p-[1px]

<!-- ================================================================================================================== -->
FONT SIZE -- learn by cloth size 

Class       Font Size (rem)    Font Size (px)

text-xs     0.75rem            12px
text-sm     0.875rem           14px
text-base   1rem               16px (default)
text-lg     1.125rem           18px
text-xl     1.25rem            20px
text-2xl    1.5rem             24px
text-3xl    1.875rem           30px
text-4xl    2.25rem            36px
text-5xl    3rem               48px
<!-- ==================================================================================================================== -->
//now we know because of it code readibility is become less but after this we can't stuck in html and css file --- 

Advantage are -- better , responsive 
                dont make css file again 



suppose in AMAZON company -- 2 developers created two pages at same time 
                       in css                                                         
1 developer --   button : Green , rounded , 2px
2nd developer -- button : white , rounded , 2px

disadvantage is -- big css file 

in tailwind 

we just have to use the classes and we can use same classes in both 
2nd developer use only -- bg-white , rounded , font-sm

we can use same class multiple time using tailwind but in css everytime we have to write code and file become too heavy as well

the imp. thing is code resuability and minimum code file so that we can put it into Production ready Code 
bundler remove all unnessary code and throught this way we can get OPTIMIZATION 

now how can we use it with the react 
also u can install react and reactdom together 
npm install react react-dom 

Everything is same instead of class use ClassName 

YOU CAN USE TAILWIND EXTENSION IN VSCODE FOR BETTER SUGGESTIONS -- 

-- some imp classes --       max-w-sm   -- maximum width small
overflow-hidden    -- for content if go outside
shadow-md        -- for shadow

SOME TAILWIND FOR CARD -- 

upper div -- max-w-sm
             overflow-hidden
             bg-white
             shadow-md
             p-4
             mt-5

for image -- w-full
             h-48
             object-cover
             rounded-2xl


for h1 heading -- mt-2 , font-bold , text-2xl

for p paragraph  -- text-gray-500 , mt-2

upper div -- mt-3 , flex , justify center 
button -- bg-sky , text-white , rounded-xl , hover : bg-sky-800


