//Cree un programa que muestre los números naturales de 1 a n.

let num = parseFloat(prompt("Ingrese un numero"));
let contador =1;
let acumuladora = 0;

while (contador <= num) {
    acumuladora += contador**2;
    contador++
    
}
console.log(acumuladora);



