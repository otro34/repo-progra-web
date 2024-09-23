function sumar() {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;

    const resultado = parseInt(num1) + parseInt(num2);

    document.getElementById('resultado').innerHTML = "El resultado es: " + resultado;
}