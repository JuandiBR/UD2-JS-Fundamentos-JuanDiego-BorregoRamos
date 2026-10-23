"use strict";

const firstText = prompt("Escribe el primer número:");
const secondText = prompt("Escribe el segundo número:");
const firstNumber = Number(firstText);
const secondNumber = Number(secondText);

if (firstText === null || secondText === null) {
    alert("Has cancelado la calculadora.");
} else if (firstText.trim() === "" || secondText.trim() === "" ||
    !Number.isFinite(firstNumber) || !Number.isFinite(secondNumber)) {
    alert("Debes escribir dos números válidos.");
} else {
    alert(`Suma: ${firstNumber + secondNumber}
Resta: ${firstNumber - secondNumber}
Multiplicación: ${firstNumber * secondNumber}
División: ${firstNumber / secondNumber}
Resto: ${firstNumber % secondNumber}
Potencia: ${firstNumber ** secondNumber}`);
}

let counter = 1;
alert("Ahora counter empieza en 1. Verás sufijo ++, prefijo ++, sufijo -- y prefijo --.");

alert(counter++);

alert(++counter);

alert(counter--);

alert(--counter);

counter += 4;
alert("Después de counter += 4: " + counter);
counter *= 2;
alert("Después de counter *= 2: " + counter);
