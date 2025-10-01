// Calculadora
function sumar() {
    const n1 = parseFloat(document.getElementById("num1").value);
    const n2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("resultado").innerText = `Resultado: ${n1 + n2}`;
}

function restar() {
    const n1 = parseFloat(document.getElementById("num1").value);
    const n2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("resultado").innerText = `Resultado: ${n1 - n2}`;
}

function multiplicar() {
    const n1 = parseFloat(document.getElementById("num1").value);
    const n2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("resultado").innerText = `Resultado: ${n1 * n2}`;
}
