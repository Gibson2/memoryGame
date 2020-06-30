function barajaTarjeta(lasTarjetas) {
    var totalTarjetas = lasTarjetas.concat(lasTarjetas);
    var resultado;

    resultado = totalTarjetas.sort(
        function () {
            return 0.5 - Math.random();
        });
    return resultado;
}


function reparteTarjetas(lasTarjetas) {

    var mesa = document.querySelector('#mesa');
    var tarjetaBarajadas = barajaTarjeta(lasTarjetas);
    mesa.innerHTML = '';

    tarjetaBarajadas.forEach(function (elemento) {
        var tarjeta = document.createElement('div');
        tarjeta.innerHTML =
            '<div class="tarjeta" data-valor=' +
            elemento +
            '>' +
            '<div class="tarjeta__contenido">' +
            elemento +
            '</div>'
        '</div>';

        mesa.appendChild(tarjeta);
    });
}