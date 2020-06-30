escribeNiveles();

document.querySelectorAll('.reiniciar').forEach(function (elemento) {
    elemento.addEventListener('click', reiniciar);
});

document.querySelectorAll('.juego-normal').forEach(function (elemento) {
    elemento.addEventListener('click', iniciaJuegoNormal);
});

document.querySelectorAll('.juego-relax').forEach(function (elemento) {
    elemento.addEventListener('click', iniciaJuegoRelax);
});

document.querySelectorAll('.nivel').forEach(function (elemento) {
    elemento.addEventListener('click', cambiaNivel);
});

document.querySelector('#control-nivel').addEventListener('click', muestraMenuNiveles);
document.querySelector('#cierra-niveles').addEventListener('click', ocultaMenuNiveles);


document.querySelector('#subir').addEventListener('click', cargaNuevoNivel);
document.querySelector('body').addEventListener('click', clickFueraDeMenu);
document.addEventListener('keydown', teclaEscCierraMenu);
document.querySelector('#bienvenida').classList.add('visible');