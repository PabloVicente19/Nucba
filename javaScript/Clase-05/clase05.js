// Closures:
/*
De un modo resumido y entendible seria..
Un closure es un encademaniento de 2 funciones mediante una variable. Es decir, cuando una variable es implementada en 2 funciones("Se comparte"). Esta variable no esta en su scope.
*/
// Ejemplo:
const generateFunction = () => {
	// variable de generateFunction
	const name = "Pablo";
	const showName = () => {
		// showName accede a name (que esta fuera de su scope)
		return console.log(name);
	};
	return showName; // generate retorna showName
};
const newFunction = generateFunction();
// newFunction()

// Otro ejemplo:
const productOfNumber = (n) => {
	let x = n;
	return function (otroNum) {
		// esta funcion hereda el scope de profuctofnumber
		return x * otroNum;
	};
};
const unaVariable = productOfNumber(5); // esta variable guarda el valor de x de product....
console.log(unaVariable(5)); // cuando consoleamos unaVariable ahora el 5 se multiplica por el otro valor guardado

// Objetos:
/*
En programacion un objeto es coleccion de datos que representan una entidad, es decir un objeto es la representacion de algo en la vida real. 
Los objetos pueden tener funciones y propiedades, las funciones son denominadas como METODOS y se denomina PROPIEDADES a las variables asociadas al objeto.
La estructura de un objeto consta de: clave: valor

Ejemplo: un auto puede ser un objeto.

Se puede crear un objeto mediante lo que es un objeto literal o clases.
*/

// Objeto LITERAL: es un objeto que se arma desde 0
let auto = {
	marca: "Fiat",
	modelo: "Uno",
	anio: 2002,
	combustible: "Nafta",
	seguro: true,
	color: {
		blanco: "Blanco",
		negro: "Negro",
	},
};

// ¿Como accedo a una propiedad de un objeto?
// Se accede mediante notacion de punto: nombreDeObjeto.propiedad
console.log(auto.marca);

//Ejemplo de array de objetos:
let peliculas = [
	{
		titulo: "Volver al futuro",
		anio: 1980,
	},
	{
		titulo: "Volver al futuro",
		anio: 1980,
	},
	{
		titulo: "Volver al futuro",
		anio: 1980,
	},
];

// CLASE:
/*
  Una clase es un "molde" para crear objetos del mismo tipo, aunque pueden cambiarse propiedades mediente metodos. 
  Una clase se implementa medianle la palabra class y un constructor.
  CONTRUCTOR: es una funcion en la cual se le asignan propiedades por parametro a un nuevo objeto instanceado.
*/
// Ejemplo de CLASE:
class Auto {
	constructor(marca, modelo, anio, combustible, seguro, color) {
		this.marca = marca;
		this.modelo = modelo;
		this.anio = anio;
		this.combustible = combustible;
		this.seguro = seguro;
		this.color = color;
	}
	cambioSeguro = () => {
		this.seguro = false;
	};
}
// Creacion de un objeto mediante el uso de clase:
const auto1 = new Auto("Fiat", "Uno", 2010, "Nafta", true, "Negro");
const auto2 = new Auto("Ford", "Falcon", 1973, "Gnc", false, "Verde");

// console.log(auto1);
console.log(auto1.seguro);
auto1.cambioSeguro();
console.log(auto1.seguro);

// METODOS DE UN OBJETO:
/*
  Los Metodos son funciones que modifican las propiedades de un objeto.
*/
