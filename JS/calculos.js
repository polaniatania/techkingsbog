var nombre = prompt ("Hola, ¿Cuál es tu nombre?")
alert ("Bienvenida a Techkings " + nombre);

while (nombre == null || nombre == "" || nombre == " ") {
    nombre = prompt("Por favor ingresa tu nombre")
}

function calculcarSubTotal() {
    let subTotal = cantIphoneX * precioIphoneX;
    subTotal += cantIphone12 * precioIphone12;
    subTotal += cantIphone13 * precioIphone13;

    return subTotal;
}

function calcularIva(subTotal) {
    return subTotal * (21/100);
}

function calcularTotal(subTotal, iva){
    return subTotal + iva;
}

const precioIphoneX = 1500;
const precioIphone12 = 3000;
const precioIphone13 = 5000;

const cantIphoneX = parseInt(prompt('¿Cuántos iphone X va a comprar?'));
const cantIphone12 = parseInt(prompt('¿Cuántos iphone 12 va a comprar?'));
const cantIphone13 = parseInt(prompt('¿Cuántos iphone 13 va a comprar?'));

const subTotal = calculcarSubTotal();
const iva = calcularIva(subTotal);
const total = calcularTotal(subTotal, iva);


alert('!!!Gracias por su compra!!!\nDetalles de Factura:\nSub Total: ' + subTotal + '\nIVA: '+ iva + '\nTotal:' + total);