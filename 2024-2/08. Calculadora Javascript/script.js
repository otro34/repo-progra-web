let numero1 = 0;
let numero2 = 0;

let resultado = 0;
let operacion = "";

function setValor(valor) {

    const valorOriginal = document.getElementById('txtOperacion').value;
    
    document.getElementById('txtOperacion').value = valorOriginal + valor;
}

function marcarOperacion(op){
    operacion = op;
    calcular();
}

function setIgual() {
    calcular();
    document.getElementById('txtOperacion').value = resultado;
    numero1 = 0;
    numero2 = 0;
    resultado = 0;
}

function calcular() {

    numero2 = document.getElementById('txtOperacion').value;

    document.getElementById('txtOperacion').value = "";

    if (numero1 === 0) {
        numero1 = numero2;
        document.getElementById('spnResultado').innerHTML = numero1;
        return;
    }

    let calculo = 0;

    switch(operacion) {
        case 'suma':
            calculo = parseFloat(numero1) + parseFloat(numero2);
            break;
        case 'resta':
            calculo = parseFloat(numero1) - parseFloat(numero2);
            break;
        case 'multiplicacion':
            calculo = parseFloat(numero1) * parseFloat(numero2);
            break;
        case 'division':
            if (numero2 == 0) {
                document.getElementById('spnResultado').innerHTML = 'No se puede dividir entre 0. ';
                return;
            } else calculo = parseFloat(numero1) / parseFloat(numero2);
            break;
    }

    document.getElementById('spnResultado').innerHTML = calculo;

    resultado = calculo;
    
    numero1 = calculo;

}