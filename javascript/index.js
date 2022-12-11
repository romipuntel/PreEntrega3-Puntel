const container = document.getElementById("container")
const imgCarrito = document.getElementById("imgcarrito")
const botones = document.querySelectorAll("button.button.button-outline.button-add")
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
    botones.forEach(btn => {
        btn.addEventListener("click", () => {
            let resultado = productos.find(prod => prod.id === parseInt(btn.id))
            carrito.push(resultado)
            localStorage.setItem("carritoVino", JSON.stringify(carrito))
            Toastify(` se agregó al carrito`)

        })
    })
}

agregarAlCarrito()


