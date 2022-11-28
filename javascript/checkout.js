function recuperarCarrito() {
    let tablaHTML = ""
    const tbody = document.querySelector("tbody")
    const carrito = JSON.parse(localStorage.getItem("carritoVinos"))

    if (carrito.length > 0) {
        carrito.forEach(vinos => tablaHTML += armarTabla(vinos)
        )}
    tbody.innerHTML = tablaHTML
}
recuperarCarrito()

function activarClickBotones() {
    const buttonsDelete = document.querySelectorAll("button.button.button-outline.button-add")
    buttonsDelete.forEach(btn => {
        btn.addEventListener("click", () => {
        })
    })
}

activarClickBotones
