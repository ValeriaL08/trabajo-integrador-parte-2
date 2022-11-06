let costoticket = 200
let pagar = "Total a pagar: $";
let CantidadTickets = document.getElementById('cantidad1');
let TipoDescuento = document.getElementById('descuento');
let boton_resumen = document.getElementById('botonresumen');
let totalcompra = document.getElementById('totalapagar');
let boton_borrar = document.getElementById('botonborrar');

function resumen() 
{
    CantidadTickets.value;
    TipoDescuento.value;
    totalcompra.value = (CantidadTickets.value * costoticket) - (CantidadTickets.value * TipoDescuento.value * costoticket);
    totalcompra.innerHTML = pagar + totalcompra.value;
}

function borrar()
{
    let pagar = "Total a pagar: $";
    let totalcompra = document.getElementById('totalapagar');
    totalcompra.innerHTML = pagar
}

