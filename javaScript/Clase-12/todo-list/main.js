// Primer paso traernos los elementos html que necesitamos
const $input = document.querySelector(".input-text");
const $addForm = document.querySelector(".add-form");
const $taskList = document.querySelector(".tasks-list");
const $deleteBtn = document.querySelector(".deleteAll-btn");

// Variable que va a contener las tareas
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Funcion para guardar en LS
const saveLocalStorage = (tasksList) => {
	return localStorage.setItem("tasks", JSON.stringify(tasksList));
};
// Funcion que crea el html de la tarea
const createTask = (task) => {
	return `<li> ${task.name} <img class="delete-btn" src="./img/delete.svg" data-id=${task.taskID} /></li>`;
};

// Funcion que renderiza la task
const renderTaskList = (todoList) => {
	$taskList.innerHTML = todoList.map((task) => createTask(task)).join("");
};
// Funcion que esconde o muestra el boton de borrar todas las tareas
const hideDeleteAll = (taskList) => {
	if (!taskList.length) {
		$deleteBtn.classList.add("hidden");
		return;
	}
	return $deleteBtn.classList.remove("hidden");
};
// funcion para eliminar una tarea
const removeTask = (e) => {
	// Si el elemento no tiene la clase dicha, que lo omita
	if (!e.target.classList.contains("delete-btn")) {
		return;
	}
	// Si el lemento contiene la clase, la guarda en esta variable
	const filterId = Number(e.target.dataset.id);
	tasks = tasks.filter((task) => task.id !== filterId);
	console.log(filterId);
	renderTaskList(tasks);
	saveLocalStorage(tasks);
	hideDeleteAll(tasks);
};

const addTask = (e) => {
	// inpide que se recargue la página
	e.preventDefault();
	// Guardar en una variable el valor del input
	let taskName = $input.value.trim();

	// Si el input esta vacio, dispara una alerta
	if (!taskName.length) {
		alert("Por favor, Ingresá una tarea");
		return;
	} else if (
		// Si existe una tarea con el mismo nombre, dispara la alerta
		tasks.some((task) => task.name.toLowerCase() === taskName.toLowerCase())
	) {
		return alert("Ya existe un alerta con ese nombre");
	}

	// Se formatea la entrada de datos
	tasks = [
		...tasks,
		{
			taskId: tasks.length + 1,
			name: taskName,
		},
	];

	// Reseteo el valor del input
	$input.value = "";

	renderTaskList(tasks);
	saveLocalStorage(tasks);
	hideDeleteAll(tasks);
};

// Esta funcion va iniciarlizar el programa va a contener todas las funciones del programa. Para tener un codigo mas limpio
const init = () => {
	// Si hay algo en ls lo renderiza
	renderTaskList(tasks);

	hideDeleteAll(tasks);

	$taskList.addEventListener("click", removeTask);
	$addForm.addEventListener("submit", addTask);
};
init();
