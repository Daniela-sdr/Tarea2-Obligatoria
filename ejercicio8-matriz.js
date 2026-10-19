//SILVIA DANIEA RUIZ (Daniela)
//DNI 20467216

console.log("--- Matriz, recorrerla y sumar elementos ---\n");

const numeros = [
    [2, 65, -55],
    [1000, 0, 88],
    [-13, 89, 67]
];
let sumaMatriz = 0;
for(fila = 0; fila < numeros.length; fila++){
    for(col = 0; col < numeros[fila].length; col++){
        sumaMatriz += numeros[fila][col];
    }
}
console.log("Sumatoria de la matriz numeros\n")
console.log(numeros,"\n");
console.log(`La sumatoria total de la matriz es: ${sumaMatriz}`);