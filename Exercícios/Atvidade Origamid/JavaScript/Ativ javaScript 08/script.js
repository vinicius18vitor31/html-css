
const lista = ["JavaScript", "HTML", "CSS"];

const body = document.querySelector("body");

for (let index = 0; index < lista.length; index++) {
    console.log();
    body.innerHTML += "<li>" + lista[index] + "</li>"
}
