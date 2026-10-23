"use strict";

const playlist = [
    ["Bohemian Rhapsody", "Queen", 354, "Rock"],
    ["Hotel California", "Eagles", 391, "Rock"],
    ["Imagine", "John Lennon", 183, "Pop"]
];

playlist.push(["Canción de verano", "Grupo Sol", 180, "Pop"]);
playlist.push(["Noche azul", "Banda Luna", 210, "Rock"]);
const removedWithPop = playlist.pop();
playlist[0].push(1975);

document.write("<h2>Parte 1: push y pop</h2>");
document.write("<p>Canción eliminada: " + removedWithPop[0] + "</p>");
document.write("<ul>");

for (let i = 0; i < playlist.length; i++) {
    document.write("<li>" + playlist[i].join(" | ") + "</li>");
}

document.write("</ul>");

playlist.splice(1, 0, ["Un nuevo día", "Grupo Alba", 195, "Pop"]);

const removedWithSplice = playlist.splice(2, 1)[0];
playlist.splice(0, 1, ["Nuevo comienzo", "Banda Luz", 200, "Pop"]);

document.write("<h2>Parte 2: splice</h2>");
document.write("<p>Canción eliminada: " + removedWithSplice.join(" | ") + "</p>");
document.write("<ul>");

for (let i = 0; i < playlist.length; i++) {
    document.write("<li>" + playlist[i].join(" | ") + "</li>");
}

document.write("</ul>");

const shallowCopy = [...playlist];
document.write("<h2>Parte 3: copias</h2>");
document.write("<p>Título original antes del cambio: " + playlist[0][0] + "</p>");

shallowCopy[0][0] = "Título cambiado en la copia superficial";
document.write("<p>Título en la copia superficial: " + shallowCopy[0][0] + "</p>");
document.write("<p>Título en la original: " + playlist[0][0] + "</p>");

const independentCopy = playlist.map(song => [...song]);
independentCopy[0][0] = "Título cambiado en la copia independiente";

document.write("<p>Título en la copia independiente: " + independentCopy[0][0] + "</p>");
document.write("<p>Título en la original, que no vuelve a cambiar: " + playlist[0][0] + "</p>");
