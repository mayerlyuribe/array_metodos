let nombres = ["alex", "eduar", "nickolas", "julian", "camila"];
let coso = "julian"
console.log("nombres: ", nombres.join(', '))
let nom = nombres.indexOf(coso)

if (nom >= 0 && nom <= nombres.length){
    let cambio = nombres[nom] = "julio"
    console.log("cambios: ", nombres.join(', '))
}
