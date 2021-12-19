$(document).ready(function () {
  const carrito = [];
  let productos = [];

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
    const carritoEL = $("#carrito");
    const cantidad = $(`#cantidad-${index}`).val();

    if (carrito.length === 0) {
      carritoEL.html("");
    }

    const producto = productos[index];

    carrito.push({
      index: index,
      nombre: producto.nombre,
      precio: producto.precios,
      cantidad: cantidad,
    });

    if (actualizarStorage) {
      guardarLocal("carrito", JSON.stringify(carrito));
    }

    const subTotal = calcularSubTotal();
    const iva = calcularIva(subTotal);
    const total = calcularTotal(subTotal, iva);

    carritoEL.append(
      `<li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
                <div class="fw-bold">${productos[index].nombre}</div>
                Valor unitario ${productos[index].precios}
            </div>
            <span class="badge bg-primary rounded-pill">${cantidad}</span>
        </li>`
    );

    const carritoTotalesEL = $("#carrito-totales");
    carritoTotalesEL.html(`
        <li class="list-group-item">Sub Total: ${subTotal}</li>
        <li class="list-group-item">IVA: ${iva}</li>
        <li class="list-group-item">Total: ${total}</li>`);
  }
  $.ajax({
    method: "GET",
    url: "../JS/productos.json",
  })
    .done(function (data) {
      productos = data;
      const productList = $("#productos-lista");
      for (let i = 0; i < productos.length; i++) {
        const productoHijo = $("<div></div>");
        productoHijo.addClass("col-md-4 col-sm-1 p-2").html(
          `<div class="card h-100">
            <img src="../multimedia/${productos[i].imagen}" class="card-img-top" alt="${productos[i].nombre}"/>
            <div class="card-body">
                <h5 class="card-title">${productos[i].nombre}</h5>
                <ul class="card-text" id="caracteristicas-${i}"></ul>
                <div class="input-group mb-3">
                    <input id="cantidad-${i}" type="text" class="form-control" placeholder="Cantidad" aria-label="Cantidad" aria-describedby="boton-agregar">
                    <button id="btn-${i}" type="button" class="btn btn-dark" >Agregar al carrito</button>
                </div>

            </div>
        </div>`
        );
        productList.append(productoHijo);
        $(`#btn-${i}`).click(function () {
          agregarAlCarrito(i);
        });

        const caracteristicas = $(`#caracteristicas-${i}`);
        for (const item of productos[i].caracteristicas) {
          let li = $("<li></li>");
          li.text(item);
          caracteristicas.append(li);
        }
        $(productoHijo)
          .children("div")
          .first()
          .hover(
            function () {
              $(this).addClass("border-info");
            },
            function () {
              $(this).removeClass("border-info");
            }
          );
      }

      const carritoStorage = JSON.parse(localStorage.getItem("carrito"));
      for (const item of carritoStorage) {
        agregarAlCarrito(item.index, false);
      }
    })
    .fail(function (jqXHR, textStatus) {
      alert("Request failed: " + textStatus);
    });
});
