import { generarCards, eventoAgregarProducto } from "./funciones.js";


let categoria = localStorage.getItem("categoria")
let arrayProductos = JSON.parse(localStorage.getItem("arrayProductos")) || []

let busqueda;
switch (categoria) {
    case "bombachas":
        busqueda = arrayProductos.filter(el => el.categoria == "bombachas")
        console.log(busqueda);
        generarCards(busqueda)
        eventoAgregarProducto(busqueda)

        break;
    case "corpiños":
        busqueda = arrayProductos.filter(el => el.categoria == "corpiños")
        console.log(busqueda);
        generarCards(busqueda)
        eventoAgregarProducto(busqueda)

        break;
    case "conjuntos":
        busqueda = arrayProductos.filter(el => el.categoria == "conjuntos")
        console.log(busqueda);
        generarCards(busqueda)
        eventoAgregarProducto(busqueda)

}








