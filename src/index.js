document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("form#create-task-form")
  form.addEventListener("submit", handleSubmit)
});

function handleSubmit(e) {
 e.preventDefault()
 let task = document.querySelector("#new-task-description").value 
 let priority = document.querySelector("#priority").value 
 let listitem = document.createElement("li")
 let date = document.getElementById("datefield").value.slice(5,10)
 listitem.innerHTML = `${date}: ${task} <button type="button" id=${task}> X </button>`
 listitem.className = priority
 let list = document.querySelector("ul#tasks")
 if (priority=="high"){
   listitem.style.color="red";
   list.prepend(listitem)
  }
 if (priority=="medium"){
   listitem.style.color="orange";
  //  list.insertBefore(newItem, list.childNodes[0])
    let firstGreen = document.getElementsByClassName("low")[0]
   list.insertBefore(listitem, firstGreen);

  }
 if (priority=="low"){
   listitem.style.color="green";
   list.append(listitem)}
 
 document.getElementById("create-task-form").reset();
 let button = document.querySelector(`button#${task}`)
 button.addEventListener("click", function() {list.removeChild(listitem)})
}





