let sumando2 = 0;

function sumar() {
    
    const sumando = document.getElementById("txtBox").value;

    const resultado = parseInt(sumando) + parseInt(sumando2);

    document.getElementById("resultado").innerHTML = resultado;

    sumando2 = resultado;

    document.getElementById("txtBox").value = "";

}
