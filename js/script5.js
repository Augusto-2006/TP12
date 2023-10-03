//Crea un programa que calcule y muestre por consola la suma de los números ingresados por el usuario. 
//El programa deberá seguir pidiéndole al usuario que ingrese números hasta que el usuario ingrese el símbolo "=", 
//en ese momento el programa mostrara por consola el resultado de todos los números sumados. 
let suma = 0;
let numero;
do {
    numero = prompt("Por favor, ingresa un número y '=' para terminar");
    if (numero !== "=") {
        suma += numero;
    }
} while (numero !== "=");
console.log("La suma de todos los números ingresados es: " + suma);