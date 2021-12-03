/* var nombre = prompt("Hola, ¿Cuál es tu nombre?");
alert("Bienvenido a Techkings " + nombre);

while (nombre == null || nombre == "" || nombre == " ") {
  nombre = prompt("Por favor ingresa tu nombre");
}

class Iphone {
  constructor(modelo, capacidad, color, precio) {
    this.modelo = modelo;
    this.capacidad = capacidad;
    this.color = color;
    this.precio = precio;
  }
}

const productos = [
  new Iphone("IphoneX", "64 GB", "Negro", 15000),
  new Iphone("Iphone12", "128GB", "Plata", 3000),
  new Iphone("Iphone13", "64 GB", "Amarillo", 5000),
];
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

for (const producto of productos) {
  const confirmar = confirm(
    "¿Desea agregar al carrito un  " + producto.modelo + "?"
  );

  if (confirmar) {
    const cantidad = parseInt(
      prompt("¿Cuántos " + producto.modelo + " vas a comprar?")
    );
    carrito.push({
      nombre: producto.modelo,
      precio: producto.precio,
      cantidad: cantidad,
    });
  }
}

const subTotal = calcularSubTotal();
const iva = calcularIva(subTotal);
const total = calcularTotal(subTotal, iva);

carrito.sort(function (a, b) {
  return a.precio - b.precio;
});

alert(
  "!!!Gracias por tu compra!!!\nDetalles de Factura:\nSub Total: " +
    subTotal +
    "\nIVA: " +
    iva +
    "\nTotal:" +
    total +
    "\nLos articulos comprados son: " +
    carrito.map((obj) => obj.nombre).toString()
);
 */