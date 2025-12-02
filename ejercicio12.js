let edades = [22, 65, 12, 90, 47, 33, 67, 14, 10, 19];
console.log("array sin cambios", edades);

let orden = edades.sort((a, b) => a > b ? -1 : 1);
console.log("array ordenado de mayor a menor", orden);

orden.pop(); //pa eliminar al más joven
console.log("array sin el más joven", orden);

orden.push(2); // pa agregar un nuevo valor al final
console.log("array con nuevo valor al final", orden);