//Modificar el programa del ejercicio 1 para que el usuario solamente pueda ingresar números impares

let numero = prompt("Ingrese un número impar para ver su tabla de multiplicación");
numero = Number(numero);
if (Math.abs(numero) % 2 != 1) {
  console.log("No es un número impar. Ingrese otro número");
} else {
  console.log("Tabla de multiplicación del " + numero);
  for (let i = 1; i <= 10; i++) {
    console.log(numero + " x " + i + " = " + (numero * i));
  }
}
  
