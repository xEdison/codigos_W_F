/*Cree un programa que muestre cuántos números 
impares hay entre 0 y 100
*/

let contador = 0;
let suma = 0;
while (contador <= 100) {
  if (contador % 2 != 0){
    suma = suma + 1;
    console.log("impar", contador);
  }
  contador = contador + 1;
}
console.log("Hay " + suma + " numeros impares");





















