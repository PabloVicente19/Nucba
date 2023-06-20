// Primer paso traernos los elementos html que necesitamos
const $input = document.querySelector('.input-text');
const $addForm = document.querySelector('.add-form');
const $taskList = document.querySelector('.tasks-list');
const $deleteBtn = document.querySelector('.deleteAll-btn');

// Variable que va a contener las tareas
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Funcion para guardar en LS
const saveLocalStorage = (tasksList) => {
  return localStorage.setItem('tasks', JSON.stringify(tasksList))
}
// Funcion que crea el html de la tarea
const createTask = task => {
  return `<li> ${task.name} <img class="delete-btn" src="./img/delete.svg" data-id=${task.taskID} /></li>`
}

// Funcion que renderiza la task
const renderTaskList = todoList => {
  $taskList.innerHTML = todoList.map(task => createTask(task)).join("")
}

const addTask = (e) => {
    e.preventDefault();
    // Guardar en una variable el valor del input
    let taskName = $input.value.trim();

    // Si el input esta vacio, dispara una alerta
    if(!taskName.length){
      alert("Por favor, Ingresá una tarea");
      return
    }else if(tasks.some(task =>  task.name.toLowerCase() === taskName.toLowerCase())){
      return alert("Ya existe un alerta con ese nombre")
    }

    tasks = [...tasks,{
      taskId : tasks.length + 1,
      name: taskName
    }]

    // Reseteo el input
    $input.value = ''

    renderTaskList(tasks)
    saveLocalStorage(tasks)
  }


// Esta funcion va iniciarlizar el programa
const init = ( ) => {
  renderTaskList(tasks)
  $addForm.addEventListener('submit', addTask);

}
init ();