const comprarProductos = document.querySelectorAll("#compra")
//const botonesEliminar = document.querySelectorAll("button.button-outline.button-delete")
const carritoVino = JSON.parse(localStorage.getItem("carritoVino")) || []

function cargarCarrito() {
    let tablaHTML = ""
    const tbody = document.querySelector("tbody")
    if (carritoVino.length > 0) {
        carritoVino.forEach(producto => tablaHTML += productosEnCarrito(producto))
        //comprarProductos.addEventListener(click, finalizarCompra)

    } else {
        (carritoVino.length == 0)(`No se encuentran productos en el carrito`)
    }


    tbody.innerHTML = tablaHTML

}
cargarCarrito()


const precioTotal = document.getElementById('precioTotal')
precioTotal.innerHTML = carritoVino.reduce((acc, prod) => acc + prod.precio, 0)



// no Andaaa


//const respuesta = carritoVino.findIndex(producto => producto.id === producto.id)

function eliminarDelCarrito() {
    const botonesEliminar = document.querySelectorAll("button.button-outline.button-delete")
    botonesEliminar.forEach(btn => {
        btn.addEventListener("click", () => {
            let respuesta = carritoVino.findIndex(producto => producto.nombre === btn.nombre)
            if (respuesta > -1) {
                carritoVino.splice(respuesta, 1)
                //productoEliminado(`Se quitó elimino del carrito`)
                localStorage.setItem("carritoVino", JSON.stringify(carrito))
                //guardarCarrito()
                recuperarCarrito()
                eliminarDelCarrito()
            }
        })

    })
}

eliminarDelCarrito()

