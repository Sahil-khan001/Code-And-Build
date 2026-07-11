Lets make a Project -- 
Resturant Backend (CRUD OPERATIONS) --
we have 

PostMan -- which do some http frontend request to backend to test api and backend 

Server--
we have 2 users
ADMIN  -- Add FoodItem in foodMenu (means in the original Database)
          Delete FoodItem from foodMenu (from the original Database)
          update the price in the foodMenu 


USER -- Add item in cart 
        Delete item from cart
        look at in cart 
        can see all food items

for the USER we have to make a AddtoCart[] array as well 

for this first we have to make a Database first for the foodMenu -- 
then we make app.get request so that anyone can access the foodMenu

then if admin want to add food item in database that is foodMenu how he do it
if he use post then /admin  anybody can write this add anything
but how we can find the real admin 

because anyone can make a request on this link 
so how can we differentiate whether this request is by admin or user
when u login into insta and doing some chat 
at that time if i copy that specific link and give it u 
then can u access that insta account 
-- no

so how is this possible -- what backend behind it -- 
through which he can create a differentiate 

-- here we need to do the Authentication and Authorization 
diff b/w this --

Authentication -- it means verification - with right password - right user - whatever i am claiming - i am right user 

Authorization -- after login -- what power u have -- u can create a video , like , follow/unfollow , u can make a post 
but u can't delete other's post , u can't read other's chat 

we will study about it later fully like what is tokens , everything later 
right now we just use some code for use this concept --
means when admin came it have some token if its token match with our token then we give access that what we are doing -- 
const token = "ABCDEF"
const Access = token === "ABCDEF" ? 1 : 0;

if user have this token then we give access otherwise not -- we discuss about it later 
right now we are using this code to use this Concept 







