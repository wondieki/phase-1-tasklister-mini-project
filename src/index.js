document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("create-task-form")
    .addEventListener("submit", (e) => {
      e.preventDefault();
      getTasks();
    });
  //i want the user to submit new task by just pressing enter
  document
    .getElementById("new-task-description")
    .addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        getTasks();
      }
    });
});
//this function will append and remove the new tasks to the DOM
function getTasks() {
  const taskInput = document.getElementById("new-task-description").value;
//we can only append the input if the user has typed something
if (taskInput.length > 0) {
  const tasks = document.getElementById("tasks");
  const newTask = document.createElement("li");
  newTask.textContent = `${taskInput}  `;
  tasks.appendChild(newTask);
  let btn = document.createElement("button");
  btn.innerText = "Delete";
  let editBtn = document.createElement("button");
  newTask.appendChild(btn);
  btn.addEventListener("click", () => {
    newTask.remove();
  });
}
  // Clear the input field after submitting the form
  document.getElementById("new-task-description").value = "";
  newTasks.onclick = function () {
    newTasks.contentEditable = "true";
  };
  //make the new tasks be saved in the browser. somehow this does not work
//   newTasks.addEventListener("input", function() {
//     let inputValue = newTasks.textContent;
//     localStorage.setItem("newTasks", inputValue);
// });
// const savedValue = localStorage.getItem("newTasks");
// newTasks.textContent = savedValue;
}
//I made the list content editable by editing the html to include contenteditable="true"
