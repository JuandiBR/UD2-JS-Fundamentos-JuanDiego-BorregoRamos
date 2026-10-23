"use strict";

const userName = prompt("¿Cómo te llamas?");

if (userName === null) {
    alert("Has cancelado.");
} else {
    const city = prompt("¿En qué ciudad vives?");

    if (city === null) {
        alert("Has cancelado.");
    } else {
        const birthYearText = prompt("¿En qué año naciste?");

        if (birthYearText === null) {
            alert("Has cancelado.");
        } else {
            const birthYear = Number(birthYearText);
            const currentYear = new Date().getFullYear();

            if (userName.trim() === "" || city.trim() === "" ||
                !Number.isInteger(birthYear) || birthYear < 1 || birthYear > currentYear) {
                alert("Escribe un nombre, una ciudad y un año de nacimiento válido.");
            } else {
                alert(`¡Bienvenido, ${userName}! Vives en ${city} y este año cumples ${currentYear - birthYear} años.`);
            }
        }
    }
}
