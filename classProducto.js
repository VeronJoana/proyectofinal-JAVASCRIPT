export class Producto {
    constructor(nombre, precio, img, id, categoria, descripcion) {
        this.nombre = nombre,
            this.precio = precio,
            this.img = img,
            this.id = id,
            this.categoria = categoria,
            this.cantidad = 1
    }


    
    sumarCantidad() {
        return this.cantidad++
    
    }
}