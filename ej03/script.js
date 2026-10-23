"use strict";

let numberValue = 25;
let bigintValue = 12345678901234567890n;
let stringValue = "Hola";
let booleanValue = true;
let nullValue = null;
let undefinedValue;
let symbolValue = Symbol("identificador");
let objectValue = { nombre: "Juan Diego", edad: 20 };

document.write("<ul>");
document.write("<li>number: " + numberValue + " - typeof: " + typeof numberValue + "</li>");
document.write("<li>bigint: " + bigintValue + "n - typeof: " + typeof bigintValue + "</li>");
document.write("<li>string: " + stringValue + " - typeof: " + typeof stringValue + "</li>");
document.write("<li>boolean: " + booleanValue + " - typeof: " + typeof booleanValue + "</li>");
document.write("<li>null: " + nullValue + " - typeof: " + typeof nullValue + "</li>");
document.write("<li>undefined: " + undefinedValue + " - typeof: " + typeof undefinedValue + "</li>");
document.write("<li>symbol: " + String(symbolValue) + " - typeof: " + typeof symbolValue + "</li>");
document.write("<li>object: " + JSON.stringify(objectValue) + " - typeof: " + typeof objectValue + "</li>");
document.write("</ul>");
