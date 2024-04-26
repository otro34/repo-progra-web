let numero1 = 0;
let numero2 = 0;
let resultado = 0;

let operacion = "";

function limpiarTodo() {
    document.getElementById("txtOperacion").value = "";
    document.getElementById("lblResultado").innerHTML = "";
    numero1 = 0;
    numero2 = 0;
    resultado = 0;
}

function marcarOperacion(op) {
    operacion = op;
    calcular();
}

function igual() {
    calcular();
    document.getElementById("txtOperacion").value = resultado;
    numero1 = 0;
    numero2 = 0;
    resultado = 0;
}

function calcular() {

    numero2 = document.getElementById("txtOperacion").value;

    document.getElementById("txtOperacion").value = "";

    let calculo = 0;

    if (numero1 === 0) {
        numero1 = numero2;
        document.getElementById("lblResultado").innerHTML = numero1;
        return;
    };

    switch(operacion) {
        case "suma":
            calculo = parseInt(numero1) + parseInt(numero2);
            break;
        case "resta":
            calculo = parseInt(numero1) - parseInt(numero2);
            break;
        case "multiplicacion":
            calculo = parseInt(numero1) * parseInt(numero2);
            break;
        case "division":
            if (numero2 === 0) {
                document.getElementById("lblResultado").innerHTML = 'No se puede realizar operación entre 0';
            } else calculo = parseInt(numero1) / parseInt(numero2);
            
            break;
    }

    document.getElementById("lblResultado").innerHTML = calculo;

    resultado = calculo;

    numero1 = resultado;
}

function setValor(valor) {
    const valorOrignal = document.getElementById("txtOperacion").value;
    document.getElementById("txtOperacion").value = valorOrignal + valor;
}