const formulario = document.getElementById("formulario-persona");
const tablaBody = document.getElementById("tabla-cuerpo");

formulario.addEventListener("submit", function(e) {
    e.preventDefault(); 

    
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const edad = document.getElementById("edad").value;
    const altura = parseFloat(document.getElementById("altura").value);
    const peso = parseFloat(document.getElementById("peso").value);

    
    const imc = (peso / (altura * altura)).toFixed(2);

    
    const fila = document.createElement("tr");

  
    fila.innerHTML = `
        <td>${nombre}</td>
        <td>${apellido}</td>
        <td>${edad}</td>
        <td>${altura}m</td>
        <td>${peso}kg</td>
        <td><strong>${imc}</strong></td>
        <td><button class="btn-eliminar">Eliminar</button></td>
    `;

    
    fila.querySelector(".btn-eliminar").addEventListener("click", function() {
        fila.remove();
    });

    
    tablaBody.appendChild(fila);

   
    formulario.reset();
});