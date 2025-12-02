let precios = [130, 45, 89, 120, 78, 200];
console.log("array inicial", precios);

let suma = precios.reduce((i, precio) => i + precio);
console.log("suma de precios", suma);

if (suma > 500){
    console.log("-- el total supera los 500 --");
    newArray = precios.filter( precio => precio < 100);
    console.log("precios menores a 200", newArray);
}
else{
    console.log("-- el total no supera los 500 --");
}