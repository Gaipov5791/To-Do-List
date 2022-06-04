window.addEventListener("load", function () {
const form = document.querySelector(".form");
const input = document.querySelector("#input-todo");
const button = document.querySelector("button");
const todoList = document.querySelector(".todo-list");

form.addEventListener("submit", function(event) {
	event.preventDefault();
});

button.addEventListener("click", function () {
	const userInput = input.value;
	if (userInput == "") {
		alert("Add your task");
	} else {
		const todo = document.createElement("div");
		todo.classList.add("todo-item");
		todo.style.backgroundColor ="#8080808f";
		todo.style.width ="280px";
		todo.style.padding ="10px";
		todo.style.marginBottom ="10px";
		todo.style.borderRadius ="3px";
		todoList.appendChild(todo);
		todo.innerHTML = input.value;
		input.value = "";

		todo.addEventListener("click", function() {
			todo.remove();
		});

	} 
});
});



