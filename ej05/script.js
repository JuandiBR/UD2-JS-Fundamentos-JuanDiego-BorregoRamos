"use strict";

const firstText = prompt("Escribe el primer número:");
const secondText = prompt("Escribe el segundo número:");
const firstNumber = Number(firstText);
const secondNumber = Number(secondText);

if (firstText === null || secondText === null) {
    alert("Has cancelado la suma.");
} else if (firstText.trim() === "" || secondText.trim() === "" ||
    !Number.isFinite(firstNumber) || !Number.isFinite(secondNumber)) {
    alert("Debes escribir dos números válidos.");
} else {
    alert("Suma numérica: " + (firstNumber + secondNumber) +
        "\nSin convertir (concatenación): " + (firstText + secondText));
}

const values = ["123", " 45 ", "abc", "", "0", 0, null, undefined, true];

document.write('<table border="1">');
document.write("<tr><th>Valor original</th><th>Number()</th><th>String()</th><th>Boolean()</th></tr>");

for (let i = 0; i < values.length; i++) {
    let valueLabel = String(values[i]);

    if (typeof values[i] === "string") {
        valueLabel = '"' + values[i] + '"';
    }

    document.write("<tr>");
    document.write("<td><pre>" + valueLabel + "</pre></td>");
    document.write("<td>" + Number(values[i]) + "</td>");
    document.write('<td><pre>"' + String(values[i]) + '"</pre></td>');
    document.write("<td>" + Boolean(values[i]) + "</td>");
    document.write("</tr>");
}

document.write("</table>");
