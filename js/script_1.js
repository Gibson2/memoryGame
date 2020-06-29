/* console.log("Hola");

function mensaje() {
    var saludo = "Hola";

    console.log(saludo);

}

mensaje();

function mensaje() {
    var saludo = "Hola";
    var antisaludo = "Chao";
    var contento = true;

    if (contento === true) {
        console.log(saludo);
    } else {
        console.log(antisaludo);

    }
}
mensaje() */

/* var nombres = ['Juan', "Luis", 'Mateo'];

function mensaje(nombre) {
    console.log('Hola, ' + nombre);
}

nombres.forEach(function (valor) {
    mensaje(valor);
}); */

/* var vehiculo = {
    marca: 'Toyota',
    motor: 'Mecanico',
    acelerar: function () {
        console.log("@@ =ooooooo");
    }
}; */

/* var encabezado = document.querySelector('h1');

console.log(encabezado);

encabezado.textContent = 'Hola con JS te modifique'; */

/* function cambiacolor() {
    this.classList.toggle('cambia');
}

document.querySelector('body').addEventListener('click', cambiacolor); */

function obtenerDatos(evento) {
    evento.preventDefault();

    var bienvenida = document.querySelector("#bienvenida");
    var nombre = document.querySelector("#nombre").value;
    var fecha = document.querySelector("#fecha").value;
    var edad = 2020 - fecha;
    var mensajeEdad;
    var mensaje;
    // var mensaje = 'hola ' + nombre + ', tienes ' + edad;
    bienvenida.textContent = mensaje;

    //Condicional
    if (edad >= 30) {
        mensajeEdad = "Ya estas viejo";
    } else {
        mensajeEdad = "Eres Joven todavia";
    }

    mensaje =
        "<h1> hola " + nombre + ", tienes " + edad + ", " + mensajeEdad + "</h1>";
    bienvenida.innerHTML = mensaje;
    /* console.log(nombre);
      console.log(fecha); */
}

/* obtenerDatos();

function saludar() {
    console.log("Hola");
} */

document.querySelector("#formulario").addEventListener("submit", obtenerDatos);