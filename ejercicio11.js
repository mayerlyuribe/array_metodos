let names = ["maria", "marcos", "julio", "ana", "luz", "juliana"];
console.log(names, "\n ---------------------------------------------------");

let mayus = names.map(name => name.toUpperCase());
console.log(mayus);

let sixName = mayus.find(name => name.length === 6);
if (sixName === undefined){
    console.log("no hay nombres de 6 letras en el array nombres");
}
else{
    console.log(sixName);
}

