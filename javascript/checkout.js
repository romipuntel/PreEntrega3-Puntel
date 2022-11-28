// esta en proceso de prueba, no mirar este archivo porque aun no anda correctamente.

function armarTablaCarrito(vinos) {
    return `<tr>
          <td class="centrar img-xx-large">${producto.imagen}</td>
          <td>${producto.nombre}</td>
         <td>${producto.precio}</td>
    <td><button class="button button-outline button-delete" id="${producto.nombre}" title="Quitar del carrito">🗑</button></td>
  </tr>`
}


function recuperarCarrito() {
    let tablaHTML = ""
    const tbody = document.querySelector(".shoppingCardItemContainer")
    const carrito = JSON.parse(localStorage.getItem("Carritovinos"))

    if (carrito.length > 0) {
        carrito.forEach(vinos => tablaHTML += armarTablaCarrito(vinos))
        tbody.innerHTML = tablaHTML
    }
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
