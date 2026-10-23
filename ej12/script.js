"use strict";

const today = new Date();
const currentDay = today.getDate();

const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
const dateFormat = { day: "numeric", month: "long", year: "numeric" };

document.write(`<p>La fecha actual es ${today.toLocaleDateString("es-ES", dateFormat)}</p>`);

if (currentDay === 31) {
    document.write("<p>No quedan días disponibles entre el 1 y el 30 del mes actual.</p>");
} else {
    let eventDay;

    do {
        eventDay = Math.floor(Math.random() * 30) + 1;
    } while (eventDay < currentDay || eventDay > lastDay);

    const eventDate = new Date(today.getFullYear(), today.getMonth(), eventDay);

    const daysLeft = eventDate.getDate() - currentDay;

    document.write(`<p>La fecha del evento: ${eventDate.toLocaleDateString("es-ES", dateFormat)}</p>`);
    document.write(`<p>Días que faltan para el evento: ${daysLeft} días</p>`);
}
