function finalizar() {
    if (nivelActual < nivel.length - 1) {
        document.querySelector('#subeNivel').classList.add('visible');
    } else {
        document.querySelector('#endGame').classList.add('visible');
    }
}