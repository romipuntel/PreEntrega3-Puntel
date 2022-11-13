const carrito = []
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
            console.log("Se crearon")
        }
}
cargarProductos(productos) 

const botonesAdd = document.querySelectorAll("button.button.button-outline.button-add")

function activarClickBotones() {
    botonesAdd.forEach(btn => {
        btn.addEventListener("click", ()=> {
            let resultado = productos.find(prod => prod.id === parseInt(btn.id))
                carrito.push(resultado)
                console.table(carrito)
        })
    })
}
activarClickBotones()


