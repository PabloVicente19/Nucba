// Callback:
// Es una funcion que se pasa como argument para ser ejecutada dentro de la misma

// Metodo .repeat()
// Este metodo repite un STRING n veces, la cantidad de veces a repetir se pasa como parametro
let nombre = "Pablin ";
console.log(nombre.repeat(3));

// Metodo .charAt()
// Este metodo devuelve el elemento, cuya posicion es pasa como parametro. Si la posicion pasada es invalida, devuelve un array vacia
console.log(nombre.charAt(3)); // encontro la i
console.log(nombre.charAt(10)); // devolvio un array vacio

// metodo .map()
// este metodo es iterador sobre el array, y ejecuta una funcion pasada por parametro. Devuelve un nuevo array
// Estructura:
// array.map( callback(elemento, index, array) )
/*
    el callback puede 
    elemento: el elemento del array toma el valor de elemento
    index: toma el valor del indice del array
    array: toma el valor del array original
*/
//Ejemplo
let numeros = [1, 2, 3];

const callback = (n) => {
	return n + 1;
};
console.log(numeros.map(callback));

console.log(numeros.map((n) => n + 1));

// Metodo .filter()
// este metodo itera sobre el array ejecutando un callback, el callback de
