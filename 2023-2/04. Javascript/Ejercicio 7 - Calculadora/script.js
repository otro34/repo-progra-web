var operador = "nada";
var numero1 = 0;
var numero2 = 0;

function sumar () {

    const sumando1 = document.getElementById('sumando1').value;
    const sumando2 = document.getElementById('sumando2').value;

    const suma = parseInt(sumando1) + parseInt(sumando2);

    document.getElementById('resultado').innerHTML = suma;
}

function asignarValor(valor) {
    
    const valorOriginal = document.getElementById('txtOperacion').value;
    document.getElementById('txtOperacion').value = valorOriginal + valor;
}

function marcarOperacion(operacion) {
    numero1 = document.getElementById('txtOperacion').value;

    document.getElementById('txtOperacion').value = "";

    operador = operacion;
}

function calcular () {
    numero2 = document.getElementById('txtOperacion').value;

    let calculo = 0;

    switch(operador){
        case 'suma':
            calculo = parseInt(numero1) + parseInt(numero2);
            break;
        case 'resta':
            calculo = parseInt(numero1) - parseInt(numero2);
            break;
        case 'multiplicacion':
            calculo = parseInt(numero1) * parseInt(numero2);
            break;
        case 'division':
                calculo = parseInt(numero1) / parseInt(numero2);
                break;
        default:
            break;
    }

    document.getElementById('txtOperacion').value = calculo;
}

const limpiar = () => {
    document.getElementById('txtOperacion').value = "";
    operador = "nada";
    numero1 = 0;
    numero2 = 0;
}
