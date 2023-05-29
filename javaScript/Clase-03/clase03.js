// Funciones
/*
Una Funcion es un conjunto de instrucciones definidas por el programados, empaquetadas en una estructura para porder ser ejecutadas reiteradas veces. 
Deben contener nombre en minuscula y sin espacion
*/
// Declarar una funcion
function soyUnaFuncion() {
  return console.log("Hola soy una funcion")
}
// Invocar una funcion(llamarla)
soyUnaFuncion()

// Parametros de una funcion:
// Son variables o datos que va a obtener la funcion. espera ese dato para poder ejecutarse
function saludar(nombre){
  return console.log("Hola" + nombre)
}
saludar("Pablo")

let arr = ["Hola"]
arr.push("chau");
