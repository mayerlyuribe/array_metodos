const objetos = [
    {producto: "papaya", precio: 38 },
    {producto: "manzana", precio: 25 },
    {producto: "yuca", precio: 145 },
    {producto: "pera", precio: 12}
]

let indiceCaro = objetos.findIndex(objeto => objeto.precio > 100);

console.log("objeto con un precio mayor a 100: ", objetos[indiceCaro]);