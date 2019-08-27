document.addEventListener("DOMContentLoaded", () => {
  let form = document.getElementById("create-task-form")
  form.addEventListener("submit", processForm)
});

function processForm(e) {
    e.preventDefault();
    let inputField = document.getElementById("new-task-description")
    let taskDescription = inputField.value
    let priority = document.getElementById("priority").value

    addItem(taskDescription, priority)
    inputField.value = ""
}

function addItem(taskDescription, priority) {
    let taskList = document.getElementById("tasks")
    let newTask = document.createElement("li")
    let newTaskText = document.createTextNode(taskDescription)
    let taskColor
    switch(priority) {
        case "high":
            taskColor = "red"
            break
        case "medium":
            taskColor = "yellow"
            break
        case "low":
            taskColor = "green"
            break
    }
    newTask.style.color = taskColor
    newTask.appendChild(newTaskText)
    taskList.appendChild(newTask)
    let deleteButton = document.createElement("button")
    deleteButton.innerText = "X"
    newTask.appendChild(deleteButton)
    deleteButton.addEventListener("click", deleteTask)
}

function deleteTask(e) {
    e.target.parentElement.remove()
}
