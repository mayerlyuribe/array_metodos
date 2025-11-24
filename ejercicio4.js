array1 = [1, 7, 8, 4, 2]
array2 = [3, 6, 9, 8, 3]

array_new = array1.concat(array2)
console.log(array_new)

suma = array_new.reduce((suma, indice) => suma += indice)
console.log("la suma es:",suma)