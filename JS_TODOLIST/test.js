const toDoForm = document.getElementById("todo-Form");
const toDoInput = document.querySelector("input");
const toDolist = document.getElementById("todo-list");

function deleteToDo(event) {
	console.log()
}


function paintToDo(newTodo) {
	const li = document.createElement("li");
	const span =  document.createElement("span");
	span.innerText = newTodo;
	const button = document.createElement("button");
	button.innerText = "X";
	button.addEventListener("click",)
	li.appendChild(span);
	li.appendChild(button);
	toDolist.appendChild(li);
}
function handleToDoSubmit(event) {
	event.preventDefault(); 
	// console.log(toDoInput.value);
	const newTodo = toDoInput.value;
	console.log(toDoInput.value);
	toDoInput.value = "";
	paintToDo(newTodo);
	// console.log(newTodo, toDoInput.value);

}

toDoForm.addEventListener("submit", handleToDoSubmit);