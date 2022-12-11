const comprarProductos = document.querySelectorAll("#compra")

const completarCompra = () => {
    let total = precioTotal.innerHTML
    comprarProductos.forEach(btn => {
        btn.addEventListener("click", () => {
        )
    }
    )
}
}


class Compra {
    constructor(carrito) {
        this.carrito = carrito;
    }

    // Devuelve el total de la compra
    totalCompra() {
        return this.carrito.precioTotal.innerHTML();
    }

    // Envia la confirmación de compra por pantalla
    confirmarCompra() {
        let total = this.totalCompra();
        if (total) {
            return { transaccion: 'success', mensaje: `Su Pago fue confirmado. Muchas gracias por su compra!` };
        } else {
            return { transaccion: 'error', mensaje: "Error en la transacción" };
        }
    }
}

const finalizarCompra = () => {
    //Instancia de Compra
    const compra = new Compra(carrito);
    let confirmar = compra.confirmarCompra();
    alerta(toast, 0, confirmar.transaccion, 'center', 'Mensaje', confirmar.mensaje );
    carrito.vaciarCarrito();
    cargarCarrito(carrito());
    activeClickCartRemove();
}