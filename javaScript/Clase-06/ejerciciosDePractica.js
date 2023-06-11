// 1 -
const gustosDeHelado = ["Chocolate","Dulce de Leche", "Americana","Granizado","Cereza"];
let ultimoGusto = gustosDeHelado.pop()
gustosDeHelado.unshift(ultimoGusto)

const addFlavor = (flavor) => gustosDeHelado.push(flavor)

addFlavor("Flan")
console.log(gustosDeHelado);

// 2 -
const resizearr = (array) =>{
    let flavor = array.shift
    return array.push(flavor)
}

const invertArray = (array) => {
    let invert = array.reverse()
    console.log(invert);
    invert = array.join(" - ");
    
    return invert

}
invertArray(gustosDeHelado)

let otrosGustos = ["Chocolate Amargo", "Pistacho", "Manzana"];

const mergeArray = (array1, array2) => {
    let arrMerged = array1.concat(array2)
    arrMerged = arrMerged.slice()
}