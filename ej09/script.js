"use strict";

const userName = (prompt("Escribe tu nombre:") || "").trim();
const nickname = (prompt("Escribe tu apodo:") || "").trim();
const age = Number(prompt("Escribe tu edad:"));

const displayedName = userName || nickname || "Anónimo";
alert("Nombre mostrado: " + displayedName);

if (Number.isFinite(age) && age >= 18 && (userName || nickname)) {
    alert("Acceso permitido");
} else {
    alert("Acceso denegado");
}

const height = 0;
alert("Altura usando ||: " + (height || 170));
alert("Altura usando ??: " + (height ?? 170));

const hasName = !!userName;
alert("¿Hay un nombre? " + hasName);
