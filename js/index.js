$(document).ready(function() {
    // Manejador de clic para los botones
    $('.cargarJsonBtn').click(function(event) {
        event.preventDefault(); // Evitar que el botón ejecute su acción predeterminada

        var resultado = $(this).siblings('.resultado'); // Seleccionar el contenedor de resultados específico

        var url = $(this).data('url'); // Obtener la URL del JSON del atributo data-url del botón

        $.getJSON(url, function(data) {
            resultado.empty(); // Limpiar el contenido anterior antes de mostrar el nuevo resultado

            // Mostrar cada propiedad del mueble
            resultado.append('<p>Nombre: ' + data.nombre + '</p>');
            resultado.append('<p>Descripción: ' + data.descripcion + '</p>');
            resultado.append('<p>Dimensiones:</p>');
            resultado.append('<ul>');
            resultado.append('<li>Alto: ' + data.dimensiones.alto + '</li>');
            resultado.append('<li>Ancho: ' + data.dimensiones.ancho + '</li>');
            resultado.append('<li>Profundidad: ' + data.dimensiones.profundidad + '</li>');
            resultado.append('</ul>');
            resultado.append('<p>Materiales: ' + data.materiales.join(', ') + '</p>');
            resultado.append('<p>Color: ' + data.color + '</p>');
            resultado.append('<p>Precio: ' + data.precio + '</p>');

            // Añadir clase para activar el borde
            resultado.addClass('borde-activo');
        }).fail(function(jqXHR, textStatus, errorThrown) {
            // Manejar errores si la solicitud falla
            console.error('Error al cargar el JSON:', textStatus, errorThrown);
            resultado.text('Error al cargar el JSON: ' + errorThrown);
        });
    });
});