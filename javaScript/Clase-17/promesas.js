// Que es un llamado asincronico
/*
    Un llamado asincrono es una peticion que no se sabe cuando durará en devolver los datos que solicitamos, por lo tanto, se ejecuta de manera asincrona para que, cuando se requieran los datos, ya esten cargados.
*/

// async vs sync
/*
    una funcion que comienza con async, lo que quiere dercir es que se ejecutara de manesa asincrona, esta devuelve un objeto. se completara cuando se hallan o no, recibido los datos, en cambio, una funcion sync quiere decir que, es una funcion sincrona. se ejecutara en el flujo normal en el callstack
*/

// Que es una promesa
/*
    Una promesa es el resultado de una peticion asincrona, es decir, cuando ejecutamos una funcion de manera asinconra, esta deveuvlte una promesa, en la cual se refleja si la peticion fue aceptada o rechazada.
    una promesa  acepta callbacks.
    Ejemplo:
    const promesa = new Promise(resolve, reject);

    Estados de una promesa:
    Las promesas pueden tener 3 estados: 
        - pending: Esta esperando
        - fullfield: fue aceptada
        - reject: fue rechazada
*/

// .then y .catch
/*
    Los metodos then y catch se implementan para manejar los errores
	Cuando la promesa se ejecuta, el then actua devolviendo otra promesa con el callback.
	lo mismo ocurre con el catch.
*/

const getValue = (time, value) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const letras = {
				a: 1,
				b: 2,
				c: 3,
				d: 4,
			};

			const letra = letras[value];

			if (!letra) {
				reject("Error");
			} else {
				resolve({ value });
			}
		}, time);
	});
};

// getValue(500, "c")
// 	.then((res) => console.log(res))
// 	.catch((error) => console.log(error));

// Manejo de errores
/*
	Las promesas encadenadas son excelentes manejando errores. cuando una promesa es rechazada, el coontrol salta al manejador de rechazos mas cercano.

	Ejemplo: La url a la cual se le hace una peiticion no existe, entonces la promesa cae automaticamente en el catch

// */
/*fetch("https://nofuncion.com")
	.then((res) => res.json())
	.catch((error) => alert(error));
*/
//  fetch
// fetch es un metodo para hacer peticiones a externos

const miPromesa = () => {
	return new Promise((resolve, reject) => {
		resolve("Genio");
	});
};

// const llamarApromesa = () => {
// 	miPromesa()
// 		.then((res) => alert(res))
// 		.catch((error) => console.log(error));
// };

// 	Usando try catch
const llamarPromesa = async () => {
	try {
		const res = await miPromesa();
		console.log(res);
	} catch (error) {
		console.log("Eror");
	}
};
// llamarPromesa();
const cuadrado = () => {
	return new Promise((resolve, reject) => [
		setTimeout(resolve => {
			
		})
	])
}