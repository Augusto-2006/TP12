//Modifica el ejercicio 3 para que la cuenta regresiva sea desde un numero ingresado por el usuario y ese 
//numero pueda ser solamente múltiplo de 5. 
let numero = prompt("Por favor, ingresa un número que sea múltiplo de 5");
if (numero % 5 === 0) {
    do {
        console.log(numero);
        numero--;
    } while (numero > 0);
} else {
    console.log("El número ingresado no es múltiplo de 5. Por favor, igrese un numero correcto");
}