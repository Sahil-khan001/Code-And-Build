//so commands are -- 

//npm init 
//then write packagename , and other accc to need 

//the it create package.json -- it have all the details regarding all data present in the code 

//then we install parcel using 
// npm install parcel
//then there is a slight change in our package.json 

//for the parcel u see the node modules is attached
//but apart from parcel why other files is coming 

//because parcel depend upon other files and these other files depend on other files 


//in node modules we have all the files that needs to run the parcel 

// eg -- someone build digital clock 
// then ohter guy build calender with help of digital clock
// then ohter guy build taskScheduler with help of calender
// then ohter guy build project x with help of taskScheduler

// then there is a guy who want to build project Y 
// //then it install npm install project x 
// //but we know project x depend on taskscheduler it depend on calander 
// //so all these extra dependencies come in a node modules so that's why it contains other files too

//whatevet the packages u install using npm install it comes in node Modules --- remember it and check it in that folder 


//NOW TALK ABOUT PACKAGE.JSON AND package-lock.json 

//In package.json we have all the things what we install with version 
//it means it contains information onto which tools and things our PROJECT depends upon 

// eg -- "dependencies": {
//     "parcel": "^2.16.4",
//     "react": "^19.2.6",
//     "react-dom": "^19.2.6"
//   }
// }

//as we see our project depend upon parcel , react , react-dom with their version 


//     "react": "^19.2.6",
//     "react-dom": "^19.2.6"

//in this version u see ^ this is caret symbol 
// 19.2.6  -- this first val is Major , 2nd is Minor , 3rd is Patch 

///this patch means bux fixes like a smallbug fix 
//suppose tomorrow this version becomes -- 19.2.7 -- it means one bug fix

//this minor means -- when u add a new functionality in ur code then this increases
// 19.3.7 -- this is minor update and the middle val is increased 


//eg for this is 

// function sum(a,b){
//     return a+b;
// }

// // after minor update

// function sum(a,b){
//     return a+b;
// }
// function sub(a,b){
//     return a-b;
// }

//so because of minor and patch our code dont breaks 

//now what is major suppose it move from 18.2.7 to 19.0.0.

//now our code breaks 

//prev we use -- 
// function sum(a,b){
//     return a+b;
// }

// after major update it like 

// function sum(a,b,c){
//     return a+b+c;
// }

//now the code breaks and before installing the update version we have to change it manually acc to version otherwise code breaks 

//earlier we do sum(3,5)-- but now it gives error because of new c variable 

//if u see caret and tilt symbol it infront of a verstion it means -- 
// ^ -- it takes only minor and Patches changes only 
// ~  -- it takes only patches changes 

//now what is Package-lock.json 
//it means it have all the information of version of exact packages 
//it contains exact version information of packages that u used in code 

//if we make a  project using a version then the other guy also use the same version in order to run it can't use other version otherwise code can't run 
//basically u stored all the info of exact version of packages u use in the project so that infuture other guy use this with exact same version 
//we see this also like same project dont work in 2 system because of these version
//so in last it have all the exact version of packages u used in the project 
//so that we can share the project with anyone 

//Note : we can't share that node modules files with anyone or in github because it is 300mb so what we do it 
//we delete it and share the remaining files

//and when the other person open this project with these file he just need one command to install the remaining part or node modules 
//he use ---   npm install 
//and node modules added 

//now how this node modules come it come because of these two files
//package.json
//package-lock.json 
//because these contains exactly which version and files we have to exacct download
//then it added because of this two commands
//it first check package-lock.json onto which dependies of version we need to install but suppose it delete 

//some people also delete this lock file then the npm depends on the package.json file and mainly the version with the imp. thing that is symbol ^caret and ~tilt symbol because there is no major update so ur code not breadk 
//so at last it depend on these version mainly the symbol ^ , ~


//so whatever u install from npm it goes into node modules 
//and information related to this node modules goes into package.json 
//and the exact version is in the package-lock.json -- exactly which version is going in the project
 

// NOTE : -
// A .gitignore file tells Git which files or folders should not be tracked or uploaded to the repository.

// Example:

// node_modules/
// .env
// dist/

// This means:

// node_modules/ → ignore installed packages
// .env → ignore secret keys/passwords
// dist/ → ignore build files

// Used to keep the repo clean and secure.