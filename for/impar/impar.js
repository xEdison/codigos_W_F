//Cree un programa que muestre los numeros impares entre 1 y n. Use ciclo for

let num = parseInt(prompt("ingrese numero"));

for (let index = 1; index <= num; index++) {
    if (index % 2 !=0) {
        console.log("impar", index);
    }
    
}