



document.addEventListener("DOMContentLoaded", () => {


});



form = document.querySelector("form")
form.addEventListener("submit", submitHandle)

array = []
function submitHandle(e){
  e.preventDefault()
  let td = document.querySelector("#new-task-description").value
  let list = document.getElementById("tasks")
  let listItem = document.createElement("li")
  listItem.innerHTML = td
  list.appendChild(listItem)
  let deleteItem = document.createElement("BUTTON")
  listItem.appendChild(deleteItem)
  // deleteItem.addEventListener("click", function(){
  //   list.removeChild(listItem)
  // })
  deleteItem.addEventListener("click", function(){
    listItem.remove()
  })
    let ps = document.querySelector("#prioritySelector").value
    listItem.dataset.priority = ps 
    array.push({item: listItem, priority: ps})
    array.sort(function(a, b){return a.priority - b.priority})
    debugger
    switch (ps){
    case "1":  
    listItem.style.color = "red"
    break
    case "2":   
    listItem.style.color = "yellow"
    break
    case "3":
      listItem.style.color = "green"
      break
    }
    
 
  



}
