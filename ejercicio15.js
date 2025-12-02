let colores = ["rojo", "verde", "amarillo", "purpura"];
let secund = ["naranja", "jade", "azul", "rosa"];

let newColores = colores.slice(0, 3)
console.log(newColores);

let unidos = newColores.concat(secund);
console.log("arrays unidos", unidos);
