let array = ["ayuda", "manzana", "febrero", "interno", "zorro", "yuca", "alex"];
console.log("palabras: ", array.join(', '))

let encontrar = array.filter(palabra => palabra.includes('a'));
console.log("palabras que contienen la letra 'a':", encontrar.join(', '));