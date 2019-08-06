document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form');
  let tasks = document.getElementById('tasks');
  let input = document.querySelector('#new-task-description');
  
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    // if user inputs new todo
    // if user selects 'red'
      // update background color of li
    let li = document.createElement("li")
    // gets.chomp = trim()
    let textnode = document.createTextNode(input.value.trim() + " ");
    li.appendChild(textnode)
    let priority = document.getElementById('dropdown');
    li.className = priority.value
    tasks.appendChild(li)
    

    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "X";
    li.appendChild(deleteButton);

    deleteButton.addEventListener("click", function(e) {
      tasks.removeChild(li);
    })
  })

});