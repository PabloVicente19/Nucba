// Primer paso traernos los elementos html que necesitamos
const $input = document.querySelector('.input-text');
const $form = document.querySelector('.add-form');
const $tasksContainer = document.querySelector('.tasks-list');
const $deleteBtn = document.querySelector('.deleteAll-btn');

// Variable que va a contener las tareas
let tasks = [];

const addTask = (e) => {
    e.preventDefault();
}
// Esta funcion va iniciarlizar el programa
const init = ( ) => {
    $form.addEventListener('submit', addTask);
}
init ();