const carritoVino = JSON.parse(localStorage.getItem("carritoVino")) || []

function cargarCarrito() {
    let tablaHTML = ""
    const tbody = document.querySelector("tbody")
    if (carritoVino.length >= 0) {
        carritoVino.forEach(vino => tablaHTML += productosEnCarrito(vino))


    } else {
        (carritoVino.length == 0)(`No se encuentran productos en el carrito`)
    }


    tbody.innerHTML = tablaHTML

}
cargarCarrito()


function totalCarrito() {
    const precioTotal = document.getElementById('precioTotal')
    precioTotal.innerHTML = carritoVino.reduce((acc, prod) => acc + prod.precio, 0)

}
totalCarrito()

function eliminarDelCarrito() {
    const buttonsDelete = document.querySelectorAll("button.button-outline.button-delete")
    buttonsDelete.forEach(btn => {
        btn.addEventListener("click", () => {
            let buscarCarrito = carritoVino.findIndex(vino => vino.nombre === btn.id)
            if (buscarCarrito > -1) {
                carritoVino.splice(buscarCarrito, 1)
                alertProductoEliminado(` se elimino del carrito`)
                localStorage.setItem("carritoVino", JSON.stringify(carritoVino))
                cargarCarrito()
                eliminarDelCarrito()
            }
        })
    })
}
eliminarDelCarrito()

const finalizarCompra = () => {
    const comprarProductos = document.querySelectorAll("#compra")
    comprarProductos.forEach(btn => {
        btn.addEventListener("click", () => {
            const swalWithBootstrapButtons = Swal.mixin({
                customClass: {
                    confirmButton: 'btn btn-success',
                    cancelButton: 'btn btn-danger'
                },
                buttonsStyling: false
            })
            swalWithBootstrapButtons.fire({
                title: 'Esta seguro que quiere finalizar su compra?',
                text: "",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Si',
                cancelButtonText: 'No',
                reverseButtons: true
            }).then((result) => {
                if (result.isConfirmed) {
                    swalWithBootstrapButtons.fire(
                        'Confirmado!',
                        'Su compra Se realizo con exito.',
                        'success',)
                    localStorage.removeItem("carritoVino"),
                        carritoVino.length = 0,
                        cargarCarrito()
                        totalCarrito()

                } else if (
                    result.dismiss === Swal.DismissReason.cancel
                ) {
                    swalWithBootstrapButtons.fire(
                        'Cancelado',
                        'Esperamos verte pronto por aca',
                        'error'
                    )
                }
            })
        })

    })

}
finalizarCompra()

