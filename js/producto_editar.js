console.log(location.search) // lee los argumentos pasados a este formulario
var id = location.search.substr(4) // producto_update.html?id=1
console.log(id)

const { createApp } = Vue
createApp({
    data() {
        return {
            id: 0,
            nombre: "",
            imagen: "",
            stock: 0,
            precio: 0,
            tipoproducto: "", // Asegúrate de incluir esta propiedad
            url: 'https://ttomi03.pythonanywhere.com/productos/' + id,
        }  
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    this.id = data.id
                    this.nombre = data.nombre
                    this.imagen = data.imagen
                    this.stock = data.stock
                    this.precio = data.precio
                    this.tipoproducto = data.tipoproducto // Incluye tipoproducto si es necesario
                })
                .catch(err => {
                    console.error(err)
                    this.error = true              
                })
        },
        modificar() {
            let producto = {
                nombre: this.nombre,
                precio: this.precio,
                stock: this.stock,
                imagen: this.imagen,
                tipoproducto: this.tipoproducto // Incluye tipoproducto si es necesario
            }
            var options = {
                body: JSON.stringify(producto),
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            }
            fetch(this.url, options)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok')
                    }
                    return response.json()
                })
                .then(data => {
                    alert("Registro modificado")
                    window.location.href = "./productos2.html" // navega a productos.html
                })
                .catch(err => {
                    console.error('Error al modificar:', err)
                    alert("Error al Modificar")
                })
        }
    },
    created() {
        this.fetchData(this.url)
    },
}).mount('#app')