//SILVIA DANIEA RUIZ (Daniela)
//DNI 20467216

console.log("--- Bucle con for...of y acumulador ---\n");

const precios = [500, 1000, 6000, 300, 5000];
let acumPrecios = 0;
let contPrecios = 0;
let promedio = 0;

for (let precio of precios){
    console.log(`$ ${precio}`);
    acumPrecios += precio;
    contPrecios++;
}
console.log("___________")
console.log(`$ ${acumPrecios} <--- Total`);
promedio = acumPrecios / contPrecios;
console.log(`$ ${promedio} <--- Promedio de la compra`);