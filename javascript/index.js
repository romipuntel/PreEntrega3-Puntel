const carritoVino = JSON.parse(localStorage.getItem("carritoVino")) || []
const container = document.getElementById("container")
const imgCarrito = document.getElementById("imgcarrito")
const URL = "json/productos.json"
const productos = []


fetch(URL)
    .then((response) => data = response.json())
    .then((data) => productos.push(...data))
    .then(() => cargarVinos(productos))
    .then(() => agregarAlCarrito())


function cargarVinos(wine) {
    let contenido = ""
    if (wine.length > 0) {
        wine.forEach(producto => contenido += catalogo(producto))
        container.innerHTML = contenido
    }
}
cargarVinos(productos)


const agregarAlCarrito = () => {
    const botones = document.querySelectorAll("button.button-outline.button-add")
    botones.forEach(btn => {
        btn.addEventListener("click", () => {
            let resultado = productos.find(prod => prod.id === parseInt(btn.id))
            carritoVino.push(resultado)
            localStorage.setItem("carritoVino", JSON.stringify(carritoVino))
            alertProductoCarrito(` se agregó al carrito`)

        })
    })
}

agregarAlCarrito()


