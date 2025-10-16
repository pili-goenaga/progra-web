document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('formulario-login');

    form.addEventListener('submit', (e) => {
        // Prevenimos que el formulario se envíe de la forma tradicional
        e.preventDefault();

        // Obtenemos los valores de los campos del formulario
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Obtenemos los usuarios guardados de localStorage
        const users = JSON.parse(localStorage.getItem('users')) || [];

        // Buscamos un usuario que coincida con el email Y la contraseña ingresados
        const validUser = users.find(user => user.email === email && user.password === password);

        // Si no encontramos un usuario válido, mostramos un error
        if (!validUser) {
            return alert('Usuario y/o contraseña incorrectos.');
        }

        // Si el usuario es válido, le damos la bienvenida
        alert(`¡Bienvenido de nuevo, ${validUser.nombre}!`);
        
        // Guardamos la información del usuario que inició sesión en sessionStorage.
        // Esto es útil si queremos mostrar su nombre en otras partes del sitio.
        sessionStorage.setItem('loggedInUser', JSON.stringify(validUser));
        
        // Redirigimos al usuario a la página principal
        window.location.href = 'index.html';
    });
});