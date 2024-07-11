document.write(`
    <header> 
        <div class="menu container">
            <a href="./index.html" class="logo">COMPRA LIBRE</a> 
            <input type="checkbox" name="" id="menu">
            <label for="menu">
                <img src="./img/menu.png" alt="" class="menu-photo">
            </label>
            <nav class="navbar">
                <ul>
                    <li><a href="./index.html">INICIO</a></li>
                    <li><a href="./productos2.html">PRODUCTOS</a></li>
                    <li><a href="./contacto.html">CONTACTO</a></li>
                    <li id="login-link"><a href="./login.html">LOGIN</a></li>
                    <li id="register-link"><a href="./register.html">REGISTER</a></li>
                </ul>
            </nav>
            <div class="submenu">
                <img src="./img/carro.png" id="img-carrito" alt="carrito">
                <div id="carrito">
                    <table id="lista-carrito">
                        <thead>
                            <tr>
                                <th>NOMBRE</th>
                                <th>IMAGEN</th>
                                <th>PRECIO</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody></tbody>
                    </table>
                    <a href="./pago.html" id="comprar-carrito" class="btn-2">COMPRAR</a>
                    <a href="#" id="vaciar-carrito" class="btn-2">VACIAR CARRITO</a>
                </div>
            </div>
        </div>
    </header>
    `);
    
    const nav = document.querySelector('.menu');
    window.addEventListener('scroll', function () {
        nav.classList.toggle('active', window.scrollY > 0);
    });
    
  document.addEventListener("DOMContentLoaded", function() {
    // Función para verificar el estado de inicio de sesión
    function checkLoginStatus() {
        const isLoggedIn = sessionStorage.getItem("adm") !== null;
        const loginLink = document.getElementById("login-link").querySelector('a');
        const registerLink = document.getElementById("register-link").querySelector('a');

        if (isLoggedIn) {
            loginLink.textContent = "CERRAR SESIÓN";
            loginLink.href = "./index.html"; // URL para cerrar sesión
            registerLink.style.display = "none"; // Ocultar enlace de registro si está logueado
        } else {
            loginLink.textContent = "LOGIN";
            loginLink.href = "./login.html"; // URL para iniciar sesión
        }
    }

    // Ejecutar la función al cargar la página
    checkLoginStatus();

    // Agregar evento al enlace de cerrar sesión
    const loginLink = document.getElementById("login-link").querySelector('a');
    loginLink.addEventListener('click', function(event) {
        // Eliminar el item de sesión para simular cerrar sesión
        sessionStorage.removeItem("adm");
        // Restaurar los enlaces de LOGIN y REGISTER
        checkLoginStatus();
    });

    // Agregar clase 'active' al hacer scroll
    const menuContainer = document.querySelector('.menu');
    window.addEventListener('scroll', function () {
        menuContainer.classList.toggle('active', window.scrollY > 0);
    });
});