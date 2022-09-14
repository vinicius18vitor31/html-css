/*
if (true) {
    console.log("Teste");
}

if (false) {
    console.log("Teste");
} else {
    console.log("Esse executa");
}
*/

const botao = document.querySelector("button");

function somar() {
    const div = document.querySelector("div");
    const total = Number(div.innerText) + 1;
    console.log(total);

    if (total < 10) {
    div.innerText = total;
    } else {
        console.log("Não é possível adicionar mais");
    }
      
}

if (botao);
botao.addEventListener("click", somar);