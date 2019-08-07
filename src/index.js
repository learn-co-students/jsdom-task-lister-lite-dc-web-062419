document.addEventListener("DOMContentLoaded", () => {
  const formEl = document.getElementById("create-task-form");
  const inputEl = document.getElementById("new-task-description")
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
    // newTaskText = (e.target[0].value);   OR next line
    newTaskText = (inputEl.value);
    newTask = document.createElement("li");
    // todoEl.appendChild(newTask);  // comment out when sort works?
    newTask.innerText = newTaskText;

    priorityChoice = e.target[0].form[1].options.selectedIndex;
    newTaskColor = priority[priorityChoice];
    newTask.style.backgroundColor = newTaskColor;

    if (newTaskColor === "green" ){
      todoEl.appendChild(newTask);
    } else if (newTaskColor === "yellow" ) {
      insertNum = priorityHash["red"]+priorityHash["yellow"];
      todoEl.insertBefore(newTask, todoEl.children[insertNum])
    } else {
      insertNum = priorityHash["red"];
      todoEl.insertBefore(newTask, todoEl.children[insertNum])
    };
    priorityHash[newTaskColor]++;

    newDeleteButton = document.createElement("button");
    newDeleteButton.innerText = "X";
    newTask.appendChild(newDeleteButton);
    newDeleteButton.innerText = "X";
    newDeleteButton.dataset.task = newTaskText;
    newDeleteButton.addEventListener('click', function(e){
      taskToDelete = e.target.parentElement;
      taskToDelete.remove();
      });
    }
  );
});
