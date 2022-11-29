
function recuperarCarrito() {

    let tablaHTML = ""
    const tbody = document.querySelector("tbody")
    const carrito = JSON.parse(localStorage.getItem("carritoVinos"))
if (carrito.length > 0) {
     carrito.forEach(producto => tablaHTML += armarTabla(producto))
        tbody.innerHTML = tablaHTML
    }
}
recuperarCarrito()

//function activarClickBotones() {
//  const buttonsDelete = document.querySelectorAll("button.button.button-outline.button-add")
//buttonsDelete.forEach(btn => {
//  btn.addEventListener("click", () => {
// })
// })
//}

//const eliminarDelCarrito = (id) => {
  //  const producto = carrito.find((producto) => producto.id === id);
    //carrito.splice(carrito.indexOf(producto), 1);
//}   