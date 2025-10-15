document.addEventListener('DOMContentLoaded', () => {

    // 1. BASE DE DATOS COMPLETA DE PRODUCTOS
    // Aquí puedes agregar todos los discos que quieras vender.
    const baseDeDatos = [
        { id: 1, nombre: 'Skinty Fia', artista: 'Fontaines D.C.', precio: 3500, imagen: 'https://via.placeholder.com/300x300.png?text=Album+Cover' },
        { id: 2, nombre: 'Born to Die: The Paradise Edition', artista: 'Lana Del Rey', precio: 4000, imagen: 'https://via.placeholder.com/300x300.png?text=Album+Cover' },
        { id: 3, nombre: 'Rumours', artista: 'Fleetwood Mac', precio: 3200, imagen: 'https://via.placeholder.com/300x300.png?text=Album+Cover' },
        { id: 4, nombre: 'Led Zeppelin IV', artista: 'Led Zeppelin', precio: 3800, imagen: 'https://via.placeholder.com/300x300.png?text=Album+Cover' },
        { id: 5, nombre: 'Pure Heroine', artista: 'Lorde', precio: 3600, imagen: 'https://via.placeholder.com/300x300.png?text=Album+Cover' },
        { id: 6, nombre: 'The Queen Is Dead', artista: 'The Smiths', precio: 3000, imagen: 'https://via.placeholder.com/300x300.png?text=Album+Cover' },
        { id: 7, nombre: 'Combat Rock', artista: 'The Clash', precio: 3500, imagen: 'https://via.placeholder.com/300x300.png?text=Album+Cover' },
        { id: 8, nombre: 'Mellon Collie and the Infinite Sadness', artista: 'The Smashing Pumpkins', precio: 4000, imagen: 'https://via.placeholder.com/300x300.png?text=Album+Cover' },
        { id: 9, nombre: 'In Rainbows', artista: 'Radiohead', precio: 3200, imagen: 'https://via.placeholder.com/300x300.png?text=Album+Cover' },
        { id: 10, nombre: 'Definitely Maybe', artista: 'Oasis', precio: 3800, imagen: 'https://via.placeholder.com/300x300.png?text=Album+Cover' },
        { id: 11, nombre: 'The Rise and Fall of Ziggy Stardust and the Spiders from Mars', artista: 'David Bowie', precio: 3600, imagen: 'https://via.placeholder.com/300x300.png?text=Album+Cover' },
        { id: 12, nombre: 'songs', artista: 'Adrianne Lenker', precio: 3000, imagen: 'https://via.placeholder.com/300x300.png?text=Album+Cover'}
    ];

    // 2. LÓGICA DEL CARRITO (la misma que en main.js)
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const contadorCarrito = document.getElementById('carrito-contador');

    function agregarAlCarrito(evento) {
        const idProducto = parseInt(evento.target.dataset.id);
        const productoAAgregar = baseDeDatos.find((producto) => producto.id === idProducto);
        if (productoAAgregar) {
            carrito.push(productoAAgregar);
            guardarCarritoEnStorage();
            actualizarContador();
        }
    }

    function actualizarContador() {
        contadorCarrito.textContent = carrito.length;
    }

    function guardarCarritoEnStorage() {
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }

    // 3. FUNCIÓN PARA RENDERIZAR (DIBUJAR) LOS PRODUCTOS EN LA PÁGINA
    const contenedorProductos = document.getElementById('productos-contenedor');

    function renderizarProductos() {
        // Limpiamos el contenedor por si acaso
        contenedorProductos.innerHTML = '';
        
        // Iteramos sobre la base de datos y creamos una tarjeta por cada producto
        baseDeDatos.forEach((producto) => {
            const productoCard = document.createElement('div');
            productoCard.classList.add('producto-card');
            
            // Creamos el contenido de la tarjeta
            productoCard.innerHTML = `
                <img src="${producto.imagen}" alt="Portada del álbum ${producto.nombre}">
                <h3>${producto.nombre}</h3>
                <p>${producto.artista}</p>
                <span>$${producto.precio}</span>
                <button class="btn-comprar" data-id="${producto.id}">Agregar al Carrito</button>
            `;
            
            // Añadimos la tarjeta al contenedor en el HTML
            contenedorProductos.appendChild(productoCard);
        });
        
        // Una vez creados los botones, les asignamos el evento
        asignarEventosBotones();
    }
    
    function asignarEventosBotones() {
        const botonesAgregar = document.querySelectorAll('.btn-comprar');
        botonesAgregar.forEach((boton) => {
            boton.addEventListener('click', agregarAlCarrito);
        });
    }

    // 4. EJECUCIÓN INICIAL
    renderizarProductos(); // Dibuja todos los productos al cargar la página
    actualizarContador(); // Actualiza el contador por si ya había algo en el carrito
});