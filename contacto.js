document.addEventListener('DOMContentLoaded', () => {

    // Seleccionamos los elementos del HTML que vamos a necesitar
    const formulario = document.getElementById('formulario-contacto');
    const mensajeConfirmacion = document.getElementById('mensaje-confirmacion');

    // Verificamos si encontramos el formulario en la página
    if (formulario) {
        
        // Creamos un "escuchador" para el evento 'submit' (cuando se intenta enviar)
        formulario.addEventListener('submit', function(evento) {
            
            // 1. Prevenimos el comportamiento por defecto del formulario (que es recargar la página)
            evento.preventDefault();
            
            // 2. Ocultamos el formulario
            formulario.style.display = 'none';
            
            // 3. Mostramos el mensaje de confirmación
            mensajeConfirmacion.style.display = 'block';

            // Opcional: Escribimos en la consola del navegador para confirmar que funcionó
            console.log("Formulario enviado de forma simulada.");
        });
    }

    // Lógica para mantener actualizado el contador del carrito también en esta página
    // (Esto es opcional pero es una buena práctica)
    const contadorCarrito = document.getElementById('carrito-contador');
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    contadorCarrito.textContent = carrito.length;
});