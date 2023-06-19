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
// este metodo itera sobre el array ejecutando un callback, el callback filta los elementos que cumplen con la condicion
let nombres = ['pablo','lucas'];
let filterNombre = nombres.filter(nombre => nombre == 'pablo');
console.log(filterNombre);

// Metodo .find()
// Este metodo itera sobre el array ejecutando un callback, devuelve el primer elemendo coincidente con el callback proposcionado
let numeros2 = [1,14,23,412,43,];
let elementoFind = numeros2.find(num => num > 10);
console.log(elementoFind);

// Metodo .reduce()
// Este metodo acumula valores de un array, recibe por parametro un callback, el callback es acumulador y valor actual
let suma = [1,2,3,3];
let sumaReduce = suma.reduce((acum,value) => acum + value); // acumulador va sumando el value
console.log(sumaReduce);

// Metodo .sort()
// Este metodo ejecuta un funcion callback que ordena los elementos. CON LOS NUMERO SE DEVE EJECUTAR UNA FUNCION 
let desorden = [1,43,12,34,2,5,67,];
let orden = desorden.sort((a,b) => a -b) // con los numero no funcion por el codigo aski
console.log(orden);

// Metodo .every()
// Este metodo itera el array ejecutando un callback y devuelve true si TODOS los elementos son true. Si lo ejecutamos en un array vacio devuelve true
let siempreTrue = desorden.every(nums => nums >= 1)
console.log(siempreTrue); 

// Metodo .some()
// Este metodo itera el array ejecutando un callback, deduelve true si almenos un elemento cumple con la condificon pasadda por el callback
let nombres1 = ['pablo', 'nora','lucas']
let existeNora = nombres1.some(nombre => nombre == 'nora')
console.log(existeNora);

// operador spread:
// Este operador perminte coleccionar todos los datos de un array u string
const user ={
  nombre: "pablo",
  edad: 24,
}
let copyOfUser = {...user};
console.log(copyOfUser);