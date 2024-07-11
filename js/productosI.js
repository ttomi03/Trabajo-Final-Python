// Usa las rutas de las imágenes definidas en el HTML
let ofertas = [
    {
        id: 1,
        nombre: "ROPA", 
        imagen: imageUrls.ropa
    },     
    {
        id: 2,
        nombre: "ELECTRODOMESTICOS", 
        imagen: imageUrls.electrodomesticos
    }, 
    {
        id: 3,
        nombre: "ACCESORIOS", 
        imagen: imageUrls.accesorios
    }
];

let cad = "";
for (let produc of ofertas){
    cad = cad + `
    <div class="ofertas-1">
        <div class="ofertasImg">
            <img src="${produc.imagen}" alt="">
        </div>
        <div class="ofertastxt">
            <h3>${produc.nombre}</h3>
        </div>
    </div>
    `;
}

document.querySelector(".ofertas").innerHTML = cad;
