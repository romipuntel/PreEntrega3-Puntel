const alertProductoCarrito = () => {
    Toastify({
        text: 'Producto agregado al carrito',
        duration: 1500,
        gravity: 'bottom',
        position: 'left',
        style: {
            background: '#4C4A59',
        }
    }).showToast();
}

const alertProductoEliminado = () => {
    Toastify({
        text: 'Producto eliminado del carrito',
        duration: 1500,
        gravity: 'top',
        position: 'right',
        style: {
            background: '#4C4A59',
        },
    }).showToast();
}


