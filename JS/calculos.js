var nombre = prompt ("Hola, ¿Cuál es tu nombre?")
alert ("Bienvenida a Techkings " + nombre);

while (nombre == null || nombre == "" || nombre == " ") {
    nombre = prompt("Por favor ingresa tu nombre")
}

class Iphone {
    constructor (modelo, capacidad, color, precio) {
        this.modelo = modelo;
        this.capacidad = capacidad;
        this.color = color;
        this.precio = precio;
    }
}

const producto1 = new Iphone ("IphoneX", "64 GB", "Negro", 1500);
const producto2 = new Iphone ("Iphone12", "128GB", "Plata", 3000);
const producto3 = new Iphone ("Iphone13", "64 GB", "Amarillo", 5000);

function calcularSubTotal() {
    let subTotal = cantIphoneX * producto1.precio;
    subTotal += cantIphone12 * producto2.precio;
    subTotal += cantIphone13 * producto3.precio;

    return subTotal;
}

function calcularIva(subTotal) {
    return subTotal * (21/100);
}

function calcularTotal(subTotal, iva){
    return subTotal + iva;
}

const cantIphoneX = parseInt(prompt('¿Cuántos iphone X vas a comprar?'));
const cantIphone12 = parseInt(prompt('¿Cuántos iphone 12 vas a comprar?'));
const cantIphone13 = parseInt(prompt('¿Cuántos iphone 13 vas a comprar?'));

const subTotal = calcularSubTotal();
const iva = calcularIva(subTotal);
const total = calcularTotal(subTotal, iva);


alert('!!!Gracias por tu compra!!!\nDetalles de Factura:\nSub Total: ' + subTotal + '\nIVA: '+ iva + '\nTotal:' + total);

