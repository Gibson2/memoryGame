function subeNivel() {
    nivelActual++;
}

function actualizaNivel() {
    var nivelTexto = nivelActual + 1;
    if (nivelTexto < 10) {
        nivelTexto = '0' + nivelTexto;
    }

    document.querySelector('#nivel').innerText = nivelTexto;
}

function cambiaNivel() {
    var nivel = parseInt(this.dataset.nivel);
    nivelActual = nivel;
    actualizaNivel();
    iniciar();
}

function cargaNuevoNivel() {
    subeNivel();
    actualizaNivel();
    iniciar();
}