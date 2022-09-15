
function seguirMouse(event) {
    const x = event.x;
    const y = event.y;
    const circulo = document.querySelector('#circulo');
    circulo.style . top = event.y + "px";
    circulo.style . left = event.x + "px";
}

window.addEventListener('mousemove', seguirMouse);
