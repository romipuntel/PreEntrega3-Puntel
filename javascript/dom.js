const container = document.getElementById("container")
const imgCarrito = document.getElementById("imgcarrito")
const inputSearch = document.querySelector("input#inputSearch")

function cargarProductos(array) {
    let contenido = ""
    if (array.length > 0) {
        array.forEach(producto => {
            contenido += retornoCard(producto)
        })
        container.innerHTML = contenido
    }
}
cargarProductos(productos)


const activarBotones = () => {
    const botonesAdd = document.querySelectorAll("button.button.button-outline.button-add")
    botonesAdd.forEach(btn => {
        btn.addEventListener("click", () => {
            let resultado = productos.find(prod => prod.id === parseInt(btn.id))
            carrito.push(resultado)
            localStorage.setItem("miCarrito", JSON.stringify(carrito))
            alertProductoCarrito(` se agregó al carrito`)

        })
    })
}

activarBotones()

