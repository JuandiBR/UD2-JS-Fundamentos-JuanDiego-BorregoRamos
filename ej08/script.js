"use strict";

const gradeText = prompt("Escribe una nota entre 0 y 10:");
const grade = Number(gradeText);

if (gradeText === null || gradeText.trim() === "" ||
    !Number.isFinite(grade) || grade < 0 || grade > 10) {
    alert("Error: debes escribir un número entre 0 y 10.");
} else {
    if (grade < 5) {
        alert("Suspenso");
    } else if (grade < 7) {
        alert("Aprobado");
    } else if (grade < 9) {
        alert("Notable");
    } else {
        alert("Sobresaliente");
    }

    const passedMessage = grade >= 5 ? "Has aprobado." : "Has suspendido.";
    alert(passedMessage);
}
