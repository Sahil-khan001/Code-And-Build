const Btn = document.querySelector('#addBtn');
const taskinp = document.querySelector('#taskInput');
const tasklist = document.querySelector('#taskList');


// Get old tasks from localStorage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];



// Show old tasks after refresh
tasks.forEach((task)=>{

    const taskItems = document.createElement('li');
    taskItems.classList.add('task');

    taskItems.textContent = task;

    // Delete button
    const delBtn = document.createElement('button');
    delBtn.className = "deleteBtn";
    delBtn.textContent = "Delete";

    taskItems.appendChild(delBtn);

    tasklist.append(taskItems);

    // Delete task
    delBtn.addEventListener('click', ()=>{

        taskItems.remove();

        tasks = tasks.filter((item)=>{
            return item !== task;
        });

        localStorage.setItem("tasks", JSON.stringify(tasks));

    });

});




// Add new task
Btn.addEventListener('click' , ()=>{

    const taskVal = taskinp.value.trim();

    // Prevent empty task
    if(taskVal === ""){
        return;
    }

    // Create li
    const taskItems = document.createElement('li');
    taskItems.classList.add('task');

    taskItems.textContent = taskVal;

    // Create delete button
    const delBtn = document.createElement('button');
    delBtn.className = "deleteBtn";
    delBtn.textContent = "Delete";

    taskItems.appendChild(delBtn);

    // Add into ul
    tasklist.append(taskItems);

    // Clear input
    taskinp.value = "";



    // Add task into array
    tasks.push(taskVal);

    // Save into localStorage
    localStorage.setItem("tasks", JSON.stringify(tasks));



    // Delete logic from both screen ui and from local storage too
    delBtn.addEventListener('click', ()=>{

        taskItems.remove();

        tasks = tasks.filter((item)=>{
            return item !== taskVal;
            //because of this only js array change 
        });

        localStorage.setItem("tasks", JSON.stringify(tasks));
        //because of this same changes appeared in broswer too

    });

});