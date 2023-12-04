document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.querySelector("#addButton");

  addButton.addEventListener("click", function (event) {
    event.preventDefault();

    // getting the value in input
    newTask = document.querySelector("#AddTask").value;
    // creating a p element
    const task = document.createElement("li");
    // selecting the empty div
    const list = document.querySelector("#list");
    // adding a class to the list
    task.classList.add("list-group-item", "border-0");
    // inserting text
    task.textContent = newTask;

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete", "btn", "btn-danger");
    deleteButton.innerHTML = `<i class="fa-solid fa-trash" style="color: #ffffff;"></i>`;

    const taskAndButtonContainer = document.createElement("div");

    taskAndButtonContainer.classList.add("d-flex", "justify-content-between", "mb-3", "border", "p-2", "rounded-3");

    taskAndButtonContainer.appendChild(task);
    taskAndButtonContainer.appendChild(deleteButton);

    list.appendChild(taskAndButtonContainer);

    deleteButton.addEventListener("click", function () {
      // Remove the parent taskAndButtonContainer when the delete button is clicked
      taskAndButtonContainer.remove();
    });
  });
});
