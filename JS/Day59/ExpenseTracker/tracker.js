const addbtn = document.querySelector("#addBtn");
const expinp = document.querySelector("#expenseName");
const amtinp = document.querySelector("#expenseAmount");
const taskList = document.querySelector("#expenseList");
const totalAmt = document.querySelector("#totalAmount");

let arr = [];

addbtn.addEventListener("click", () => {
  const expval = expinp.value;
  const amtval = Number(amtinp.value);

  //edge case
  if (expval === "" || amtval === 0) {
    return;
  }

  const taskItems = document.createElement("li");
  taskItems.setAttribute("class", "expense-item");
  taskItems.textContent = `ExpenseName is : ${expval} , Amtval is :   ${amtval}`;
  taskList.append(taskItems);
  expinp.value = "";
  amtinp.value = "";

  const delbtn = document.createElement("button");
  delbtn.textContent = "Delete";
  delbtn.setAttribute("class", "deleteBtn");
  taskItems.append(delbtn);



  delbtn.addEventListener("click", () => {
    taskItems.remove();

    arr = arr.filter((amount) => {   //filer the remaining amount , recalculate it then put it into total amount 
      return amount !== amtval;
    });
    let result = arr.reduce((acc, curr) => {
      return acc + curr;
    }, 0);

    totalAmt.textContent = result;
  });



  //LOGIC FOR TOTAL AMOUNT TO APPEAR
  arr.push(amtval);
  let result = arr.reduce((acc, curr) => acc + curr, 0);
  totalAmt.textContent = result;
});

//logic for total
// let arr = [10 ,30,30];

// let result = arr.reduce((acc,curr) => acc + curr , 0);
// console.log(result);
