
function recuperarCarrito() {
    let tablaHTML = ""
    const tbody = document.querySelector("tbody")
    const carrito = JSON.parse(localStorage.getItem("carritoVino"))
    if (carrito.length > 0) {
        carrito.forEach(producto => tablaHTML += armarTabla(producto))
        tbody.innerHTML = tablaHTML
    }
}
recuperarCarrito()

const precioTotal = document.getElementById('precioTotal')
precioTotal.innerHTML = carrito.reduce((acc, prod) => acc + prod.precio, 0)

// no Andaaa


const eliminarDelCarrito = () => {
    const botonesEliminar = document.querySelectorAll("button.button.button-outline.button-delete")
    const carrito = JSON.parse(localStorage.getItem("carritoVino"))
    botonesEliminar.forEach(btn => {
        btn.addEventListener("click", () => {
            let buscarId = producto.findIndex(producto => producto.id === parseIn(btn.id))
            carrito.splice(buscarId, 1)
            productoEliminado(`Producto eliminado del carrito`)
            carrito.guardarCarrito()
            carrito.recuperarCarrito()
            cargarProductos(carrito.wine)


        });
    });
}
eliminarDelCarrito()



