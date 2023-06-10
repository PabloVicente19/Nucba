// Metodos de Array y String:
/*
    Son funciones que nos facilitan una operacion, es decir es una funcion que brinda una utilizad.
*/

// Metodos:

// .lenght: este metodo devuelve el largo de una cadena o de un array
let auto = "Mi Fiat";
let numeros = [1, 2, 3];
console.log(auto.length); // en los string el espaciado CUENTA!
console.log(numeros.length);

// toUpperCase y toLowerCase:

// Metodo de STRING: convierta una cadena a mayuscula o minuscula
auto = auto.toUpperCase();
console.log(auto);

// .replace()
// Este metodo nos permite remplazar un caracter o un grupo de caracteres. Devuelve el string con la cadena o caracter reemplazados
auto = auto.replace("FIAT", "Ford");
console.log(auto);

// .trim()
// Metodo de STRING: Este metodo quieta los espacios al comienzo y al final de una cadena o caracter
let quitSpace = " Hola Espacio ";
quitSpace = quitSpace.trim();
console.log(quitSpace);

// .split()
// Este metodo de STRING nos permite dividir un string en un array. Los separa a partir de un caracter pasado por parametro.
auto = auto.split(" ");
console.log(auto);

// typeof
// Este metodo nos retorna el tipo de dato que contiene una variable.
console.log(typeof auto);

// .includes()
// este metodo determina si una string puede ser encontrado en otro string. Retorna un booleano
auto = auto.includes("Ford");
console.log(auto); // retorna true porque Ford esta en auto

// Ejemplo de includes en funcion
const searchString = (str1, str2) => {
	// ejecuto el console.log para ver el resultado en quoka
	return console.log(str1.includes(str2));
};
searchString("roma", "amor");

const searchStringTwo = (str1, str2) => {
	/*Para encontrar mejor se debe pasar ambos parametros a upperCase o lowerCase */
	str1 = str1.toUpperCase();
	str2 = str2.toUpperCase();
	let machString = str1.includes(str2);
	return machString
		? console.log("Se encontro")
		: console.log("no se encontro");
};

searchStringTwo("amor", "AMOR");

// METODOS DE ARRAYS

// .indexOf()
// Este metodo de ARRAY y STRING, devuelve el indice de un elemento que buscamos. El elemento sea buscar se pasa por parametro. Devuelve -1 cuando el elemento NO EXISTE!

let autos = ["dodge", "ford", "chevrolet"];
// En los indices el 0 CUENTA!
console.log(autos.indexOf("chevrolet"));

// .pop()
// Este metodo elimina y retorta el ultimo elemento de un array.
let autoChevrolet = autos.pop();
console.log(autoChevrolet);
// elimino chevrolet de autos y lo agregro a autoChevrolet
console.log(autos);

//.shift()
// Este metodo elimina y retorna el el primer elemento de un array
let autoDodge = autos.shift();
console.log(autoDodge);
console.log(autos);

// .unshift()
// Este metodo agrega un elemento al primer lugar del array
autos.unshift("Fiat");
console.log(autos);

// .reverse()
// este metodo invierte todo el array. ESTE METODO DESTRUYE EL ARRAY
autos.reverse();
console.log("Reverse aplicado ==> " + autos);

// .replaceAll()
// Este metodo remplaza todos los valores que coinciden con el valor pasado por parametro.
let palabra = "anita la anomala";

// .toString()
// Este metodo convierte un array en String separados por coma
let numeritos = [1, 2, 3, 4, 5, 6];
numeritos = numeritos.toString(numeritos);
console.log("toString aplicado ==> " + numeritos);

// .join()
// Este metodo junta los elementos de un array, lo convierte en un string y los separa por un elemento pasado por parametro
autos = autos.join(" ");
console.log("Join aplicado ==> " + autos);

// .push()
// Este metodo agrega un nuevo elemento al final de un array
let marcas = ["nike", "addidas"];
marcas.push("puma");
console.log(marcas);

// .map()
// Este metodo itera todo el array y ejecuta una funcion en cada elemento del array
let numerosMasUno = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let numerosSuma = numerosMasUno.map((valor) => valor + 1); // Ejecuta un callback por cada elemento
console.log(numerosSuma);

// como recibe un callbalck podemos crear la funcion fuera del metodo.
// Esti queda mas legible

// funcion que va a sumar los elementos del array
const sumador = (a) => {
	return a + 1;
};

let numerosSumados = numerosMasUno.map(sumador); // le pasamos la funcion como parametro
console.log(numerosSumados);

// .concat()
// Este metodo une dos arrays en un nuevo array
let mamiferos = ["Leon", "Tigre"]
let insectos = ["Mosca","Mantiz"]
let animales = mamiferos.concat(insectos);
console.log(animales);

// .slice()
// Este metodo corta un array desde un inicio hasta un fin pasado por parametro,
// Los numeros pasados corresponden a los indices. El 0 CUENTA!

let corteDeArr = animales.slice(0,2); // como devuelve un nuevo array es mejor almacenarlo en otra variable
console.log(corteDeArr);

// Mas utilizados:
/*
length
every
filter
find
some
forEach
join
map
split
*/