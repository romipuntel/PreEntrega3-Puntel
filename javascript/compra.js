const comprarProductos = document.querySelectorAll("button.botonComprar")


class Compra {
    constructor(carritoVino) {
        this.carrito = carritoVino
    }

    // Devuelve el total de la compra
    totalCompra() {
        return this.carrito.precioTotal()

    }

    // Envia la confirmación de compra por pantalla
    confirmarCompra() {
        let total = this.totalCompra()
        if (total) {
            return { transaccion: 'success', mensaje: `Su Pago fue confirmado. Muchas gracias por su compra!` }
        } else {
            return { transaccion: 'error', mensaje: "Error en la transacción" }
        }
    }
}

const finalizarCompra = () => {
    const comprarProductos = document.querySelectorAll("button.botonComprar")
    const compra = new Compra(carritoVino)
    let confirmar = compra.confirmarCompra()
    debugger
    comprarProductos.forEach(btn => {
        btn.addEventListener("click", () => {
            confirmarCompra()
            alerta(Swal.fire, confirmar.transaccion, 'center', 'Mensaje', confirmar.mensaje)
        })
    })
}




//carritoVino.length = 0
//carrito.vaciarCarrito();
//cargarCarrito(carrito());
//eliminarDelCarrito()


