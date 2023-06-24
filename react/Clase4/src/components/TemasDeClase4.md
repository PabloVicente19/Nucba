### Manejo de useEffect 
  - ¿Qué es un hook?
  - useEffect
  - timer

  ¿Qué es un hook?
Un hook es una funcion que permite manipular caracteristicas de un componente.

  ¿Qué es useEffect ?
Este hook se encarga de los efectos secundarios tras realizar operaciones como un fecth, eventos, reRender en el dom.

  ¿Como funciona?
useEffect acepta 2 parametros: un callback y una lista de dependencias opcionales.
El callback contiene la logica que se necesita realizar
Las dependencias es un array opcional que especifica que variables van a desencadenar la ejecucion del useEffect 
