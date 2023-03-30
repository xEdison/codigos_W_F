let num = 0;
let acumulador = 0;
let promedio = 0;

for (let index = 0; index <= 10; index++) {
    num = parseInt(prompt("ingrese numero"));
    acumulador = acumulador + num;
    promedio = acumulador / num;
}
console.log("El promedio de los numeros es",promedio);