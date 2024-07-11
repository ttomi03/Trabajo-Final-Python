let ofertas = [
    {
        id: 1,
        nombre: "ROPA", 
        imagen: "./img/isolated-black-t-shirt-front-free-png.png"
    },     
    {
        id: 2,
        nombre: "ELECTRODOMESTICOS", 
        imagen: "./img/modern-gray-refrigerator-illustration-vector-design-on-transparent-background-free-png.png"
    }, 
    {
        id: 3,
        nombre: "ACCESORIOS", 
        imagen: "./img/collar.png"
    }
]

cad= ``
for (let produc of ofertas){

    cad= cad + `
    <div class="ofertas-1">
            <div class="ofertasImg">
                <img src=${produc.imagen} alt="">
            </div>
            <div class="ofertastxt">
                <h3>${produc.nombre}</h3>
            </div>
        </div>
        `
}

document.querySelector (".ofertas").innerHTML=cad