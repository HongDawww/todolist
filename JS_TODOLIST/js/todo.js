const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
// to do  배열 형태
let toDos = [];

// localstorage 에 to do 저장
function saveToDos () {
	localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function deleteToDo(event){
	// consolee.log(event.target.parentElement);
	const li = event.target.parentElement;
	li.remove();
	toDos =toDos.filter((toDo) => toDo.id !== parseInt(li.id));
	saveToDos();
}


//li > span , button 에 리스트 작성
function paintToDo(newTodo) {
	const li = document.createElement("li");
	li.id = newTodo.id;
	const span = document.createElement("span");
	span.innerText = newTodo.text;
	const button = document.createElement("button");
	button.innerText = "X";
	button.addEventListener("click",deleteToDo);
	li.appendChild(span);
	li.appendChild(button);
	toDoList.appendChild(li);
}
function handleToDoSubmit(event){
	event.preventDefault();
	const newTodo = toDoInput.value;
	toDoInput.value = "";
	// id
	const newTodoobj = {
		text:newTodo,
		id: Date.now(),
	};
	toDos.push(newTodoobj); // to do array
	paintToDo(newTodoobj);
	saveToDos();
}
toDoForm.addEventListener("submit",handleToDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
	const parsedToDos = JSON.parse(savedToDos);
	toDos = parsedToDos;
	parsedToDos.forEach(paintToDo);
}
function delFilter() {

}