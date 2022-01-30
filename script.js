const precioOriginal = 100;
const descuento = 15;

function calcularPrecioConDescuento(precio, descuento){
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento =  (precio * porcentajePrecioConDescuento) / 100;

  return precioConDescuento;
}

function indicarPrecioFinal(precioConDescuento){
  const precioFinal = document.getElementById('precioFinal');
  precioFinal.innerText = `El precio con descuento es: ${precioConDescuento}`;
}

function indicarPrecioConDescuento(){
  const inputPrecio = document.getElementById('inputPrecio');
  const valorPrecio = inputPrecio.value;

  const inputDescuento = document.getElementById('inputDescuento');
  const valorDescuento = inputDescuento.value;

  if(calcularPrecioConCodigo == undefined){
    const precioConDescuento = calcularPrecioConDescuento(valorPrecio, valorDescuento);  
    indicarPrecioFinal(precioConDescuento)
  }else{
    const precioConDescuento = calcularPrecioConDescuento(valorPrecio, valorDescuento);
    const precioConCodigoDescuento = calcularPrecioConDescuento(precioConDescuento, calcularPrecioConCodigo())
    indicarPrecioFinal(precioConCodigoDescuento)
  }

  
}

function calcularPrecioConCodigo(){
  const inputCodigoDescuento = document.getElementById('inputCodigoDescuento');
  const codigoDescuento = inputCodigoDescuento.value
  
  const codigos = {
    'CUARTO-PA-MI' : 25,
    'MEDIA-MITAD' : 50,
    'CUARTO-PA-TI' : 75,
    'PLATZI' : 100,
  }

  const porcentajeDescuentoPromo = codigos[codigoDescuento];
  
  if(codigoDescuento == ''){
    return null
  }else if(porcentajeDescuentoPromo === undefined){
    alert('Ha introducido un código de descuento inválido');
    return undefined;
  }else{
    return porcentajeDescuentoPromo;
  }

}
