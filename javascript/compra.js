
//  no anda
const comprar = () => {
    let total = precioTotal.innerHTML
    const comprarProductos = document.querySelectorAll("boton.compra")
    comprarProductos.forEach(btn => {
        btn.addEventListener("click", () => {
            if (total) {
                return { transaccion: 'success', mensaje: `El pago fue Procesado. Muchas gracias por su compra!` };
            } else {
                return { transaccion: 'error', mensaje: "Error en la transacción" };
            }
        })
    })
}
comprar()
const finalizarCompra = () => {

    const compra = new Compra(carrito);
    let confirmar = compra.confirmarCompra();
    alerta(toast, 0, confirmar.transaccion, 'center', 'Mensaje', confirmar.mensaje);
    carrito.vaciarCarrito();
    cargarCarrito(carrito.array());
    activeClickCartRemove();
}
