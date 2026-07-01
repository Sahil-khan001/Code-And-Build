TODAY WE ARE GOING TO TALK ABOUT ROUTING --

we ussually use <a href> tag if we want to go into new html page just write html file name into href 
but what happened if we click on one link then second the RELOAD button at the top left change again and again after every click basically what happpened it
remove the old html file and show new HTML file to u 
first he go to take html file from server and it takes time that's why it takes time and complexity of ur programme increases
first take file from server , remove recent file then show the new html file 

but in react website if we click on other buttons then it can't reload because they have only 1 HTML FILE 
but in achor tag one we have 4 html file 

in react there is dom manipulation that's why data changes also while js dom manipulattion reload can't happen 
also react says make only 1 html file 


we have router library that do work efficiently for us --
LIKE in react website when we click on any button the page changes without reload and efficiently that we gonna do using React Router Library 
Basically we have to make a single html file -- 

so u have to download react router library 
npm i react router

in react near to reload when we click on button it show pages using / slash whatever we open the page 
we want this functionality like if we write something after slash then it open that page 
//this is routing basically we route form one page to other 

so router helps us to do this 

so we have first import modules from react-router-dom
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


then in code we have to write 
path and element 
first we main code 
return (
   <!-- <BrowserRouter>
      <Routes>
        <Route path="/"  element = {<Home/>} ></Route>
        <Route path="/Dashboard"  element = {<Dashboard/>} ></Route>
        <Route path="/Dashboard"  element = {<Dashboard/>} ></Route> -->

      </Routes>
      
      </BrowserRouter>
)
there is no use of sign <></> just direct broswerRouter , Routes , Route then ur path and element 
now u are routing  from one page to another 

now we have to make the buttons because we can't write these / everytime in input so for buttons 
also when u are using the react router u dont have to use achor tag <a>

we have to use 

 <!-- <BrowserRouter>
      <nav>
        <Link to = "/">HOME</Link>
        <Link to = "Dashboard">Dashboard</Link>
        <Link to = "/Contact">Contact</Link>
      </nav> -->

      we have to write under <BrowserRouter> before Routes
      now u can navigate different pages without reloading the page 

      whatever u write before routes it is going to display on the site

      / is for default page 

      route -- from here routing is start 

      path is where i have to navigate
      element is we have to render this part

      only one path and element is going to run at single time 

      when we click on inspect then it show achor tag <a> instead of this nav > link tag 
      because at the end in backend it also uses anchor tag also 
      
      NOTE -- U KNOW BROWSER CAN UNDERSTAND ONLY HTML , CSS , JS

      this is library and they are here just to easy our journey 


      NOW how to do nesting routing -- we go in a page then another page then another page
      also the header and footer is same only routes is changing

      if u want to add a another defaut page into an existing path then u have to write this into that <Route></Route>
      <Route index element = {<zero></zero>}><Route/>

      and if u want to go into another page in same page then u have to write 
      <Route path = "hello" element = {<zero></zero>}><Route/>

      u dont have to write /hello because when u write / it starting from default path without / it start where u left u off page and u can add more also in the same Router 

      and still it dont show page so for this u have to go into specific js file then u have to write 
      import {outlet} from "react-router"

      and in code u have to write 
      under the outlet tag that is -- <Outlet></Outlet>


      <Route path="/Details" element = {<Details/>} >
        <Route index element = {<Zero></Zero>}></Route>
        <Route path = "Hi" element = {<Another/>}></Route>
        </Route>

        in this way it work if u want an default page attach then use index in route as given below
        and for another page u have to write relative path in main route into it so that it start where it left off not from start
        
        and make sure u import outlet and <Outlet> in main file in which u have detail file means the main file 

//  / - if u use slash it start from root level
// hi - if u write direct name then start from after parent 

now talk about what is this outlet 

means from the details route which one i have to saw as a default 
it catch the function and show u on screen

and where u write this Outlet it gonna show at that point 
u have to use <Outlet>

when u reach at another page then u have to show some buttons so that we can reach to old buttons or another page so for this we have to write nav then link into the details page 

also u can write anywhere these nav link in another page as they also part of browserRouter because that page is under this Details page

whatever u write outside the routes is shown everywhere in the page either u are on any page

Outlet in React Router is like a placeholder where child pages/components will appear.

Example:

<Route path="/" element={<Layout />}>
   <Route path="home" element={<Home />} />
   <Route path="about" element={<About />} />
</Route>
function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

Now:

If URL is /home → Home component will show inside <Outlet />
If URL is /about → About component will show inside <Outlet />

So in simple words:

Outlet = “show nested route component here.”



