let arrayNums = [1, 2, 3, 4, 5, 6, 7, 10, -9];

suma = arrayNums.reduce((total, num) => total += num );
console.log(suma);

numbers = arrayNums.every(num => num > 0);

if (numbers === true) {
    console.log("todos los numeros son positivos")
}
else{
    console.log("no todos los numeros son positivos")
}