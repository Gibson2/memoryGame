var modoRelax = false;
var movimientos = 0;
var cronometro;
var grupoTarjetas = [
    ['🦄', '🍦'],
    ['🌈', '👽'],
    ['👾', '🤖', '👹', '👺'],
    ['🤡', '💩', '🎃', '🙀'],
    ['☠️', '❤', '😽', '🍀', '🍒'],
    ['🙉', '🌴', '🏎', '😼', '⚽'],
];

var nivelActual = 0;
var niveles = [{
        tarjetas: grupoTarjetas[0],
        movimientosMax: 3,
        time: 10
    },
    {
        tarjetas: grupoTarjetas[0].concat(
            grupoTarjetas[1]),
        movimientosMax: 8,
        time: 15
    },
    {
        tarjetas: grupoTarjetas[0].concat(
            grupoTarjetas[1],
            grupoTarjetas[2]
        ),
        movimientosMax: 12,
        time: 25
    },
    {
        tarjetas: grupoTarjetas[0].concat(
            grupoTarjetas[1],
            grupoTarjetas[2],
            grupoTarjetas[3]
        ),
        movimientosMax: 18,
        time: 60
    },
    {
        tarjetas: grupoTarjetas[0].concat(
            grupoTarjetas[1],
            grupoTarjetas[2],
            grupoTarjetas[3],
            grupoTarjetas[4]
        ),
        movimientosMax: 25,
        time: 90
    },
    {
        tarjetas: grupoTarjetas[0].concat(
            grupoTarjetas[1],
            grupoTarjetas[2],
            grupoTarjetas[3],
            grupoTarjetas[4],
            grupoTarjetas[5]
        ),
        movimientosMax: 30,
        time: 120
    }
];