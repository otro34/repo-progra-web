
(function a() {
    var x = 1;

    let y = 2;

    const n = 0;

    y = y + 3;

    console.log(y);

    n = n + 1;

    console.log(n);


})();

function cambiarImagen() {
    const imagen = document.getElementById("imagen").src;
    alert(imagen)
    console.log(imagen)
    if (imagen === "file:///C:/Temp/repos/repo-progra-web/2023-2/04.%20Javascript/Ejercicio%204/01.jpeg") {
        document.getElementById("imagen").src = 'file:///C:/Temp/repos/repo-progra-web/2023-2/04.%20Javascript/Ejercicio%204/02.jpg';
    } else {
        document.getElementById("imagen").src = 'file:///C:/Temp/repos/repo-progra-web/2023-2/04.%20Javascript/Ejercicio%204/01.jpeg';
    }
}