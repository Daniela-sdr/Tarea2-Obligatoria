//SILVIA DANIEA RUIZ (Daniela)
//DNI 20467216

console.log("--- Array: recorrer y guardar nuevo array ---\n");

const num = [5, 12, 8, 20, 3, 15];
const mayorDiez = [];
 for (let i = 0; i < num.length; i++){
    if(num[i] > 10){
        mayorDiez.push(num[i]);
    }
 }
 console.log("-- Array Original --\n");
 console.log(num);
 console.log("\n-- Array Mayores a 10 --\n");
 console.log(mayorDiez);