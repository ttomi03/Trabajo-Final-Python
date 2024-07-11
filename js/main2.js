const { createApp } = Vue;

createApp({
    data() {
        return {
            productos: [],
            url: 'https://ttomi03.pythonanywhere.com/productos',
            error: false,
            cargando: true,
            id: 0,
            nombre: "",
            imagen: "",
            stock: 0,
            precio: 0,
            tipoproducto: "",
            carrito: []
        }  
    },
    methods: {
        async fetchData(url) {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                this.productos = data;
                this.cargando = false;
            } catch (err) {
                console.error('Error fetching data:', err);
                this.error = true;
            }
        },
        async eliminar(id) {
            try {
                const response = await fetch(this.url + '/' + id, {
                    method: 'DELETE'
                });
                if (response.ok) {
                    this.productos = this.productos.filter(producto => producto.id !== id);
                    alert('Registro Eliminado');
                } else {
                    alert('Error al intentar eliminar el producto');
                }
            } catch (err) {
                console.error('Error al eliminar el producto:', err);
                alert('Error al intentar eliminar el producto');
            }
        },
        async grabar() {
            const producto = {
                nombre: this.nombre,
                precio: this.precio,
                stock: this.stock,
                imagen: this.imagen,
                tipoproducto: this.tipoproducto
            };
            try {
                const response = await fetch(this.url, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(producto)
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                this.productos.push(data);
                alert('Registro grabado');
                window.location.href = "./productos.html";
            } catch (err) {
                console.error('Error al grabar:', err);
                alert('Error al grabar');
            }
        },
        async agregarProducto(id) {
            const producto = this.productos.find(p => p.id === id);
            if (producto) {
                this.carrito.push({...producto });
                this.actualizarCarrito();
            }
        },
        async borrarProducto(nombre) {
            try {
                const response = await fetch(`/eliminar-producto/${nombre}`, {
                    method: 'DELETE'
                });
                if (response.ok) {
                    this.productos = this.productos.filter(producto => producto.nombre !== nombre);
                    alert('Producto eliminado correctamente');
                } else {
                    alert('Error al intentar eliminar el producto');
                }
            } catch (error) {
                console.error('Error al eliminar el producto:', error);
                alert('Error al intentar eliminar el producto');
            }
        },
        actualizarCarrito() {
            const listaCarrito = document.querySelector('#lista-carrito tbody');
            listaCarrito.innerHTML = '';

            this.carrito.forEach(producto => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${producto.nombre}</td>
                    <td><img src="${producto.imagen}" width="50"></td>
                    <td>${producto.precio}</td>
                    <td><button class="borrar-producto" data-nombre="${producto.nombre}">Eliminar</button></td>
                `;
                listaCarrito.appendChild(row);
            });

            // Añadir listeners para eliminar productos del carrito
            listaCarrito.querySelectorAll('.borrar-producto').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const nombre = e.target.getAttribute('data-nombre');
                    this.borrarProducto(nombre);
                });
            });
        },
        vaciarCarrito() {
            this.carrito = [];
            this.actualizarCarrito();
        }
    },
    created() {
        this.fetchData(this.url);
    },
    mounted() {
        const lista1 = document.querySelector('#lista-1');
        if (lista1) {
            lista1.addEventListener('click', (e) => {
                if (e.target.classList.contains('agregar-carrito')) {
                    const idProducto = parseInt(e.target.getAttribute('data-id'));
                    this.agregarProducto(idProducto);
                }
            });
        }

        document.querySelector('#vaciar-carrito').addEventListener('click', (e) => {
            e.preventDefault();
            this.vaciarCarrito();
        });
    }
}).mount('#app');