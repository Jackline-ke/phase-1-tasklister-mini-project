const content =document.querySelector("main-content");
console.log(content);

const taskList = document.querySelector("tasks");
const taskForm = document.querySelector("create-task-form");


taskForm.addEventListener("submit", function(event){
  // your code here
  event.preventDefault();

  const newTask = document.querySelector("#new-task-description").value;

  taskList.innerHTML +=
  <li> ${newTask}
  <button data-action = "delete" data-matt = "powerful" data-charie = "downfield">x</button>
  </li>

  taskForm.reset();
});

taskList.addEventListener("click", function(event){
  console.log(event.target);

  if (event.target.dataset.action === "delete"){
    event.target.parentElement.remove();
  }
});
