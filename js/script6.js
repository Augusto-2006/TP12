//Tomar como base el código desarrollado en el ejercicio 5 y agregar las siguientes funcionalidades: 
//el usuario podrá ingresar "suma", "resta", "multiplicación" o "división". Dependiendo de la opción 
//elegida por el usuario el programa realizara la misma funcionalidad que realizaba para la suma. 
let resultado;
let numero;
let operacion = prompt("Por favor, ingresa 'suma', 'resta', 'multiplicación' o 'división'");
do {
    numero = prompt("Por favor, ingresa un número o '=' para terminar");
    if (numero !== "=") {
        numero = Number(numero);
        if (resultado === undefined) {
            resultado = numero;
        } else {
            if (operacion === "suma") {
                resultado += numero;
            } else if (operacion === "resta") {
                resultado -= numero;
            } else if (operacion === "multiplicación") {
                resultado *= numero;
            } else if (operacion === "división") {
                resultado /= numero;
            }
        }
    }
} while (numero !== "=");
console.log("El resultado de la operación es: " + resultado);
 