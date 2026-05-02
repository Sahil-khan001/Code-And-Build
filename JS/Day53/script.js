// function fetch(){
//     console.log("data is fetching from backend");
//     setTimeout(()=>{
//         console.log("data feteched succesfully");
//         const name = "sahil";
//         greet(name);
//         meet(name);

//     }, 2000);

    
// }

// function greet(name){
//     console.log(`Hello this is ${name}`)
// }

// function meet(name){
//     console.log(`I hope u verify my name ${name}. I will meet u in Delhi`)
// }
// fetch();


function fetch(call_back){
    console.log("data is fetching from backend");
    setTimeout(()=>{
        console.log("data feteched succesfully");
        const obj = {
            name : "sahil",
            age : 23
        }
       call_back(obj);

    }, 2000);

    
}

function greet(name){
    console.log(`Hello this is ${name}`)
}

function meet(name){
    console.log(`I hope u verify my name ${name}. I will meet u in Delhi`)
}

function age(objj){
    console.log(objj.age);
}


fetch(age);


//whenever u fetch data from backend maximum times u got the data in object forms 

