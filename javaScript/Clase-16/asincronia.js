// Callstack
/*
    El callstack es una estructira en el cual se almacenan funciones.
    Es como una "pila" donde se almacenan todas las funciones y se ejecutan una sola a la vez
*/

//  Memory heap
/*
	Es una estructura tal cual a la del callstack, con la diferencia que se almacenan valores de variables funciones.
	Javascript Engine: es quien se encargar de hacer estas representaciones mediante identificadores
*/
const obj = { valor: 1 };
const obj2 = obj;
obj.valor = 2;

console.log(obj === obj2); // devuelve true xq js guarda la referencia y las cambia en ambos

// Event Loop
/*
    hace consultas sobre el estado del satck y si esta vacio va a prodeces a pasar a agendar lo que haya guardado en el task queue para empezar a ejecutar

    Hace que js se 'multi hilo', cuando en realidad trabaja un solo hilo 
*/
