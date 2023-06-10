// Funciones
/* Una funcion es un bloque de codigo que realiza una accion y se puede reutilizar a lo largo de todo el programa. */

// Estrucuta de una funcion:
function soyUnaFuncion (){
 // aca va el bloque de codigo que se va a ejecutar
}
// Invocar una funcion (llamarla)
soyUnaFuncion()


// Funciones Flecha
/* Las funciones flecha son funciones ANONIMAS y no vinculan su propio this. Son anonimas por los tanto debemos asignarlas a una variable. */

// Estructura
const funcionFlecha = () => {

}
// Invocar la funcion flecha
funcionFlecha()

// Funcion anonima
/* Es una funcion sin nombre, el uso mas comun es asignarla en una variable */

//Estructura
let anonima = function (){
  console.log("Fn Anonima");
} 
anonima()

// Funciones Recursivas 
/* Son funciones que se llaman asi mismas, cuando una funcion llama a otra funcion para procesar datos, se las denomina funcion recursiva */

// Ejemplo: aplicar el factorial de un numero 
function factorial(n) {
  if( n <= 1) return 1;// caso base: se le dice cuando va a terminar
  return n * factorial(n-1);
}

function recursion (num){
  if (num <= 1){
    return 1
  }

    return (recursion( num - 1));
}
console.log(recursion(12))

// Callbacks
/* Los callback son funciones que se pasan como argumento a otra funcion  */