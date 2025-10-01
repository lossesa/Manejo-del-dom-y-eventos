// Traer elementos por ID 
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const nacimiento = document.getElementById("año_nac");
const generos = document.getElementsByName("genero"); // Se trae por el nombre y lo que devuelve es una lista.
const hobby1 = document.getElementById("h1");
const hobby2 = document.getElementById("h2");
const hobby3 = document.getElementById("h3");
const otroHobbie = document.getElementById("otro_hobbie");
const seleccionPais = document.getElementById("seleccion_pais");
const descripcion = document.getElementById("descripcion");

const form = document.getElementById("formulario");
const mostrar = document.getElementById("mostrar_datos");


// Función para obtener género seleccionado (debido a que generos devuelve una lista)
function obtenerGenero() {
    for (let i = 0; i < generos.length; i++) {
        if (generos[i].checked) {
            return generos[i].value;
        }
    }
    return "No se selecciono un valor.";
}

// Función para obtener hobbies seleccionados
function obtenerHobbies() {
    const hobbies = [];
    if (hobby1.checked) hobbies.push(hobby1.value);
    if (hobby2.checked) hobbies.push(hobby2.value);
    if (hobby3.checked) hobbies.push(hobby3.value);
    if (otroHobbie.value.trim() !== "") hobbies.push(otroHobbie.value);
    return hobbies.join(", ");
}

// Función para calcular edad
function calcularEdad(añoNacimiento) {
    const añoActual = new Date().getFullYear();
    return añoActual - añoNacimiento;
}


// Capturar el boton con el evento submit
form.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const edad = calcularEdad(parseInt(nacimiento.value));
    const datosHTML = `
        <h3>Datos ingresados:</h3>
        <p><strong>Nombre:</strong> ${nombre.value}</p>
        <p><strong>Apellido:</strong> ${apellido.value}</p>
        <p><strong>Año de nacimiento:</strong> ${nacimiento.value}</p>
        <p><strong>Edad aproximada:</strong> ${edad} años</p>
        <p><strong>Género:</strong> ${obtenerGenero()}</p>
        <p><strong>Hobbies:</strong> ${obtenerHobbies()}</p>
        <p><strong>País:</strong> ${seleccionPais.value}</p>
        <p><strong>Expectativas:</strong> ${descripcion.value}</p>
    `;
    mostrar.innerHTML = datosHTML;
});








