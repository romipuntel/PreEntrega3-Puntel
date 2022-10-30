console.log("ingrese su edad")
let edad = prompt("ingrese su edad")

if (edad >= 18) {
    console.log("Bienvenido a la tienda")
} else if (edad < 18) {
    console.warn("No puede comprar en esta tienda")
} else {
    console.error("Ingrese un dato válido,")
}


let mensajeCosto = ""
let continuar = true

const mensajePrecios = "Ingresa el vino a consultar. \n" +
    "a) Malbec \n" +
    "b) Chardonnay \n" +
    "c) Cabernet Franc \n" +
    "d) Cabernet Sauvignon \n" +
    "e) Blend"



function consultarPrecio() {
    let seleccion = prompt(mensajePrecios).toLowerCase().trim()

    if (seleccion !== "a" && seleccion !== "b" && seleccion !== "c" && seleccion !== "d" && seleccion !== "e") {
        console.warn("Ingresa un código válido, por favor.")
        return
    }

    switch (seleccion) {
        case "a":
            mensajeCosto = "El vino Malbec arranca en $ 2500"
            break
        case "b":
            mensajeCosto = "El vino Chardonnay arranca en $ 1500"
            break
        case "c":
            mensajeCosto = "El vino Cabernet Franc arranca en $ 2000"
            break
        case "d":
            mensajeCosto = "El vino Cabernet Sauvignon arranca en $ 1800"
            break
        case "e":
            mensajeCosto = "El vino Blend arranca en $ 1600"
            break
        default:
            console.error("Hubo un error no esperado.")
            return
    }
    alert(mensajeCosto)
}

function otrosPrecio() {
    while (continuar) {
        consultarPrecio()
        continuar = confirm("¿Deseas consultar por otro vino?")
    }
}