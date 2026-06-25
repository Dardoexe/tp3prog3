const formulario = document.getElementById("formularioo-persona");
const tabla = document.getElementById("tabla");

formulario.addEventListener("submit", function(e) {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const edad = document.getElementById("edad").value;
    const altura = document.getElementById("altura").value;
    const peso= document.getElementById("peso").value;

    const imc = (peso / (altura * altura)).toFixed(2);
    const fila = document.createElement("tr");
    fila.innerHTML = `<td>${nombre}</td>
                      <td>${apellido}</td>
                      <td>${edad}</td>
                      <td>${altura}</td>
                      <td>${peso}</td>
                      <td><button class="btn-eliminar">Eliminar</button></td>
                     `;
    fila.querySelector(".btn-eliminar").addEventListener("click", ()=> {
        fila.remove();
    });
    tabla.appendChild(fila);
    formulario.reset();
});