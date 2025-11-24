edades = [1, 5, 98, 34, 7, 45, 19]

edades_ord = edades.sort((a, b) => a > b ? 1 : -1 );
console.log(edades_ord)

console.log(edades_ord.some(edad => edad >= 18))