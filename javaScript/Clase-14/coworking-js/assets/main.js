
// Traemos lo que necesitamos, como modularizamos no es necesario traer todos los elementos, cada archivo se trae lo que necesita
const cardContainer = document.getElementById('cards-container');
const form = document.getElementById('form');

// definimos la agenda
let agenda = [];

// Funcion que devuelve la agenda formateada con el nuevo turno
const saveData = data => {
    // 1 - Copio todo lo que hay en agenda
    // 2 - Le doy formado de objeto
    data = [
        ...data,
        {
            id: data.length + 1,
            name: nameInput.value,
            surname: surnameInput.value,
            phone: phoneInput.value,
            email: emailInput.value,
            date: formatDate(dateInput.value),
            time: hourInput.value,
            quantity: getRadioValue(radioInputs),
            extras: getCheckedOptions(checkboxInputs),
            about: aboutInput.value,
        }
    ]

}
