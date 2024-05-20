// Validacion del formulario

var boton = document.getElementById("enviar");
var formulario = document.getElementById("formulario");

boton.addEventListener("click", (evento) => {
    evento.preventDefault();

    valido = validar();
    if (valido) {
        formulario.submit();
    }
});

function mostrarError(campo, mensaje) {
    alert(mensaje);
    campo.focus();
}

function validar() {
    let nombre = document.getElementById("nombre").value;
    if (!nombre) {
        mostrarError(document.getElementById("nombre"), "El campo Nombre no puede estar en blanco");
        return false;
    }
    let name_re = /^[a-zA-Z ]{2,15}$/;
    if (!name_re.test(nombre)) {
        mostrarError(document.getElementById("nombre"), "El Nombre solo puede contener letras y debe contener de 2 a 15 caracteres.");
        return false;
    }

    let apellido = document.getElementById("apellido").value;
    if (!apellido) {
        mostrarError(document.getElementById("apellido"), "El campo Apellido no puede estar en blanco");
        return false;
    }
    let apellido_reg = /^[a-zA-Z ]{1,40}$/;
    if (!apellido_reg.test(apellido)) {
        mostrarError(document.getElementById("apellido"), "El apellido tiene que tener un maximo de 40 caracteres");
        return false;
    }

    let telefono = document.getElementById("telefono").value;
    if (!telefono) {
        mostrarError(document.getElementById("telefono"), "El campo Telefono no puede estar en blanco");
        return false;
    }

    let telefono_reg = /^\d{1,9}$/;
    if (!telefono_reg.test(telefono)) {
        mostrarError(document.getElementById("telefono"), "El numero de telefono tiene que tener entre 1 y 9 digitos");
        return false;
    }

    let correo = document.getElementById("correo").value;
    if (!correo) {
        mostrarError(document.getElementById("correo"), "El campo Correo electronico no puede estar en blanco");
        return false;
    }

    let correo_reg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!correo_reg.test(correo)) {
        mostrarError(document.getElementById("correo"), "Tienes que poner un correo con los estandares normales.");
        return false;
    }

    return true;
}