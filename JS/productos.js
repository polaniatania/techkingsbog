const productos = [
    {
        nombre: "IPHONE 12 PRO",
        caracteristicas: [
            "Capacidad disponible: 128GB, 256GB, 512GB",
            "Colores disponibles: grafito, plata, oro, azul pacífico",
            "Disponible desde: $3.850.000",
            "Únicamente usado disponible, modelo fuera de fabricación",
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
            "Únicamente usado disponible, modelo fuera de fabricación",
        ],
        precios: 1650000,
        imagen: "iphone66.jpg"
    },
    {
        nombre: "IPHONE X",
        caracteristicas: [
            "Capacidad disponible: 64GB, 256GB",
            "Colores disponibles: Negro, blanco",
            "Desde: $1’550’000",
            "Disponible únicamente usado. En perfecto estado (modelo fuera de fabricación)",
        ],
        precios: 1550000,
        imagen: "iphone11.jpg"
    },
    {
        nombre: "IPHONE 11 PRO MAX",
        caracteristicas: [
            "Capacidad disponible: 64GB, 256GB, 512GB",
            "Colores disponibles: Oro, gris espacial, plata (blanco), verde noche",
            "Disponible desde: $3.250.000. Sellado desde: $4.200.000",
        ],
        precios: 3250000,
        imagen: "iphone22.jpg"
    },
    {
        nombre: "IPHONE 7",
        caracteristicas: [
            "Capacidad disponible: 32GB, 128GB, 256GB",
            "Colores disponibles: Oro rosa, oro, plata, negro mate, rojo",
            "Desde: $800.000",
            "Únicamente usado disponible, modelo fuera de fabricación",
        ],
        precios: 800000,
        imagen: "iphone33.jpg"
    },
    {
        nombre: "IPHONE 11",
        caracteristicas: [
            "Capacidad disponible: 64GB, 128GB, 256GB",
            "Colores disponibles: Blanco, negro, amarillo, rojo, lila, turquesa",
            "Disponible desde: $2.300.000. Sellado desde: $2.700.000",
            "Únicamente usado disponible, modelo fuera de fabricación",
        ],
        precios: 2300000,
        imagen: "iphone44.jpg"
    },
    {
        nombre: "MacBook Air 13” 2017",
        caracteristicas: [
            "Disponible con memoria ram de: 8 GB",
            "Disponible con disco sólido (ssd) de: 128 GB, 256 GB",
            "Desde $2.300.000",
            "Únicamente usado disponible, modelo fuera de fabricación",
        ],
        precios: 2300000,
        imagen: "mac4.jpg"
    },
    {
        nombre: "MACBOOK 12",
        caracteristicas: [
            "Pesa tan solo 920 gramos (menos de un kilo) su pantalla retina es tan sólo de 12 pulgadas, junto a una batería de larga duración para aguantar un día entero de trabajo",
            "Disponible con procesador: core m3, m5 -core i5",
            "Disponible con memoria ram de: 8GB, 16GB",
            "Disponible desde: $2.900.000",
        ],
        precios: 2900000,
        imagen: "mac5.jpg"
    },
    {
        nombre: "MacBook Pro retina 13",
        caracteristicas: [
            "Posee una pantalla de 13.3 pulgadas con una resolución de 2560x1600 compatible con millones de colores",
            "Disponible con procesador: core i5 2.7 ghz y 2.9ghz",
            "Disponible desde: $2’400’000",
        ],
        precios: 2400000,
        imagen: "mac2.jpg"
    },
    {
        nombre: "IPAD AIR 4 2020",
        caracteristicas: [
            "Capacidad disponible: 64GB, 256GB",
            "Disponible desde: $2’400’000",
        ],
        precios: 2400000,
        imagen: "ipad2.jpg"
    },
    {
        nombre: "IPAD PRO 2017",
        caracteristicas: [
            "Capacidad disponible: 32GB",
            "Compatible con Apple Pencil 1",
            "LTE",
            "Desde: 1’250’000",
        ],
        precios: 1250000,
        imagen: "ipad3.jpg"
    },
    {
        nombre: "Apple Watch",
        caracteristicas: [
            "Modelos disponibles: SE -40mm, -44mm. Serie 6 -40mm, -44mm",
            "Desde: 1’250’000",
        ],
        precios: 1250000,
        imagen: "iwatch.jpg"
    },
]

const carrito = [];

function calcularSubTotal() {
    let subTotal = 0;
    for (const item of carrito) {
        subTotal += item.precio * item.cantidad;
    }

    return subTotal;
}

function calcularIva(subTotal) {
    return subTotal * (21 / 100);
}

function calcularTotal(subTotal, iva) {
    return subTotal + iva;
}

const guardarLocal = (clave, valor) => {
    localStorage.removeItem(clave);
    localStorage.setItem(clave, valor);
};

function agregarAlCarrito(index, actualizarStorage = true) {
    const carritoEL = document.getElementById('carrito');
    const cantidad = document.getElementById(`cantidad-${index}`).value;

    if (carrito.length === 0) {
        carritoEL.innerHTML = "";
    }

    const producto = productos[index];
    console.log('AQUI',productos[index])

    carrito.push({
        index: index,
        nombre: producto.nombre,
        precio: producto.precios,
        cantidad: cantidad,
    });

    if(actualizarStorage) {
        guardarLocal("carrito", JSON.stringify(carrito));
    }

    const subTotal = calcularSubTotal();
    const iva = calcularIva(subTotal);
    const total = calcularTotal(subTotal, iva);

    carritoEL.innerHTML = carritoEL.innerHTML +
        `<li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
                <div class="fw-bold">${productos[index].nombre}</div>
                Valor unitario ${productos[index].precios}
            </div>
            <span class="badge bg-primary rounded-pill">${cantidad}</span>
        </li>`;

    const carritoTotalesEL = document.getElementById('carrito-totales');
    carritoTotalesEL.innerHTML = `
        <li class="list-group-item">Sub Total: ${subTotal}</li>
        <li class="list-group-item">IVA: ${iva}</li>
        <li class="list-group-item">Total: ${total}</li>`;
}

const productList = document.getElementById('productos-lista');
for (let i = 0; i < productos.length; i++) {
    const productoHijo = document.createElement('div');
    productoHijo.className="col-md-4 col-sm-1 p-2";
    productoHijo.innerHTML = 
        `<div class="card h-100">
            <img src="../multimedia/${productos[i].imagen}" class="card-img-top" alt="${productos[i].nombre}"/>
            <div class="card-body">
                <h5 class="card-title">${productos[i].nombre}</h5>
                <ul class="card-text" id="caracteristicas-${i}"></ul>
                <div class="input-group mb-3">
                    <input id="cantidad-${i}" type="text" class="form-control" placeholder="Cantidad" aria-label="Cantidad" aria-describedby="boton-agregar">
                    <button type="button" class="btn btn-dark" onclick="agregarAlCarrito(${i})">Agregar al carrito</button>
                </div>

            </div>
        </div>`;
    productList.appendChild(productoHijo);

    const caracteristicas = document.getElementById(`caracteristicas-${i}`);
    for (const item of productos[i].caracteristicas) {
        let li = document.createElement('li');
        li.innerHTML = item;
        caracteristicas.appendChild(li);
    }
    productoHijo.onmouseover = () => { 
        productoHijo.firstChild.classList.add('border-info')

    }
    productoHijo.onmouseout = () => {
        productoHijo.firstChild.classList.remove('border-info')
    }
}

const carritoStorage = JSON.parse(localStorage.getItem("carrito"));
for (const item of carritoStorage) {
    agregarAlCarrito(item.index, false);
}