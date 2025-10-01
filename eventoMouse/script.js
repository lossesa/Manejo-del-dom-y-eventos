// Evento click
const boton1 = document.getElementById("evento1");
boton1.addEventListener("click", ()=> {
    alert("Hiciste click.");
})


// Evento dblclick
const boton2 = document.getElementById("evento2");
boton2.addEventListener("dblclick", ()=> {
    alert("Hiciste doble click.");
})

// Evento mousedown
const boton3 = document.getElementById("evento3");
boton3.addEventListener("mousedown", ()=> {
    alert("Mouse presionado.");
})

// Evento mouseover
const boton4 = document.getElementById("evento4");
boton4.addEventListener("mouseover", ()=> {
    alert("Mouse sobre el boton.");
})