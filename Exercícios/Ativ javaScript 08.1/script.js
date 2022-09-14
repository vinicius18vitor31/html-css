/*
const lista = ["JavaScript", "HTML", "CSS", "PHP"];

const body = document.querySelector("body");

function adicionarBody(item) {
    body.innerHTML += "<li>" +
    item + "</li>"
}

lista.forEach(adicionarBody);
*/

/* retornar ao total 
const total = lista.length;

remover o ultimo
const ultimo = lista.pop();

remover o primeiro
const primeiro = lista.shift();

adicionar ao final
lista.push('PHP');
*/

const links =document.querySelectorAll("nav a");

function logHref(item) {
    const href = item.href;
    console.log(href);
}

links.forEach(logHref);

const lista = ["JavaScript", "HTML", "CSS", "PHP"];
lista.pop();
console.log(lista);