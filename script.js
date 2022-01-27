const precioOriginal = 100;
const descuento = 15;

function calcularPrecioConDescuento(precio, descuento){
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento =  (precio * porcentajePrecioConDescuento) / 100;

  return precioConDescuento;
}

function indicarPrecioConDescuento(){
  const inputPrecio = document.getElementById('inputPrecio');
  const valorPrecio = inputPrecio.value;

  const inputDescuento = document.getElementById('inputDescuento');
  const valorDescuento = inputDescuento.value;

  const precioConDescuento = calcularPrecioConDescuento(valorPrecio, valorDescuento);

  const precioFinal = document.getElementById('precioFinal');

  precioFinal.innerText = `El precio con descuento es: ${precioConDescuento}`;
}