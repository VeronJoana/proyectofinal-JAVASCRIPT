// import { generarCards } from "./funciones.js";
const d = document;
const arrayCarrito = JSON.parse(localStorage.getItem("carrito"));
console.log(arrayCarrito)
const $carrito = d.getElementById('carrito');
let carritoLleno = [];
// console.log($carrito)
// console.log(arrayCarrito)


const productsCart = () => {
    arrayCarrito.forEach(product => {
        const { img, nombre, precio, stock, categoria, id } = product;
        console.log(img)
        $carrito.innerHTML += `
<div class="card">
<img src=.${img} alt=${nombre}>
<h3>${nombre}</h3>
<span>$${precio}</span>
<button class="btn-agregar" data-id=${id}>Agregar al carrito</button>
</div>`
    })
}

productsCart()


const finalizarCompra = () => {
    const button = document.querySelector('.finalizar-compra');
    button.addEventListener('click', () => {

        Swal.fire({
            title: 'Gracias por su Compra ',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Volver al Inicio',
        }).then((result) => {
            if (result.isConfirmed) {
                window.location = '/index.html'
                localStorage.removeItem('carrito')
            }
        })

    })

}

finalizarCompra()

const total = () => {
    const $total = document.querySelector('.total');
    const subtotal = arrayCarrito.reduce((acc, item) => item.precio + acc, 0)
    localStorage.setItem('total', subtotal)


    const newTotal = localStorage.getItem('total');


    $total.innerHTML = `<h1>$${newTotal}</h1>`


}

total()


const quantity = () => {
    const $quantity = document.querySelector('.quantity')
    const cantidad = JSON.parse(localStorage.getItem('carrito'));

    $quantity.innerHTML = `${cantidad.length}`
    console.log(cantidad.length)
}

quantity()

