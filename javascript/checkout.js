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


const precioTotal = document.getElementById('precioTotal')
precioTotal.innerHTML = carritoVino.reduce((acc, prod) => acc + prod.precio, 0)



// no Andaaa


function eliminarDelCarrito() {
    const buttonsDelete = document.querySelectorAll("button.button.button-outline.button-delete")
    buttonsDelete.forEach(btn => {
        debugger
        btn.addEventListener("click", () => {
            let buscarCarrito = carritoVino.findIndex(vino => vino.nombre === btn.id)
            if (buscarCarrito > -1) {
                carritoVino.splice(buscarCarrito, 1)
                localStorage.setItem("carritoVino", JSON.stringify(carritoVino))
                recuperarCarrito()
                eliminarDelCarrito()
            }
        })
    })
}
eliminarDelCarrito()

