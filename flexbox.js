
const productos = [
    { id: 1, nombre: "Laptop", precio: 800, destacado: true },
    { id: 2, nombre: "Mouse", precio: 20, destacado: false },
    { id: 3, nombre: "Teclado", precio: 50, destacado: false },
    { id: 4, nombre: "Monitor", precio: 200, destacado: true },
    { id: 5, nombre: "Auriculares", precio: 60, destacado: false },
    { id: 6, nombre: "Webcam", precio: 45, destacado: false }
];

const contenedor = document.getElementById("contenedor-tarjetas");
const boton = document.getElementById("btn-filtrar");


function mostrarTarjetas(lista) {
    contenedor.innerHTML = ""; 
    
    lista.forEach(prod => {
        const div = document.createElement("div");
        div.classList.add("tarjeta");
        
        if (prod.destacado) {
            div.classList.add("resaltado");
        }
        
        div.innerHTML = `
            <h3>${prod.nombre}</h3>
            <p>Precio: $${prod.precio}</p>
        `;
        contenedor.appendChild(div);
    });
}

boton.addEventListener("click", () => {
    const filtrados = productos.filter(p => p.destacado === true);
    mostrarTarjetas(filtrados);
});

mostrarTarjetas(productos);