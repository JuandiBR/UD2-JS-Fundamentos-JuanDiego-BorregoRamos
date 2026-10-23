"use strict";

const temporalApi = typeof Temporal !== "undefined" ? Temporal : temporal.Temporal;
const today = temporalApi.Now.plainDateISO();
const dateFormat = { day: "numeric", month: "long", year: "numeric" };

document.write(`<p>La fecha actual es ${today.toLocaleString("es-ES", dateFormat)}</p>`);

if (today.day === 31) {
    document.write("<p>No quedan días disponibles entre el 1 y el 30 del mes actual.</p>");
} else {
    let eventDay;

    do {
        eventDay = Math.floor(Math.random() * 30) + 1;
    } while (eventDay < today.day || eventDay > today.daysInMonth);

    const eventDate = today.with({ day: eventDay });
    const daysLeft = today.until(eventDate).days;

    document.write(`<p>La fecha del evento: ${eventDate.toLocaleString("es-ES", dateFormat)}</p>`);
    document.write(`<p>Días que faltan para el evento: ${daysLeft} días</p>`);
}
