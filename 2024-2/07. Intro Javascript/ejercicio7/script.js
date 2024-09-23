let sumando2 = 0;

function sumar() {
   const sumando = document.getElementById('sumando').value; 

   const resultado = parseInt(sumando) + parseInt(sumando2);

    document.getElementById('resultado').innerHTML = "El resultado es: " + resultado;

    sumando2 = resultado;

    document.getElementById('sumando').value = '';
}