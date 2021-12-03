const productos = [
    {
        nombre: "IPHONE 12 PRO",
        caracteristicas: [
            "Capacidad disponible: 128GB, 256GB, 512GB",
            "Colores disponibles: grafito, plata, oro, azul pacífico",
            "Disponible desde: $3.850.000",
            "Únicamente usado disponible, modelo fuera de fabricación"
        ],
        precios: 3850000,
        imagen: "iphone55.jpg"
    },
    {
        nombre: "IPHONE XR",
        caracteristicas: [
            "Capacidad disponible: 64GB, 128GB",
            "Colores disponibles: Amarillo, coral, rojo, blanco, negro, azul",
            "Disponible desde: $1.650.000. Sellado desde $2.200.000",
            "Únicamente usado disponible, modelo fuera de fabricación"
        ],
        precios: 1650000,
        imagen: "iphone66.jpg"
    },
    {
        nombre: "MacBook Air 13” 2017",
        caracteristicas: [
            "Disponible con memoria ram de: 8 GB",
            "Disponible con disco sólido (ssd) de: 128 GB, 256 GB",
            "Desde $2.300.000",
            "Únicamente usado disponible, modelo fuera de fabricación"
        ],
        precios: 2300000,
        imagen: "mac4.jpg"
    },
    {
        nombre: "AAAA",
        caracteristicas: [
            "Disponible con memoria ram de: 8 GB",
            "Disponible con disco sólido (ssd) de: 128 GB, 256 GB",
            "Desde $2.300.000",
            "Únicamente usado disponible, modelo fuera de fabricación"
        ],
        precios: 2300000,
        imagen: "mac4.jpg"
    },
    {
        nombre: "BBB",
        caracteristicas: [
            "Disponible con memoria ram de: 8 GB",
            "Disponible con disco sólido (ssd) de: 128 GB, 256 GB",
            "Desde $2.300.000",
            "Únicamente usado disponible, modelo fuera de fabricación"
        ],
        precios: 2300000,
        imagen: "mac4.jpg"
    }
]

const productList = document.getElementById('productos-lista');
for (let i = 0; i < productos.length; i++) {
    console.log(productos[i]);
    const productoHijo = document.createElement('div');
    productoHijo.className="col-md-4 col-sm-1 p-2";
    productoHijo.innerHTML = 
        `<div class="card h-100">
            <img src="../multimedia/${productos[i].imagen}" class="card-img-top" alt="${productos[i].nombre}"/>
            <div class="card-body">
                <h5 class="card-title">${productos[i].nombre}</h5>
                <ul class="card-text" id="caracteristicas-${i}"></ul>
            </div>
        </div>`;
    productList.appendChild(productoHijo);

    const caracteristicas = document.getElementById(`caracteristicas-${i}`);
    for (const item of productos[i].caracteristicas) {
        let li = document.createElement('li');
        li.innerHTML = item;
        caracteristicas.appendChild(li);
    }
}