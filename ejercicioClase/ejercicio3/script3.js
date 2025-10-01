// Declarar el saldo inicial
let saldo = 1000;

// Evento click
const boton = document.getElementById("enviar_info");
boton.addEventListener("click", function() {

    let opcion = document.getElementById("opcion").value;
    let monto = parseFloat(document.getElementById("monto").value);

    // Validar que el monto que se ingrese su sea valida y mayor a 0.
    if (isNaN(monto) || monto <= 0) {
        alert("Por favor ingrese un monto válido.");
        return; // detenemos la ejecución si el monto no es válido
    }

    // Condicionales para las opciones (depositar y retirar)
    if(opcion == "1"){
        saldo = saldo + monto;
        alert("Deposito exitoso! Se tiene un nuevo saldo: $" + saldo);
    } else if (opcion == "2"){
        if (monto > saldo){
            alert("Fondos insuficientes. Su saldo actual es de: $" + saldo);
        } else {
            saldo = saldo - monto;
            alert("Retiro exitoso! Su nuevo saldo es de: $" + saldo);
        }
    }
});

