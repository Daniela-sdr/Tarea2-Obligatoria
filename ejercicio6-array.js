//SILVIA DANIEA RUIZ (Daniela)
//DNI 20467216

console.log("--- Recorrer un array de forma inversa ---\n");

const nombres = ["Giuliana", "Fabrizio", "Daniela", "Leandro", "Alejandrina"];
const nombresInverso = [];

for (let i = nombres.length -1; i >= 0; i--){
    nombresInverso.push(nombres[i]);
}
console.log("--- Array Original ---\n");
console.log(nombres);
console.log("\n--- Array Inverso ---\n");
console.log(nombresInverso);