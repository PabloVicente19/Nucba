// Lita de eventos:
/*
    - onblur : Deselecciona un elemento.
    - onchange: Deselecciona un elemento que se ha modificado
    - onclick: pinchar y soltar un elemento
    - onfocus: seleccionar un elemento
    - onkeydown: pulsar una tecla sin soltar
    - onkeypress: pulsar una tecla
    - onkeyup: soltar una tecla pulsada
    - onload: la pagina se ha cargado completamente
*/
const $input = document.querySelector('.inputEvent')

$input.addEventListener('focus',focusFunction);
$input.addEventListener('focus',blurFunction);


function focusFunction () {
    console.log('hiciste foco')
}
function blurFunction () {
    console.log('Deseleccionaste el contenido')
}

// CAMBIAR CLASES CON JS
$input.classList.add('add')
$input.classList.remove('add')

// De manera automatica lo hace el .toggle()
// lo que haces es agregarla o quitarla.
$input.classList.toggle('add')

// Cambiar atributos con js
// Se maneja por clave, valor. es decir, primero ponemos el nombre del atributo y luego el valor del atributo
$input.setAttribute('name',' helloButton');
$input.setAttribute('disable', "")

