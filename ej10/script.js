"use strict";

let option = "";

while (option !== "0") {
    option = prompt(`Elige una opción:
1 - Tabla de multiplicar
2 - Sumar números
3 - Impares del 1 al 20
4 - Cuenta atrás
0 - Salir`);

    if (option === null) {
        option = "0";
    }

    switch (option) {
        case "1":
            const tableText = prompt("¿De qué número quieres la tabla?");
            const tableNumber = Number(tableText);

            if (tableText === null) {
                break;
            }

            if (tableText.trim() === "" || !Number.isFinite(tableNumber)) {
                alert("Debes escribir un número válido.");
                break;
            }

            let table = "";

            for (let i = 1; i <= 10; i++) {
                table += `${tableNumber} x ${i} = ${tableNumber * i}\n`;
            }

            alert(table);
            break;

        case "2":
            let total = 0;

            while (true) {
                const numberText = prompt("Escribe un número. Vacío o Cancelar para terminar:");

                if (numberText === null || numberText.trim() === "") {
                    break;
                }

                const number = Number(numberText);

                if (!Number.isFinite(number)) {
                    alert("Ese dato no es un número válido.");
                } else {
                    total += number;
                }
            }

            alert("La suma es: " + total);
            break;

        case "3":
            let oddNumbers = "";

            for (let i = 1; i <= 20; i++) {
                if (i % 2 === 0) {
                    continue;
                }

                oddNumbers += i + " ";
            }

            alert(oddNumbers);
            break;

        case "4":
            const countdownText = prompt("Escribe un número entero mayor o igual que 0:");
            let countdown = Number(countdownText);

            if (countdownText === null) {
                break;
            }

            if (countdownText.trim() === "" || !Number.isInteger(countdown) || countdown < 0) {
                alert("Debes escribir un número entero mayor o igual que 0.");
                break;
            }

            let countdownResult = "";

            do {
                countdownResult += countdown + " ";
                countdown--;
            } while (countdown >= 0);

            alert(countdownResult);
            break;

        case "0":
            alert("Programa terminado.");
            break;

        default:
            alert("Opción desconocida.");
    }
}
