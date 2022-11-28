const carrito = []
const guardarCarrito = () => (carrito.length > 0) && localStorage.setItem("Carritovinos", JSON.stringify(carrito))
const recuperarCarrito = () => JSON.parse(localStorage.getItem("Carritovinos")) || []
carrito.push(...recuperarCarrito())

function alertProductoCarrito() {
    Toastify({
        text: 'Producto agregado al carrito',
        duration: 1500,
        gravity: 'bottom',
        position: 'left',
        style: {
            background: '#4C4A59',
        },
    }).showToast();
}

