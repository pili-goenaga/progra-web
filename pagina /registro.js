document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('formulario-registro');

    form.addEventListener('submit', (e) => {
        // Prevenimos que el formulario se envíe de la forma tradicional
        e.preventDefault();

        // Obtenemos los valores de los campos del formulario
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Obtenemos los usuarios que ya existan en localStorage. Si no hay ninguno, creamos un array vacío.
        const users = JSON.parse(localStorage.getItem('users')) || [];
        
        // Buscamos si ya existe un usuario con el mismo email para evitar duplicados
        const isUserRegistered = users.find(user => user.email === email);
        if (isUserRegistered) {
            return alert('El email ya está registrado. Por favor, intentá con otro.');
        }

        // Si el usuario no existe, lo agregamos al array
        users.push({ nombre: nombre, email: email, password: password });
        
        // Guardamos el array actualizado de usuarios en localStorage
        localStorage.setItem('users', JSON.stringify(users));

        alert('¡Registro exitoso! Ahora serás dirigido para iniciar sesión.');
        
        // Redirigimos al usuario a la página de login
        window.location.href = 'login.html';
    });
});