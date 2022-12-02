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

function alertProductoCarrito() {
   productoEliminado({
        text: 'Producto eliminado del carrito',
        duration: 1500,
        gravity: 'top',
        position: 'right',
        style: {
            background: '#4C4A59',
        },
    }).showToast();
}


const alerta = (toast, timer, icon, position, title, text )=> {
    Swal.fire({
        toast: toast || false, 
        position: position || 'center', // top-end, bottom-end, top-start, center
        icon: icon || 'info',     //success, warning, error, question, info
        title: title || '',
        text: text || '',
        showConfirmButton: true,
        confirmButtonText: 'Aceptar',
        timer: timer
    })
}