/*
  Para que sirve validar datos ?
  Validar desde el front sirve para garantizar que los datos coincidan con los requisitos del lado del back
*/

// Nos traemos desde html lo que necesitamos
const form = document.getElementById('form')
const nameInput = document.getElementById('username')
const emailInput = document.getElementById('email')
const passInput = document.getElementById('password')
const phoneInput = document.getElementById('phone')

// validamos el nombre de usuario
const checkUsername = () => {
  let valid = false;
  const min = 2;
  const max = 15;
  // guardo el dato del input 
  const username = nameInput.value.trim();

    if(!isEmpty(username)){
      showError(nameInput,"¡El nombre es obligatorio!");
      return
    }else if(!isBetween(username.length, min, max)){
      showError(nameInput, "¡El nombre es incorrecto!")
      return
    }else{
      showSuccess(nameInput)
      valid = true;
    }
    return valid
}

// email 
// Esta funcion verifica si el input esta vacio
const isEmpty = (input) => input === "" ? false : true;

// Funcion para verificar si la longitud del campo esta dentro de un minimo y un maximo
const isBetween = (length, min, max) => {
  length < min || length > max ? false : true
}

// Funcion para mostar error
const showError = (input, message) =>{
  const formFiel = input.parentElement;
  formFiel.classList.remove('success');
  formFiel.classList.add('error');
  const error = formFiel.querySelector('small');
  error.textContent = message
}
// Funcion que muestra exito

const showSuccess = input => {
  const formFiel = input.parentElement;
  formFiel.classList.remove('error');
  formFiel.classList.add('succes');
  const error = formFiel.querySelector('small');
  error.textContent = ""


}

const init = () => {

}
init()




