//IIFE (Immediately Invoked Function Expression)
(function a() {
    //var x = 1;

    const constante = 3.1416;

    let y = 2;

    y = y + x * constante;

    console.log(y);

})();

function cambiarImagen() {
    //let o const o var
    const imagen = document.getElementById("imagen").src;
    alert(imagen)
    if (imagen === "file:///E:/repositorios/repo-progra-web/2024-1/06.%20Intro%20Javascript/Ejercicio5/01.jpg") {
        document.getElementById("imagen").src = "02.jpeg";
    } else {
        document.getElementById("imagen").src = "01.jpg";
    }
}