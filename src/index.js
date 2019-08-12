document.addEventListener("DOMContentLoaded", () => {

});


let form = document.querySelector("#create-task-form")



form.addEventListener("submit", function addTask(e) {
  e.preventDefault()
  let list = document.querySelector('#tasks')
  let task = document.createElement('li')
  let input = document.querySelector('#new-task-description')
  let button = document.createElement('button')
  button.classList.add(`button-description-${input.value}`);
  list.appendChild(task);
  task.innerText = input.value;
  input.value = ""
  task.appendChild(button);
  button.appendChild(document.createTextNode("x"));
  button.addEventListener("click", function deleteTask(e){
    e.currentTarget.parentElement.remove()
  })
  // debugger
})