array = [1, 2, 3, 4, 5, 8];

array_new = array.map(element => element * 3);
console.log(array_new);
console.log("------------");

array_filtra = array_new.filter(element => element > 10);
console.log(array_filtra)