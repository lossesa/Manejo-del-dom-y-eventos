// Evento input
const eventoInput = document.getElementById("texto");
eventoInput.addEventListener("input", ()=>{
    console.log("Texto actual:", eventoInput.value);
})


// Evento submit
const eventoSubmit = document.getElementById("formulario");
eventoSubmit.addEventListener("submit", ()=> {
    const acceder = formulario.usuario.value; // accede al valor del input dentro de formulario.
    alert(acceder);
})


