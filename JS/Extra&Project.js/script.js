// export function sum(a,b){
//     return a+b;
// }

// const { createElement } = require("react");


// export default function multiply(a,b){
//     return a*b;
// }

//JS FOR THE TO DO 

const addButton = document.querySelector('#addBtn');
const input = document.querySelector('#taskInput');
const list = document.querySelector('#taskList');


addButton.addEventListener('click', () => {

    const inputVal = input.value;

    if(inputVal === ""){
        return;
    }

    const taskItems = document.createElement('li');

    taskItems.innerText = inputVal;

    list.append(taskItems);

    input.value = "";


    const delButton = document.createElement('button');
    delButton.innerText = "Delete";
    taskItems.append(delButton);

    
    // delButton.addEventListener('click' , ()=>{
    //     taskItems.remove();
    // })

    taskItems.style.cursor = "pointer";

    taskItems.addEventListener('click' , ()=>{
        taskItems.remove();
    })

});
