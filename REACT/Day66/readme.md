Remember -- whenever u download anything from npm it goes into node modules 

//lets talk about veet
//npm install -- node modules 
//npm init -- package.json  -- u save to set this by filling up the details 

//we have 2 types of Dependencies 

//Normal Dependencies -- onto which node modules created 
//Dev Dependencies -- we use this while we are writing the code 

//we put only normal Dependencies code into Production not DevDependencies 

//for the Vite usecase -- 
//commands are -- 
1. npm create vite@latest  -- to make a vite project
2. npm run dev             -- to run prject


//go into vite-project 
//npm install -- to download node modules or all dependencies  //if there is no node modules 


//Note : suppose u go into a company 
//company says read the project 
//then u think first start the project to understand the physical flow 

//what u do in this case 
//go into package.json //everything is there 

//go to scripts then there are keys and values //now u want to run the project
//what u do is just write npm run 1st key //also that 1st key is either dev or start
//eg npm run start/dev

//now u want production ready code u write 
//npm run build //this build is 2nd key 
//now ur production ready code is in the dist folder as u know

//basically these are scripts u can edit these keys also 
//because the imp. part is values we dont remember these values so we just add alternative name of it into the keys 
//and we can edit it also so we remember it 

 //also in package.json we have dependencies 
 //so u can see that ur company project depends on which dependencies and DevDependencies

if u download somthing from npm like parcel and u want this parcel as a Dev Dependencies not a normal Dependencies then u have to use this command 

npm install -D parcel

use -D for dev dependencies
<!-- ==================================================================================== -->

NOW MOVE TO PROJECT --

First initialize the project
npm init  -- for package.json set name , others things acc to u 

then what framework tool u want to use 
npm install react
npm install react-dom 

tool as a Dev Dependencies
npm install -D parcel 

//if u want to see this then in package.json there is parcel is in dev dependencies not in normal dependencies

--make sure u write type = "module" in html 
//because while using the import react , import react-dom we need this 

//also we are doing everything manually 
//but in vite -- vite do it by self


//if u want to install node modules then first make package.json with all tools then at last make node modules 
//npm init
//npm install react
//npm install react-dom
//npm install -D parcel
//npm install node modules

//SOMETIME this  -- npx parcel index.html -- it not work or not create localhost
//so for this we have to remove this main file
//sometimes its because of this main file 

  "license": "ISC",
  "author": "Sahil khan",
  "type": "commonjs",
  "main": "script.js",   to 

  
  "license": "ISC",
  "author": "Sahil khan",
  "type": "commonjs",

  //some people say that the react function should be in Capital Letter 

  //in JSX -- only expression can write -- which produce Output
  //u cannot write statement in JSX 

  //expression like number , string , array with obj contains 
  //u cannot put obj 

  //in JSX there is a different way to call function using first letter be capital
  //it is because so that JSX understand difference between HTML TAG and USER DEFINED TAG 

  //html tag is -- we have html tag -- <div> , <h2> , <p>
  //userdefined tag is -- that we defined <Greet/>

  //SO it is rule of JSX not of react 

  //how to pass arguments in this then we do in this way we have to write inside this 
<Greet name = "sahil" />


//so what is props -- we pass arguments the props catch that arguments in an object 
//so basically props are Object 
//u can check it on console -- console.log(props);

//React do this so that we can learn like 

//in normal HTML -- <h1 id = "first"  className = "popt"><h1/>
//in JSX function call arguments be like -- <Greet name = "sahil"  age = "23"/>

// eg2 

// function Detail(props){
//     return <h1>Your details are : {props.name}  {props.age} {props.dept} </h1>

// }


// const callfunc = <Detail name = "sahil"  age = "23" dept = "cse"/>;

// root.render(callfunc);


//SOME TIPS TO MAKE PROJECT 

-- u can use direct height and width in img 
-- u can link css then do styling
-- react js same like html just instead of class  -- className  


-- You can give className to an HTML element then do styling in it if it is not available 
--use width , height in px , 
-- use of position : relative to move top , bottom ,left  , right 


// Dont u think writing all the code of different functionality in one page 
-- the code becomes too messy

so for this we use Modules --
we are using it muliple time for diff work
like in this code we have a function of card , header
/so module say put each function in a new file make new js file and put into it
//we can put the main one into main file but for other make  a new JS file


//it is not a rule but for developer it is good
//to become code readable


//at the end react is a library
//there is no rule we have to make a diff file but to make readable code u can do this 


//so these diff function are COMPONENTS / MODULES 
//now to put these components 

-- so for this make a component folder and put all compo into  it 

before make component folder 
make Src folder and put ur final project JS file into it 
then make Component folder and make new JS file and put function into it with file name that is function name 

//now u think how to connect these too -
usind module concept -- so we have to import these component 
but before import we have to write export also so for this we have two option 

-- in component file write -- export default functionName
-- u can direct write in front of function 

--u can also write .js file to .jsx 
but u can use any one of them 

-- but the choice is if u are using jsx code then write .jsx file name

//also u have to change the html script src file to diff src file in which u have ur main file 

//for dummy data , repeative things that u are using u have to make a utils folder into src in which u have dummy.js file in which dummy data is there 
//also u can't use default export in front of these like const , let 

a file only have only 1 export default , rather u can use export -
-- Means only 1 export default
-- Multiple export u can use 

-- export default -- import comName from ..
-- export -- improt {} from ..

-- u can rename the file using as 
--suppose u alreay use this name into ur myntra file so u can use diff name using as newName using this keyword

//Because of React we can write readable , nor messay code 
//also it can manipulate DOM in a best efficient way 
//we just have to focus on the  Ui formation 
//and the DOM manipulation part it handled it by itself 

we have seen use case of useState() -- like whenever a data is changing or state is changing like in count example it is NUMBER the count increase as we see in using setfunction with variable count it means whereever the variable value is updating the use state update the variable 

but in case of this project we have an array we know its addresses stored in call stack and value is in heap but in case of number it directly stored in stack so what happened if we trying to use use state in this array the main card taking this array is previous one even if after sorted so for this we gonna use  
basically the main card it says it can't change the array it says it reference is same 
because it saw the value on the stack not the heap so for this we have to make an duplicate array like 

note : js manipulate dom again and again but REACT dont manipuate it is more optimized 

//in this case he saw reference is same because we know that in case of array and object they store in reference like address is in reference/stack and value is in the heap so we dont have to change so we make a duplicate like for the array 

setA([...A]);
//because this one reference is diff now it render it into the main UI

//when u make another button for filter logo above 499rs then u can do in this way 
const B = arr.filter((val) => val.price > 499);
SetA(B);

how it works -- 
it call the main function and in A vairable it put B value hten what happened 
where A is used it gonna update with this filter 

Final Rule (Very Short)

✅ If a method returns a new array, directly do:

setA(result);

Examples:

filter()
map()
slice()
concat()

⚠️ If a method changes the existing array, create a new copy:

setA([...A]);

Examples:

sort()
reverse()
push()
pop()
splice()
Easy Memory Trick

New Array → setA(result)

const B = A.filter(...);
setA(B);

Same Array Modified → setA([...A])

A.sort(...);
setA([...A]);

That's the rule you'll use 90% of the time in React state updates.








