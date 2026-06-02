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

 u can't use useMemo everwhere -- use when parent do lot of re rendering otherwise dont use it -- it increases Overhead
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


