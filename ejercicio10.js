let array = [2, 4, 10, 15, 7, 8];

const div = array.map(num => num/2);
console.log(div);

let five = div.includes(5);

if (five === true){
    console.log("el 5 está en el array")
}
else if (five === false){
    console.log("el 5 no está en el array")
}