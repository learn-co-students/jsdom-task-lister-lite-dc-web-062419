document.addEventListener("DOMContentLoaded", () => {
  // your code here
});

const formEl = document.getElementById("create-task-form");
const todoEl = document.getElementById("tasks");
const priority = ["red","yellow","green"];
const priorityHash = {red: 0, yellow: 0, green: 0};
let newTaskText = "";
let insertNum = 0;
let insertSpot;
let taskToDelete;
let newTaskColor;

formEl.addEventListener('submit', function(e){
  e.preventDefault();
  newTaskText = (e.target[0].value);
  newTask = document.createElement("li");
  // todoEl.appendChild(newTask);
  newTask.innerText = newTaskText;
  newDeleteButton = document.createElement("button");
  newDeleteButton.innerText = "X";

  priorityChoice = e.target[0].form[1].options.selectedIndex;
  newTaskColor = priority[priorityChoice];
  newTask.style.backgroundColor = newTaskColor;
  priorityHash[newTaskColor]++;

  // Need to figure out nth-child selector part and finish else statement
  if (newTaskColor === "green" ){
    todoEl.appendChild(newTask);
  } else if (newTaskColor === "yellow" ) {
    insertNum = priorityHash["red"]+priorityHash["yellow"];
    insertSpot = todoEl.querySelector("ul:nth-child(insertNum)");
    todoEl.after(insertSpot);
  } else {
    console.log("hi")
  };
  //

  newTask.appendChild(newDeleteButton);
  newDeleteButton.innerText = "X";
  newDeleteButton.dataset.task = newTaskText;
  newDeleteButton.addEventListener('click', function(e){
    taskToDelete = e.target.parentElement;
    taskToDelete.remove();
    });
  }
);
