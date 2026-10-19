//SILVIA DANIEA RUIZ (Daniela)
//DNI 20467216

console.log("--- Matriz ---");

const oceano = [
    ["~", "~", "~"],
    ["~", "B", "~"],
    ["~", "~", "~"]
];

for(fila = 0; fila < oceano.length; fila++){
    for(col = 0; col < oceano[fila].length; col++){
        if (oceano[fila][col] === "B"){
            console.log("La ubicación de 'B' es: ", fila, ",", col);
        }
    }
}
