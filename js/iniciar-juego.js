function iniciar() {
    movimientos = 0;
    document.querySelector('#mov').innerText = '00';

    reparteTarjetas(niveles[nivelActual].tarjetas);
    maxContador();

    //document.querySelector('#feedback').classList.remove('visible');

    document.querySelector('.selecciona-nivel').classList.remove('visible');
    document.querySelector('#endGame').classList.remove('visible');
    document.querySelector('#timeOver').classList.remove('visible');
    document.querySelector('#gameOver').classList.remove('visible');
    document.querySelector('#subeNivel').classList.remove('visible');

    document.querySelectorAll(".tarjeta").forEach(function (elemento) {
        elemento.addEventListener('click', descubrir);
    });

    if (!modoRelax) {
        iniciaCronometro(niveles[nivelActual].time);
        document.querySelector('#cronometro').classList.remove('cronometro-oculto');
    } else {
        iniciaCronometro(0, true)
        document.querySelector('#cronometro').classList.add('cronometro-oculto');
    }
}

function reiniciar() {
    nivelActual = 0;
    actualizaNivel();
    iniciar();
}

function iniciaJuegoNormal() {
    modoRelax = false;
    document.querySelector('#bienvenida').classList.remove('visible');
    //document.querySelector('#control-nivel').classList.add('control-oculto');
    iniciar();
}

function iniciaJuegoRelax() {
    modoRelax = true;
    document.querySelector('#bienvenida').classList.remove('visible');
    iniciar();
}