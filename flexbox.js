const productos = [
    {id: 1, nombre: "Lapicera", precio: 100},
    {id: 2, nombre: "Cuaderno", precio: 200},
    {id: 3, nombre: "Borrador", precio: 50},    
    {id: 4, nombre: "Regla", precio: 150},
    {id: 5, nombre: "Mochila", precio: 500},
    {id: 6, nombre: "Carpeta", precio: 300},
];

const contenedor = document.getElementById("contenedorr-tarjetas");
function mostrarProductos(lista) {
    contenedor.innerHTML = "";
    lista.forEach(prod => {
        const div = document.createElement("div");
        div.classList.add("tarjeta");
        if(prod.precio > 200) div.classList.add("resaltado");
        div.innerHTML = `<h3>${prod.nombre}</h3>
                        <p>Precio: $${prod.precio}</p>`;
        contenedor.appendChild(div);
    });
}
document.getElementById("btn-filtrar").addEventListener("click", () => {
    const filtrado = productos.filter(prod => prod.precio > 200);
    mostrarProductos(filtrado);
});
mostrarProductos(productos);