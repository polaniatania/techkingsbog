$(document).ready(function () {
  let carrito = [];
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

  function agregarAlCarrito(index, cantidad, actualizarStorage = true) {
    const carritoEL = $("#carrito");

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

    carritoEL.append(
      `<li id="item-${index}" class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
                <div class="fw-bold">${productos[index].nombre}</div>
                Valor unitario ${productos[index].precios}
                <button id="eliminar-${index}" type="button" class="btn btn-danger"><i class="bi bi-trash"></i></button>
            </div>
            <span class="badge bg-primary rounded-pill">${cantidad}</span>
        </li>`
    );
    $(`#eliminar-${index}`).click(function () {
      eliminarDelCarrito(index);
    });

    calcularCostos();
  }
  function eliminarDelCarrito(index) {
    carrito = carrito.filter(function (item) {
      return item.index !== index;
    });
    console.log(carrito);
    guardarLocal("carrito", JSON.stringify(carrito));
    $("#item-" + index).remove();

    calcularCostos();
  }

  function calcularCostos() {
    const subTotal = calcularSubTotal();
    const iva = calcularIva(subTotal);
    const total = calcularTotal(subTotal, iva);

    const carritoTotalesEL = $("#carrito-totales");

    if (carrito.length > 0) {
      carritoTotalesEL.html(`
        <li class="list-group-item">Sub Total: ${subTotal}</li>
        <li class="list-group-item">IVA: ${iva}</li>
        <li class="list-group-item">Total: ${total}</li>`);
    } else {
      carritoTotalesEL.html("");
      $("#carrito")
        .html(`<li class="list-group-item d-flex justify-content-between align-items-start">
      <div class="ms-2 me-auto">
        <div class="fw-bold">Tu Carrito esta vacio</div>
        selecciona algun producto para agregar
      </div>
      <span class="badge bg-primary rounded-pill"></span>
    </li>`);
    }
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
          agregarAlCarrito(i, $(`#cantidad-${i}`).val());
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
        agregarAlCarrito(item.index, item.cantidad, false);
      }
    })
    .fail(function (jqXHR, textStatus) {
      alert("Request failed: " + textStatus);
    });
});
