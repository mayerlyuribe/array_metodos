let nums = [1, 56, 78, 45, 4, 90, 56, 16, 44];
console.log("array inicial", nums);
let condi = nums.every(num => num > 0);

if (condi === true){
    console.log("-- todos los números son positivos --");
    newArray = nums.filter( num => num%2 === 0);
    console.log("numeros pares", newArray);
}else{
    console.log("-- no todos los números son positivos -- ");
}