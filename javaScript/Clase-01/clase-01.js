// Variables.
// Una variable es un espacio en memoria, en el cual se reserva una porcion de ese espacio a un contenedor(variable), que va a almacenar datos.

// Declaracion de variable: Para declarar variables usamos let y const.
var nombre = 'Pablo';
var numeroA = 10;

// Concatenar Texto: concatenar texto es unir las palabras.
var textoA = 'Harry';
var texboB = 'Potter';
console.log(textoA + texboB)

// Tipos de datos Primitivos en JS
/*
- Number: 3, 3.13
- String: "a", "Hola", `Hola`
- Booleanos: true o false
- undefined: Algo que no esta definido
- null: algo que esta vacio
- Symbol
- bigInt
*/
// Tipos de datos Compuestos:
/*
 - Array: ['Pablo', 24, etc]
 - Objeto: {nombre: 'pablo', edad: 27}
*/

// Tipos de Variables.
/*
 - var: declara una variable de estado globlal, se procesa antes que otro codigo.
 - let: permite clarar variables limitando su alcance(scope).
 - const: permite declarar una variable que no va a cambiar su valor a lo largo del programa
*/

// Operadores:
/*
    Aritmeticos:
 + = Suma
 - = Resta
 * = Multiplicacion
 / = Divicion
 % = modulo(resto de una divicion)

    Incrementales:
 ++ = incrementa 1
 -- = resta 1 
 ** = multiplica

    Comparacion:
 ==  igual
 === exactamente igual
 !== distinto
 =>  mayor igual
 <=  menor igual
 >  mayor
 <  menor

    Logicos:
 - != not
 - && and
 - || or

 */

//  Identificar de que tipo de dato es una variable o dato
// typeof: devuelve el tipo de dato que posee una variable

// console.log(typeof 5); devuelve number

// Prompt: Crea un cuadro de dialogo, en el cual se puede ingresar un valor.
// let nombre = prompt('Ingrese su nomre')
// console.log(nombre);

// Alert(): Crea un cuadro de alerta.
// alert("Numero ingresado Incorrecto")