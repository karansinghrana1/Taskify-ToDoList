// Get references to elements in the DOM
const form = document.getElementById("add-todo-form");
const input = document.getElementById("new-todo-input");
const todoList = document.getElementById("todos");

// Handle form submission
form.addEventListener("submit", function(event) {
  event.preventDefault();

  // Get the value of the input field
  const newTodo = input.value;

  // Create a new list item
  const todo = document.createElement("li");
  todo.innerHTML = `
    <span>${newTodo}</span>
    <button class="update-btn">Update</button>
    <button class="remove-btn">Remove</button>
  `;

  // Add the new list item to the list
  todoList.appendChild(todo);

  // Clear the input field
  input.value = "";
});

// Handle removing todo items
todoList.addEventListener("click", function(event) {
  if (event.target.classList.contains("remove-btn")) {
    event.target.parentElement.remove();
  }
});

// Handle updating the text of a todo item
todoList.addEventListener("click", function(event) {
  if (event.target.classList.contains("update-btn")) {
    const todoText = event.target.parentElement.querySelector("span");
    const newText = prompt("Enter new text:", todoText.textContent);
    todoText.textContent = newText;
  }
});