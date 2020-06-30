function iniciaCronometro(timeSegundos, stop = false) {
    clearInterval(cronometro);
    var segundos;
    var minutos;
    var segundosTexto;
    var minutosTexto;

    if (timeSegundos >= 60) {
        minutos = Math.floor(timeSegundos / 60)
        segundos = Math.floor(((timeSegundos / 60) % 1) * 60)
    } else {
        segundos = timeSegundos;
        minutos = 0;
    }

    segundosTexto = segundos;
    minutosTexto = minutos;

    function cambiaTiempo() {
        if (segundos < 10) {
            segundosTexto = '0' + segundos;
        }

        if (minutos < 10) {
            minutosTexto = '0' + minutos;
        }
        document.querySelector('#segundos').innerText = segundosTexto;
        document.querySelector('#minutos').innerText = minutosTexto;
    }

    if (stop == true) {
        clearInterval(cronometro);
        segundos = 0;
        minutos = 0;
        cambiaTiempo();
        return
    }


    function actualizaContador() {

        cambiaTiempo();

        segundos--;

        if (segundos < 0) {
            segundos = 59;
            minutos--;
        }

        if (minutos < 0) {
            segundos = 0;
            minutos = 0;

            clearInterval(cronometro);
            timeOver();
        }

        segundosTexto = segundos;
        minutosTexto = minutos;

    }

    cronometro = setInterval(actualizaContador, 1000);
}