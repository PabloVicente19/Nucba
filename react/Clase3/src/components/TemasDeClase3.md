### Manejo de estados 
  - ¿Qué es un hook?
  - useState
  - Parcel *
  - esLint *
  - Prettier *
* mirar sobre esos

¿Qué es un hook?
Un hook es una funcion que permite manipular caracteristicas de un componente.

  ¿Qué es useSt ate?
useState es un hook de react que nos permite manejar el estado de un componente. 

  ¿Qué hace useState?
UseState guarda un valor de estado de un componente, este persiste en el reRender de una app, Si ese valor cambiar se renderiza automaticamente.
Gracias a react-Dom, el Rerender solo renderiza el estado que cambio.

  ¿Cómo Funciona?
UseState devuelve un array de 2 posiciones. La primer posicion contiene el valor del estado y la segunda posicion contiene una funcion que actualiza el valor del estado.
por convencion se utiliza la palabra set para cambiar los estados.
Ejemplo:
const {estado, setEstado}