
const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event) {
    const pergunta = event.currentTarget;
    const controls = pergunta.getAttribute("aria-controls");
    const resposta = document.getElementById(controls);

    resposta.classList.toggle("ativa");
    const ativa = resposta.classList.contains("ativa");
    pergunta.setAttribute("aria-expanded", "true");
}

function eventosPerguntas(pergunta) {
    pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(eventosPerguntas);