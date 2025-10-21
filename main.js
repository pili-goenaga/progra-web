// js/main.js - El único archivo JS que necesitas (VERSIÓN FINAL)

document.addEventListener('DOMContentLoaded', () => {
    // =================================================================================
    // 1. BASE DE DATOS Y ESTADO GLOBAL DEL CARRITO
    // =================================================================================
    const baseDeDatos = [
        { id: 1, nombre: 'Skinty Fia', artista: 'Fontaines D.C.', precio: 3500, imagen: 'https://fontainesdc.com/cdn/shop/products/SKINTY-LP.png?v=1657616070' },
        { id: 2, nombre: 'Born to Die: The Paradise Edition', artista: 'Lana Del Rey', precio: 4000, imagen: 'https://recordstore.co.uk/cdn/shop/files/B2D_-_Vinyl_1.png?v=1743016688' },
        { id: 3, nombre: 'Rumours', artista: 'Fleetwood Mac', precio: 3200, imagen: 'https://shop.rocksound.tv/cdn/shop/files/FM1.png?v=1743515156' },
        { id: 4, nombre: '7', artista: 'Beach House', precio: 3800, imagen: 'https://sound-merch.com.au/cdn/shop/products/BH-7_1024x1024.png?v=1655268046' },
        { id: 5, nombre: 'Pure Heroine', artista: 'Lorde', precio: 3600, imagen: 'https://umusicstore.com.ar/cdn/shop/files/Lorde_PureHeroineVinilo.png?v=1737492341' },
        { id: 6, nombre: 'Deathconsciousness', artista: 'Have a Nice Life', precio: 3000, imagen: 'https://imprintmerch.com.au/cdn/shop/files/HaveANiceLife-DeathconsciousnessLP-TransparentRed_1024x1024.png?v=1742951464' },
        { id: 7, nombre: 'Combat Rock', artista: 'The Clash', precio: 3500, imagen: 'https://sound-merch.com.au/cdn/shop/products/TheClash_CombatRock_1024x1024.png?v=1622519567' },
        { id: 8, nombre: 'Heaven or Las Vegas', artista: 'Cocteau Twins', precio: 4000, imagen: 'https://sound-merch.com.au/cdn/shop/products/HEAVEN-AND-LAS-VEGAS_1024x1024.png?v=1638761078' },
        { id: 9, nombre: 'In Rainbows', artista: 'Radiohead', precio: 3200, imagen: 'https://sound-merch.com.au/cdn/shop/products/Radiohead_InRainbows_1024x1024.png?v=1597909496' },
        { id: 10, nombre: 'Mellon Collie and the Infinite Sadness', artista: 'The Smashing Pumpkins', precio: 8800, imagen: 'https://store.smashingpumpkins.com/cdn/shop/files/mcis4LP.png?v=1706567640' },
        { id: 11, nombre: 'Comedown Machine', artista: 'The Strokes', precio: 3600, imagen: 'https://shop.thestrokes.com/cdn/shop/files/The-Comedown-Machine-LP-packshot_1200x1200.png?v=1729133794' },
        { id: 12, nombre: 'songs', artista: 'Adrianne Lenker', precio: 3000, imagen: 'https://store.bigthief.net/cdn/shop/products/big-thief-songs-and-instrumentals-black-double-vinyl_600x.png?v=1745940776'}
    ];
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    // =================================================================================
    // 2. ELEMENTOS DEL DOM GLOBALES (Existen en todas las páginas)
    // =================================================================================
    const contadorCarrito = document.getElementById('carrito-contador');
    const panelCarrito = document.getElementById('carrito-panel');
    const overlayCarrito = document.getElementById('carrito-overlay');
    const botonCerrarCarrito = document.getElementById('cerrar-carrito');
    const iconoCarrito = document.querySelector('.carrito-icono a');
    const contenedorItemsCarrito = document.getElementById('carrito-items');
    const precioTotalCarrito = document.getElementById('carrito-total-precio');
    const botonVaciar = document.getElementById('btn-vaciar-carrito');
    const botonFinalizar = document.getElementById('btn-finalizar-compra');

    // =================================================================================
    // 3. LÓGICA DEL CARRITO (Funciones globales para todas las páginas)
    // =================================================================================
    
    function renderizarCarrito() {
        if (!contenedorItemsCarrito) return;
        contenedorItemsCarrito.innerHTML = '';
        if (carrito.length === 0) {
            contenedorItemsCarrito.innerHTML = '<p style="text-align: center;">Tu carrito está vacío.</p>';
        } else {
            carrito.forEach(producto => {
                const div = document.createElement('div');
                div.classList.add('carrito-item');
                div.innerHTML = `
                    <img src="${producto.imagen}" alt="${producto.nombre}">
                    <div class="carrito-item-info">
                        <h4>${producto.nombre}</h4>
                        <p>Precio: $${producto.precio}</p>
                        <div class="carrito-item-cantidad">
                            <button class="btn-cantidad" data-id="${producto.id}" data-action="disminuir">-</button>
                            <span>${producto.cantidad}</span>
                            <button class="btn-cantidad" data-id="${producto.id}" data-action="aumentar">+</button>
                        </div>
                    </div>
                `;
                contenedorItemsCarrito.appendChild(div);
            });
        }
        actualizarContador();
        actualizarTotal();
        guardarCarritoEnStorage();
    }

    function agregarAlCarrito(idProducto) {
        const productoDB = baseDeDatos.find(p => p.id === idProducto);
        if (!productoDB) return;

        const itemEnCarrito = carrito.find(p => p.id === idProducto);
        if (itemEnCarrito) {
            itemEnCarrito.cantidad++;
        } else {
            carrito.push({ ...productoDB, cantidad: 1 });
        }
        mostrarMensaje(productoDB.nombre);
        renderizarCarrito();
    }

    function manejarClickEnCarrito(evento) {
        const accion = evento.target.dataset.action;
        const id = parseInt(evento.target.dataset.id);
        if (!accion) return;

        const itemEnCarrito = carrito.find(p => p.id === id);
        if (!itemEnCarrito) return;

        if (accion === 'aumentar') {
            itemEnCarrito.cantidad++;
        }
        if (accion === 'disminuir') {
            if (itemEnCarrito.cantidad > 1) {
                itemEnCarrito.cantidad--;
            } else {
                carrito = carrito.filter(p => p.id !== id);
            }
        }
        renderizarCarrito();
    }

    function vaciarCarrito() {
        carrito = [];
        // Actualiza el carrito en el JS, en el LocalStorage y en el HTML
        guardarCarritoEnStorage();
        renderizarCarrito();
    }

    function finalizarCompra(evento) {
        evento.preventDefault();
        const usuarioLogueado = sessionStorage.getItem("loggedInUser");
        
        if (carrito.length === 0) {
            alert('Tu carrito está vacío. Agregá productos para continuar.');
            return;
        }

        if (usuarioLogueado) {
            window.location.href = "pago.html";
        } else {
            alert('Por favor, iniciá sesión para poder finalizar la compra.');
            window.location.href = "login.html";
        }
    }

    function mostrarMensaje(nombreProducto) {
        const toast = document.getElementById('toast-agregado');
        if (!toast) return;
        toast.querySelector('p').textContent = `"${nombreProducto}" fue agregado al carrito.`;
        toast.classList.add('visible');
        setTimeout(() => {
            toast.classList.remove('visible');
        }, 3000);
    }
    
    function actualizarContador() {
        if (!contadorCarrito) return;
        const totalItems = carrito.reduce((sum, item) => sum + item.cantidad, 0);
        contadorCarrito.textContent = totalItems;
    }

    function actualizarTotal() {
        if (!precioTotalCarrito) return;
        const total = carrito.reduce((sum, producto) => sum + (producto.precio * producto.cantidad), 0);
        precioTotalCarrito.textContent = `$${total}`;
    }

    function guardarCarritoEnStorage() {
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }

    function mostrarCarrito() {
        if (!panelCarrito || !overlayCarrito) return;
        renderizarCarrito();
        panelCarrito.classList.add('visible');
        overlayCarrito.classList.add('visible');
    }

    function ocultarCarrito() {
        if (!panelCarrito || !overlayCarrito) return;
        panelCarrito.classList.remove('visible');
        overlayCarrito.classList.remove('visible');
    }

    // =================================================================================
    // 4. EVENT LISTENERS (Los "oídos" del sitio)
    // =================================================================================
    
    if (iconoCarrito) {
        iconoCarrito.addEventListener('click', (e) => {
            e.preventDefault();
            mostrarCarrito();
        });
    }
    
    if (botonCerrarCarrito) botonCerrarCarrito.addEventListener('click', ocultarCarrito);
    if (overlayCarrito) overlayCarrito.addEventListener('click', ocultarCarrito);
    if (contenedorItemsCarrito) contenedorItemsCarrito.addEventListener('click', manejarClickEnCarrito);
    if (botonVaciar) botonVaciar.addEventListener('click', vaciarCarrito);
    if (botonFinalizar) botonFinalizar.addEventListener('click', finalizarCompra);

    // =================================================================================
    // 5. LÓGICA ESPECIFA DE CADA PÁGINA
    // =================================================================================

    // Dibuja los productos en la página "productos.html"
    const contenedorProductos = document.getElementById('productos-contenedor');
    if (contenedorProductos) {
        baseDeDatos.forEach((producto) => {
            const productoCard = document.createElement('div');
            productoCard.classList.add('producto-card');
            productoCard.innerHTML = `
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <h3>${producto.nombre}</h3>
                <span>$${producto.precio}</span>
                <button class="btn-comprar" data-id="${producto.id}">Agregar al Carrito</button>
            `;
            contenedorProductos.appendChild(productoCard);
        });
    }

    // "Oído" para TODOS los botones "Agregar al Carrito" (Delegación)
    document.addEventListener('click', function (evento) {
        if (evento.target.classList.contains('btn-comprar')) {
            const idProducto = parseInt(evento.target.dataset.id);
            agregarAlCarrito(idProducto);
        }
    });

    // Lógica para el formulario de LOGIN
    const formLogin = document.getElementById('formulario-login');
    if (formLogin) {
        formLogin.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const users = JSON.parse(localStorage.getItem('users')) || [];
            const validUser = users.find(user => user.email === email && user.password === password);
            if (!validUser) return alert('Usuario y/o contraseña incorrectos.');
            alert(`¡Bienvenido de nuevo, ${validUser.nombre}!`);
            sessionStorage.setItem('loggedInUser', JSON.stringify(validUser));
            window.location.href = 'index.html';
        });
    }

    // Lógica para el formulario de REGISTRO
    const formRegistro = document.getElementById('formulario-registro');
    if (formRegistro) {
        formRegistro.addEventListener('submit', (e) => {
            e.preventDefault();
            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const users = JSON.parse(localStorage.getItem('users')) || [];
            const isUserRegistered = users.find(user => user.email === email);
            if (isUserRegistered) return alert('El email ya está registrado.');
            users.push({ nombre, email, password });
            localStorage.setItem('users', JSON.stringify(users));
            alert('¡Registro exitoso! Ahora podés iniciar sesión.');
            window.location.href = 'login.html';
        });
    }

    // --- (NUEVO) LÓGICA PARA EL FORMULARIO DE PAGO ---
    const formPago = document.getElementById('formulario-pago');
    if (formPago) {
        formPago.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Simulación de "procesando pago"
            alert('¡Pago procesado con éxito! Gracias por tu compra.');
            
            // Vacíamos el carrito
            vaciarCarrito();
            
            // Redirigimos al inicio
            window.location.href = 'index.html';
        });
    }
    // ... (código de la sección 5) ...

// ... (código de la sección 5) ...

// =================================================================================
// 6. LÓGICA DEL MENÚ HAMBURGUESA 
// =================================================================================
    const btnMenuAbrir = document.getElementById('btn-menu-abrir');
    const btnMenuCerrar = document.getElementById('btn-menu-cerrar');
    const navPrincipal = document.getElementById('nav-principal');
    const body = document.body; // <-- (Añadimos esto)

    if (btnMenuAbrir && navPrincipal && body) {
        btnMenuAbrir.addEventListener('click', () => {
            navPrincipal.classList.add('nav-visible');
            body.classList.add('menu-abierto'); // <-- (Añadimos esto)
        });
    }
    if (btnMenuCerrar && navPrincipal && body) {
        btnMenuCerrar.addEventListener('click', () => {
            navPrincipal.classList.remove('nav-visible');
            body.classList.remove('menu-abierto'); // <-- (Añadimos esto)
        });
    }
// (AHORA SÍ, ACÁ ABAJO VIENE LA SECCIÓN DE INICIALIZACIÓN)
// =================================================================================
// 7. INICIALIZACIÓN  <-- (Si querés, cambiale el número a 7)
// =================================================================================
    actualizarContador();
});