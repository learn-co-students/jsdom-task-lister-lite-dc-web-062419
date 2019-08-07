document.addEventListener("DOMContentLoaded", () => {
  const formEl = document.getElementById("create-task-form");
  const inputEl = document.getElementById("new-task-description")
  const todoEl = document.getElementById("tasks");
  const priority = ["red","yellow","green"];
  const priorityHash = {red: 0, yellow: 0, green: 0};
  let newTaskText = "";
  let newTaskColor = "";
  let insertNum = 0;
  let taskToDelete;

  formEl.addEventListener('submit', function(e){
    // Make sure submit doesn't reload page
    e.preventDefault();
    // Make new task element
        // newTaskText = (e.target[0].value); <- replaced this with next line
    newTaskText = (inputEl.value);
    newTask = document.createElement("li");
    newTask.innerText = newTaskText;
    // Color task element by priority
    priorityChoice = e.target[0].form[1].options.selectedIndex;
    newTaskColor = priority[priorityChoice];
    newTask.style.backgroundColor = newTaskColor;
    // Insert task into list in order of priority
    if (newTaskColor === "green" ){
      todoEl.appendChild(newTask);
    } else if (newTaskColor === "yellow" ) {
      insertNum = priorityHash["red"]+priorityHash["yellow"];
      todoEl.insertBefore(newTask, todoEl.children[insertNum]);
    } else {
      insertNum = priorityHash["red"];
      todoEl.insertBefore(newTask, todoEl.children[insertNum]);
    };
    priorityHash[newTaskColor]++; // Update tracker of color counts
    // Add delete button to task
    newDeleteButton = document.createElement("button");
    newDeleteButton.innerText = "X";
    newTask.appendChild(newDeleteButton);
    newDeleteButton.innerText = "X";
    newDeleteButton.dataset.task = newTaskText;
    newDeleteButton.addEventListener('click', function(e){
      taskToDelete = e.target.parentElement;
      taskToDelete.remove();
    });
  });
});
