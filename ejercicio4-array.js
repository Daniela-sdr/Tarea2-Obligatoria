//SILVIA DANIEA RUIZ (Daniela)
//DNI 20467216

console.log("\n--- Array: cuántas veces aparece el n° 2 ---\n");

const num = [1, 2, 3, 2, 4, 2, 5];
let contDos = 0;
for (let i = 0; i < num.length; i++){
    if(num[i] === 2){
        contDos++;
    } 
}   
console.log(num,"\n");
console.log(`Hay ${contDos} números '2' en el array.`); 