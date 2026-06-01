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

 
 //REMEMBER -- one thing when u are writing code in component and u are using any hooks like usestate , useeffect so MAKE SURE U IMPORT IT FROM REACT OKK


 key should be inside opening tag:
<!-- <div className="Card" key={value.id}> -->

//if u are using the JS in JSX that is react then make sure it is returning something 
//Our JSX know how to read array data 



