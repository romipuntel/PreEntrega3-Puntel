const guardarCarrito = () => (carrito.length > 0) && localStorage.setItem("carritoVino", JSON.stringify(carrito))
const recuperarCarrito = () => JSON.parse(localStorage.getItem("carritoVino")) || []
carrito.push(...recuperarCarrito())

