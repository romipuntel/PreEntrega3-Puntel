const container = document.getElementById("container")
const imgCarrito = document.getElementById("imgcarrito")
const URL = "json/productos.json"
const productos = []

fetch(URL)
    .then((response) => data = response.json())
    .then((data) => productos.push(...data))
    .then(() => cargarProductos(productos))
    .then(() => activarBotones())


function cargarProductos(wine) {
    let contenido = ""
    if (wine.length > 0) {
        wine.forEach(producto => contenido += retornoCard(producto))
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
            localStorage.setItem("carritoVino", JSON.stringify(carrito))
            alertProductoCarrito(` se agregó al carrito`)

        })
    })
}

activarBotones()


