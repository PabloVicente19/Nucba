//  Crear elementos
// Para crear Elementos Se utiliza el metodo: .createElement()

const header = document.createElement("header");
header.textContent = "Soy un header creado en JS";
// appenChild se utiliza para incrustar el elemento en una etiqueta contenedora
document.body.appendChild(header);

// JSON
/*
    ¿Qué es un JSON?
    - Javascript Object Notation(JSON): transmite datos en formato texto plano. 
    Un JSON es un objeto de texto planque solo sirve de lectura

    Ejemplo de un JSON:
    {
        "name": "Pablo",
        "edad": 23,        
    }

*/
// JSON.parse()
// Este metodo convierte en un objeto a un JSON. Un JSON es un archivo de texto que no se puede modificar, para hacerlo se debe parsear, relializando este metodo, un JSON se convierte en un objeto

// JSON.stingify()
// Este metodo convierte un objeto u cualquier tipo de dato a un JSON

// Objero STORAGE:
/*
    Es una api de almacenamiento de datos locales sin tenes que conectarse a una base de datos-
    Tiene 2 maneras de implementarse:
     - localStorage: accede al objeto storage, persiste y almacena datos, no expira
     - sessionStoraga
*/

// Maneras de almacenar datos:
/**
  - Opcion1 -> localStorage.setItem(key, value)
  - Opcion2 -> localStorage.key = content
    key = nombre del elemento a guardar
    content = contenido del elemento a guardar 
 */
