const carrito = []
const guardarCarrito = () => (carrito.length > 0) && localStorage.setItem("Carritovinos", JSON.stringify(carrito))
const recuperarCarrito = () => JSON.parse(localStorage.getItem("Carritovinos")) || []
carrito.push(...recuperarCarrito())


function addToCartClicked(event) {
    const button = event.target
    const card = button.closest('.card')
    const cardName = card.querySelectorAll('.card-name').textContent
    const cardPrice = card.querySelectorAll('.card-price').textContent
    const cardImg = card.querySelectorAll('.card-image').src

    addCardToShoppingCart(cardName, cardPrice, cardImg)
}

function addCardToShoppingCart(cardName, cardPrice, cardImg) {
    const shoppingCartRow = document.createElement('div')
    const shoppingCartContent = `
<div class="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded"><div class="mr-1"><img class="rounded" src="${producto.imagen}"width="70"></div>
<div class="d-flex flex-column align-items-center product-details"><span
        class="font-weight-bold">${producto.nombre}</span>
    <div class="d-flex flex-row product-desc">
    </div>
</div>
<div class="d-flex flex-row align-items-center qty"><i class="fa fa-minus text-danger"></i>
    <h5 class="text-grey mt-1 mr-1 ml-1">2</h5><i class="fa fa-plus text-success"></i>
</div>
<div>
    <h5 class="text-grey"> ${producto.precio}</h5>
</div>
<div class="d-flex align-items-center"><i class="fa fa-trash mb-1 text-danger"></i></div>
</div> `
    shoppingCartRow.innerHTML = shoppingCartContent
    shoppingCartItemContainer.append(shoppingCartRow)
}

function alertProductoCarrito() {
    Toastify({
        text: 'Producto agregado al carrito',
        duration: 1500,
        gravity: 'bottom',
        position: 'left',
        style: {
            background: '#229ACD',
        },
    }).showToast();
}