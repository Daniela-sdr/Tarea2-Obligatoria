//SILVIA DANIEA RUIZ (Daniela)
//DNI 20467216

console.log("\n--- Array / Métodos ---");

const frutas = ["manzana", "banana", "pera", "naranja"];

frutas.push("kiwi");
frutas.unshift("sandía");
frutas.pop();
frutas.shift();

for (let i = 0; i < frutas.length; i++){
    console.log(`Índice:  ${i} -->  ${frutas[i]}`);
}