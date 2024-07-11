const { createApp } = Vue
createApp({
    data() {
        return {
            usuarios: [],
            url: 'https://ttomi03.pythonanywhere.com/usuarios',
            error: false,
            cargando: true,
            id: 0,
            usuario: "",
            clave: "",
        }
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.usuarios = data;
                    this.cargando = false
                    console.log(this.usuarios)
                })
                .catch(err => {
                    console.error(err);
                    this.error = true
                })
        },
        grabar() {
            let usuario = {
                usuario: this.usuario,
                clave: this.clave,
                rol: 0
            }
            console.log("Datos a enviar:", usuario); // Verificación adicional

            var options = {
                body: JSON.stringify(usuario),
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            }
            fetch(this.url, options)
                .then(() => {
                    alert("Registro grabado");
                    window.location.href = "./login.html";
                })
                .catch(err => {
                    console.error(err);
                    alert("Error al grabar");
                })
        },
        login() {
            usuario = this.usuario;
            sessionStorage.setItem("adm", 0);
            var i = 0;
            while (i < this.usuarios.length && this.usuarios[i].usuario != this.usuario) {
                i++;
            }
            if (i < this.usuarios.length) {
                if (this.usuarios[i].clave == this.clave) {
                    if (this.usuarios[i].rol == 1) {
                        sessionStorage.setItem("adm", 1);
                        window.location.href = "./productos2.html";
                    } else {
                        window.location.href = "./index.html";
                    }
                } else {
                    alert('Clave erronea');
                }
            } else {
                alert('Usuario erroneo');
            }
        }
    },
    created() {
        this.fetchData(this.url);
    },
}).mount('#app')