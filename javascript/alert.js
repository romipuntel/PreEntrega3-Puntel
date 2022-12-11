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



function confirmarCompra() {
    Swal.fire({
        title: "Quiere finalizar su compra?",
        icon: "success",
        showDenyButton: true,
        confirmButtonText: "Aceptar",
        denyButtonText: "Cancelar"
    })
        .then((result) => {
            if (result.isConfirmed) {
                console.log("El usuario finalizo la compra")
            } else if (result.isDenied) {
                console.warn("El usuario no finalizo")
            }
        })
}

