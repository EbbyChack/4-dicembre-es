document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.querySelector("#addButton");

  addButton.addEventListener("click", function (event) {
    event.preventDefault();

    // getting the value in input
    newTask = document.querySelector("#AddTask").value;
    // creating a p element
    task = document.createElement("li");
    // selecting the empty div
    list = document.querySelector("#list");
    // adding a class to the list
    task.classList.add("list-group-item");
    // inserting text
    task.textContent = newTask;

    deleteButton = document.createElement("button");
    deleteButton.classList.add("delete");
    deleteButton.classList.add("btn-danger");
    deleteButton.classList.add("btn");
    deleteButton.textContent = "Delete";

    taskAndButtonContainer = document.createElement("div");
    // taskAndButtonContainer.classList.add("row");
    taskAndButtonContainer.classList.add("d-flex");
    taskAndButtonContainer.classList.add("justify-content-between");
    taskAndButtonContainer.classList.add("mb-3");

    taskAndButtonContainer.appendChild(task);
    taskAndButtonContainer.appendChild(deleteButton);

    list.appendChild(taskAndButtonContainer);
  });

  const deleteButtons = document.querySelectorAll(".delete");
  for (let index = 0; index < deleteButtons.length; index++) {
    const db = deleteButtons[index];
    db.addEventListener("click", function () {
        console.log("delete")
      
    });
  }
});
