//Realizar un pequeño programa que imprima por consola la tabla de multiplicación del numero
//ingresado por el usuario.


let numero = prompt("Ingrese un número para ver su tabla de multiplicación");
numero = Number(numero)
console.log("Tabla de multiplicación del " + numero);
for (let i = 1; i <= 10; i++) {
    console.log(numero + " x " + i + " = " + (numero * i));
}
