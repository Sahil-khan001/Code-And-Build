-- Today task 
we have to fetch the data of 10 Github User and display it on screen 

https://api.github.com/users?per_page=${count}

https://api.github.com/users/taylorotwell

https://api.github.com/users?since=6000&per_page=20

//THIS IS GITHUB API u can fetch data from it 

 {
    "login": "mojombo",
    "id": 1,
    "node_id": "MDQ6VXNlcjE=",
    "avatar_url": "https://avatars.githubusercontent.com/u/1?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/mojombo",
    "html_url": "https://github.com/mojombo",
    "followers_url": "https://api.github.com/users/mojombo/followers",
    "following_url": "https://api.github.com/users/mojombo/following{/other_user}",
    "gists_url": "https://api.github.com/users/mojombo/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/mojombo/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/mojombo/subscriptions",
    "organizations_url": "https://api.github.com/users/mojombo/orgs",
    "repos_url": "https://api.github.com/users/mojombo/repos",
    "events_url": "https://api.github.com/users/mojombo/events{/privacy}",
    "received_events_url": "https://api.github.com/users/mojombo/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false
  },


DATA LOOK LIKE THIS now u can use this apis to show data on ur UI
//REMEMBER ONE THING -- U can only do 60 request for api in GITHUB . github set its limit remember it 

LET  START THE PROJECT 


REMEMBER -- in map like 
Profile.map(()=>{}) 
//if it is in single line then by default it return the data
//if it is in multiple line then -- WE HAVE TO USE return () statement 
//it IS SAME LIKE NORMAL CALLBACK FUNCTION --- IF WE WRITE SINGLE LINE THEN IT RETURN AUTOMATICALLY 
//but if we have multiple lines then we have to write return into it 

 
 //REMEMBER -- one thing when u are writing code in component and u are using any hooks like usestate , useeffect so MAKE SURE U IMPORT IT FROM REACT OKK


 key should be inside opening tag:
<!-- <div className="Card" key={value.id}> -->
when u make childElement u have to give key value like this so that we vertify it uniqueness

//if u are using the JS in JSX that is react then make sure it is returning something 
//Our JSX know how to read array data 

//ALSO THERE IS ONE THING -- 
when we fetch the data 
we write its function in useEffect so that we can access the data only once

we can't put it like outside because when there is any rerender in parent it gonna rerender in child as well so it creates fresh call to take data again as we already have data so it is Expensive threat

 u can't use useMemo everywhere -- use when parent do lot of re rendering otherwise dont use it -- it increases Overhead
code increase , more time taken for execution 

== WE can't use callBack() here because we represent/return the profile data only once 


<!-- {
    Profile.map((value)=>{
        return (
            <div className="Card" key = {value.id}>
                <img src= {value.avatar_url}  />
                <h2>{value.login}</h2>
                <a href={value.html_url} target="_blank">Profile</a>
            </div>
        )
    })
} -->


this part is return the array and JSX KNOW how to read the array and get value out of it 


//in INput tag we have one thing -- when we have input on ui then it is Direct Dom manipulation but in React REACT should have control over it then it manipulate

.Inp{
    margin-left: 40vw;
    height: 30px;
    padding-left: 10px;
}//SOME TIPS FOR INPUT


usestate -- this is called state variable 

//now we dont want everytime same face / profiles when we enter number of profile to show on UI
so for this we have different APIs



https://api.github.com/users?per_page=${count} -- it means per page 30/any people acc to their id like first preference -- IT WORK ON ID 

https://api.github.com/users/taylorotwell

https://api.github.com/users?since=6000&per_page=20--- but 


//IN USE CALL BACK -- it means we are using the old function because right now it dont depend on anything if there is dependencies then we can write
eg 


function greet(){
  console.log("this is not depend on anyone so i can use old function value as well");
}

this function cannot depend upon anyone then why we need to re render it again and again and allocated memory to it 
so we use -- useCallback() -- so that it used the old function value and there is no need to re render it again 

then it be like -- -

const greet = useCallback(()=>{
  console.log("this is not depend on anyone so i can use old function value as well");
},[])
//this [] is depedencies whatever u write here it depends on it like u right length so when length changes then it create new function and allocates new memory to it ...

//now u will be wondering how we know what are dependencies so u can check this function depends upon which dependencies then write all those dependencies on this [] 
when these changes then it create new fucntion 

useCallback() -- it cache a function definition between re render 
we know at time of re render the old function get removed
but here we use the closure -- it can hold that old value/outer scope value into it 

//FIRST TIME RUN BY -- useEffect();

//NOW ADD SOME FUNCTIONALITY INTO THIS PROJECT -- 

1. TRY AND CATCH FOR ERROR 
2. CALLBACK() TRY TO USE IT IF POSSIBLE 
3. SEARCH BUTTON -- U CAN WRITE NAME INTO IT THEN FETCH IT PROFILE ON UI 

 const data = await fetch(`https://api.github.com/users/${name}`);
    const finalData = await data.json();
    setProfile([finalData])

    //THIS API RETURNING only 1 object but previous api returning array 
    //because this return object so we have to wrap this into this []


    Invalid user:

https://api.github.com/users/abcdxyz123456789

returns:

{
  message: "Not Found",
  documentation_url: "https://docs.github.com/..."
}

So I checked:

if(finalData.message === "Not Found")

because GitHub itself sends that structure.


<!-- ------------------------------------------------------------------------------------ -->
Example:

const [count,setCount] = useState(0);

const test = useCallback(() => {
   console.log(count);
}, [count]);

Here callback USES outside count.

So dependency needed.

BUT your code:

const SearchWithName = useCallback(async (name) => {

   fetch(`api/${name}`)

}, []);

name is local parameter.

NOT external state.

So no dependency needed.

<!-- -------------------------- -->

SHORT FINAL ANSWER:

Why useCallback unnecessary in your code?

Because function is not passed to child components
and no optimization benefit happening.

Why empty dependency works?

Because callback does not use outside state variables.
It only uses parameters passed during function call.

<!-- ---------------------------------------------------------------- -->

Dependencies are ONLY for OUTSIDE variables

Example:

const [count,setCount] = useState(0);

const test = useCallback(() => {
   console.log(count);
}, [count]);

Here:

count

comes from OUTSIDE callback.

So dependency needed.

NOW YOUR CODE:

const SearchWithName = useCallback(async (name) => {

   fetch(`api/${name}`);

}, []);

Here:

name

is NOT from outside.

It is FUNCTION PARAMETER.

It only exists when function is CALLED.

Example:

SearchWithName("sahil")

At that moment:

name = "sahil"

So:

parameters ≠ dependencies

VERY IMPORTANT.



**USE CALLBACK() -- PRATICE PARENT CHILD RELATION 

Parent Component
function Parent(){

   const [count,setCount] = useState(0);

   const hello = () => {
      console.log("hi");
   }

   return <Child func={hello} />
}
Child Component
function Child({func}){

   console.log("child render");

   return <button onClick={func}>Click</button>
}

Now suppose:

setCount(count+1)

Parent rerenders.

Then:

hello function recreated

New memory reference.

So Child receives:

OLD func !== NEW func

React thinks:

"prop changed"

So Child rerenders too.

EVEN THOUGH logic same.

NOW useCallback

const hello = useCallback(() => {
   console.log("hi");
}, []);

Now rerender happens BUT:

same function reference reused

Child gets SAME prop.

So unnecessary rerender avoided.

THIS is the MAIN reason for useCallback.

NOT memory saving directly.

NOT old values.

NOT API optimization.

Mostly:

stable function reference

for optimization.